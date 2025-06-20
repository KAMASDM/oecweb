"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Grid,
  List,
  Search,
  BookOpen,
} from "lucide-react";

const categories = [
  { id: 1, name: "Study Abroad", slug: "study-abroad" },
  { id: 2, name: "Visa Guide", slug: "visa-guide" },
  { id: 3, name: "Scholarships", slug: "scholarships" },
  { id: 4, name: "University Guide", slug: "university-guide" },
  { id: 5, name: "Career Advice", slug: "career-advice" },
];

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

const Blogs = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Study Abroad Blogs
          </h1>
          <p className="text-secondary-500 text-xl md:text-2xl max-w-5xl mx-auto">
            Expert advice, guides, and latest updates for your international
            education journey
          </p>
        </div>
      </div>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-6">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                aria-pressed={selectedCategory === "all"}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-primary-800 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-800"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  aria-pressed={selectedCategory === category.name}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category.name
                      ? "bg-primary-800 text-white shadow-md"
                      : "bg-white text-primary-800 hover:bg-primary-100 hover:text-primary-800 border border-primary-800"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-secondary-500" />
                </div>
                <input
                  type="search"
                  placeholder="Search articles..."
                  aria-label="Search articles"
                  className="block w-full pl-10 pr-3 py-2 border border-primary-800 rounded-full leading-5 bg-white placeholder-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-primary-800 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 p-1 bg-gray-300 rounded-full">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-pressed={viewMode === "grid"}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    viewMode === "grid"
                      ? "bg-white text-secondary-500 shadow"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-pressed={viewMode === "list"}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    viewMode === "list"
                      ? "bg-white text-secondary-500 shadow"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  aria-label="List view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {currentArticles.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No Articles Found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or category filters.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-800 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentArticles.map((article) => (
                    <div
                      key={article.id}
                      className="group flex flex-col h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    >
                      <div className="relative overflow-hidden">
                        <Link
                          href={`/blogs/${article.slug}`}
                          aria-label={article.title}
                        >
                          <img
                            src={article.image}
                            alt={article.imageAlt}
                            width="400"
                            height="225"
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <p className="text-sm font-semibold text-secondary-500">
                          {article.category}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                          <Link
                            href={`/blogs/${article.slug}`}
                            className="line-clamp-2"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-sm text-gray-600 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary-100 text-primary-800 border border-primary-800 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <User className="h-4 w-4 text-secondary-500" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-secondary-500" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-secondary-500" />
                            {article.readTime}
                          </div>
                        </div>
                        <Link
                          href={`/blogs/${article.slug}`}
                          className="mt-4 inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-800"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {currentArticles.map((article) => (
                    <div
                      key={article.id}
                      className="group grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    >
                      <div className="relative h-full md:col-span-1">
                        <img
                          src={article.image}
                          alt={article.imageAlt}
                          width="400"
                          height="300"
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <p className="text-sm font-semibold text-secondary-500">
                          {article.category}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                          <Link href={`/blogs/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-base text-gray-600">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary-100 text-primary-800 border border-primary-800 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <User className="h-4 w-4 text-secondary-500" />
                              {article.author}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4 text-secondary-500" />
                              {article.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4 text-secondary-500" />
                              {article.readTime}
                            </div>
                          </div>
                          <Link
                            href={`/blogs/${article.slug}`}
                            className="font-semibold text-primary-600 inline-flex items-center gap-1 hover:text-primary-800 whitespace-nowrap"
                          >
                            Read More{" "}
                            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
                  <nav
                    className="flex items-center gap-2"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          aria-current={
                            currentPage === page ? "page" : undefined
                          }
                          className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                            currentPage === page
                              ? "bg-primary-800 text-white"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
