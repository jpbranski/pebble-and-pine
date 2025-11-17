import { Container, Box, Typography, Grid, Tabs, Tab } from '@mui/material';
import AffiliateProductCard from '@/app/components/AffiliateProductCard';
import shopData from '@/data/shop.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Favorite Things Shop',
  description:
    'Shop curated home décor, furniture, lighting, and textiles handpicked by Katrina Lohr. Discover beautiful pieces to elevate your space.',
  openGraph: {
    title: 'Favorite Things Shop | Pebble & Pine Design',
    description: 'Curated home décor and design favorites.',
  },
};

export default function ShopPage() {
  const categories = ['All', ...Array.from(new Set(shopData.items.map((item) => item.category)))];
  const featuredItems = shopData.items.filter((item) => item.isFeatured);
  const allItems = shopData.items;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
          Favorite Things
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
          A curated collection of my favorite home furnishings, décor, and design essentials. These are
          pieces I genuinely love and recommend to clients.
        </Typography>
      </Box>

      {/* Affiliate Disclaimer */}
      <Box
        sx={{
          mb: 6,
          p: 2,
          bgcolor: 'action.hover',
          borderRadius: 1,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Some of the links below are affiliate links. When you purchase through these links, I may earn
          a small commission at no additional cost to you. I only recommend products I genuinely love and believe in.
        </Typography>
      </Box>

      {/* Featured Section */}
      {featuredItems.length > 0 && (
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
            Featured Picks
          </Typography>
          <Grid container spacing={3}>
            {featuredItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AffiliateProductCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  externalLink={item.externalLink}
                  category={item.category}
                  price={item.price || undefined}
                  isFeatured={item.isFeatured}
                  affiliateType={item.affiliateType as any}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* All Products */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          All Products
        </Typography>

        {/* Category Filter - Note: This would need client-side state in a real implementation */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Filter by category:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Typography
                key={category}
                variant="body2"
                sx={{
                  px: 2,
                  py: 0.5,
                  bgcolor: 'action.hover',
                  borderRadius: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                }}
              >
                {category}
              </Typography>
            ))}
          </Box>
        </Box>

        <Grid container spacing={3}>
          {allItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AffiliateProductCard
                title={item.title}
                description={item.description}
                image={item.image}
                externalLink={item.externalLink}
                category={item.category}
                price={item.price || undefined}
                isFeatured={item.isFeatured}
                affiliateType={item.affiliateType as any}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
