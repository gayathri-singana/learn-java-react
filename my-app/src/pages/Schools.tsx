import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";

const Schools = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        width: "100%",
      }}
    >
      {/* Header */}
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container
          sx={{ display: "flex", justifyContent: "space-between", py: 2 }}
        >
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <BookIcon color="primary" sx={{ fontSize: 32 }} />
            <Typography variant="h5" fontWeight="bold">
              TeachConnect
            </Typography>
          </Link>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/jobs">
              <Typography color="text.secondary">Jobs</Typography>
            </Link>
            <Link to="/teachers">
              <Typography color="text.secondary">For Teachers</Typography>
            </Link>
            <Link to="/schools">
              <Typography color="text.primary" fontWeight={500}>
                For Schools
              </Typography>
            </Link>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Hire Outstanding Teachers
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Connect with qualified, passionate educators who are ready to make a
            difference in your school
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/schools/register"
            >
              Post a Job
            </Button>
            <Button variant="outlined" size="large">
              View Teacher Profiles
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Schools;
