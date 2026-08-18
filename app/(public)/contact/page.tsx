"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Youtube,
  Linkedin,
  Send
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।");
    setFormData({ name: "", email: "", phone: "", message: "" });
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
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">বার্তা পাঠান</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">আপনার নাম</label>
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
                  <label className="block text-gray-700 font-medium mb-2">ইমেইল ঠিকানা</label>
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
                  <label className="block text-gray-700 font-medium mb-2">বার্তা</label>
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
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  বার্তা পাঠান
                </button>
              </form>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
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

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-3">সোশ্যাল মিডিয়া</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">জরুরি যোগাযোগ</h3>
                <p className="text-blue-50 text-sm">২৪/৭ জরুরি প্রয়োজনে যোগাযোগ করুন</p>
                <p className="text-xl font-bold mt-2">+৮৮০ ১২৩৪-৫৬৭৮৯২</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}