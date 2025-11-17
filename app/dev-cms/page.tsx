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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

// Import project data
import coastalRetreat from '@/data/projects/modern-coastal-retreat.json';
import urbanLoft from '@/data/projects/urban-loft-transformation.json';
import botanicalBedroom from '@/data/projects/botanical-inspired-bedroom.json';
import scandinavianHome from '@/data/projects/scandinavian-family-home.json';
import tuscanKitchen from '@/data/projects/tuscan-inspired-kitchen.json';
import farmhouseLiving from '@/data/projects/modern-farmhouse-living.json';
import shopData from '@/data/shop.json';

const initialProjects = [
  { slug: 'modern-coastal-retreat', ...coastalRetreat },
  { slug: 'urban-loft-transformation', ...urbanLoft },
  { slug: 'botanical-inspired-bedroom', ...botanicalBedroom },
  { slug: 'scandinavian-family-home', ...scandinavianHome },
  { slug: 'tuscan-inspired-kitchen', ...tuscanKitchen },
  { slug: 'modern-farmhouse-living', ...farmhouseLiving },
];

export default function DevCMSPage() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [authError, setAuthError] = React.useState('');
  const [tab, setTab] = React.useState(0);

  // Projects state
  const [projects, setProjects] = React.useState(initialProjects);
  const [editingProject, setEditingProject] = React.useState<any>(null);
  const [projectDialogOpen, setProjectDialogOpen] = React.useState(false);

  // Shop state
  const [shopItems, setShopItems] = React.useState(shopData.items);
  const [editingShopItem, setEditingShopItem] = React.useState<any>(null);
  const [shopDialogOpen, setShopDialogOpen] = React.useState(false);

  const [saveMessage, setSaveMessage] = React.useState('');

  // Check if running on localhost
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (!isLocalhost) {
        window.location.href = '/';
      }
    }
  }, []);

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

  const handleEditProject = (project: any) => {
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

  const handleSaveProject = () => {
    if (!editingProject.slug || !editingProject.title) {
      alert('Slug and title are required');
      return;
    }

    const existingIndex = projects.findIndex((p) => p.slug === editingProject.slug);
    if (existingIndex >= 0) {
      const updated = [...projects];
      updated[existingIndex] = editingProject;
      setProjects(updated);
    } else {
      setProjects([...projects, editingProject]);
    }

    setSaveMessage(`Project "${editingProject.title}" saved! (Note: Changes are only in memory)`);
    setProjectDialogOpen(false);
    setTimeout(() => setSaveMessage(''), 5000);
  };

  const handleDeleteProject = (slug: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((p) => p.slug !== slug));
      setSaveMessage('Project deleted (in memory only)');
      setTimeout(() => setSaveMessage(''), 5000);
    }
  };

  const handleEditShopItem = (item: any, index: number) => {
    setEditingShopItem({ ...item, index });
    setShopDialogOpen(true);
  };

  const handleNewShopItem = () => {
    setEditingShopItem({
      title: '',
      image: '',
      description: '',
      externalLink: '',
      affiliateType: 'none',
      nonAffiliate: false,
      category: 'Décor',
      isFeatured: false,
      price: null,
      index: -1,
    });
    setShopDialogOpen(true);
  };

  const handleSaveShopItem = () => {
    if (!editingShopItem.title) {
      alert('Title is required');
      return;
    }

    const { index, ...item } = editingShopItem;
    if (index >= 0) {
      const updated = [...shopItems];
      updated[index] = item;
      setShopItems(updated);
    } else {
      setShopItems([...shopItems, item]);
    }

    setSaveMessage(`Shop item "${editingShopItem.title}" saved! (Note: Changes are only in memory)`);
    setShopDialogOpen(false);
    setTimeout(() => setSaveMessage(''), 5000);
  };

  const handleDeleteShopItem = (index: number) => {
    if (confirm('Are you sure you want to delete this shop item?')) {
      setShopItems(shopItems.filter((_, i) => i !== index));
      setSaveMessage('Shop item deleted (in memory only)');
      setTimeout(() => setSaveMessage(''), 5000);
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
        Local development CMS for managing projects and shop items
      </Typography>

      {saveMessage && (
        <Alert severity="success" sx={{ my: 2 }}>
          {saveMessage}
        </Alert>
      )}

      <Alert severity="warning" sx={{ my: 2 }}>
        <strong>Note:</strong> This CMS saves changes to memory only. In a production environment, you would need
        to implement file system writes or a database backend. Changes will be lost on page refresh.
      </Alert>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="Projects" />
          <Tab label="Shop Items" />
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
        </Box>
      )}

      {/* Shop Items Tab */}
      {tab === 1 && (
        <Box>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">Shop Items ({shopItems.length})</Typography>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleNewShopItem}>
              New Shop Item
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Featured</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shopItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.price || 'N/A'}</TableCell>
                    <TableCell>{item.isFeatured ? '⭐' : ''}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={() => handleEditShopItem(item, index)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDeleteShopItem(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Project Edit Dialog */}
      <Dialog open={projectDialogOpen} onClose={() => setProjectDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingProject?.slug ? `Edit Project: ${editingProject.title}` : 'New Project'}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Slug (URL identifier)"
              value={editingProject?.slug || ''}
              onChange={(e) => setEditingProject({ ...editingProject, slug: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Title"
              value={editingProject?.title || ''}
              onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Location"
              value={editingProject?.location || ''}
              onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
              fullWidth
            />
            <TextField
              label="Year"
              value={editingProject?.year || ''}
              onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value })}
              fullWidth
            />
            <TextField
              label="Category"
              value={editingProject?.category || ''}
              onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
              fullWidth
            />
            <TextField
              label="Short Description"
              value={editingProject?.shortDescription || ''}
              onChange={(e) => setEditingProject({ ...editingProject, shortDescription: e.target.value })}
              fullWidth
              multiline
              rows={2}
            />
            <TextField
              label="Long Description"
              value={editingProject?.longDescription || ''}
              onChange={(e) => setEditingProject({ ...editingProject, longDescription: e.target.value })}
              fullWidth
              multiline
              rows={4}
            />
            <TextField
              label="Tags (comma-separated)"
              value={editingProject?.tags?.join(', ') || ''}
              onChange={(e) => setEditingProject({ ...editingProject, tags: e.target.value.split(',').map((t: string) => t.trim()) })}
              fullWidth
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingProject?.hero?.useDoubleHero || false}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    hero: { ...editingProject.hero, useDoubleHero: e.target.checked }
                  })}
                />
              }
              label="Use Double Hero"
            />
            <TextField
              label="Hero Foreground Image URL"
              value={editingProject?.hero?.foreground || ''}
              onChange={(e) => setEditingProject({
                ...editingProject,
                hero: { ...editingProject.hero, foreground: e.target.value }
              })}
              fullWidth
            />
            <TextField
              label="Hero Background Image URL (if double hero)"
              value={editingProject?.hero?.background || ''}
              onChange={(e) => setEditingProject({
                ...editingProject,
                hero: { ...editingProject.hero, background: e.target.value }
              })}
              fullWidth
            />
            <Typography variant="caption" color="text.secondary">
              Note: Gallery images, PDFs, and links require JSON editing
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProjectDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveProject} variant="contained" startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Shop Item Edit Dialog */}
      <Dialog open={shopDialogOpen} onClose={() => setShopDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingShopItem?.index >= 0 ? `Edit Shop Item` : 'New Shop Item'}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Title"
              value={editingShopItem?.title || ''}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, title: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Image URL"
              value={editingShopItem?.image || ''}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, image: e.target.value })}
              fullWidth
            />
            <TextField
              label="Description"
              value={editingShopItem?.description || ''}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              label="External Link"
              value={editingShopItem?.externalLink || ''}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, externalLink: e.target.value })}
              fullWidth
            />
            <TextField
              label="Category"
              value={editingShopItem?.category || ''}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, category: e.target.value })}
              fullWidth
            />
            <TextField
              label="Price (optional)"
              value={editingShopItem?.price || ''}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, price: e.target.value })}
              fullWidth
            />
            <TextField
              select
              label="Affiliate Type"
              value={editingShopItem?.affiliateType || 'none'}
              onChange={(e) => setEditingShopItem({ ...editingShopItem, affiliateType: e.target.value })}
              fullWidth
              SelectProps={{ native: true }}
            >
              <option value="none">None</option>
              <option value="amazon">Amazon</option>
              <option value="rewardstyle">RewardStyle</option>
            </TextField>
            <FormControlLabel
              control={
                <Switch
                  checked={editingShopItem?.isFeatured || false}
                  onChange={(e) => setEditingShopItem({ ...editingShopItem, isFeatured: e.target.checked })}
                />
              }
              label="Featured"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShopDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveShopItem} variant="contained" startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
