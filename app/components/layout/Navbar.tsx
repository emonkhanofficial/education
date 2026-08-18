"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown,
  Search,
  User,
  BookOpen,
  Calendar,
  Mail,
  Home,
  Info,
  FileText,
  Phone,
  Globe
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { 
      name: "হোম", 
      href: "/", 
      icon: <Home className="h-4 w-4" />,
      dropdown: []
    },
    { 
      name: "আমাদের সম্পর্কে", 
      href: "/about", 
      icon: <Info className="h-4 w-4" />,
      dropdown: [
        { name: "ইতিহাস", href: "/about/history" },
        { name: "মিশন ও ভিশন", href: "/about/mission" },
        { name: "শিক্ষকমণ্ডলী", href: "/about/teachers" },
      ]
    },
    { 
      name: "শিক্ষাক্রম", 
      href: "/academics", 
      icon: <BookOpen className="h-4 w-4" />,
      dropdown: [
        { name: "প্রাথমিক", href: "/academics/primary" },
        { name: "মাধ্যমিক", href: "/academics/secondary" },
        { name: "বিজ্ঞান", href: "/academics/science" },
        { name: "মানবিকী", href: "/academics/humanities" },
      ]
    },
    { 
      name: "ভর্তি", 
      href: "/admissions", 
      icon: <FileText className="h-4 w-4" />,
      dropdown: [
        { name: "ভর্তি প্রক্রিয়া", href: "/admissions/process" },
        { name: "ফি কাঠামো", href: "/admissions/fees" },
        { name: "আবেদন ফর্ম", href: "/admissions/apply" },
      ]
    },
    { 
      name: "সংবাদ", 
      href: "/news", 
      icon: <Calendar className="h-4 w-4" />,
      dropdown: []
    },
    { 
      name: "যোগাযোগ", 
      href: "/contact", 
      icon: <Phone className="h-4 w-4" />,
      dropdown: []
    },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50" 
            : "bg-white shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-full shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  আদর্শ বিদ্যাপীঠ
                </span>
                <span className="block text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                  প্রতিষ্ঠিত ২০০১
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm"
                  >
                    {item.icon}
                    {item.name}
                    {item.dropdown.length > 0 && (
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown.length > 0 && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden backdrop-blur-xl"
                        >
                          <div className="p-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  <Search className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  <Globe className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  লগইন
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                      {item.dropdown.length > 0 && (
                        <div className="ml-8 space-y-1 border-l-2 border-blue-200 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition">
                    লগইন করুন
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                      <Search className="h-4 w-4" />
                      খুঁজুন
                    </button>
                    <button className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4" />
                      ভাষা
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;