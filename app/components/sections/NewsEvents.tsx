"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, Trophy } from "lucide-react";

const NewsEvents = () => {
  const newsItems = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬",
      description: "আগামী ১৫ ফেব্রুয়ারি অনুষ্ঠিত হবে বার্ষিক ক্রীড়া প্রতিযোগিতা। সব শিক্ষার্থীকে অংশগ্রহণের জন্য অনুরোধ করা যাচ্ছে।",
      date: "১৫ ফেব্রুয়ারি, ২০২৬",
    },
    {
      icon: <Trophy className="h-6 w-6 text-blue-600" />,
      title: "বিজ্ঞান মেলায় সাফল্য",
      description: "আমাদের শিক্ষার্থীরা জেলা বিজ্ঞান মেলায় ৫টি পুরস্কার অর্জন করেছে।",
      date: "১০ জানুয়ারি, ২০২৬",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "অভিভাবক সমাবেশ",
      description: "শিক্ষার্থীদের অগ্রগতি নিয়ে অভিভাবক সমাবেশ অনুষ্ঠিত হবে।",
      date: "২০ জানুয়ারি, ২০২৬",
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
            সংবাদ ও ঘটনাবলী
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের স্কুলের সর্বশেষ সংবাদ ও আসন্ন অনুষ্ঠানসমূহ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-blue-600 text-sm font-medium">
                    🗓️ {item.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            সব সংবাদ দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;