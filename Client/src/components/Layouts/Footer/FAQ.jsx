import { useState } from "react"
import { 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Container,
  Collapse,
  IconButton,
  AppBar,
  Toolbar,
  Chip
} from "@mui/material"
import { Flame, ShoppingCart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqData = [
  {
    id: 1,
    question: "How do I place a bid?",
    answer:
      "To place a bid, simply enter your bid amount in the bidding section and click the 'Bid' button. Your bid must be higher than the current highest bid. You'll need to be logged in to participate in auctions.",
  },
  {
    id: 2,
    question: "What happens if I win an auction?",
    answer:
      "If you win an auction, you'll receive an email confirmation with payment instructions. You have 48 hours to complete payment. Once payment is confirmed, we'll arrange shipping of your item.",
  },
  {
    id: 3,
    question: "Are there any additional fees?",
    answer:
      "Yes, there's a buyer's premium of 25% added to the final hammer price. Shipping costs are calculated separately based on the item's size, weight, and destination.",
  },
  {
    id: 4,
    question: "How can I verify item authenticity?",
    answer:
      "All items come with certificates of authenticity when applicable. Our experts thoroughly examine each piece before listing. For high-value items, we provide detailed provenance documentation.",
  },
  {
    id: 5,
    question: "Can I preview items before bidding?",
    answer:
      "Yes, we offer preview sessions before major auctions. Check the auction details for preview dates and times. High-resolution images and detailed descriptions are also available online.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, bank transfers, and certified checks. Payment must be completed within 48 hours of winning an auction. Cryptocurrency payments are accepted for purchases over $10,000.",
  },
  {
    id: 7,
    question: "How do I set up automatic bidding?",
    answer:
      "You can set a maximum bid amount, and our system will automatically bid on your behalf up to that limit. This ensures you don't miss out on items while maintaining your budget.",
  },
  {
    id: 8,
    question: "What if I have a dispute about an item?",
    answer:
      "We have a 7-day return policy for items that are significantly different from their description. Contact our support team immediately if you have concerns about your purchase.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a' }}>
      {/* Header */}
    

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <HelpCircle size={48} color="#f97316" />
            <Typography variant="h3" sx={{ ml: 2, fontWeight: 'bold', color: 'white' }}>
              Frequently Asked Questions
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#94a3b8' }}>
            Find answers to common questions about bidding, payments, and our auction process
          </Typography>
        </Box>

        {/* FAQ Items */}
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faqData.map((item) => (
            <Card 
              key={item.id} 
              sx={{ 
                mb: 2, 
                bgcolor: '#1e293b', 
                border: '1px solid #475569',
                '&:hover': { bgcolor: '#334155' }
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Button
                  onClick={() => toggleItem(item.id)}
                  fullWidth
                  sx={{
                    p: 3,
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(51, 65, 85, 0.5)' }
                  }}
                  endIcon={
                    openItems.has(item.id) ? 
                    <ChevronUp size={20} color="#f97316" /> : 
                    <ChevronDown size={20} color="#f97316" />
                  }
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.question}
                  </Typography>
                </Button>

                <Collapse in={openItems.has(item.id)}>
                  <Box sx={{ px: 3, pb: 3, borderTop: '1px solid #475569', pt: 2 }}>
                    <Typography sx={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                      {item.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Contact Section */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Card sx={{ bgcolor: '#1e293b', border: '1px solid #475569', maxWidth: '600px', mx: 'auto' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
                Still have questions?
              </Typography>
              <Typography sx={{ color: '#cbd5e1', mb: 3 }}>
                Can't find the answer you're looking for? Our support team is here to help.
              </Typography>
              <Button 
                variant="contained"
                sx={{ bgcolor: '#f97316', '&:hover': { bgcolor: '#ea580c' } }}
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
