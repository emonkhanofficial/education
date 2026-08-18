"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ChevronRight, Loader2 } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("সব");

  // API থেকে ডেটা আনার ফাংশন
  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("/api/news");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "ডেটা লোড করতে সমস্যা হয়েছে");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // কম্পোনেন্ট লোড হওয়ার সময় API কল
  useEffect(() => {
    fetchNews();
  }, []);

  const categories = ["সব", "ইভেন্ট", "অর্জন", "ঘোষণা"];

  const filteredNews = selectedCategory === "সব" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  // লোডিং স্টেট
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
        <p className="mt-4 text-gray-600">সংবাদ লোড হচ্ছে...</p>
      </div>
    );
  }

  // Error স্টেট
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <div className="bg-red-50 p-6 rounded-2xl max-w-md text-center">
          <p className="text-red-600 text-lg font-semibold">⚠️ সমস্যা হয়েছে!</p>
          <p className="text-gray-600 mt-2">{error}</p>
          <button 
            onClick={fetchNews}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

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
            সংবাদ ও ঘটনাবলী
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের স্কুলের সর্বশেষ সংবাদ, ইভেন্ট এবং অর্জনসমূহ
          </p>
          <p className="text-sm text-gray-400 mt-2">
            মোট {news.length} টি সংবাদ পাওয়া গেছে
          </p>
        </motion.div>

        {/* ক্যাটেগরি ফিল্টার */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* নিউজ গ্রিড */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center gap-1">
                  বিস্তারিত <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">এই ক্যাটেগরিতে কোনো সংবাদ নেই</p>
          </div>
        )}

        {/* রিফ্রেশ বাটন */}
        <div className="text-center mt-8">
          <button 
            onClick={fetchNews}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition"
          >
            🔄 সংবাদ রিফ্রেশ করুন
          </button>
        </div>
      </div>
    </div>
  );
}