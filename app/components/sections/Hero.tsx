"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Play, 
  Award, 
  Users, 
  BookOpen, 
  Calendar,
  ArrowRight,
  Sparkles,
  Shield,
  GraduationCap
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "শিক্ষার মানোন্নয়নে",
      highlight: "অগ্রণী প্রতিষ্ঠান",
      description: "আধুনিক শিক্ষা পদ্ধতি ও নৈতিক মূল্যবোধের সমন্বয়ে গড়ে তুলি আগামী প্রজন্মের নেতৃত্ব।",
      button: "ভর্তি হোন",
      image: "🎓"
    },
    {
      title: "বিশ্বমানের শিক্ষা",
      highlight: "আপনার সন্তানের জন্য",
      description: "আন্তর্জাতিক মানের শিক্ষা ব্যবস্থা ও দক্ষ শিক্ষকমণ্ডলী।",
      button: "আরও জানুন",
      image: "🌟"
    },
    {
      title: "ডিজিটাল বাংলাদেশের",
      highlight: "আধুনিক শিক্ষা",
      description: "প্রযুক্তিনির্ভর শিক্ষা পদ্ধতি ও স্মার্ট ক্লাসরুম।",
      button: "শিক্ষাক্রম দেখুন",
      image: "💻"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      number: "৫০+", 
      label: "শিক্ষক", 
      icon: <Users className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "১২০০+", 
      label: "শিক্ষার্থী", 
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: "৯৫%", 
      label: "সাফল্যের হার", 
      icon: <Award className="h-5 w-5" />,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      number: "২৫+", 
      label: "বর্ষের অভিজ্ঞতা", 
      icon: <Calendar className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">শীর্ষস্থানীয় শিক্ষাপ্রতিষ্ঠান</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {slides[currentSlide].highlight}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100/80 leading-relaxed max-w-lg"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/admissions"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>{slides[currentSlide].button}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity blur-xl -z-10"></div>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="h-5 w-5" />
                আরও জানুন
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:bg-white/10 transition"
                >
                  <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-2xl font-bold`}>
                    {stat.number}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-white/70 text-sm mt-1">
                    {stat.icon}
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-4">{slides[currentSlide].image}</div>
                  <h3 className="text-2xl font-bold text-white">আমাদের বিশেষত্ব</h3>
                  <p className="text-blue-100/70 text-sm mt-2">শিক্ষার মানোন্নয়নে আমাদের প্রতিশ্রুতি</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: <Shield className="h-5 w-5" />, title: "নৈতিক শিক্ষা", desc: "চারিত্রিক বিকাশে বিশেষ গুরুত্ব" },
                    { icon: <BookOpen className="h-5 w-5" />, title: "আধুনিক পাঠ্যক্রম", desc: "বিজ্ঞান ও প্রযুক্তিতে সমৃদ্ধ" },
                    { icon: <Users className="h-5 w-5" />, title: "দক্ষ শিক্ষক", desc: "অভিজ্ঞ ও প্রশিক্ষিত মণ্ডলী" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2.5 rounded-xl text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{feature.title}</h4>
                        <p className="text-blue-100/60 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500" 
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-2xl shadow-xl shadow-yellow-500/25"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="font-bold text-sm">বর্ষসেরা</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;