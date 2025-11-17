import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, unlink, rm } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PROJECTS_DIR = path.join(process.cwd(), 'data', 'projects');

/**
 * GET /api/cms/projects/[slug]
 * Returns a single project
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check if running in development
    if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ENABLE_DEV_CMS !== 'true') {
      return NextResponse.json(
        { error: 'CMS API is only available in development' },
        { status: 403 }
      );
    }

    const { slug } = params;
    const filePath = path.join(PROJECTS_DIR, `${slug}.json`);

    if (!existsSync(filePath)) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const content = await readFile(filePath, 'utf-8');
    const project = JSON.parse(content);

    return NextResponse.json({ slug, ...project });
  } catch (error) {
    console.error('GET project error:', error);
    return NextResponse.json(
      { error: 'Failed to read project', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/cms/projects/[slug]
 * Updates an existing project
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check if running in development
    if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ENABLE_DEV_CMS !== 'true') {
      return NextResponse.json(
        { error: 'CMS API is only available in development' },
        { status: 403 }
      );
    }

    const { slug } = params;
    const body = await request.json();
    const { slug: newSlug, ...projectData } = body;

    const oldFilePath = path.join(PROJECTS_DIR, `${slug}.json`);

    if (!existsSync(oldFilePath)) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // If slug is being changed, handle rename
    if (newSlug && newSlug !== slug) {
      // Validate new slug format
      if (!/^[a-z0-9-]+$/.test(newSlug)) {
        return NextResponse.json(
          { error: 'Slug must contain only lowercase letters, numbers, and hyphens' },
          { status: 400 }
        );
      }

      const newFilePath = path.join(PROJECTS_DIR, `${newSlug}.json`);

      // Check if new slug already exists
      if (existsSync(newFilePath)) {
        return NextResponse.json(
          { error: 'A project with this slug already exists' },
          { status: 409 }
        );
      }

      // Write to new file
      await writeFile(newFilePath, JSON.stringify(projectData, null, 2), 'utf-8');

      // Delete old file
      await unlink(oldFilePath);

      // Rename public directory if it exists
      const oldPublicDir = path.join(process.cwd(), 'public', 'projects', slug);
      const newPublicDir = path.join(process.cwd(), 'public', 'projects', newSlug);

      if (existsSync(oldPublicDir)) {
        const { rename } = await import('fs/promises');
        await rename(oldPublicDir, newPublicDir);
      }

      return NextResponse.json({
        success: true,
        message: 'Project updated and renamed successfully',
        slug: newSlug,
      });
    } else {
      // Just update the existing file
      await writeFile(oldFilePath, JSON.stringify(projectData, null, 2), 'utf-8');

      return NextResponse.json({
        success: true,
        message: 'Project updated successfully',
        slug,
      });
    }
  } catch (error) {
    console.error('PUT project error:', error);
    return NextResponse.json(
      { error: 'Failed to update project', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/cms/projects/[slug]
 * Deletes a project and all its associated files
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check if running in development
    if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ENABLE_DEV_CMS !== 'true') {
      return NextResponse.json(
        { error: 'CMS API is only available in development' },
        { status: 403 }
      );
    }

    const { slug } = params;
    const filePath = path.join(PROJECTS_DIR, `${slug}.json`);

    if (!existsSync(filePath)) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Delete JSON file
    await unlink(filePath);

    // Delete public directory and all assets
    const projectPublicDir = path.join(process.cwd(), 'public', 'projects', slug);
    if (existsSync(projectPublicDir)) {
      await rm(projectPublicDir, { recursive: true, force: true });
    }

    return NextResponse.json({
      success: true,
      message: 'Project and all associated files deleted successfully',
    });
  } catch (error) {
    console.error('DELETE project error:', error);
    return NextResponse.json(
      { error: 'Failed to delete project', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
