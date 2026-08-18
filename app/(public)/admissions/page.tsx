"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  BookOpen,
  UserPlus,
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState("process");

  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "আবেদন ফর্ম সংগ্রহ",
      description: "স্কুলের অফিস থেকে অথবা অনলাইনে আবেদন ফর্ম সংগ্রহ করুন",
      details: "ওয়েবসাইট থেকে ডাউনলোড বা অফিস থেকে সংগ্রহ করুন"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "ফর্ম পূরণ ও জমা",
      description: "সঠিক তথ্য দিয়ে ফর্ম পূরণ করে প্রয়োজনীয় কাগজপত্র সহ জমা দিন",
      details: "সকল তথ্য সঠিকভাবে পূরণ করুন এবং প্রয়োজনীয় কপি সংযুক্ত করুন"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "লিখিত পরীক্ষা",
      description: "নির্ধারিত তারিখে লিখিত ভর্তি পরীক্ষায় অংশগ্রহণ করুন",
      details: "বাংলা, ইংরেজি ও গণিত বিষয়ে পরীক্ষা অনুষ্ঠিত হবে"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "মৌখিক সাক্ষাৎকার",
      description: "শিক্ষার্থী ও অভিভাবকের সাথে সাক্ষাৎকার অনুষ্ঠিত হবে",
      details: "শিক্ষার্থীর মানসিক বিকাশ ও অভিভাবকের মতামত গ্রহণ"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "ভর্তি নিশ্চিতকরণ",
      description: "ফলাফল প্রকাশের পর নির্বাচিতদের ভর্তি নিশ্চিত করুন",
      details: "ফি জমা দিয়ে ভর্তি নিশ্চিত করুন"
    }
  ];

  const requirements = [
    "জন্ম নিবন্ধন সনদের সত্যায়িত কপি",
    "পূর্ববর্তী বিদ্যালয়ের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)",
    "পাসপোর্ট সাইজের ছবি (৪ কপি)",
    "অভিভাবকের এনআইডি কার্ডের কপি",
    "মোবাইল নম্বর ও ইমেইল ঠিকানা",
    "টিকা কার্ডের কপি",
    "আয়ের সনদ (প্রযোজ্য ক্ষেত্রে)",
    "মেডিকেল সার্টিফিকেট"
  ];

  const fees = [
    { item: "ভর্তি ফি", amount: "৩,০০০/-", period: "এককালীন" },
    { item: "মাসিক বেতন", amount: "১,৫০০/-", period: "প্রতি মাস" },
    { item: "বিকাশ ফি", amount: "৫০০/-", period: "প্রতি মাস" },
    { item: "লাইব্রেরি ফি", amount: "৩০০/-", period: "প্রতি মাস" },
    { item: "ক্রীড়া ফি", amount: "২০০/-", period: "প্রতি মাস" },
    { item: "কম্পিউটার ল্যাব", amount: "৩০০/-", period: "প্রতি মাস" }
  ];

  const scholarships = [
    { name: "মেধা বৃত্তি", criteria: "পরীক্ষায় ৮০%+ নম্বর", amount: "৫০% ছাড়" },
    { name: "গণিত বৃত্তি", criteria: "গণিত অলিম্পিয়াডে অংশগ্রহণ", amount: "৩০% ছাড়" },
    { name: "ক্রীড়া বৃত্তি", criteria: "জাতীয় ক্রীড়ায় অংশগ্রহণ", amount: "২৫% ছাড়" },
    { name: "সাহায্য বৃত্তি", criteria: "অসহায় ও মেধাবী শিক্ষার্থী", amount: "১০০% ছাড়" }
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
            ভর্তি তথ্য
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            নতুন শিক্ষাবর্ষে আমাদের স্কুলে ভর্তি হতে চাইলে নিম্নলিখিত প্রক্রিয়া অনুসরণ করুন
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: "process", label: "ভর্তি প্রক্রিয়া" },
            { id: "requirements", label: "প্রয়োজনীয় কাগজপত্র" },
            { id: "fees", label: "ফি কাঠামো" },
            { id: "scholarship", label: "বৃত্তি" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Process Tab */}
        {activeTab === "process" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">ভর্তি প্রক্রিয়া</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                    <div className="text-blue-600">{step.icon}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                    <p className="text-gray-500 text-sm mt-1">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">📌 গুরুত্বপূর্ণ তারিখ</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• ফর্ম জমার শেষ তারিখ: ২৫ জানুয়ারি, ২০২৬</li>
                <li>• ভর্তি পরীক্ষার তারিখ: ১ ফেব্রুয়ারি, ২০২৬</li>
                <li>• ফলাফল প্রকাশ: ৫ ফেব্রুয়ারি, ২০২৬</li>
                <li>• ভর্তি নিশ্চিতকরণ: ১০-১৫ ফেব্রুয়ারি, ২০২৬</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Requirements Tab */}
        {activeTab === "requirements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">প্রয়োজনীয় কাগজপত্র</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                ⚠️ সকল কাগজপত্রের সত্যায়িত কপি জমা দিতে হবে। মূল কপি পরীক্ষার সময় সাথে আনতে হবে।
              </p>
            </div>
          </motion.div>
        )}

        {/* Fees Tab */}
        {activeTab === "fees" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">ফি কাঠামো</h2>
            <div className="space-y-3">
              {fees.map((fee, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-800">{fee.item}</p>
                    <p className="text-sm text-gray-500">{fee.period}</p>
                  </div>
                  <p className="font-bold text-blue-600">{fee.amount}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <p className="text-green-800 text-sm">
                💡 পুরো বর্ষের ফি একসাথে জমা দিলে ১০% ছাড় পাওয়া যায়।
              </p>
            </div>
          </motion.div>
        )}

        {/* Scholarship Tab */}
        {activeTab === "scholarship" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">বৃত্তি সুবিধা</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {scholarships.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <Award className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.criteria}</p>
                  <p className="text-blue-600 font-bold mt-2">{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                বিস্তারিত জানতে যোগাযোগ করুন <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Contact for Admission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">ভর্তি সংক্রান্ত যেকোনো প্রশ্ন?</h3>
          <p className="text-blue-100 mb-4">আমাদের ভর্তি অফিসে যোগাযোগ করুন</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>admission@adarshavidyapith.edu</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>আদর্শ বিদ্যাপীঠ, মিরপুর-১২</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}