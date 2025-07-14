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
  Chip,
} from "@mui/material";
import {
  CalendarToday,
  AttachMoney,
  LocationOn,
  School,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import MultiSelect from "../Components/MultiSelect";
import CustomSelect from "../Components/Select";

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
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const allSubjects = Array.from(new Set(jobs.flatMap((job) => job.subjects)));

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesType =
      !typeFilter || job.type.toLowerCase() === typeFilter.toLowerCase();

    const matchesSubjects =
      selectedSubjects.length === 0 ||
      selectedSubjects.some((subject) =>
        job.subjects.map((s) => s.toLowerCase()).includes(subject.toLowerCase())
      );

    return matchesSearch && matchesLocation && matchesType && matchesSubjects;
  });

  return (
    <Box width="100%" minHeight="100vh">
      {/* Header */}
      <Box borderBottom={1} borderColor="divider" py={2} px={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
      <Box px={3} py={4}>
        <Typography variant="h4" gutterBottom>
          Teaching Jobs
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          Find your perfect teaching position
        </Typography>

        {/* Search & Filters */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={6}>
            <Search
              searchText={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search job titles..."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: 300 }}>
              <CustomSelect
                label="Location"
                options={["California", "Texas", "Oregon"]}
                value={locationFilter}
                onChange={setLocationFilter}
                placeholder="All Locations"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: 300 }}>
              <CustomSelect
                label="Job Type"
                options={["Full-time", "Part-time", "Substitute"]}
                value={typeFilter}
                onChange={setTypeFilter}
                placeholder="All Types"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: 300 }}>
              <MultiSelect
                label="Subjects"
                options={allSubjects}
                selectedValues={selectedSubjects}
                onChange={setSelectedSubjects}
              />
            </Box>
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
