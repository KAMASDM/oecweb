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
import ajaxCall from "@/helpers/ajaxCall";
import moment from "moment";

const Blogs = () => {
  const articlesPerPage = 6;
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/blog/blog/categories/", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          setCategories(response.data.results);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/blog/blog/posts/", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          setBlogs(response.data.results);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.log("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredArticles = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || blog.category_name === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, blogs]);

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
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Study Abroad Blogs
          </h1>
          <p className="text-secondary-500 text-xl md:text-2xl max-w-5xl mx-auto">
            Expert advice, guides, and latest updates for your international
            education journey
          </p>
        </div>
      </header>

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

          {isLoading ? (
            <div className="space-y-8">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col h-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden animate-pulse"
                    >
                      <div className="w-full h-56 bg-gray-200"></div>
                      <div className="p-6 flex-grow flex flex-col space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="p-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-4">
                          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="mt-4 h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden animate-pulse"
                    >
                      <div className="w-full h-48 md:h-full bg-gray-200"></div>
                      <div className="p-6 md:col-span-2 space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-4">
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : currentArticles.length === 0 ? (
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
                          href={`/blog/${article.slug}`}
                          aria-label={article.title}
                        >
                          <img
                            src={article.featured_image}
                            alt={article.title}
                            width="400"
                            height="225"
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <p className="text-sm font-semibold text-secondary-500">
                          {article.category_name}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                          <Link
                            href={`/blog/${article.slug}`}
                            className="line-clamp-2"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-sm text-gray-600 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="p-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <User className="h-4 w-4 text-secondary-500" />
                            {article.author_name}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-secondary-500" />
                            {moment(article.published_at).format("MMM D, YYYY")}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-secondary-500" />
                            {article.reading_time} min read
                          </div>
                        </div>
                        <Link
                          href={`/blog/${article.slug}`}
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
                          src={article.featured_image}
                          alt={article.title}
                          width="400"
                          height="300"
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <p className="text-sm font-semibold text-secondary-500">
                          {article.category_name}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                          <Link href={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-base text-gray-600">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <User className="h-4 w-4 text-secondary-500" />
                              {article.author_name}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4 text-secondary-500" />
                              {moment(article.published_at).format(
                                "MMM D, YYYY"
                              )}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4 text-secondary-500" />
                              {article.reading_time} min read
                            </div>
                          </div>
                          <Link
                            href={`/blog/${article.slug}`}
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
