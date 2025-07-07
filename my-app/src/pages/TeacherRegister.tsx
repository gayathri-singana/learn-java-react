import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    subjects: [] as string[],
    gradeLevel: "",
    certifications: "",
    bio: "",
    availability: "",
    agreedToTerms: false,
  });

  const subjectOptions = [
    "Mathematics",
    "Science",
    "English",
    "Social Studies",
    "Art",
    "Music",
    "Physical Education",
    "Special Education",
    "ESL",
  ];

  const handleChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show a success message or handle form submission logic
    alert("Teacher profile created!");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 2 }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h5" fontWeight="bold">
              TeachConnect
            </Typography>
          </Link>
          <Box display="flex" gap={3}>
            <Link to="/jobs">Jobs</Link>
            <Link to="/teachers">For Teachers</Link>
            <Link to="/schools">For Schools</Link>
          </Box>
        </Box>
      </Box>

      {/* Form */}
      <Box sx={{ maxWidth: 800, mx: "auto", px: 2, py: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Create Your Teacher Profile
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          Join thousands of educators finding their dream jobs
        </Typography>

        <Card>
          <CardHeader
            title="Personal Information"
            subheader="Tell us about yourself and your teaching background"
          />
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={2}>
                {/* First & Last Name */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                  />
                </Grid>

                {/* Email & Phone */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </Grid>

                {/* Experience */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Experience Level</InputLabel>
                    <Select
                      value={formData.experience}
                      label="Experience Level"
                      onChange={(e) =>
                        handleChange("experience", e.target.value)
                      }
                    >
                      <MenuItem value="0-1">New Teacher (0-1 years)</MenuItem>
                      <MenuItem value="2-5">Early Career (2-5 years)</MenuItem>
                      <MenuItem value="6-10">Experienced (6-10 years)</MenuItem>
                      <MenuItem value="11-20">Veteran (11-20 years)</MenuItem>
                      <MenuItem value="20+">
                        Master Teacher (20+ years)
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Grade Level */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Grade Level</InputLabel>
                    <Select
                      value={formData.gradeLevel}
                      label="Grade Level"
                      onChange={(e) =>
                        handleChange("gradeLevel", e.target.value)
                      }
                    >
                      <MenuItem value="pre-k">Pre-K</MenuItem>
                      <MenuItem value="elementary">Elementary (K-5)</MenuItem>
                      <MenuItem value="middle">Middle School (6-8)</MenuItem>
                      <MenuItem value="high">High School (9-12)</MenuItem>
                      <MenuItem value="college">College/University</MenuItem>
                      <MenuItem value="adult">Adult Education</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Subject Areas */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Subject Areas (Select all that apply)
                  </Typography>
                  <Grid container spacing={1}>
                    {subjectOptions.map((subject) => (
                      <Grid item xs={6} md={4} key={subject}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.subjects.includes(subject)}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                const newSubjects = checked
                                  ? [...formData.subjects, subject]
                                  : formData.subjects.filter(
                                      (s) => s !== subject
                                    );
                                handleChange("subjects", newSubjects);
                              }}
                            />
                          }
                          label={subject}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                {/* Certifications */}
                <Grid item xs={12}>
                  <TextField
                    label="Certifications & Licenses"
                    fullWidth
                    multiline
                    minRows={3}
                    value={formData.certifications}
                    onChange={(e) =>
                      handleChange("certifications", e.target.value)
                    }
                  />
                </Grid>

                {/* Bio */}
                <Grid item xs={12}>
                  <TextField
                    label="Professional Summary"
                    fullWidth
                    multiline
                    minRows={4}
                    value={formData.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                  />
                </Grid>

                {/* Availability */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Availability</InputLabel>
                    <Select
                      value={formData.availability}
                      label="Availability"
                      onChange={(e) =>
                        handleChange("availability", e.target.value)
                      }
                    >
                      <MenuItem value="immediately">Immediately</MenuItem>
                      <MenuItem value="2-weeks">2 weeks notice</MenuItem>
                      <MenuItem value="month">1 month</MenuItem>
                      <MenuItem value="semester">Next semester</MenuItem>
                      <MenuItem value="school-year">Next school year</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Agreement */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agreedToTerms}
                        onChange={(e) =>
                          handleChange("agreedToTerms", e.target.checked)
                        }
                        required
                      />
                    }
                    label="I agree to the Terms of Service and Privacy Policy"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ px: 3, pb: 3 }}>
              <Button type="submit" variant="contained" size="large" fullWidth>
                Create My Profile
              </Button>
            </CardActions>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default TeacherRegister;
