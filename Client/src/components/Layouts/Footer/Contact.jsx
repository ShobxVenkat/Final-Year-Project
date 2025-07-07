"use client"

import { useState } from "react"
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  MenuItem,
  Chip,
  AppBar,
  Toolbar,
} from "@mui/material"
import { Flame, ShoppingCart, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react"

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })
  }

  const categories = [
    { value: "bidding", label: "Bidding Issues" },
    { value: "payment", label: "Payment & Billing" },
    { value: "shipping", label: "Shipping & Delivery" },
    { value: "returns", label: "Returns & Refunds" },
    { value: "account", label: "Account Issues" },
    { value: "technical", label: "Technical Support" },
    { value: "other", label: "Other" },
  ]

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0f172a" }}>
      {/* Header */}
     

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
            <MessageCircle size={48} color="#f97316" />
            <Typography variant="h3" sx={{ ml: 2, fontWeight: "bold", color: "white" }}>
              Contact Support
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "#94a3b8" }}>
            We're here to help! Get in touch with our support team
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Contact Methods */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Phone Support */}
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        bgcolor: "rgba(249, 115, 22, 0.2)",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Phone size={24} color="#f97316" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
                        Phone Support
                      </Typography>
                      <Chip
                        label="Available Now"
                        size="small"
                        sx={{ bgcolor: "rgba(34, 197, 94, 0.2)", color: "#4ade80" }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography sx={{ color: "white", fontWeight: 600 }}>+1 (555) 123-4567</Typography>
                    <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                      Monday - Friday: 9 AM - 8 PM EST
                    </Typography>
                    <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Saturday: 10 AM - 6 PM EST</Typography>
                    <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Sunday: 12 PM - 5 PM EST</Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Email Support */}
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        bgcolor: "rgba(249, 115, 22, 0.2)",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Mail size={24} color="#f97316" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
                        Email Support
                      </Typography>
                      <Chip
                        label="24/7 Response"
                        size="small"
                        sx={{ bgcolor: "rgba(59, 130, 246, 0.2)", color: "#60a5fa" }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography sx={{ color: "white", fontWeight: 600 }}>support@bidflare.com</Typography>
                    <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>General inquiries and support</Typography>
                    <Typography sx={{ color: "white", fontWeight: 600 }}>billing@bidflare.com</Typography>
                    <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Billing and payment issues</Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Live Chat */}
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        bgcolor: "rgba(249, 115, 22, 0.2)",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <MessageCircle size={24} color="#f97316" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
                        Live Chat
                      </Typography>
                      <Chip label="Online" size="small" sx={{ bgcolor: "rgba(34, 197, 94, 0.2)", color: "#4ade80" }} />
                    </Box>
                  </Box>
                  <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem", mb: 2 }}>
                    Get instant help from our support team
                  </Typography>
                  <Button fullWidth variant="contained" sx={{ bgcolor: "#f97316", "&:hover": { bgcolor: "#ea580c" } }}>
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 4 }}>
                  Send us a message
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#334155",
                            "& fieldset": { borderColor: "#475569" },
                            "&:hover fieldset": { borderColor: "#f97316" },
                            "&.Mui-focused fieldset": { borderColor: "#f97316" },
                          },
                          "& .MuiInputLabel-root": { color: "#cbd5e1" },
                          "& .MuiInputBase-input": { color: "white" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#334155",
                            "& fieldset": { borderColor: "#475569" },
                            "&:hover fieldset": { borderColor: "#f97316" },
                            "&.Mui-focused fieldset": { borderColor: "#f97316" },
                          },
                          "& .MuiInputLabel-root": { color: "#cbd5e1" },
                          "& .MuiInputBase-input": { color: "white" },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        select
                        label="Category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#334155",
                            "& fieldset": { borderColor: "#475569" },
                            "&:hover fieldset": { borderColor: "#f97316" },
                            "&.Mui-focused fieldset": { borderColor: "#f97316" },
                          },
                          "& .MuiInputLabel-root": { color: "#cbd5e1" },
                          "& .MuiInputBase-input": { color: "white" },
                        }}
                      >
                        {categories.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#334155",
                            "& fieldset": { borderColor: "#475569" },
                            "&:hover fieldset": { borderColor: "#f97316" },
                            "&.Mui-focused fieldset": { borderColor: "#f97316" },
                          },
                          "& .MuiInputLabel-root": { color: "#cbd5e1" },
                          "& .MuiInputBase-input": { color: "white" },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    required
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#334155",
                        "& fieldset": { borderColor: "#475569" },
                        "&:hover fieldset": { borderColor: "#f97316" },
                        "&.Mui-focused fieldset": { borderColor: "#f97316" },
                      },
                      "& .MuiInputLabel-root": { color: "#cbd5e1" },
                      "& .MuiInputBase-input": { color: "white" },
                    }}
                  />

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem" }}>* Required fields</Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Send size={16} />}
                      sx={{ bgcolor: "#f97316", "&:hover": { bgcolor: "#ea580c" }, px: 4 }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Response Time Info */}
        <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Clock size={48} color="#f97316" />
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", my: 3 }}>
                Response Times
              </Typography>
              <Grid container spacing={4} sx={{ maxWidth: "800px", mx: "auto" }}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 1 }}>
                    Live Chat
                  </Typography>
                  <Typography sx={{ color: "#f97316", fontWeight: "bold", fontSize: "1.1rem" }}>Instant</Typography>
                  <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem" }}>Available during business hours</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 1 }}>
                    Phone Support
                  </Typography>
                  <Typography sx={{ color: "#f97316", fontWeight: "bold", fontSize: "1.1rem" }}>Immediate</Typography>
                  <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                    No wait time during business hours
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 1 }}>
                    Email & Form
                  </Typography>
                  <Typography sx={{ color: "#f97316", fontWeight: "bold", fontSize: "1.1rem" }}>
                    Within 24 hours
                  </Typography>
                  <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem" }}>Usually much faster</Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
