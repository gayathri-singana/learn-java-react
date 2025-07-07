import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Link,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";

const Teachers = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component={Link}
            href="/"
            underline="none"
          >
            <MenuBookIcon color="primary" sx={{ fontSize: 32 }} />
            <Typography variant="h6" fontWeight="bold">
              TeachConnect
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Link href="/jobs" color="text.secondary" underline="hover">
              Jobs
            </Link>
            <Link
              href="/teachers"
              color="text.primary"
              underline="hover"
              fontWeight="bold"
            >
              For Teachers
            </Link>
            <Link href="/schools" color="text.secondary" underline="hover">
              For Schools
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        py={10}
        px={2}
        sx={{ background: "linear-gradient(to right, #e3f2fd33, #e3f2fd11)" }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Find Your Dream Teaching Job
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Join thousands of educators who have found their perfect teaching
            positions through TeachConnect
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button variant="contained" size="large" href="/teachers/register">
              Create Profile
            </Button>
            <Button variant="outlined" size="large" href="/jobs">
              Browse Jobs
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* How It Works */}
      <Box py={10} px={2}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            How It Works
          </Typography>
          <Grid container spacing={4} mt={4}>
            {[
              {
                icon: <ArticleIcon color="primary" sx={{ fontSize: 32 }} />,
                title: "1. Create Profile",
                text: "Build your teaching profile with qualifications and experience",
              },
              {
                icon: <SearchIcon color="primary" sx={{ fontSize: 32 }} />,
                title: "2. Search Jobs",
                text: "Browse thousands of teaching positions across the country",
              },
              {
                icon: (
                  <ChatBubbleOutlineIcon
                    color="primary"
                    sx={{ fontSize: 32 }}
                  />
                ),
                title: "3. Connect",
                text: "Connect directly with schools and hiring managers",
              },
              {
                icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 32 }} />,
                title: "4. Get Hired",
                text: "Land your dream teaching position and make a difference",
              },
            ].map((step, i) => (
              <Grid item xs={12} md={3} key={i} textAlign="center">
                <Box mb={2}>{step.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {step.title}
                </Typography>
                <Typography color="text.secondary">{step.text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={10} px={2} sx={{ bgcolor: "grey.100" }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Why Teachers Choose Us
          </Typography>
          <Grid container spacing={4} mt={4}>
            {[
              {
                icon: <SearchIcon sx={{ fontSize: 24 }} />,
                title: "Smart Job Matching",
                text: "Our AI-powered system matches you with jobs that fit your qualifications, preferences, and career goals.",
              },
              {
                icon: <ArticleIcon sx={{ fontSize: 24 }} />,
                title: "Professional Profiles",
                text: "Create a comprehensive profile showcasing your teaching philosophy, certifications, and achievements.",
              },
              {
                icon: <ChatBubbleOutlineIcon sx={{ fontSize: 24 }} />,
                title: "Direct Communication",
                text: "Message directly with principals and hiring managers. No third-party recruiters or middlemen.",
              },
              {
                icon: <GroupIcon sx={{ fontSize: 24 }} />,
                title: "Teacher Community",
                text: "Connect with other educators, share resources, and get support from our vibrant teacher community.",
              },
            ].map((feature, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Card>
                  <CardHeader
                    avatar={feature.icon}
                    title={
                      <Typography fontWeight="bold">{feature.title}</Typography>
                    }
                  />
                  <CardContent>
                    <Typography color="text.secondary">
                      {feature.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={10} px={2} textAlign="center">
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Find Your Next Teaching Position?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Join over 50,000 teachers who have found their dream jobs with
            TeachConnect
          </Typography>
          <Button variant="contained" size="large" href="/teachers/register">
            Get Started - It's Free
          </Button>
        </Container>
      </Box>

      <Divider />
      <Box py={4} textAlign="center" color="text.secondary">
        <Typography variant="body2">
          &copy; 2024 TeachConnect. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Teachers;
