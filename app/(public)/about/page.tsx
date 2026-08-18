import { Award, Users, BookOpen, Heart, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          আমাদের সম্পর্কে
        </h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            আদর্শ বিদ্যাপীঠ শিক্ষার মানোন্নয়নে অগ্রণী একটি প্রতিষ্ঠান। 
            আধুনিক শিক্ষা পদ্ধতি ও নৈতিক মূল্যবোধের সমন্বয়ে আমরা গড়ে তুলি 
            আগামী প্রজন্মের দক্ষ ও নৈতিক নেতৃত্ব।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Target className="h-12 w-12 text-blue-600" />,
              title: "আমাদের লক্ষ্য",
              description: "শিক্ষার্থীদের মানসিক, শারীরিক ও নৈতিক বিকাশে সহায়তা করা"
            },
            {
              icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
              title: "আমাদের দর্শন",
              description: "প্রত্যেক শিক্ষার্থী অনন্য, প্রত্যেকের বিশেষ প্রতিভা বিকাশে উৎসাহ"
            },
            {
              icon: <Heart className="h-12 w-12 text-blue-600" />,
              title: "আমাদের মূল্যবোধ",
              description: "সম্মান, সততা, সহানুভূতি ও ন্যায়পরায়ণতা"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}