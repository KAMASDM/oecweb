"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, ChevronDown, X } from "lucide-react";

const countryOptions = [
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "germany", label: "Germany" },
  { value: "singapore", label: "Singapore" },
  { value: "other", label: "Other/Undecided" },
];

const studyLevelOptions = [
  { value: "undergraduate", label: "Undergraduate" },
  { value: "masters", label: "Masters" },
  { value: "phd", label: "PhD" },
  { value: "diploma", label: "Diploma/Certificate" },
];

const intakeOptions = [
  { value: "fall-2025", label: "Fall 2025" },
  { value: "spring-2026", label: "Spring 2026" },
  { value: "fall-2026", label: "Fall 2026" },
  { value: "spring-2027", label: "Spring 2027" },
];

const fieldOptions = [
  { value: "engineering", label: "Engineering" },
  { value: "computer-science", label: "Computer Science" },
  { value: "business", label: "Business & Management" },
  { value: "medicine", label: "Medicine & Healthcare" },
  { value: "arts", label: "Arts & Humanities" },
  { value: "social-sciences", label: "Social Sciences" },
  { value: "natural-sciences", label: "Natural Sciences" },
  { value: "other", label: "Other" },
];

const budgetOptions = [
  { value: "10-20", label: "₹10-20 Lakhs" },
  { value: "20-40", label: "₹20-40 Lakhs" },
  { value: "40-60", label: "₹40-60 Lakhs" },
  { value: "60+", label: "₹60+ Lakhs" },
  { value: "scholarship", label: "Looking for Scholarships" },
];

const contactMethodOptions = [
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp Call" },
  { value: "video", label: "Video Call (Zoom/Teams)" },
  { value: "office", label: "In-Person at Office" },
];

const timeOptions = [
  { value: "morning", label: "Morning (9 AM - 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
  { value: "evening", label: "Evening (4 PM - 8 PM)" },
  { value: "weekend", label: "Weekend" },
];

const ConsultationForm = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      setLoading(false);
      reset();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => {
              onClose();
              setIsSubmitted(false);
              reset();
            }}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>

          {isSubmitted ? (
            <div className="text-center p-8 md:p-10">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Thank You For Your Submission!
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                We have received your consultation request. Our counselor will
                contact you within 24 hours to schedule your free consultation
                session.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  reset();
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Book Your Free Consultation
                </h2>
                <p className="opacity-90">
                  Fill out the form below and our expert counselors will contact you
                  within 24 hours to schedule your personalized consultation session.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          {...register("firstName", {
                            required: "First name is required",
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] ${
                            errors.firstName ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          {...register("lastName", {
                            required: "Last name is required",
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] ${
                            errors.lastName ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current City
                        </label>
                        <input
                          type="text"
                          {...register("city")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                          placeholder="e.g., Mumbai, Delhi, Bangalore"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Destination
                        </label>
                        <div className="relative">
                          <select
                            {...register("destination")}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                          >
                            {countryOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      Academic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Level of Study
                        </label>
                        <div className="relative">
                          <select
                            {...register("studyLevel")}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                          >
                            {studyLevelOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Intake
                        </label>
                        <div className="relative">
                          <select
                            {...register("intake")}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                          >
                            {intakeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field of Interest
                      </label>
                      <div className="relative">
                        <select
                          {...register("field")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                        >
                          {fieldOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Education
                      </label>
                      <input
                        type="text"
                        {...register("education")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                        placeholder="e.g., 12th Grade, B.Tech Computer Science, MBA"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Academic Score
                        </label>
                        <input
                          type="text"
                          {...register("academicScore")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                          placeholder="e.g., 85%, 8.5 CGPA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          English/Test Scores
                        </label>
                        <input
                          type="text"
                          {...register("testScores")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                          placeholder="e.g., IELTS 7.0, GRE 320, Not taken yet"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range (Total)
                      </label>
                      <div className="relative">
                        <select
                          {...register("budget")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                        >
                          {budgetOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      Additional Information
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Questions/Goals
                      </label>
                      <textarea
                        {...register("questions")}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
                        placeholder="Tell us about your specific goals, concerns, or questions..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Contact Method
                        </label>
                        <div className="relative">
                          <select
                            {...register("contactMethod")}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                          >
                            {contactMethodOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Contact Time
                        </label>
                        <div className="relative">
                          <select
                            {...register("contactTime")}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] appearance-none"
                          >
                            {timeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-lg text-white font-semibold flex items-center justify-center transition-all duration-200 ${
                      loading
                        ? "bg-[#9fa8da] cursor-not-allowed"
                        : "bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:opacity-90"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Book Free Consultation
                      </>
                    )}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;