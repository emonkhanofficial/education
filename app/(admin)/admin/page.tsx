"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Bell,
  TrendingUp,
  Award,
  UserPlus,
  Settings,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  PieChart,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { 
      icon: <Users className="h-8 w-8" />, 
      label: "শিক্ষার্থী", 
      value: "১,২৫০", 
      change: "+১২%",
      color: "bg-blue-100 text-blue-600"
    },
    { 
      icon: <BookOpen className="h-8 w-8" />, 
      label: "শিক্ষক", 
      value: "৪৮", 
      change: "+৫%",
      color: "bg-green-100 text-green-600"
    },
    { 
      icon: <Calendar className="h-8 w-8" />, 
      label: "আসন্ন ইভেন্ট", 
      value: "৮", 
      change: "+৩",
      color: "bg-purple-100 text-purple-600"
    },
    { 
      icon: <TrendingUp className="h-8 w-8" />, 
      label: "পাসের হার", 
      value: "৯৫%", 
      change: "+২%",
      color: "bg-yellow-100 text-yellow-600"
    },
  ];

  const recentActivities = [
    { 
      action: "নতুন শিক্ষার্থী ভর্তি", 
      time: "২ ঘন্টা আগে", 
      user: "অ্যাডমিন",
      icon: <UserPlus className="h-4 w-4 text-blue-600" />
    },
    { 
      action: "পরীক্ষার সময়সূচী প্রকাশ", 
      time: "৫ ঘন্টা আগে", 
      user: "শিক্ষক",
      icon: <Calendar className="h-4 w-4 text-green-600" />
    },
    { 
      action: "বার্ষিক ক্রীড়া ইভেন্ট তৈরি", 
      time: "১ দিন আগে", 
      user: "অ্যাডমিন",
      icon: <Award className="h-4 w-4 text-purple-600" />
    },
    { 
      action: "নতুন শিক্ষক নিয়োগ", 
      time: "২ দিন আগে", 
      user: "এইচআর",
      icon: <Users className="h-4 w-4 text-yellow-600" />
    },
  ];

  const upcomingEvents = [
    { 
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা", 
      date: "১৫ ফেব্রুয়ারি, ২০২৬",
      time: "সকাল ৯:০০",
      status: "upcoming",
      color: "bg-blue-50 border-blue-200"
    },
    { 
      title: "বিজ্ঞান মেলা", 
      date: "২০ ফেব্রুয়ারি, ২০২৬",
      time: "সকাল ১০:০০",
      status: "upcoming",
      color: "bg-purple-50 border-purple-200"
    },
    { 
      title: "অভিভাবক সমাবেশ", 
      date: "২৫ ফেব্রুয়ারি, ২০২৬",
      time: "বিকাল ৩:০০",
      status: "pending",
      color: "bg-yellow-50 border-yellow-200"
    },
  ];

  const quickActions = [
    { 
      icon: <UserPlus className="h-6 w-6" />, 
      label: "শিক্ষার্থী যোগ",
      href: "/admin/students/add",
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100"
    },
    { 
      icon: <FileText className="h-6 w-6" />, 
      label: "পরীক্ষা তৈরি",
      href: "/admin/exams/create",
      color: "bg-green-50 text-green-600 hover:bg-green-100"
    },
    { 
      icon: <Calendar className="h-6 w-6" />, 
      label: "ইভেন্ট যোগ",
      href: "/admin/events/add",
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100"
    },
    { 
      icon: <Users className="h-6 w-6" />, 
      label: "শিক্ষক নিয়োগ",
      href: "/admin/teachers/add",
      color: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
    },
    { 
      icon: <BarChart3 className="h-6 w-6" />, 
      label: "রিপোর্ট দেখুন",
      href: "/admin/reports",
      color: "bg-red-50 text-red-600 hover:bg-red-100"
    },
    { 
      icon: <Settings className="h-6 w-6" />, 
      label: "সেটিংস",
      href: "/admin/settings",
      color: "bg-gray-50 text-gray-600 hover:bg-gray-100"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">অ্যাডমিন ড্যাশবোর্ড</h1>
            <p className="text-gray-600">স্বাগতম! আজকের ড্যাশবোর্ড সারাংশ</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition">
              <Download className="h-5 w-5 text-gray-600" />
            </button>
            <Link
              href="/admin/settings"
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
            >
              <Settings className="h-5 w-5 text-gray-600" />
            </Link>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg hover:shadow-xl">
              <Plus className="h-5 w-5" />
              নতুন যোগ করুন
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Recent Activities & Events */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">সাম্প্রতিক কার্যক্রম</h2>
                <Link href="/admin/activities" className="text-blue-600 text-sm font-medium hover:underline">
                  সব দেখুন
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                    <div className="bg-gray-100 p-2 rounded-full">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.user} • {activity.time}</p>
                    </div>
                    <button className="text-gray-400 hover:text-blue-600 transition">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">আসন্ন ইভেন্ট</h2>
                <Link href="/admin/events" className="text-blue-600 text-sm font-medium hover:underline">
                  সব দেখুন
                </Link>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${event.color}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{event.title}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span>📅 {event.date}</span>
                          <span>🕐 {event.time}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        event.status === 'upcoming' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {event.status === 'upcoming' ? 'আসন্ন' : 'অপেক্ষমান'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Actions & Status */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">দ্রুত কর্ম</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className={`p-4 rounded-xl ${action.color} transition flex flex-col items-center gap-2 text-center hover:scale-105`}
                  >
                    {action.icon}
                    <span className="text-xs font-medium">{action.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">সিস্টেম স্ট্যাটাস</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">সার্ভার</span>
                  </div>
                  <span className="text-green-600 font-medium">সক্রিয়</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ডেটাবেস</span>
                  </div>
                  <span className="text-green-600 font-medium">সংযুক্ত</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">ব্যাকআপ</span>
                  </div>
                  <span className="text-yellow-600 font-medium">চলছে</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">অনলাইন ইউজার</span>
                  </div>
                  <span className="text-blue-600 font-medium">১২ জন</span>
                </div>
              </div>
            </motion.div>

            {/* Notice */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">গুরুত্বপূর্ণ নোটিশ</h3>
                  <p className="text-blue-50 text-sm mt-1">
                    আগামীকাল বার্ষিক পরীক্ষার সময়সূচী প্রকাশ করা হবে। সকল শিক্ষক ও শিক্ষার্থীদের অবগতির জন্য।
                  </p>
                  <button className="mt-3 bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition">
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Charts or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 grid md:grid-cols-2 gap-6"
        >
          {/* Performance Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">শিক্ষার্থী পারফরম্যান্স</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">বিজ্ঞান</span>
                  <span className="text-gray-700">৮৫%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">গণিত</span>
                  <span className="text-gray-700">৭৮%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">ইংরেজি</span>
                  <span className="text-gray-700">৮২%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">বাংলা</span>
                  <span className="text-gray-700">৯০%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">সাম্প্রতিক আপডেট</h2>
            <div className="space-y-3">
              {[
                { text: "পরীক্ষার ফলাফল প্রকাশিত হয়েছে", time: "২ ঘন্টা আগে", type: "exam" },
                { text: "নতুন শিক্ষক নিয়োগ বিজ্ঞপ্তি", time: "৫ ঘন্টা আগে", type: "notice" },
                { text: "বার্ষিক ক্রীড়া প্রতিযোগিতার তারিখ ঘোষণা", time: "১ দিন আগে", type: "event" },
                { text: "শিক্ষার্থীদের নতুন সময়সূচী", time: "২ দিন আগে", type: "schedule" },
              ].map((update, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition">
                  <div className={`w-2 h-2 rounded-full ${
                    update.type === 'exam' ? 'bg-blue-600' :
                    update.type === 'notice' ? 'bg-green-600' :
                    update.type === 'event' ? 'bg-purple-600' :
                    'bg-yellow-600'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{update.text}</p>
                    <p className="text-xs text-gray-500">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}