"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, BookOpen, Heart } from "lucide-react";

const AboutPreview = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "উৎকৃষ্ট শিক্ষা",
      description: "আন্তর্জাতিক মানের শিক্ষা পদ্ধতি অনুসরণ করি",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "দক্ষ শিক্ষকমণ্ডলী",
      description: "অভিজ্ঞ ও প্রশিক্ষিত শিক্ষকদের সমন্বয়ে গঠিত",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "আধুনিক পাঠ্যক্রম",
      description: "বিজ্ঞান, প্রযুক্তি ও সৃজনশীলতায় সমৃদ্ধ",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "নৈতিক মূল্যবোধ",
      description: "চারিত্রিক বিকাশে বিশেষ গুরুত্ব",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            শিক্ষার মানোন্নয়নে অগ্রণী এই প্রতিষ্ঠানে আমরা গড়ে তুলি
            আগামী দিনের দক্ষ ও নৈতিক নাগরিক।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            বিস্তারিত জানুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;