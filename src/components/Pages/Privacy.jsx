"use client"
import { Container } from "@mui/material"
import { Shield, Eye, Lock, Database, Users, FileText, AlertTriangle, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const Privacy = () => {
  const sections = [
    {
      icon: <Database className="text-amber-400" size={24} />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Bidding and transaction history, including items viewed and purchased",
        "Payment information (processed securely through encrypted payment gateways)",
        "Device and browser information, IP address, and usage analytics",
        "Communication records when you contact our support team",
        "Location data when you use location-based features (with your consent)",
      ],
    },
    {
      icon: <Eye className="text-amber-400" size={24} />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our auction platform services",
        "To process transactions and communicate about your bids and purchases",
        "To send important account notifications and security alerts",
        "To personalize your experience and show relevant auction items",
        "To prevent fraud and ensure platform security",
        "To comply with legal obligations and resolve disputes",
        "To send marketing communications (with your consent, which you can withdraw anytime)",
      ],
    },
    {
      icon: <Users className="text-amber-400" size={24} />,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Information may be shared with payment processors for transaction completion",
        "Shipping details are shared with logistics partners for delivery",
        "Aggregated, non-personal data may be shared for analytics and research",
        "Information may be disclosed if required by law or to protect our rights",
        "In case of business transfer, your information may be transferred to the new entity",
      ],
    },
    {
      icon: <Lock className="text-amber-400" size={24} />,
      title: "Data Security",
      content: [
        "All data is encrypted in transit and at rest using industry-standard protocols",
        "Payment information is processed through PCI DSS compliant systems",
        "Regular security audits and penetration testing are conducted",
        "Access to personal data is restricted to authorized personnel only",
        "Multi-factor authentication is required for administrative access",
        "We maintain incident response procedures for potential data breaches",
      ],
    },
    {
      icon: <FileText className="text-amber-400" size={24} />,
      title: "Your Rights",
      content: [
        "Access: Request a copy of the personal information we hold about you",
        "Correction: Request correction of inaccurate or incomplete information",
        "Deletion: Request deletion of your personal information (subject to legal requirements)",
        "Portability: Request transfer of your data to another service provider",
        "Objection: Object to processing of your information for marketing purposes",
        "Restriction: Request restriction of processing in certain circumstances",
      ],
    },
    {
      icon: <AlertTriangle className="text-amber-400" size={24} />,
      title: "Cookies and Tracking",
      content: [
        "We use essential cookies for platform functionality and security",
        "Analytics cookies help us understand how users interact with our platform",
        "Marketing cookies are used to show relevant advertisements (with consent)",
        "You can control cookie preferences through your browser settings",
        "Third-party services (Google Analytics, payment processors) may set their own cookies",
        "We provide a cookie consent banner for EU users as required by GDPR",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <Container className="px-4 max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-amber-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Calendar size={16} className="mr-2" />
            Last updated: January 1, 2024
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            BidFlare ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your
            personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your
            information when you use our auction platform, website, and related services. By using BidFlare, you consent
            to the practices described in this policy.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center">
                  {section.icon}
                  <h2 className="text-xl font-bold text-white ml-3">{section.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Retention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Data Retention</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We retain your personal information for as long as necessary to provide our services and comply with legal
            obligations:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Account information: Retained while your account is active and for 3 years after closure</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Transaction records: Retained for 7 years for tax and legal compliance</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Marketing communications: Until you unsubscribe or withdraw consent</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Contact Us About Privacy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-amber-400">Email:</strong> privacy@bidflare.com
            </p>
            <p>
              <strong className="text-amber-400">Phone:</strong> +91 9219180712
            </p>
            <p>
              <strong className="text-amber-400">Address:</strong> BidFlare Privacy Office, Ayodhya, Uttar Pradesh
              224001
            </p>
          </div>
        </motion.div>

        {/* Updates Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6 mt-8"
        >
          <h3 className="text-lg font-bold text-amber-400 mb-2">Policy Updates</h3>
          <p className="text-gray-300 text-sm">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by email or
            through a prominent notice on our platform. Your continued use of BidFlare after such modifications
            constitutes acceptance of the updated policy.
          </p>
        </motion.div>
      </Container>
    </div>
  )
}

export default Privacy
