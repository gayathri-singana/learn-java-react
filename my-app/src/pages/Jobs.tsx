import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  Chip,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  CalendarToday,
  AttachMoney,
  LocationOn,
  School,
} from "@mui/icons-material"; // MUI icons
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Elementary Math Teacher",
    school: "Oakwood Elementary",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    posted: "2 days ago",
    subjects: ["Mathematics", "Elementary Education"],
    description:
      "We're seeking a passionate elementary math teacher to join our team...",
  },
  {
    id: 2,
    title: "High School Science Teacher",
    school: "Lincoln High School",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    posted: "1 week ago",
    subjects: ["Biology", "Chemistry", "Physics"],
    description:
      "Looking for an experienced science teacher to teach multiple subjects...",
  },
  {
    id: 3,
    title: "English Literature Teacher",
    school: "Riverside Academy",
    location: "Portland, OR",
    type: "Part-time",
    salary: "$40,000 - $50,000",
    posted: "3 days ago",
    subjects: ["English", "Literature"],
    description:
      "Join our innovative English department and inspire young minds...",
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType =
      !typeFilter || job.type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <Box borderBottom={1} borderColor="divider" py={2}>
        <Box
          maxWidth="lg"
          mx="auto"
          px={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <School />
              <Typography variant="h6" fontWeight="bold">
                TeachConnect
              </Typography>
            </Box>
          </Link>
          <Box display="flex" gap={3}>
            <Link to="/jobs">Jobs</Link>
            <Link to="/teachers">For Teachers</Link>
            <Link to="/schools">For Schools</Link>
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box maxWidth="lg" mx="auto" px={2} py={5}>
        <Typography variant="h4" gutterBottom>
          Teaching Jobs
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          Find your perfect teaching position
        </Typography>

        {/* Search & Filters */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select
                value={locationFilter}
                label="Location"
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <MenuItem value="">All Locations</MenuItem>
                <MenuItem value="california">California</MenuItem>
                <MenuItem value="texas">Texas</MenuItem>
                <MenuItem value="oregon">Oregon</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Job Type</InputLabel>
              <Select
                value={typeFilter}
                label="Job Type"
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="full-time">Full-time</MenuItem>
                <MenuItem value="part-time">Part-time</MenuItem>
                <MenuItem value="substitute">Substitute</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Job Listings */}
        <Grid container spacing={3}>
          {filteredJobs.map((job) => (
            <Grid item xs={12} key={job.id}>
              <Card elevation={2}>
                <CardHeader
                  title={<Typography variant="h6">{job.title}</Typography>}
                  subheader={
                    <Typography variant="subtitle1" color="text.secondary">
                      {job.school}
                    </Typography>
                  }
                  action={
                    <Chip
                      label={job.type}
                      color={job.type === "Full-time" ? "primary" : "default"}
                      variant="outlined"
                    />
                  }
                />
                <CardContent>
                  <Grid container spacing={2} mb={2}>
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <LocationOn fontSize="small" />
                      <Typography variant="body2">{job.location}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <AttachMoney fontSize="small" />
                      <Typography variant="body2">{job.salary}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <CalendarToday fontSize="small" />
                      <Typography variant="body2">
                        Posted {job.posted}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                    {job.subjects.map((subject) => (
                      <Chip key={subject} label={subject} variant="outlined" />
                    ))}
                  </Box>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {job.description}
                  </Typography>

                  <CardActions>
                    <Button variant="contained">Apply Now</Button>
                    <Button variant="outlined">Save Job</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Jobs;
