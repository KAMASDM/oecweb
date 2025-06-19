"use client";
import Raect, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Heart,
  Twitter,
  Linkedin,
  Facebook,
  Tag,
  ArrowUp,
  ArrowLeft,
} from "lucide-react";

const allArticles = [
  {
    id: 1,
    title: "Complete Guide to US Student Visa Interview 2025",
    excerpt:
      "Essential tips for acing your F-1 visa interview, including common questions and expert advice from former visa officers.",
    author: "Rajesh Mehta",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["USA", "Visa", "Interview Tips"],
    category: "Visa Guide",
    featured: true,
    slug: "complete-guide-to-us-student-visa-interview-2025",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fHN0dWRlbnRzJTIwc2Nob2xhcnNoaXB8ZW58MHx8fHwxNzE4NzcyOTM4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt: "Student at a visa application center, looking hopeful.",
  },
  {
    id: 2,
    title: "UK Graduate Visa Changes: What Students Need to Know",
    excerpt:
      "Latest updates on the UK Graduate visa route, new requirements, and how these changes affect international students.",
    author: "Priya Sharma",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    tags: ["UK", "Graduate Visa", "Policy Update"],
    category: "Visa Guide",
    slug: "uk-graduate-visa-changes-what-students-need-to-know",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8fHwxNzE4NzcyOTM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt:
      "A passport with a UK visa stamp, with London's Tower Bridge in the background.",
  },
  {
    id: 3,
    title: "Top 10 Scholarships for Indian Students in 2025",
    excerpt:
      "A comprehensive list of merit-based and need-based scholarships, including eligibility and application deadlines.",
    author: "Dr. Vikram Gupta",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["Scholarships", "Financial Aid", "Application Tips"],
    category: "Scholarships",
    slug: "top-10-scholarships-for-indian-students-in-2025",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fHN0dWRlbnRzJTIwc2Nob2xhcnNoaXB8ZW58MHx8fHwxNzE4NzcyOTM4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt: "A group of happy graduates throwing their caps in the air.",
  },
  {
    id: 4,
    title: "How to Choose the Right University Abroad",
    excerpt:
      "Key factors to consider when selecting a university, including rankings, location, costs, and program strengths.",
    author: "Anjali Patel",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    tags: ["University Selection", "Rankings", "Admission"],
    category: "University Guide",
    slug: "how-to-choose-the-right-university-abroad",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8fHwxNzE4NzcyOTM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt: "A beautiful, historic university campus on a sunny day.",
  },
  {
    id: 5,
    title: "Living Costs in Germany for International Students",
    excerpt:
      "A detailed breakdown of monthly expenses, including accommodation, food, transport, and health insurance in major German cities.",
    author: "Michael Schmidt",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    tags: ["Germany", "Cost of Living", "Budgeting"],
    category: "Study Abroad",
    slug: "living-costs-in-germany-for-international-students",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fHN0dWRlbnRzJTIwc2Nob2xhcnNoaXB8ZW58MHx8fHwxNzE4NzcyOTM4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt:
      "A vibrant city square in Germany with trams and historic buildings.",
  },
  {
    id: 6,
    title: "Career Opportunities After Studying in Canada",
    excerpt:
      "Explore post-graduation work permits, popular industries, and job search strategies for students in Canada.",
    author: "Lisa Chen",
    date: "Nov 10, 2024",
    readTime: "7 min read",
    tags: ["Canada", "Work Permit", "Jobs"],
    category: "Career Advice",
    slug: "career-opportunities-after-studying-in-canada",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8fHwxNzE4NzcyOTM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt: "A modern city skyline of Toronto, Canada at dusk.",
  },
];

const shareIcons = [
  {
    icon: Twitter,
    label: "Twitter",
    platform: "twitter",
    color: "hover:bg-blue-50 hover:text-blue-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    platform: "linkedin",
    color: "hover:bg-blue-50 hover:text-blue-700",
  },
  {
    icon: Facebook,
    label: "Facebook",
    platform: "facebook",
    color: "hover:bg-blue-50 hover:text-blue-600",
  },
];

