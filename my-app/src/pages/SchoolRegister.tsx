import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
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

const SchoolRegister = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    title: "",
    email: "",
    phone: "",
    schoolType: "",
    district: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    website: "",
    enrollment: "",
    description: "",
    agreedToTerms: false,
    allowEmails: false,
  });

  const handleChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("School profile created!");
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

      {/* Form Content */}
      <Box sx={{ maxWidth: 800, mx: "auto", px: 2, py: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Register Your School
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Start hiring outstanding teachers today
        </Typography>

        <Card>
          <CardHeader
            title="School Information"
            subheader="Provide details about your school to attract the best teachers"
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap={3}>
                <TextField
                  label="School Name"
                  value={formData.schoolName}
                  onChange={(e) => handleChange("schoolName", e.target.value)}
                  required
                  fullWidth
                />
                <Box display="flex" gap={2}>
                  <TextField
                    label="Contact Person"
                    value={formData.contactName}
                    onChange={(e) =>
                      handleChange("contactName", e.target.value)
                    }
                    required
                    fullWidth
                  />
                  <TextField
                    label="Title"
                    placeholder="e.g. Principal, HR Director"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    required
                    fullWidth
                  />
                </Box>
                <Box display="flex" gap={2}>
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

                <Box display="flex" gap={2}>
                  <FormControl fullWidth>
                    <InputLabel>School Type</InputLabel>
                    <Select
                      value={formData.schoolType}
                      onChange={(e) =>
                        handleChange("schoolType", e.target.value)
                      }
                      label="School Type"
                    >
                      <MenuItem value="public">Public School</MenuItem>
                      <MenuItem value="private">Private School</MenuItem>
                      <MenuItem value="charter">Charter School</MenuItem>
                      <MenuItem value="magnet">Magnet School</MenuItem>
                      <MenuItem value="international">
                        International School
                      </MenuItem>
                      <MenuItem value="montessori">Montessori School</MenuItem>
                      <MenuItem value="waldorf">Waldorf School</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="District"
                    value={formData.district}
                    onChange={(e) => handleChange("district", e.target.value)}
                    fullWidth
                  />
                </Box>

                <TextField
                  label="Address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                  fullWidth
                />

                <Box display="flex" gap={2}>
                  <TextField
                    label="City"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    required
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select
                      value={formData.state}
                      onChange={(e) => handleChange("state", e.target.value)}
                      label="State"
                    >
                      <MenuItem value="CA">California</MenuItem>
                      <MenuItem value="TX">Texas</MenuItem>
                      <MenuItem value="NY">New York</MenuItem>
                      <MenuItem value="FL">Florida</MenuItem>
                      <MenuItem value="IL">Illinois</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="ZIP Code"
                    value={formData.zipCode}
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                    required
                    fullWidth
                  />
                </Box>

                <Box display="flex" gap={2}>
                  <TextField
                    label="School Website"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <InputLabel>Student Enrollment</InputLabel>
                    <Select
                      value={formData.enrollment}
                      onChange={(e) =>
                        handleChange("enrollment", e.target.value)
                      }
                      label="Student Enrollment"
                    >
                      <MenuItem value="0-100">0-100 students</MenuItem>
                      <MenuItem value="101-300">101-300 students</MenuItem>
                      <MenuItem value="301-600">301-600 students</MenuItem>
                      <MenuItem value="601-1000">601-1000 students</MenuItem>
                      <MenuItem value="1000+">1000+ students</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  label="School Description"
                  multiline
                  minRows={4}
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  fullWidth
                />

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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.allowEmails}
                      onChange={(e) =>
                        handleChange("allowEmails", e.target.checked)
                      }
                    />
                  }
                  label="I want to receive platform updates and candidate alerts"
                />

                <Button type="submit" variant="contained" size="large">
                  Create School Profile
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SchoolRegister;
