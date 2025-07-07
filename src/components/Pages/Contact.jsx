"use client"

import { useState } from "react"
import { Container } from "@mui/material"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Users } from "lucide-react"
import { motion } from "framer-motion"

const Contact = () => {
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
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: <Mail className="text-amber-400" size={24} />,
      title: "Email Support",
      info: "support@bidflare.com",
      description: "Get detailed help via email",
      availability: "24/7 Response",
    },
    {
      icon: <Phone className="text-amber-400" size={24} />,
      title: "Phone Support",
      info: "+91 9219180712",
      description: "Speak directly with our team",
      availability: "Mon-Fri: 9AM-6PM",
    },
    {
      icon: <MessageCircle className="text-amber-400" size={24} />,
      title: "Live Chat",
      info: "Available on website",
      description: "Instant help for quick questions",
      availability: "Mon-Sun: 8AM-10PM",
    },
    {
      icon: <MapPin className="text-amber-400" size={24} />,
      title: "Office Address",
      info: "Ayodhya, Uttar Pradesh 224001",
      description: "Visit our headquarters",
      availability: "Mon-Fri: 10AM-5PM",
    },
  ]

  const supportCategories = [
    { value: "bidding", label: "Bidding & Auctions" },
    { value: "account", label: "Account Issues" },
    { value: "payment", label: "Payment & Billing" },
    { value: "shipping", label: "Shipping & Delivery" },
    { value: "returns", label: "Returns & Refunds" },
    { value: "technical", label: "Technical Support" },
    { value: "selling", label: "Selling on BidFlare" },
    { value: "other", label: "Other" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <Container className="px-4 max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Headphones className="text-amber-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Contact Support
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the channels below or send us a message.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-amber-400/50 transition-all text-center"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-amber-400 font-medium mb-2">{method.info}</p>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Clock size={12} className="mr-1" />
                  {method.availability}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="flex items-center mb-6">
                <Send className="text-amber-400 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                      placeholder="Brief subject line"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="">Select a category</option>
                      {supportCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none resize-none"
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-amber-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Our Support Team</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our dedicated support team consists of auction experts, technical specialists, and customer service
                  professionals ready to assist you.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Average response time: 2-4 hours</li>
                  <li>• 24/7 emergency support for urgent issues</li>
                  <li>• Multilingual support available</li>
                  <li>• Specialized teams for different categories</li>
                </ul>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Before You Contact Us</h3>
                <p className="text-gray-300 mb-4">
                  For faster resolution, please check our FAQ section or try these quick solutions:
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Check your account dashboard for order status</li>
                  <li>• Review our bidding guidelines</li>
                  <li>• Verify your payment method details</li>
                  <li>• Clear browser cache for technical issues</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Priority Support</h3>
                <p className="text-gray-300 text-sm">
                  Premium members get priority support with dedicated phone lines and faster response times.
                  <span className="text-amber-400 font-medium"> Upgrade your account</span> for enhanced support.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gray-800 rounded-lg border border-gray-700 p-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="text-amber-400 mr-3" size={24} />
            <h3 className="text-xl font-bold text-white">Support Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-amber-400 mb-2">Phone Support</h4>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
            </div>
            <div>
              <h4 className="font-medium text-amber-400 mb-2">Live Chat</h4>
              <p className="text-gray-300">Monday - Sunday: 8:00 AM - 10:00 PM IST</p>
            </div>
            <div>
              <h4 className="font-medium text-amber-400 mb-2">Email Support</h4>
              <p className="text-gray-300">24/7 - Response within 4 hours</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Contact
