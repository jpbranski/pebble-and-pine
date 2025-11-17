import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/cms/upload
 * Handles file uploads for the DEV CMS
 * Saves files to /public/projects/{projectSlug}/
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

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const projectSlug = formData.get('projectSlug') as string;
    const fileType = formData.get('fileType') as string; // 'image' or 'pdf'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!projectSlug) {
      return NextResponse.json({ error: 'No project slug provided' }, { status: 400 });
    }

    // Create directory structure
    const projectDir = path.join(process.cwd(), 'public', 'projects', projectSlug);
    const subDir = fileType === 'pdf' ? 'pdfs' : 'images';
    const targetDir = path.join(projectDir, subDir);

    await mkdir(targetDir, { recursive: true });

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = path.join(targetDir, sanitizedFilename);

    await writeFile(filePath, buffer);

    // Return the public URL path
    const publicPath = `/projects/${projectSlug}/${subDir}/${sanitizedFilename}`;

    return NextResponse.json({
      success: true,
      path: publicPath,
      filename: sanitizedFilename,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
