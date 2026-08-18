"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 min-h-[90vh] flex items-center overflow-hidden">
      {/* অ্যানিমেটেড ব্যাকগ্রাউন্ড */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-20 -right-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              শিক্ষার মানোন্নয়নে
              <br />
              <span className="text-yellow-300">অগ্রণী প্রতিষ্ঠান</span>
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              আধুনিক শিক্ষা পদ্ধতি ও নৈতিক মূল্যবোধের সমন্বয়ে গড়ে তুলি
              আগামী প্রজন্মের নেতৃত্ব।
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                ভর্তি হোন <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                আরও জানুন
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "৫০+", label: "শিক্ষক" },
                  { number: "১০০০+", label: "শিক্ষার্থী" },
                  { number: "৯০%", label: "পাসের হার" },
                  { number: "২০+", label: "বর্ষের অভিজ্ঞতা" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/5 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;