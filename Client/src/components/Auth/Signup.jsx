import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, ArrowRight, Mail, Lock, User, Eye, EyeOff, Shield } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    terms: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "", password: "", terms: "" };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Handle signup logic here
        console.log("Signup data:", formData);
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, -5, 5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a12] to-[#1a1b2f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-xl"
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="w-full max-w-md"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center mb-8 relative">
            <motion.div variants={floatingVariants} animate="animate" className="inline-block relative">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-xl opacity-75"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full">
                  <Flame className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold text-white mt-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
            >
              Join BidFlare
            </motion.h1>
            <motion.p variants={itemVariants} className="text-slate-400 mt-2">
              Create your account and start winning auctions
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Username field */}
              <motion.div variants={itemVariants} className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Username</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                      errors.username ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500 text-white placeholder-gray-500 transition-all`}
                    placeholder="Choose a username"
                  />
                </div>
                {errors.username && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {errors.username}
                  </motion.p>
                )}
              </motion.div>

              {/* Email field */}
              <motion.div variants={itemVariants} className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500 text-white placeholder-gray-500 transition-all`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Password field */}
              <motion.div variants={itemVariants} className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-3 bg-gray-800/50 border ${
                      errors.password ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500 text-white placeholder-gray-500 transition-all`}
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password ? (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {errors.password}
                  </motion.p>
                ) : (
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <Shield className="w-3 h-3 mr-1" />
                    <span>Use 8+ characters with letters, numbers & symbols</span>
                  </p>
                )}
              </motion.div>

              {/* Terms checkbox */}
              <motion.div variants={itemVariants} className="pt-2">
                <label className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="terms"
                    className="w-4 h-4 mt-0.5 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500 focus:ring-offset-0"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        setErrors(prev => ({ ...prev, terms: "You must accept the terms" }));
                      } else {
                        setErrors(prev => ({ ...prev, terms: "" }));
                      }
                    }}
                  />
                  <span className="text-xs text-gray-300 leading-relaxed">
                    I agree to the{" "}
                    <Link to="/terms" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {errors.terms}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit button */}
              <motion.div variants={itemVariants} className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Creating Account...</span>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Divider */}
              <motion.div variants={itemVariants} className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gray-900/80 text-gray-400">Already have an account?</span>
                </div>
              </motion.div>

              {/* Login link */}
              <motion.div variants={itemVariants} className="text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm transition-colors"
                >
                  <span>Sign in instead</span>
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;