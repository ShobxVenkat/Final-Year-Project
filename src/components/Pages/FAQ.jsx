"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      category: "Bidding & Auctions",
      questions: [
        {
          id: 1,
          question: "How do I place a bid on an item?",
          answer:
            "To place a bid, simply click on the item you're interested in, enter your bid amount (which must be higher than the current bid), and click 'Place Bid'. You'll need to be logged in to your BidFlare account.",
        },
        {
          id: 2,
          question: "What happens if I win an auction?",
          answer:
            "Congratulations! You'll receive an email confirmation with payment instructions. You have 48 hours to complete payment, after which we'll arrange shipping or pickup of your item.",
        },
        {
          id: 3,
          question: "Can I retract a bid once it's placed?",
          answer:
            "Bids are binding and cannot be retracted under normal circumstances. However, in exceptional cases (such as entering the wrong amount), contact our support team immediately.",
        },
        {
          id: 4,
          question: "How does automatic bidding work?",
          answer:
            "Set your maximum bid amount, and our system will automatically bid on your behalf up to that limit, always keeping you as the highest bidder until your maximum is reached.",
        },
      ],
    },
    {
      category: "Account & Registration",
      questions: [
        {
          id: 5,
          question: "How do I create a BidFlare account?",
          answer:
            "Click 'Sign Up' in the top right corner, fill in your details including email, password, and verification information. You'll receive a confirmation email to activate your account.",
        },
        {
          id: 6,
          question: "Is there a fee to join BidFlare?",
          answer:
            "Creating an account is completely free. We only charge a small buyer's premium (5-10%) on successful auction wins, which is clearly displayed before you bid.",
        },
        {
          id: 7,
          question: "How do I verify my account?",
          answer:
            "Account verification requires a valid email address and phone number. For higher-value auctions, additional identity verification may be required.",
        },
      ],
    },
    {
      category: "Payments & Fees",
      questions: [
        {
          id: 8,
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. Payment must be completed within 48 hours of winning an auction.",
        },
        {
          id: 9,
          question: "Are there any additional fees?",
          answer:
            "Yes, there's a buyer's premium of 5-10% depending on the item category, plus applicable taxes. Shipping costs are separate and calculated based on item size and destination.",
        },
        {
          id: 10,
          question: "When will I be charged?",
          answer:
            "You're only charged when you win an auction. We'll send payment instructions immediately after the auction ends.",
        },
      ],
    },
    {
      category: "Selling on BidFlare",
      questions: [
        {
          id: 11,
          question: "How do I sell items on BidFlare?",
          answer:
            "Click 'Sell With Us' and submit photos and details of your item. Our experts will evaluate it and set up the auction listing if approved.",
        },
        {
          id: 12,
          question: "What commission do you charge sellers?",
          answer:
            "Our seller's commission ranges from 10-15% depending on the item category and final sale price. This covers marketing, payment processing, and customer service.",
        },
        {
          id: 13,
          question: "How long does the selling process take?",
          answer:
            "From submission to auction completion typically takes 1-2 weeks. High-value items may require additional authentication time.",
        },
      ],
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <Container className="px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="text-amber-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about bidding, selling, and using
            BidFlare
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
          />
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-amber-400">
                  {category.category}
                </h2>
              </div>

              <div className="divide-y divide-gray-700">
                {category.questions.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-700/50 transition-colors flex items-center justify-between"
                    >
                      <span className="font-medium text-white pr-4">
                        {item.question}
                      </span>
                      {openItems[item.id] ? (
                        <ChevronUp
                          className="text-amber-400 flex-shrink-0"
                          size={20}
                        />
                      ) : (
                        <ChevronDown
                          className="text-amber-400 flex-shrink-0"
                          size={20}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {openItems[item.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-gray-800 rounded-lg border border-gray-700 p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Contact Support
          </button>
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQ;
