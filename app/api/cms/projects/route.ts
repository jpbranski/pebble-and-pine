import { NextRequest, NextResponse } from 'next/server';
import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PROJECTS_DIR = path.join(process.cwd(), 'data', 'projects');

/**
 * GET /api/cms/projects
 * Returns all projects from the data/projects directory
 */
export async function GET() {
  try {
    // Check if running in development
    if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ENABLE_DEV_CMS !== 'true') {
      return NextResponse.json(
        { error: 'CMS API is only available in development' },
        { status: 403 }
      );
    }

    const files = await readdir(PROJECTS_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const projects = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(PROJECTS_DIR, file);
        const content = await readFile(filePath, 'utf-8');
        const project = JSON.parse(content);
        const slug = file.replace('.json', '');
        return { slug, ...project };
      })
    );

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('GET projects error:', error);
    return NextResponse.json(
      { error: 'Failed to read projects', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/cms/projects
 * Creates a new project JSON file
 */
export async function POST(request: NextRequest) {
  try {
    // Check if running in development
    if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ENABLE_DEV_CMS !== 'true') {
      return NextResponse.json(
        { error: 'CMS API is only available in development' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { slug, ...projectData } = body;

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Validate slug format (alphanumeric and hyphens only)
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: 'Slug must contain only lowercase letters, numbers, and hyphens' },
        { status: 400 }
      );
    }

    // Ensure projects directory exists
    await mkdir(PROJECTS_DIR, { recursive: true });

    const filePath = path.join(PROJECTS_DIR, `${slug}.json`);

    // Write project data to JSON file
    await writeFile(filePath, JSON.stringify(projectData, null, 2), 'utf-8');

    // Create public directory for project assets
    const projectPublicDir = path.join(process.cwd(), 'public', 'projects', slug);
    await mkdir(path.join(projectPublicDir, 'images'), { recursive: true });
    await mkdir(path.join(projectPublicDir, 'pdfs'), { recursive: true });

    return NextResponse.json({
      success: true,
      message: 'Project created successfully',
      slug,
    });
  } catch (error) {
    console.error('POST project error:', error);
    return NextResponse.json(
      { error: 'Failed to create project', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
