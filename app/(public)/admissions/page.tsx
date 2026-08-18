"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock,
  DollarSign,
  BookOpen,
  Users,
  Phone
} from "lucide-react";

export default function AdmissionsPage() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "আবেদন ফর্ম সংগ্রহ",
      description: "স্কুলের অফিস থেকে অথবা অনলাইনে আবেদন ফর্ম সংগ্রহ করুন"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "ফর্ম পূরণ ও জমা",
      description: "সঠিক তথ্য দিয়ে ফর্ম পূরণ করে প্রয়োজনীয় কাগজপত্র সহ জমা দিন"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "লিখিত পরীক্ষা",
      description: "নির্ধারিত তারিখে লিখিত ভর্তি পরীক্ষায় অংশগ্রহণ করুন"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "মৌখিক সাক্ষাৎকার",
      description: "শিক্ষার্থী ও অভিভাবকের সাথে সাক্ষাৎকার অনুষ্ঠিত হবে"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "ভর্তি নিশ্চিতকরণ",
      description: "ফলাফল প্রকাশের পর নির্বাচিতদের ভর্তি নিশ্চিত করুন"
    }
  ];

  const requirements = [
    "জন্ম নিবন্ধন সনদের কপি",
    "পূর্ববর্তী বিদ্যালয়ের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)",
    "পাসপোর্ট সাইজের ছবি (৪ কপি)",
    "অভিভাবকের এনআইডি কার্ডের কপি",
    "মোবাইল নম্বর ও ইমেইল ঠিকানা",
    "টিকা কার্ডের কপি"
  ];

  const fees = [
    { item: "ভর্তি ফি", amount: "৩,০০০/-", period: "এককালীন" },
    { item: "মাসিক বেতন", amount: "১,৫০০/-", period: "প্রতি মাস" },
    { item: "বিকাশ ফি", amount: "৫০০/-", period: "প্রতি মাস" },
    { item: "লাইব্রেরি ফি", amount: "৩০০/-", period: "প্রতি মাস" },
    { item: "ক্রীড়া ফি", amount: "২০০/-", period: "প্রতি মাস" }
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
            ভর্তি তথ্য
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            নতুন শিক্ষাবর্ষে আমাদের স্কুলে ভর্তি হতে চাইলে নিম্নলিখিত প্রক্রিয়া অনুসরণ করুন
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">প্রয়োজনীয় কাগজপত্র</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ফি কাঠামো</h2>
              <div className="space-y-3">
                {fees.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-gray-800">{fee.item}</p>
                      <p className="text-sm text-gray-500">{fee.period}</p>
                    </div>
                    <p className="font-bold text-blue-600">{fee.amount}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">গুরুত্বপূর্ণ তথ্য</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ভর্তি পরীক্ষার তারিখ: ১ ফেব্রুয়ারি, ২০২৬</li>
                  <li>• ফর্ম জমার শেষ তারিখ: ২৫ জানুয়ারি, ২০২৬</li>
                  <li>• ফলাফল প্রকাশ: ৫ ফেব্রুয়ারি, ২০২৬</li>
                </ul>
              </div>

              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                  অনলাইনে আবেদন করুন
                </button>
                <p className="text-center text-sm text-gray-500 mt-2">
                  <Phone className="h-4 w-4 inline mr-1" />
                  বিস্তারিত জানতে: ০১৭১২-৩৪৫৬৭৮
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}