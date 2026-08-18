"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

// Social Icons - SVG ব্যবহার করছি (lucide-react এর পরিবর্তে)
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // সিমুলেট API কল
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // 5 সেকেন্ড পর রিসেট
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "ঠিকানা",
      details: ["আদর্শ বিদ্যাপীঠ", "মিরপুর-১২, ঢাকা-১২১৬", "বাংলাদেশ"],
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "ফোন",
      details: ["+৮৮০ ১২৩৪-৫৬৭৮৯০", "+৮৮০ ১২৩৪-৫৬৭৮৯১"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "ইমেইল",
      details: ["info@adarshavidyapith.edu", "admission@adarshavidyapith.edu"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "অফিস সময়",
      details: ["সকাল ৮:০০ - বিকাল ৪:০০", "শুক্রবার বন্ধ"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            যোগাযোগ করুন
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            যে কোনো প্রশ্ন, মতামত বা পরামর্শ জানাতে আমাদের সাথে যোগাযোগ করুন
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">বার্তা পাঠান</h2>
            
            {submitted ? (
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-800">বার্তা পাঠানো হয়েছে!</h3>
                <p className="text-gray-600 mt-2">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">আপনার নাম *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ইমেইল ঠিকানা *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="আপনার ইমেইল"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ফোন নম্বর</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="আপনার ফোন নম্বর"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">বিষয়</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="বার্তার বিষয়"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">বার্তা *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="আপনার বার্তা লিখুন..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      বার্তা পাঠান
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition">
                <div className={`p-3 rounded-full ${info.color} flex-shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media - SVG Icons ব্যবহার করে */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-3">সোশ্যাল মিডিয়া</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition hover:scale-110">
                  <FacebookIcon />
                </a>
                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition hover:scale-110">
                  <YoutubeIcon />
                </a>
                <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition hover:scale-110">
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">🚨 জরুরি যোগাযোগ</h3>
              <p className="text-blue-50 text-sm">২৪/৭ জরুরি প্রয়োজনে যোগাযোগ করুন</p>
              <p className="text-xl font-bold mt-2">+৮৮০ ১২৩৪-৫৬৭৮৯২</p>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                🗺️ গুগল ম্যাপ (যথাস্থানে যোগ করুন)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}