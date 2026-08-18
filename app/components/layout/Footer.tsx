import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">আদর্শ বিদ্যাপীঠ</span>
            </div>
            <p className="text-gray-400 text-sm">
              শিক্ষার মানোন্নয়নে অগ্রণী প্রতিষ্ঠান
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">শিক্ষাক্রম</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/academics" className="hover:text-white transition">প্রাথমিক শিক্ষা</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">মাধ্যমিক শিক্ষা</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">বিজ্ঞান বিভাগ</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">মানবিকী বিভাগ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition">ভর্তি তথ্য</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">যোগাযোগ</Link></li>
              <li><Link href="/news" className="hover:text-white transition">সংবাদ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@adarshavidyapith.edu</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4 text-2xl">
              <Link href="#" className="text-gray-400 hover:text-white transition">📘</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">▶️</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">🔗</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; ২০২৬ আদর্শ বিদ্যাপীঠ. সব অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;