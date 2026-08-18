import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

// Social icons আলাদাভাবে ইমপোর্ট
const Facebook = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Youtube = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Linkedin = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* স্কুল তথ্য */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">আদর্শ বিদ্যাপীঠ</span>
            </div>
            <p className="text-gray-400 text-sm">
              শিক্ষার মানোন্নয়নে অগ্রণী প্রতিষ্ঠান
            </p>
          </div>

          {/* শিক্ষাক্রম */}
          <div>
            <h3 className="text-lg font-semibold mb-4">শিক্ষাক্রম</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/academics" className="hover:text-white transition">প্রাথমিক শিক্ষা</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">মাধ্যমিক শিক্ষা</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">বিজ্ঞান বিভাগ</Link></li>
              <li><Link href="/academics" className="hover:text-white transition">মানবিকী বিভাগ</Link></li>
            </ul>
          </div>

          {/* লিংক */}
          <div>
            <h3 className="text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition">ভর্তি তথ্য</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">যোগাযোগ</Link></li>
              <li><Link href="/news" className="hover:text-white transition">সংবাদ</Link></li>
            </ul>
          </div>

          {/* যোগাযোগ */}
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
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Youtube />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin />
              </Link>
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