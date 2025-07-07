import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Index = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <MenuBookIcon color="primary" sx={{ fontSize: 32 }} />
            <Typography variant="h6" component="div" fontWeight="bold">
              TeachConnect
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Link href="/jobs" color="text.secondary" underline="hover">
              Jobs
            </Link>
            <Link href="/teachers" color="text.secondary" underline="hover">
              For Teachers
            </Link>
            <Link href="/schools" color="text.secondary" underline="hover">
              For Schools
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box py={10} px={2}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Connect Teachers with Schools
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            The premier platform for teacher recruitment. Find your perfect
            teaching position or hire exceptional educators.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button variant="contained" size="large" href="/jobs">
              Browse Jobs
            </Button>
            <Button variant="outlined" size="large" href="/teachers">
              Join as Teacher
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={10} px={2} sx={{ bgcolor: "grey.100" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            Why Choose TeachConnect?
          </Typography>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={<GroupIcon color="primary" sx={{ fontSize: 40 }} />}
                  title="Connect Directly"
                  titleTypographyProps={{ fontWeight: "bold" }}
                />
                <CardContent>
                  <Typography color="text.secondary">
                    Direct communication between teachers and schools. No
                    middleman, just meaningful connections.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={<SearchIcon color="primary" sx={{ fontSize: 40 }} />}
                  title="Smart Matching"
                  titleTypographyProps={{ fontWeight: "bold" }}
                />
                <CardContent>
                  <Typography color="text.secondary">
                    Advanced filters and AI-powered matching to find the perfect
                    fit for both teachers and schools.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={
                    <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />
                  }
                  title="Quality First"
                />
                <CardContent>
                  <Typography color="text.secondary">
                    Verified profiles and comprehensive background checks ensure
                    quality connections.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call To Action */}
      <Box py={10} px={2}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Join thousands of teachers and schools already using TeachConnect
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="large" href="/teachers/register">
              Register as Teacher
            </Button>
            <Button variant="outlined" size="large" href="/schools/register">
              Register School
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Divider />
      <Box py={4} textAlign="center" color="text.secondary">
        <Typography variant="body2">
          &copy; 2024 TeachConnect. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
