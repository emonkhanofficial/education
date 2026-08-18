"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Globe, 
  Code, 
  Palette,
  Music,
  Trophy,
  Users,
  Clock
} from "lucide-react";

export default function AcademicsPage() {
  const departments = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      name: "প্রাথমিক শিক্ষা",
      classes: "১ম-৫ম শ্রেণি",
      subjects: ["বাংলা", "গণিত", "ইংরেজি", "বিজ্ঞান", "সমাজ"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Calculator className="h-10 w-10" />,
      name: "গণিত ও বিজ্ঞান",
      classes: "৬ম-৮ম শ্রেণি",
      subjects: ["বীজগণিত", "জ্যামিতি", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      name: "বিজ্ঞান বিভাগ",
      classes: "৯ম-১০ম শ্রেণি",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "উচ্চতর গণিত"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      name: "মানবিকী বিভাগ",
      classes: "৯ম-১০ম শ্রেণি",
      subjects: ["ইতিহাস", "ভূগোল", "সমাজবিজ্ঞান", "অর্থনীতি"],
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Code className="h-10 w-10" />,
      name: "কম্পিউটার ও আইটি",
      classes: "সকল শ্রেণি",
      subjects: ["প্রোগ্রামিং", "ওয়েব ডিজাইন", "ডেটাবেস", "নেটওয়ার্কিং"],
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Palette className="h-10 w-10" />,
      name: "সৃজনশীল কর্মশালা",
      classes: "সকল শ্রেণি",
      subjects: ["চারুকলা", "কারুশিল্প", "সঙ্গীত", "নৃত্য"],
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const facilities = [
    { icon: <Trophy className="h-6 w-6" />, name: "ক্রীড়া সুবিধা", desc: "আধুনিক ক্রীড়া মাঠ ও সরঞ্জাম" },
    { icon: <Users className="h-6 w-6" />, name: "শিক্ষকমণ্ডলী", desc: "অভিজ্ঞ ও দক্ষ শিক্ষক" },
    { icon: <Clock className="h-6 w-6" />, name: "লাইব্রেরি", desc: "সমৃদ্ধ পাঠাগার" }
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
            শিক্ষাক্রম ও বিভাগসমূহ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের স্কুলে রয়েছে বৈচিত্র্যময় শিক্ষাক্রম ও আধুনিক সুবিধাসমূহ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 rounded-full ${dept.color} flex items-center justify-center mb-4`}>
                {dept.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{dept.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-3">{dept.classes}</p>
              <div className="flex flex-wrap gap-2">
                {dept.subjects.map((subject, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {subject}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">আমাদের সুবিধাসমূহ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-blue-600 flex justify-center mb-3">{facility.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">{facility.name}</h4>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}