const BlogDetails = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const article = allArticles.find((p) => p.slug === slug);
    if (article) {
      setBlog({
        ...article,
        author: { user: { username: article.author }, role: "Content Creator" },
        published_at: article.date,
        read_time: article.readTime,
        featured_image: article.image,
        tags: article.tags.map((tag, i) => ({ id: i, name: tag })),
      });
    } else {
      notFound();
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      setShowScrollTop(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    const shareText = `Check out this article: ${blog?.title}`;

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank");
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-primary-50">
        <div
          className="w-16 h-16 border-4 border-primary-500 border-solid border-t-transparent rounded-full animate-spin"
          role="status"
          aria-label="Loading content"
        ></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-8 mb-8"
          >
            <Link
              href="/blogs"
              className="group flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to All Articles
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              {blog.tags?.map((tag) => (
                <span
                  key={tag.id}
                  className="px-4 py-1.5 bg-primary-100/80 text-primary-800 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <Tag className="w-4 h-4" />
                  {tag.name}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{blog.excerpt}</p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt={blog.author.user.username}
                  className="w-12 h-12 rounded-full ring-2 ring-white"
                />
                <div>
                  <div className="font-semibold text-gray-800">
                    {blog.author.user.username}
                  </div>
                  <div className="text-sm text-gray-500">
                    {blog.author.role}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary-500" />
                  {blog.published_at}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary-500" />
                  {blog.read_time}
                </span>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:flex flex-col gap-4 absolute -right-24 top-0"
              >
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`group p-3 rounded-xl transition-all duration-300 ${
                    isLiked
                      ? "bg-red-100 text-red-600"
                      : "bg-white hover:bg-red-50 text-secondary-500 hover:text-red-500"
                  } shadow-sm hover:shadow-md`}
                >
                  <Heart
                    className={`w-5 h-5 transition-transform ${
                      isLiked ? "scale-110" : "group-hover:scale-110"
                    }`}
                    fill={isLiked ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`group p-3 rounded-xl transition-all duration-300 ${
                    isBookmarked
                      ? "bg-primary-100 text-primary-600"
                      : "bg-white hover:bg-primary-50 text-secondary-500 hover:text-primary-600"
                  } shadow-sm hover:shadow-md`}
                >
                  <Bookmark
                    className={`w-5 h-5 transition-transform ${
                      isBookmarked ? "scale-110" : "group-hover:scale-110"
                    }`}
                    fill={isBookmarked ? "currentColor" : "none"}
                  />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowShareTooltip(!showShareTooltip)}
                    className="group p-3 rounded-xl bg-white hover:bg-gray-100 text-secondary-500 hover:text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Share2 className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </button>
                  <AnimatePresence>
                    {showShareTooltip && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-full ml-4 top-0 bg-white rounded-xl shadow-lg border border-gray-100 p-2 w-40"
                      >
                        <div className="flex flex-col gap-1">
                          {shareIcons.map(
                            ({ icon: Icon, label, platform, color }) => (
                              <button
                                key={platform}
                                onClick={() => handleShare(platform)}
                                className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors w-full ${color}`}
                              >
                                <Icon className="w-4 h-4 text-secondary-500" />
                                <span>{label}</span>
                              </button>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={blog.featured_image}
                alt={blog.title}
                className="w-full aspect-[16/8] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="container mx-auto px-4 mt-[-4rem] z-10 relative">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-12 mb-12"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-6">
                  This is where your article content would go. The text would be
                  properly formatted with headings, paragraphs, lists, and other
                  rich text elements.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Key Points
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600">
                  <li className="mb-2">
                    First important point about the topic
                  </li>
                  <li className="mb-2">Second key aspect to consider</li>
                  <li className="mb-2">Third major takeaway for readers</li>
                </ul>

                <div className="bg-primary-100 border-l-4 border-primary-800 p-4 mb-6 rounded-r">
                  <p className="text-primary-800 font-medium">Pro Tip:</p>
                  <p className="text-primary-800">
                    This is an important tip or highlight from the article
                    content.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 p-4 bg-secondary-500 text-white rounded-full shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-300 z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogDetails;
