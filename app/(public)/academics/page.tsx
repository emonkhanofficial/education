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
  Clock,
  Award,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function AcademicsPage() {
  const departments = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      name: "প্রাথমিক শিক্ষা",
      classes: "১ম-৫ম শ্রেণি",
      subjects: ["বাংলা", "গণিত", "ইংরেজি", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      color: "bg-green-100 text-green-600",
      description: "শিশুদের মৌলিক শিক্ষার ভিত্তি নির্মাণ ও মানসিক বিকাশ"
    },
    {
      icon: <Calculator className="h-10 w-10" />,
      name: "গণিত ও বিজ্ঞান",
      classes: "৬ম-৮ম শ্রেণি",
      subjects: ["বীজগণিত", "জ্যামিতি", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান"],
      color: "bg-blue-100 text-blue-600",
      description: "যৌক্তিক চিন্তা ও বৈজ্ঞানিক দৃষ্টিভঙ্গি বিকাশ"
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      name: "বিজ্ঞান বিভাগ",
      classes: "৯ম-১০ম শ্রেণি",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "উচ্চতর গণিত"],
      color: "bg-purple-100 text-purple-600",
      description: "আধুনিক বিজ্ঞান শিক্ষায় দক্ষতা অর্জন ও গবেষণা মনোভাব"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      name: "মানবিকী বিভাগ",
      classes: "৯ম-১০ম শ্রেণি",
      subjects: ["ইতিহাস", "ভূগোল", "সমাজবিজ্ঞান", "অর্থনীতি", "নাগরিকতা"],
      color: "bg-yellow-100 text-yellow-600",
      description: "সমাজ, ইতিহাস ও সাহিত্যে উৎকর্ষ অর্জন"
    },
    {
      icon: <Code className="h-10 w-10" />,
      name: "কম্পিউটার ও আইটি",
      classes: "সকল শ্রেণি",
      subjects: ["প্রোগ্রামিং", "ওয়েব ডিজাইন", "ডেটাবেস", "নেটওয়ার্কিং", "গ্রাফিক্স"],
      color: "bg-red-100 text-red-600",
      description: "ডিজিটাল দক্ষতা ও প্রযুক্তি শিক্ষায় পারদর্শিতা"
    },
    {
      icon: <Palette className="h-10 w-10" />,
      name: "সৃজনশীল কর্মশালা",
      classes: "সকল শ্রেণি",
      subjects: ["চারুকলা", "কারুশিল্প", "সঙ্গীত", "নৃত্য", "অভিনয়"],
      color: "bg-pink-100 text-pink-600",
      description: "সৃজনশীল প্রতিভা বিকাশ ও মননশীলতা অর্জন"
    }
  ];

  const facilities = [
    { icon: <Trophy className="h-8 w-8" />, name: "ক্রীড়া সুবিধা", desc: "আধুনিক ক্রীড়া মাঠ, ফুটবল, ক্রিকেট, বাস্কেটবল সুবিধা" },
    { icon: <Users className="h-8 w-8" />, name: "শিক্ষকমণ্ডলী", desc: "অভিজ্ঞ, প্রশিক্ষিত ও দক্ষ শিক্ষক সমাজ" },
    { icon: <Clock className="h-8 w-8" />, name: "লাইব্রেরি", desc: "১০০০০+ বই সমৃদ্ধ পাঠাগার ও অনলাইন রিসোর্স" },
    { icon: <Award className="h-8 w-8" />, name: "স্কলারশিপ", desc: "মেধাবী ও অসহায় শিক্ষার্থীদের জন্য বৃত্তি" },
    { icon: <Sparkles className="h-8 w-8" />, name: "ল্যাব সুবিধা", desc: "আধুনিক বিজ্ঞান ও কম্পিউটার ল্যাব" },
    { icon: <Music className="h-8 w-8" />, name: "সাংস্কৃতিক কর্ম", desc: "সাংস্কৃতিক অনুষ্ঠান, প্রতিযোগিতা ও উৎসব" },
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

        {/* Departments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-full ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                {dept.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{dept.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{dept.classes}</p>
              <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
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

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">আমাদের সুবিধাসমূহ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center group"
              >
                <div className="text-blue-600 flex justify-center mb-3 group-hover:scale-110 transition">
                  {facility.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{facility.name}</h4>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            ভর্তি হোন <ChevronRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}