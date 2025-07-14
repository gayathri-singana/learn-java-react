import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomSelect from "../Components/Select";
import MultiSelect from "../Components/MultiSelect";

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
    alert("Teacher profile created!");
  };

  return (
    <Box
      sx={{
        width: "100%",
        px: 10, // horizontal padding
        py: 5,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 2 }}>
        <Box
          sx={{
            width: "100%",
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
      <Box sx={{ width: "100%", mx: "auto", px: 2, py: 5 }}>
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
              {/* Name Section */}
              <Box display="flex" gap={2} mb={2}>
                <TextField
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                  fullWidth
                />
              </Box>

              {/* Email & Phone */}
              <Box display="flex" gap={2} mb={2}>
                <TextField
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  fullWidth
                />
                <TextField
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  fullWidth
                />
              </Box>

              {/* Experience */}
              <Box mb={2}>
                <CustomSelect
                  label="Experience Level"
                  options={[
                    "New Teacher (0-1 years)",
                    "Early Career (2-5 years)",
                    "Experienced (6-10 years)",
                    "Veteran (11-20 years)",
                    "Master Teacher (20+ years)",
                  ]}
                  value={formData.experience}
                  onChange={(val) => handleChange("experience", val)}
                  placeholder="Select experience"
                />
              </Box>

              {/* Grade Level */}
              <Box mb={2}>
                <CustomSelect
                  label="Grade Level"
                  options={[
                    "Pre-K",
                    "Elementary (K-5)",
                    "Middle School (6-8)",
                    "High School (9-12)",
                    "College/University",
                    "Adult Education",
                  ]}
                  value={formData.gradeLevel}
                  onChange={(val) => handleChange("gradeLevel", val)}
                  placeholder="Select grade level"
                />
              </Box>

              {/* Subjects */}
              <Box mb={2}>
                <MultiSelect
                  label="Subject Areas"
                  options={subjectOptions}
                  selectedValues={formData.subjects}
                  onChange={(val) => handleChange("subjects", val)}
                  placeholder="Select subjects"
                />
              </Box>

              {/* Certifications */}
              <TextField
                label="Certifications & Licenses"
                fullWidth
                multiline
                minRows={3}
                sx={{ mb: 2 }}
                value={formData.certifications}
                onChange={(e) => handleChange("certifications", e.target.value)}
              />

              {/* Bio */}
              <TextField
                label="Professional Summary"
                fullWidth
                multiline
                minRows={4}
                sx={{ mb: 2 }}
                value={formData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />

              {/* Availability */}
              <Box mb={2}>
                <CustomSelect
                  label="Availability"
                  options={[
                    "Immediately",
                    "2 weeks notice",
                    "1 month",
                    "Next semester",
                    "Next school year",
                  ]}
                  value={formData.availability}
                  onChange={(val) => handleChange("availability", val)}
                  placeholder="Select availability"
                />
              </Box>

              {/* Agreement */}
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
