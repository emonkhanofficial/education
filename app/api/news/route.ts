import { NextResponse } from 'next/server';

export async function GET() {
  const news = [
    {
      id: 1,
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬",
      description: "আগামী ১৫ ফেব্রুয়ারি অনুষ্ঠিত হবে বার্ষিক ক্রীড়া প্রতিযোগিতা। সব শিক্ষার্থীকে অংশগ্রহণের জন্য অনুরোধ করা যাচ্ছে।",
      date: "২০২৬-০২-১৫",
      category: "ইভেন্ট"
    },
    {
      id: 2,
      title: "বিজ্ঞান মেলায় সাফল্য",
      description: "আমাদের শিক্ষার্থীরা জেলা বিজ্ঞান মেলায় ৫টি পুরস্কার অর্জন করেছে।",
      date: "২০২৬-০১-১০",
      category: "অর্জন"
    },
    {
      id: 3,
      title: "অভিভাবক সমাবেশ",
      description: "শিক্ষার্থীদের অগ্রগতি নিয়ে অভিভাবক সমাবেশ অনুষ্ঠিত হবে।",
      date: "২০২৬-০১-২০",
      category: "ইভেন্ট"
    }
  ];

  return NextResponse.json(news);
}