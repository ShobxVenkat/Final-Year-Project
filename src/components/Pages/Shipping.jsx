"use client"
import { Container } from "@mui/material"
import { Truck, Package, Clock, Shield, MapPin, CreditCard, RotateCcw, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const shippingOptions = [
    {
      icon: <Truck className="text-amber-400" size={24} />,
      title: "Standard Shipping",
      time: "5-7 Business Days",
      cost: "₹99 - ₹299",
      description: "Reliable delivery for most items across India",
    },
    {
      icon: <Package className="text-amber-400" size={24} />,
      title: "Express Shipping",
      time: "2-3 Business Days",
      cost: "₹199 - ₹499",
      description: "Faster delivery for urgent purchases",
    },
    {
      icon: <Clock className="text-amber-400" size={24} />,
      title: "Same Day Delivery",
      time: "Within 24 Hours",
      cost: "₹299 - ₹799",
      description: "Available in major cities for select items",
    },
    {
      icon: <Shield className="text-amber-400" size={24} />,
      title: "Premium Secure",
      time: "3-5 Business Days",
      cost: "₹499 - ₹999",
      description: "Extra protection for high-value items",
    },
  ]

  const returnSteps = [
    {
      step: "1",
      title: "Initiate Return",
      description: "Contact us within 7 days of delivery to start the return process",
    },
    {
      step: "2",
      title: "Package Item",
      description: "Carefully package the item in its original condition with all accessories",
    },
    {
      step: "3",
      title: "Schedule Pickup",
      description: "We'll arrange a pickup from your location at no extra cost",
    },
    {
      step: "4",
      title: "Refund Processing",
      description: "Refund will be processed within 5-7 business days after inspection",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <Container className="px-4 max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Truck className="text-amber-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Shipping & Returns
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fast, secure delivery and hassle-free returns for all your BidFlare purchases
          </p>
        </motion.div>

        {/* Shipping Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-amber-400/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  {option.icon}
                  <h3 className="text-lg font-bold text-white ml-3">{option.title}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-amber-400">
                    <Clock size={16} className="mr-2" />
                    <span className="font-medium">{option.time}</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CreditCard size={16} className="mr-2" />
                    <span className="font-medium">{option.cost}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Shipping Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-amber-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Delivery Coverage</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Pan-India delivery to 25,000+ pin codes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Same-day delivery in Delhi, Mumbai, Bangalore, Chennai
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Express delivery to 100+ major cities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  International shipping to 50+ countries
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="text-amber-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Secure Packaging</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Professional packaging for fragile items
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Insurance coverage up to ₹1,00,000
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Real-time tracking for all shipments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Signature confirmation for high-value items
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Returns Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <RotateCcw className="text-amber-400 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-white">Returns Policy</h2>
            </div>
            <p className="text-gray-400">Easy returns within 7 days of delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {returnSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Return Conditions</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Items must be in original condition with all tags and packaging</li>
                  <li>• Electronics must include all accessories and original boxes</li>
                  <li>• Personalized or custom items cannot be returned</li>
                  <li>• Return shipping is free for defective or damaged items</li>
                  <li>• Refunds are processed to the original payment method</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gray-800 rounded-lg border border-gray-700 p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Need Help with Shipping?</h3>
          <p className="text-gray-400 mb-6">
            Our customer service team is available 24/7 to assist with your shipping and return queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Track Your Order
            </button>
            <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Contact Support
          </button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Shipping
