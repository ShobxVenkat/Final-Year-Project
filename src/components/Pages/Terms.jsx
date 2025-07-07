"use client"
import { Container } from "@mui/material"
import { FileText, Gavel, CreditCard, Truck, Shield, AlertTriangle, Scale, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const Terms = () => {
  const sections = [
    {
      icon: <Gavel className="text-amber-400" size={24} />,
      title: "Auction Rules & Bidding",
      content: [
        "All bids are binding and constitute a legal commitment to purchase",
        "Bidders must be 18 years or older and legally capable of entering contracts",
        "Reserve prices may apply to certain items and will be clearly indicated",
        "Bid increments are predetermined and displayed on each auction listing",
        "Automatic bidding systems are available but bids cannot be retracted once placed",
        "Auction end times are final; last-minute bids may extend the auction by 2 minutes",
        "BidFlare reserves the right to cancel auctions or reject bids at our discretion",
      ],
    },
    {
      icon: <CreditCard className="text-amber-400" size={24} />,
      title: "Payment Terms",
      content: [
        "Payment must be completed within 48 hours of winning an auction",
        "Accepted payment methods include credit cards, debit cards, UPI, and net banking",
        "A buyer's premium of 5-10% applies to all successful bids",
        "All prices are in Indian Rupees (INR) unless otherwise specified",
        "Failed payments may result in account suspension and legal action",
        "Refunds are processed within 5-7 business days to the original payment method",
        "Currency conversion fees may apply for international transactions",
      ],
    },
    {
      icon: <Truck className="text-amber-400" size={24} />,
      title: "Shipping & Delivery",
      content: [
        "Shipping costs are calculated based on item size, weight, and destination",
        "Delivery timeframes are estimates and may vary due to external factors",
        "Risk of loss transfers to the buyer upon shipment from our facility",
        "International shipping is subject to customs duties and import taxes",
        "Buyers are responsible for providing accurate shipping addresses",
        "Damaged items must be reported within 48 hours of delivery",
        "Insurance is available for high-value items at an additional cost",
      ],
    },
    {
      icon: <Shield className="text-amber-400" size={24} />,
      title: "Item Authenticity & Condition",
      content: [
        "All items are described to the best of our knowledge and ability",
        "High-value items undergo professional authentication when possible",
        "Condition reports are provided for items showing wear or damage",
        "Buyers are encouraged to examine items during preview periods",
        "BidFlare is not liable for undisclosed defects in consigned items",
        "Returns are accepted only for items significantly different from description",
        "Authentication disputes must be raised within 14 days of delivery",
      ],
    },
    {
      icon: <FileText className="text-amber-400" size={24} />,
      title: "User Accounts & Conduct",
      content: [
        "Users must provide accurate and current information during registration",
        "Account sharing or allowing others to use your account is prohibited",
        "Fraudulent activity, shill bidding, or manipulation will result in immediate termination",
        "Users must maintain the confidentiality of their login credentials",
        "BidFlare reserves the right to suspend or terminate accounts for policy violations",
        "Inactive accounts may be closed after 12 months of non-use",
        "Users are responsible for all activity conducted through their accounts",
      ],
    },
    {
      icon: <Scale className="text-amber-400" size={24} />,
      title: "Liability & Disclaimers",
      content: [
        "BidFlare acts as an intermediary between buyers and sellers",
        "We are not liable for disputes between buyers and sellers",
        "The platform is provided 'as is' without warranties of any kind",
        "Our liability is limited to the amount paid for the specific transaction",
        "We are not responsible for technical issues that may affect bidding",
        "Force majeure events may suspend or cancel auctions without liability",
        "Users participate in auctions at their own risk and discretion",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <Container className="px-4 max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="text-amber-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using BidFlare. By accessing our platform, you agree to be bound by
            these terms.
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
          <h2 className="text-xl font-bold text-white mb-4">Agreement to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of the BidFlare auction platform operated by BidFlare
            Private Limited. By accessing or using our service, you agree to be bound by these Terms. If you disagree
            with any part of these terms, then you may not access the service. These Terms apply to all visitors, users,
            and others who access or use the service.
          </p>
        </motion.div>

        {/* Terms Sections */}
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

        {/* Intellectual Property */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Intellectual Property Rights</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The BidFlare platform and its original content, features, and functionality are and will remain the
            exclusive property of BidFlare Private Limited and its licensors. The service is protected by copyright,
            trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or
            service without our prior written consent.
          </p>
        </motion.div>

        {/* Governing Law */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Governing Law & Jurisdiction</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these Terms or
            your use of the service shall be subject to the exclusive jurisdiction of the courts in Ayodhya, Uttar
            Pradesh, India. You agree to submit to the personal jurisdiction of such courts for the purpose of
            litigating all such claims or disputes.
          </p>
        </motion.div>

        {/* Dispute Resolution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Dispute Resolution</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We encourage users to contact us first to resolve any disputes informally. For formal disputes:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Mediation will be attempted before any legal proceedings</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Arbitration may be required for disputes exceeding ₹1,00,000</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Class action lawsuits are waived by using this service</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-amber-400">Email:</strong> legal@bidflare.com
            </p>
            <p>
              <strong className="text-amber-400">Phone:</strong> +91 9219180712
            </p>
            <p>
              <strong className="text-amber-400">Address:</strong> BidFlare Legal Department, Ayodhya, Uttar Pradesh
              224001
            </p>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 mt-8"
        >
          <div className="flex items-center justify-center mb-3">
            <AlertTriangle className="text-red-400 mr-2" size={20} />
            <h3 className="text-lg font-bold text-red-400">Important Notice</h3>
          </div>
          <p className="text-gray-300 text-sm">
            These terms may be updated from time to time. Continued use of the platform after changes constitutes
            acceptance of the new terms. We recommend reviewing these terms periodically for any updates.
          </p>
        </motion.div>
      </Container>
    </div>
  )
}

export default Terms
