"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award, Calendar } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "১২০০+",
      label: "শিক্ষার্থী",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      number: "৫০+",
      label: "শিক্ষক",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      number: "৯৫%",
      label: "সাফল্যের হার",
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      number: "২৫+",
      label: "বর্ষের অভিজ্ঞতা",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;