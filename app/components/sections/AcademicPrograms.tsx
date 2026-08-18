"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calculator, 
  Beaker, 
  Globe, 
  Music, 
  Palette,
  Code,
  Book,
  Microscope 
} from "lucide-react";

const AcademicPrograms = () => {
  const programs = [
    {
      icon: <Book className="h-8 w-8" />,
      title: "প্রাথমিক শিক্ষা",
      description: "শিশুদের মৌলিক শিক্ষার ভিত্তি নির্মাণ",
      grade: "১ম-৫ম শ্রেণি",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "গণিত ও বিজ্ঞান",
      description: "যৌক্তিক চিন্তা ও বৈজ্ঞানিক দৃষ্টিভঙ্গি",
      grade: "৬ম-৮ম শ্রেণি",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "বিজ্ঞান বিভাগ",
      description: "আধুনিক বিজ্ঞান শিক্ষায় দক্ষতা অর্জন",
      grade: "৯ম-১০ম শ্রেণি",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "মানবিকী বিভাগ",
      description: "সমাজ, ইতিহাস ও সাহিত্যে উৎকর্ষ",
      grade: "৯ম-১০ম শ্রেণি",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "কম্পিউটার শিক্ষা",
      description: "ডিজিটাল দক্ষতা ও প্রযুক্তি শিক্ষা",
      grade: "সকল শ্রেণি",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "সৃজনশীল কর্মশালা",
      description: "চারু ও কারুশিল্পে সৃজনশীল বিকাশ",
      grade: "সকল শ্রেণি",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            শিক্ষাক্রম ও বিভাগসমূহ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            বিভিন্ন শ্রেণি ও বিভাগে মানসম্মত শিক্ষার ব্যবস্থা
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-3">{program.description}</p>
              <p className="text-sm text-blue-600 font-medium">{program.grade}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/academics"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            সব বিভাগ দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;