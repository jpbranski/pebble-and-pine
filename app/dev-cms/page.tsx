'use client';

import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Chip,
  Alert,
  Switch,
  FormControlLabel,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Input,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close';

interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  hero: {
    useDoubleHero: boolean;
    foreground: string;
    background: string;
  };
  gallery: string[];
  pdfs: Array<{
    label: string;
    path: string;
  }>;
  links: Array<{
    label: string;
    url: string;
  }>;
  status: string;
}

export default function DevCMSPage() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [authError, setAuthError] = React.useState('');
  const [tab, setTab] = React.useState(0);

  // Projects state
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [editingProject, setEditingProject] = React.useState<Project | null>(null);
  const [projectDialogOpen, setProjectDialogOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [saveMessage, setSaveMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  // File upload states
  const [uploading, setUploading] = React.useState(false);
  const [newGalleryImage, setNewGalleryImage] = React.useState('');
  const [newPdfLabel, setNewPdfLabel] = React.useState('');
  const [newPdfPath, setNewPdfPath] = React.useState('');
  const [newLinkLabel, setNewLinkLabel] = React.useState('');
  const [newLinkUrl, setNewLinkUrl] = React.useState('');

  // Check if running on localhost
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (!isLocalhost) {
        window.location.href = '/';
      }
    }
  }, []);

  // Load projects after authentication
  React.useEffect(() => {
    if (authenticated) {
      loadProjects();
    }
  }, [authenticated]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cms/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects);
      } else {
        setErrorMessage('Failed to load projects');
      }
    } catch (error) {
      setErrorMessage('Error loading projects: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would check against process.env.LOCAL_CMS_PASSWORD
    // For demo purposes, we'll use a simple check
    if (password === 'admin' || password === process.env.LOCAL_CMS_PASSWORD) {
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password');
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({ ...project });
    setProjectDialogOpen(true);
  };

  const handleNewProject = () => {
    setEditingProject({
      slug: '',
      title: '',
      location: '',
      year: new Date().getFullYear().toString(),
      category: 'Residential',
      shortDescription: '',
      longDescription: '',
      tags: [],
      hero: {
        useDoubleHero: false,
        foreground: '',
        background: '',
      },
      gallery: [],
      pdfs: [],
      links: [],
      status: 'published',
    });
    setProjectDialogOpen(true);
  };

  const handleFileUpload = async (
    file: File,
    projectSlug: string,
    fileType: 'image' | 'pdf'
  ): Promise<string | null> => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('projectSlug', projectSlug);
      formData.append('fileType', fileType);

      const response = await fetch('/api/cms/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.path;
      } else {
        const error = await response.json();
        setErrorMessage('Upload failed: ' + error.error);
        return null;
      }
    } catch (error) {
      setErrorMessage('Upload error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSaveProject = async () => {
    if (!editingProject || !editingProject.slug || !editingProject.title) {
      setErrorMessage('Slug and title are required');
      return;
    }

    setLoading(true);
    try {
      const existingProject = projects.find((p) => p.slug === editingProject.slug);
      const isNew = !existingProject;

      const response = await fetch(
        isNew ? '/api/cms/projects' : `/api/cms/projects/${editingProject.slug}`,
        {
          method: isNew ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editingProject),
        }
      );

      if (response.ok) {
        setSaveMessage(`Project "${editingProject.title}" ${isNew ? 'created' : 'updated'} successfully!`);
        setProjectDialogOpen(false);
        await loadProjects();
        setTimeout(() => setSaveMessage(''), 5000);
      } else {
        const error = await response.json();
        setErrorMessage('Save failed: ' + error.error);
      }
    } catch (error) {
      setErrorMessage('Save error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this project? This will also delete all associated files.')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/cms/projects/${slug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSaveMessage('Project deleted successfully');
        await loadProjects();
        setTimeout(() => setSaveMessage(''), 5000);
      } else {
        const error = await response.json();
        setErrorMessage('Delete failed: ' + error.error);
      }
    } catch (error) {
      setErrorMessage('Delete error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleAddGalleryImage = () => {
    if (editingProject && newGalleryImage) {
      setEditingProject({
        ...editingProject,
        gallery: [...editingProject.gallery, newGalleryImage],
      });
      setNewGalleryImage('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    if (editingProject) {
      const newGallery = [...editingProject.gallery];
      newGallery.splice(index, 1);
      setEditingProject({
        ...editingProject,
        gallery: newGallery,
      });
    }
  };

  const handleAddPdf = () => {
    if (editingProject && newPdfLabel && newPdfPath) {
      setEditingProject({
        ...editingProject,
        pdfs: [...editingProject.pdfs, { label: newPdfLabel, path: newPdfPath }],
      });
      setNewPdfLabel('');
      setNewPdfPath('');
    }
  };

  const handleRemovePdf = (index: number) => {
    if (editingProject) {
      const newPdfs = [...editingProject.pdfs];
      newPdfs.splice(index, 1);
      setEditingProject({
        ...editingProject,
        pdfs: newPdfs,
      });
    }
  };

  const handleAddLink = () => {
    if (editingProject && newLinkLabel && newLinkUrl) {
      setEditingProject({
        ...editingProject,
        links: [...editingProject.links, { label: newLinkLabel, url: newLinkUrl }],
      });
      setNewLinkLabel('');
      setNewLinkUrl('');
    }
  };

  const handleRemoveLink = (index: number) => {
    if (editingProject) {
      const newLinks = [...editingProject.links];
      newLinks.splice(index, 1);
      setEditingProject({
        ...editingProject,
        links: newLinks,
      });
    }
  };

  if (!authenticated) {
    return (
      <Container maxWidth="sm" sx={{ py: 10 }}>
        <Paper elevation={0} sx={{ p: 5, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h4" gutterBottom align="center">
            Dev CMS Access
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
            Localhost only - Enter password to continue
          </Typography>

          {authError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {authError}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                autoFocus
              />
              <Button type="submit" variant="contained" size="large" fullWidth>
                Login
              </Button>
            </Stack>
          </form>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3, textAlign: 'center' }}>
            Demo password: admin
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Dev CMS
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Local development CMS for managing projects
      </Typography>

      {saveMessage && (
        <Alert severity="success" sx={{ my: 2 }} onClose={() => setSaveMessage('')}>
          {saveMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert severity="error" sx={{ my: 2 }} onClose={() => setErrorMessage('')}>
          {errorMessage}
        </Alert>
      )}

      <Alert severity="info" sx={{ my: 2 }}>
        <strong>DEV ONLY:</strong> This CMS performs full CRUD operations on local filesystem.
        Changes are saved to JSON files and asset directories. Only available in development mode.
      </Alert>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="Projects" />
        </Tabs>
      </Box>

      {/* Projects Tab */}
      {tab === 0 && (
        <Box>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">Projects ({projects.length})</Typography>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleNewProject}>
              New Project
            </Button>
          </Box>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress />
            </Box>
          )}

          {!loading && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Slug</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.slug}>
                      <TableCell>{project.slug}</TableCell>
                      <TableCell>{project.title}</TableCell>
                      <TableCell>{project.category}</TableCell>
                      <TableCell>
                        <Chip label={project.status} size="small" color={project.status === 'published' ? 'success' : 'default'} />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small" onClick={() => handleEditProject(project)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDeleteProject(project.slug)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      )}

      {/* Project Edit Dialog */}
      <Dialog open={projectDialogOpen} onClose={() => setProjectDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingProject?.slug ? `Edit Project: ${editingProject.title}` : 'New Project'}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            {/* Basic Info */}
            <TextField
              label="Slug (URL identifier)"
              value={editingProject?.slug || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') } : null)}
              fullWidth
              required
              helperText="Lowercase letters, numbers, and hyphens only"
            />
            <TextField
              label="Title"
              value={editingProject?.title || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, title: e.target.value } : null)}
              fullWidth
              required
            />
            <TextField
              label="Location"
              value={editingProject?.location || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, location: e.target.value } : null)}
              fullWidth
            />
            <TextField
              label="Year"
              value={editingProject?.year || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, year: e.target.value } : null)}
              fullWidth
            />
            <TextField
              label="Category"
              value={editingProject?.category || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, category: e.target.value } : null)}
              fullWidth
            />
            <TextField
              label="Short Description"
              value={editingProject?.shortDescription || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, shortDescription: e.target.value } : null)}
              fullWidth
              multiline
              rows={2}
            />
            <TextField
              label="Long Description"
              value={editingProject?.longDescription || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, longDescription: e.target.value } : null)}
              fullWidth
              multiline
              rows={4}
            />
            <TextField
              label="Tags (comma-separated)"
              value={editingProject?.tags?.join(', ') || ''}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, tags: e.target.value.split(',').map((t: string) => t.trim()) } : null)}
              fullWidth
            />
            <TextField
              label="Status"
              value={editingProject?.status || 'published'}
              onChange={(e) => setEditingProject(editingProject ? { ...editingProject, status: e.target.value } : null)}
              fullWidth
              select
              SelectProps={{ native: true }}
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </TextField>

            <Divider />

            {/* Hero Images */}
            <Typography variant="h6">Hero Images</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={editingProject?.hero?.useDoubleHero || false}
                  onChange={(e) => setEditingProject(editingProject ? {
                    ...editingProject,
                    hero: { ...editingProject.hero, useDoubleHero: e.target.checked }
                  } : null)}
                />
              }
              label="Use Double Hero"
            />
            <TextField
              label="Hero Foreground Image (URL or /path)"
              value={editingProject?.hero?.foreground || ''}
              onChange={(e) => setEditingProject(editingProject ? {
                ...editingProject,
                hero: { ...editingProject.hero, foreground: e.target.value }
              } : null)}
              fullWidth
              helperText="Enter a URL or local path like /projects/my-project/images/hero.jpg"
            />
            {editingProject?.hero?.useDoubleHero && (
              <TextField
                label="Hero Background Image (URL or /path)"
                value={editingProject?.hero?.background || ''}
                onChange={(e) => setEditingProject(editingProject ? {
                  ...editingProject,
                  hero: { ...editingProject.hero, background: e.target.value }
                } : null)}
                fullWidth
                helperText="Enter a URL or local path"
              />
            )}

            <Divider />

            {/* Gallery Images */}
            <Typography variant="h6">Gallery Images</Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Image URL or Path"
                value={newGalleryImage}
                onChange={(e) => setNewGalleryImage(e.target.value)}
                fullWidth
                size="small"
                placeholder="/projects/my-project/images/gallery1.jpg"
              />
              <Button
                variant="outlined"
                onClick={handleAddGalleryImage}
                disabled={!newGalleryImage}
              >
                Add
              </Button>
            </Stack>
            {editingProject?.gallery && editingProject.gallery.length > 0 && (
              <List dense>
                {editingProject.gallery.map((img, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={img} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" size="small" onClick={() => handleRemoveGalleryImage(index)}>
                        <CloseIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}

            <Divider />

            {/* PDFs */}
            <Typography variant="h6">PDF Downloads</Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Label"
                value={newPdfLabel}
                onChange={(e) => setNewPdfLabel(e.target.value)}
                size="small"
                placeholder="Download Concept Renders"
              />
              <TextField
                label="Path"
                value={newPdfPath}
                onChange={(e) => setNewPdfPath(e.target.value)}
                size="small"
                fullWidth
                placeholder="/projects/my-project/pdfs/renders.pdf"
              />
              <Button
                variant="outlined"
                onClick={handleAddPdf}
                disabled={!newPdfLabel || !newPdfPath}
              >
                Add
              </Button>
            </Stack>
            {editingProject?.pdfs && editingProject.pdfs.length > 0 && (
              <List dense>
                {editingProject.pdfs.map((pdf, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={pdf.label} secondary={pdf.path} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" size="small" onClick={() => handleRemovePdf(index)}>
                        <CloseIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}

            <Divider />

            {/* Links */}
            <Typography variant="h6">External Links</Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Label"
                value={newLinkLabel}
                onChange={(e) => setNewLinkLabel(e.target.value)}
                size="small"
                placeholder="View Full Moodboard"
              />
              <TextField
                label="URL"
                value={newLinkUrl}
                onChange={(e) => setNewLinkUrl(e.target.value)}
                size="small"
                fullWidth
                placeholder="https://www.pinterest.com/..."
              />
              <Button
                variant="outlined"
                onClick={handleAddLink}
                disabled={!newLinkLabel || !newLinkUrl}
              >
                Add
              </Button>
            </Stack>
            {editingProject?.links && editingProject.links.length > 0 && (
              <List dense>
                {editingProject.links.map((link, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={link.label} secondary={link.url} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" size="small" onClick={() => handleRemoveLink(index)}>
                        <CloseIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProjectDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSaveProject}
            variant="contained"
            startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
            disabled={loading || !editingProject?.slug || !editingProject?.title}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
