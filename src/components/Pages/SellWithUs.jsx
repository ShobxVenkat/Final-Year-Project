"use client"

import { useState } from "react"
import { Container } from "@mui/material"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Plus,
  X,
  Gavel,
  ShoppingCart,
  Camera,
  FileText,
  DollarSign,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"

const SellWithUs = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    brand: "",
    sellingMethod: "", // 'auction' or 'direct'
    basePrice: "",
    directPrice: "",
    auctionDuration: "7",
    reservePrice: "",
    images: [],
    specifications: [{ key: "", value: "" }],
    terms: false,
  })

  const [dragActive, setDragActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const categories = [
    "Fashion & Apparel",
   
    "Electronics",
   
    "Grocery & Essentials",
    "Beauty & Wellness",
    "Home & Appliances",
    "Sports & Fitness",
    "Other",







  ]

  const conditions = ["Brand New", "Like New", "Excellent", "Good", "Fair", "For Parts"]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).slice(0, 8 - formData.images.length)
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }))
  }

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const addSpecification = () => {
    setFormData((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { key: "", value: "" }],
    }))
  }

  const updateSpecification = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      specifications: prev.specifications.map((spec, i) => (i === index ? { ...spec, [field]: value } : spec)),
    }))
  }

  const removeSpecification = (index) => {
    setFormData((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <Container className="px-4 max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gavel className="text-amber-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Sell With Us
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            List your valuable items on BidFlare and reach thousands of potential buyers worldwide
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {step < currentStep ? <CheckCircle size={20} /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step < currentStep ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-8 text-sm">
            <span className={currentStep >= 1 ? "text-amber-400" : "text-gray-500"}>Product Details</span>
            <span className={currentStep >= 2 ? "text-amber-400" : "text-gray-500"}>Selling Method</span>
            <span className={currentStep >= 3 ? "text-amber-400" : "text-gray-500"}>Review & Submit</span>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Product Details */}
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <FileText className="mr-2 text-amber-400" />
                    Product Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Product Title *</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                        placeholder="Enter a descriptive title for your item"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Condition *</label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="">Select Condition</option>
                        {conditions.map((condition) => (
                          <option key={condition} value={condition}>
                            {condition}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Brand (Optional)</label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                        placeholder="Brand name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none resize-none"
                        placeholder="Provide detailed description including condition, features, and any defects"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image Upload */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Camera className="mr-2 text-amber-400" />
                    Product Images (Max 8)
                  </h3>

                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive ? "border-amber-400 bg-amber-400/10" : "border-gray-600"
                    }`}
                    onDragEnter={(e) => {
                      e.preventDefault()
                      setDragActive(true)
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault()
                      setDragActive(false)
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      setDragActive(false)
                      handleImageUpload(e.dataTransfer.files)
                    }}
                  >
                    <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-400 mb-4">Drag and drop images here, or click to select</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files)}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg cursor-pointer inline-block"
                    >
                      Choose Images
                    </label>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image) || "/placeholder.svg"}
                            alt={`Product ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Additional Specifications (Optional)</h3>
                  {formData.specifications.map((spec, index) => (
                    <div key={index} className="flex gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Specification name"
                        value={spec.key}
                        onChange={(e) => updateSpecification(index, "key", e.target.value)}
                        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Value"
                        value={spec.value}
                        onChange={(e) => updateSpecification(index, "value", e.target.value)}
                        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                      />
                      {formData.specifications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSpecification(index)}
                          className="text-red-400 hover:text-red-300 p-2"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSpecification}
                    className="text-amber-400 hover:text-amber-300 flex items-center"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Specification
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Selling Method */}
          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <DollarSign className="mr-2 text-amber-400" />
                    Choose Selling Method
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Auction Option */}
                    <div
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                        formData.sellingMethod === "auction"
                          ? "border-amber-400 bg-amber-400/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, sellingMethod: "auction" }))}
                    >
                      <div className="flex items-center mb-4">
                        <Gavel className="text-amber-400 mr-3" size={24} />
                        <h3 className="text-lg font-bold text-white">Auction</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Let buyers compete for your item. Great for rare or high-demand items.
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Higher potential selling price</li>
                        <li>• Competitive bidding environment</li>
                        <li>• Set reserve price for protection</li>
                      </ul>
                    </div>

                    {/* Direct Sale Option */}
                    <div
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                        formData.sellingMethod === "direct"
                          ? "border-amber-400 bg-amber-400/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, sellingMethod: "direct" }))}
                    >
                      <div className="flex items-center mb-4">
                        <ShoppingCart className="text-amber-400 mr-3" size={24} />
                        <h3 className="text-lg font-bold text-white">Direct Sale</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Set a fixed price for immediate purchase. Quick and straightforward.
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Immediate sale at fixed price</li>
                        <li>• No waiting for auction to end</li>
                        <li>• Predictable selling price</li>
                      </ul>
                    </div>
                  </div>

                  {/* Pricing Options */}
                  {formData.sellingMethod === "auction" && (
                    <div className="bg-gray-700/50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">Auction Settings</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Starting Bid Price (₹) *
                          </label>
                          <input
                            type="number"
                            name="basePrice"
                            value={formData.basePrice}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                            placeholder="1000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Reserve Price (₹) <span className="text-gray-500">(Optional)</span>
                          </label>
                          <input
                            type="number"
                            name="reservePrice"
                            value={formData.reservePrice}
                            onChange={handleInputChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                            placeholder="5000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Auction Duration</label>
                          <select
                            name="auctionDuration"
                            value={formData.auctionDuration}
                            onChange={handleInputChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                          >
                            <option value="3">3 Days</option>
                            <option value="5">5 Days</option>
                            <option value="7">7 Days</option>
                            <option value="10">10 Days</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <div className="flex items-start">
                          <Info className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <div className="text-sm text-blue-300">
                            <p className="font-medium mb-1">Reserve Price Info:</p>
                            <p>
                              If set, your item will only sell if the highest bid meets or exceeds this amount. Leave
                              blank for no reserve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.sellingMethod === "direct" && (
                    <div className="bg-gray-700/50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">Direct Sale Settings</h4>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Selling Price (₹) *</label>
                        <input
                          type="number"
                          name="directPrice"
                          value={formData.directPrice}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                          placeholder="10000"
                        />
                        <p className="text-gray-400 text-sm mt-2">
                          Set your fixed selling price. Buyers can purchase immediately at this price.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-amber-400" />
                    Review Your Listing
                  </h2>

                  <div className="space-y-6">
                    {/* Product Summary */}
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h3 className="font-bold text-white mb-2">{formData.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{formData.category}</Badge>
                        <Badge variant="secondary">{formData.condition}</Badge>
                        {formData.brand && <Badge variant="secondary">{formData.brand}</Badge>}
                      </div>
                      <p className="text-gray-300 text-sm">{formData.description}</p>
                    </div>

                    {/* Selling Method Summary */}
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">Selling Method</h4>
                      {formData.sellingMethod === "auction" ? (
                        <div className="text-gray-300">
                          <p>
                            <strong>Auction</strong> - {formData.auctionDuration} days
                          </p>
                          <p>Starting bid: ₹{formData.basePrice}</p>
                          {formData.reservePrice && <p>Reserve price: ₹{formData.reservePrice}</p>}
                        </div>
                      ) : (
                        <div className="text-gray-300">
                          <p>
                            <strong>Direct Sale</strong>
                          </p>
                          <p>Price: ₹{formData.directPrice}</p>
                        </div>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3"
                        />
                        <span className="text-gray-300 text-sm">
                          I agree to BidFlare's{" "}
                          <a href="/terms" className="text-amber-400 hover:text-amber-300">
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" className="text-amber-400 hover:text-amber-300">
                            Privacy Policy
                          </a>
                          . I confirm that I own this item and have the right to sell it.
                        </span>
                      </label>
                    </div>

                    {/* Fee Information */}
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="text-amber-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <div className="text-sm text-amber-300">
                          <p className="font-medium mb-1">Selling Fees:</p>
                          <p>
                            • Listing fee: Free
                            <br />• Success fee: 5-10% of final sale price
                            <br />• Payment processing: 2.9% + ₹30
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 bg-transparent disabled:opacity-50"
            >
              Previous
            </Button>

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!formData.terms}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white disabled:opacity-50"
              >
                <Star className="mr-2" size={16} />
                Submit Listing
              </Button>
            )}
          </div>
        </form>
      </Container>
    </div>
  )
}

export default SellWithUs
