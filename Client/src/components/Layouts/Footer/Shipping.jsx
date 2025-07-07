import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  Chip,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material"
import { Flame, ShoppingCart, Truck, RotateCcw, Shield, Clock, MapPin, CreditCard } from "lucide-react"

export default function Shipping() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0f172a" }}>
      {/* Header */}
    

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
            <Truck size={48} color="#f97316" />
            <Typography variant="h3" sx={{ ml: 2, fontWeight: "bold", color: "white" }}>
              Shipping & Returns
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "#94a3b8" }}>
            Everything you need to know about shipping and our return policy
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Shipping Information */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Truck size={24} color="#f97316" />
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold", color: "white" }}>
                      Shipping Information
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <Clock size={20} color="#f97316" />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 1 }}>
                          Processing Time
                        </Typography>
                        <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                          Orders are processed within 1-2 business days after payment confirmation.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <MapPin size={20} color="#f97316" />
                      <Box sx={{ width: "100%" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 2 }}>
                          Shipping Options
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                          {[
                            { name: "Standard Shipping (5-7 days)", price: "$15.99" },
                            { name: "Express Shipping (2-3 days)", price: "$29.99" },
                            { name: "Overnight Shipping", price: "$49.99" },
                            { name: "White Glove Delivery", price: "Quote on Request" },
                          ].map((option, index) => (
                            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                              <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{option.name}</Typography>
                              <Typography sx={{ color: "white", fontSize: "0.9rem", fontWeight: 600 }}>
                                {option.price}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <Shield size={20} color="#f97316" />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 1 }}>
                          Insurance & Tracking
                        </Typography>
                        <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                          All shipments include full insurance and tracking. You'll receive tracking information via
                          email.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* International Shipping */}
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", mb: 3 }}>
                    International Shipping
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {[
                      { region: "Canada", details: "$25.99 (7-10 days)" },
                      { region: "Europe", details: "$39.99 (10-14 days)" },
                      { region: "Asia Pacific", details: "$49.99 (12-16 days)" },
                      { region: "Rest of World", details: "Quote on Request" },
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography sx={{ color: "#cbd5e1" }}>{item.region}</Typography>
                        <Typography sx={{ color: "white", fontWeight: 600 }}>{item.details}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography sx={{ color: "#94a3b8", fontSize: "0.8rem", mt: 2 }}>
                    * International customers are responsible for customs duties and taxes
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Returns Information */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <RotateCcw size={24} color="#f97316" />
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold", color: "white" }}>
                      Return Policy
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box>
                      <Chip
                        label="7-Day Return Window"
                        sx={{ bgcolor: "rgba(34, 197, 94, 0.2)", color: "#4ade80", mb: 2 }}
                      />
                      <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                        Items can be returned within 7 days of delivery if they significantly differ from the
                        description.
                      </Typography>
                    </Box>

                    <Divider sx={{ bgcolor: "#475569" }} />

                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 2 }}>
                        Return Conditions
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {[
                          "Item must be in original condition",
                          "Original packaging and documentation required",
                          "Return shipping costs are buyer's responsibility",
                          "Refund processed within 5-7 business days",
                        ].map((condition, index) => (
                          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                            <Typography sx={{ color: "#f97316", fontSize: "1.2rem" }}>•</Typography>
                            <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{condition}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <Divider sx={{ bgcolor: "#475569" }} />

                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 2 }}>
                        Non-Returnable Items
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {[
                          "Custom or personalized items",
                          "Items damaged by buyer",
                          'Items sold "as-is" or with known defects',
                        ].map((item, index) => (
                          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                            <Typography sx={{ color: "#ef4444", fontSize: "1.2rem" }}>×</Typography>
                            <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Refund Information */}
              <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <CreditCard size={24} color="#f97316" />
                    <Typography variant="h6" sx={{ ml: 2, fontWeight: "bold", color: "white" }}>
                      Refund Process
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {[
                      { method: "Credit Card Refunds", time: "3-5 business days" },
                      { method: "Bank Transfer Refunds", time: "5-7 business days" },
                      { method: "PayPal Refunds", time: "1-2 business days" },
                    ].map((refund, index) => (
                      <Box key={index} sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{refund.method}</Typography>
                        <Typography sx={{ color: "white", fontSize: "0.9rem", fontWeight: 600 }}>
                          {refund.time}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Section */}
        <Box sx={{ textAlign: "center" }}>
          <Card sx={{ bgcolor: "#1e293b", border: "1px solid #475569", maxWidth: "600px", mx: "auto" }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
                Questions about shipping or returns?
              </Typography>
              <Typography sx={{ color: "#cbd5e1", mb: 3 }}>
                Our customer service team is available to help with any shipping or return inquiries.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Button variant="contained" sx={{ bgcolor: "#f97316", "&:hover": { bgcolor: "#ea580c" } }}>
                  Contact Support
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#475569",
                    color: "#cbd5e1",
                    "&:hover": { bgcolor: "#334155", color: "white" },
                  }}
                >
                  Track Your Order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
