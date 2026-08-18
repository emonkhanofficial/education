"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "সুজন কুমার দাস",
      role: "অভিভাবক",
      text: "আমার সন্তানের শিক্ষার মান উন্নয়নে এই স্কুল অসাধারণ ভূমিকা পালন করছে। শিক্ষকমণ্ডলী অত্যন্ত দক্ষ ও স্নেহশীল।",
      rating: 5,
    },
    {
      name: "ড. নুসরাত জাহান",
      role: "প্রাক্তন শিক্ষার্থী",
      text: "এই স্কুলের শিক্ষা পদ্ধতি আমাকে জীবনে সাফল্য অর্জনে সাহায্য করেছে। নৈতিক শিক্ষার প্রতি বিশেষ গুরুত্ব দেওয়ায় আমি কৃতজ্ঞ।",
      rating: 5,
    },
    {
      name: "মোঃ রফিকুল ইসলাম",
      role: "অভিভাবক",
      text: "আধুনিক শিক্ষা প্রযুক্তি ও সহশিক্ষা কার্যক্রমের সমন্বয়ে এই স্কুল সত্যিই অনন্য। আমার সন্তান এখানে খুব খুশি।",
      rating: 5,
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
            অভিভাবকদের মতামত
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের সাথে যুক্তদের অভিজ্ঞতার কথা শুনুন
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;