"use client";
import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import ajaxCall from "@/helpers/ajaxCall";

const initialFormData = {
  name: "",
  slug: "",
  university: "",
  university_name: "",
  category: "",
  category_name: "",
  degree_level: "certificate",
  duration: "",
  duration_unit: "years",
  description: "",
  curriculum: "",
  career_prospects: "",
  admission_requirements: "",
  tuition_fee: "",
  other_fees: "",
  currency: "",
  intake_spring: false,
  intake_fall: false,
  intake_summer: false,
  intake_winter: false,
  min_gpa: "",
  ielts_score: "",
  toefl_score: "",
  gre_required: false,
  gmat_required: false,
  is_scholarship_available: false,
  meta_title: "",
  meta_description: "",
  is_featured: false,
  is_active: false,
};

const AddCourse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingName, setIsFetchingName] = useState(false);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("basic");
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  const initiateAiFetch = async () => {
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      setError("OpenAI API key not configure.");
      return;
    }
    if (!formData.university_name || !formData.category_name) {
      return;
    }

    setError(null);

    // Step 1: Fetch Course Name
    setIsFetchingName(true);
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    try {
      const namePrompt = `What is an actual, official course name for the category "${formData.category_name}" at "${formData.university_name}"? Return only the course name as a plain text string, without any extra text, explanations, or quotation marks.`;
      const nameRes = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: namePrompt }],
      });
      const courseName = nameRes.choices[0].message.content.trim();
      const courseSlug = courseName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

      setFormData((prev) => ({ ...prev, name: courseName, slug: courseSlug }));
      setIsFetchingName(false);

      // Step 2: Fetch All Other Details with the new course name
      setIsFetchingDetails(true);
      const detailsPrompt = `
        Based on the course "${courseName}" at "${formData.university_name}", provide the following details in a valid JSON format.
        The JSON object must have these keys: "description", "curriculum", "career_prospects", "admission_requirements", "tuition_fee", "other_fees", "currency", "min_gpa", "ielts_score", "toefl_score", "gre_required", "gmat_required", "is_scholarship_available", "meta_title", "meta_description", "duration", "duration_unit", and "intakes".
        - The "meta_title" must be a concise, SEO-friendly title that is no more than 60 characters long.
        - The "duration" should be a number (e.g., 4).
        - The "duration_unit" should be one of the following strings: "years", "months", or "weeks".
        - The "intakes" value should be an object with boolean keys for "spring", "fall", "summer", and "winter".
        - For boolean fields, the value must be true or false.
        - For numerical fields, provide a number.
        - The "currency" should be a standard currency code (e.g., USD, CAD, EUR).
      `;

      const detailsRes = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: detailsPrompt }],
      });

      const json = JSON.parse(detailsRes.choices[0].message.content);

      setFormData((prev) => ({
        ...prev,
        description: json.description || "",
        curriculum: json.curriculum || "",
        career_prospects: json.career_prospects || "",
        admission_requirements: json.admission_requirements || "",
        tuition_fee: json.tuition_fee || "",
        other_fees: json.other_fees || "",
        currency: json.currency || "",
        min_gpa: json.min_gpa || "",
        ielts_score: json.ielts_score || "",
        toefl_score: json.toefl_score || "",
        gre_required: json.gre_required || false,
        gmat_required: json.gmat_required || false,
        is_scholarship_available: json.is_scholarship_available || false,
        meta_title: json.meta_title || "",
        meta_description: json.meta_description || "",
        duration: json.duration || "",
        duration_unit: json.duration_unit || "years",
        intake_spring: json.intakes?.spring || false,
        intake_fall: json.intakes?.fall || false,
        intake_summer: json.intakes?.summer || false,
        intake_winter: json.intakes?.winter || false,
      }));
    } catch (err) {
      console.error("Error fetching data from OpenAI:", err);
      setError(
        "Unable to fetch course data. Please check the console for more details."
      );
    } finally {
      setIsFetchingName(false);
      setIsFetchingDetails(false);
    }
  };

  useEffect(() => {
    if (formData.university && formData.category) {
      initiateAiFetch();
    }
  }, [formData.university, formData.category]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [univResponse, catResponse] = await Promise.all([
          ajaxCall("/academics/academics/universities/", { method: "GET" }),
          ajaxCall("/academics/academics/course-categories/", {
            method: "GET",
          }),
        ]);

        setUniversities(univResponse?.data?.results || []);
        setCourseCategories(catResponse?.data?.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "university") {
      const selectedUniversity = universities.find(
        (uni) => uni.id === parseInt(value)
      );
      setFormData((prev) => ({
        ...prev,
        university: value,
        university_name: selectedUniversity ? selectedUniversity.name : "",
      }));
    } else if (name === "category") {
      const selectedCategory = courseCategories.find(
        (cat) => cat.id === parseInt(value)
      );
      setFormData((prev) => ({
        ...prev,
        category: value,
        category_name: selectedCategory ? selectedCategory.name : "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = { ...formData };

    try {
      const response = await fetch(
        "https://sweekarme.in/oecweb/api/academics/academics/courses/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 201) {
        alert("Course added successfully! ✅");
        setFormData(initialFormData);
        setActiveTab("basic");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: "basic", label: "Basic Information" },
    { id: "details", label: "Course Details" },
    { id: "requirements", label: "Requirements" },
    { id: "fees", label: "Fees & Intakes" },
    { id: "seo", label: "SEO & Settings" },
  ];

  return (
    <div>
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Course
          </h1>
          <p className="text-secondary-500 text-xl md:text-3xl max-w-5xl mx-auto">
            Discover programs that match your academic goals and career
            aspirations
          </p>
        </div>
      </header>

      <main className="py-12 max-w-7xl mx-auto px-4">
        <form onSubmit={handleSubmit}>
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-primary-800 text-primary-800"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="text-center my-4">
            {isFetchingName && (
              <p className="text-primary-800 font-semibold">
                Finding course name...
              </p>
            )}
            {isFetchingDetails && (
              <p className="text-primary-800 font-semibold">
                Fetching course details...
              </p>
            )}
            {error && <p className="text-red-500 font-semibold">{error}</p>}
          </div>

          {/* Tab Contents */}
          <div className="space-y-6">
            {/* Basic Information Tab */}
            {activeTab === "basic" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Course Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Auto-generated after selecting University and Category"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="Auto-generated from course name"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    University
                  </label>
                  <select
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    required
                  >
                    <option value="">Select University</option>
                    {universities.map((university) => (
                      <option key={university.id} value={university.id}>
                        {university.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    required
                  >
                    <option value="">Select Category</option>
                    {courseCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Degree Level
                  </label>
                  <select
                    name="degree_level"
                    value={formData.degree_level}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  >
                    <option value="certificate">Certificate</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="doctorate">Doctorate</option>
                    <option value="postgraduate">Postgraduate</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Duration
                    </label>
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="Duration"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Unit
                    </label>
                    <select
                      name="duration_unit"
                      value={formData.duration_unit}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                      <option value="weeks">Weeks</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Course Details Tab */}
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Course description"
                    rows="4"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Curriculum
                  </label>
                  <textarea
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleChange}
                    placeholder="Curriculum details"
                    rows="4"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Career Prospects
                  </label>
                  <textarea
                    name="career_prospects"
                    value={formData.career_prospects}
                    onChange={handleChange}
                    placeholder="Career prospects"
                    rows="4"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Admission Requirements
                  </label>
                  <textarea
                    name="admission_requirements"
                    value={formData.admission_requirements}
                    onChange={handleChange}
                    placeholder="Admission requirements"
                    rows="4"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Requirements Tab */}
            {activeTab === "requirements" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Min GPA
                  </label>
                  <input
                    type="number"
                    name="min_gpa"
                    value={formData.min_gpa}
                    onChange={handleChange}
                    placeholder="Min GPA"
                    min="0"
                    max="4"
                    step="0.1"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      IELTS Score
                    </label>
                    <input
                      type="number"
                      name="ielts_score"
                      value={formData.ielts_score}
                      onChange={handleChange}
                      placeholder="IELTS Score"
                      min="0"
                      max="9"
                      step="0.5"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      TOEFL Score
                    </label>
                    <input
                      type="number"
                      name="toefl_score"
                      value={formData.toefl_score}
                      onChange={handleChange}
                      placeholder="TOEFL Score"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-4 md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Additional Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "gre_required",
                      "gmat_required",
                      "is_scholarship_available",
                    ].map((field) => (
                      <div key={field} className="flex items-center">
                        <input
                          type="checkbox"
                          id={field}
                          name={field}
                          checked={formData[field]}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-800 focus:ring-primary-800 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={field}
                          className="ml-2 block text-gray-700"
                        >
                          {field
                            .split("_")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Fees & Intakes Tab */}
            {activeTab === "fees" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tuition Fee
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      name="tuition_fee"
                      value={formData.tuition_fee}
                      onChange={handleChange}
                      placeholder="Amount"
                      className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    />
                    <input
                      type="text"
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      placeholder="Currency"
                      className="w-24 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Other Fees
                  </label>
                  <input
                    type="text"
                    name="other_fees"
                    value={formData.other_fees}
                    onChange={handleChange}
                    placeholder="Other fees"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Intake Periods
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "intake_spring", label: "Intake Spring" },
                      { name: "intake_fall", label: "Intake Fall" },
                      { name: "intake_summer", label: "Intake Summer" },
                      { name: "intake_winter", label: "Intake Winter" },
                    ].map((intake) => (
                      <div key={intake.name} className="flex items-center">
                        <input
                          type="checkbox"
                          id={intake.name}
                          name={intake.name}
                          checked={formData[intake.name]}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-800 focus:ring-primary-800 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={intake.name}
                          className="ml-2 block text-gray-700"
                        >
                          {intake.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SEO & Settings Tab */}
            {activeTab === "seo" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={handleChange}
                    placeholder="Meta Title"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Meta Description
                  </label>
                  <textarea
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleChange}
                    placeholder="Meta Description"
                    rows="3"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is_featured"
                      name="is_featured"
                      checked={formData.is_featured}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-800 focus:ring-primary-800 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="is_featured"
                      className="ml-2 block text-gray-700"
                    >
                      Featured Course
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is_active"
                      name="is_active"
                      checked={formData.is_active}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-800 focus:ring-primary-800 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="is_active"
                      className="ml-2 block text-gray-700"
                    >
                      Active Course
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {activeTab !== "basic" ? (
              <button
                type="button" // This is crucial to prevent form submission
                onClick={() =>
                  setActiveTab(
                    tabs[tabs.findIndex((tab) => tab.id === activeTab) - 1].id
                  )
                }
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
              >
                Previous
              </button>
            ) : (
              <div></div> // Empty div to maintain space
            )}

            {activeTab !== "seo" ? (
              <button
                type="button" // This is crucial to prevent form submission
                onClick={() =>
                  setActiveTab(
                    tabs[tabs.findIndex((tab) => tab.id === activeTab) + 1].id
                  )
                }
                className="bg-primary-800 hover:bg-primary-600 text-white py-2 px-6 rounded-lg"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading || isFetchingName || isFetchingDetails}
                className="bg-primary-800 hover:bg-primary-600 text-white py-2 px-6 rounded-lg disabled:opacity-50"
              >
                {isLoading ? "Adding..." : "Add Course"}
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddCourse;
