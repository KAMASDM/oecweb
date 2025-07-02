"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  XCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Loader2,
  Star,
  BrainCircuit,
  Globe,
} from "lucide-react";

const testConfig = {
  general: {
    title: "General",
    apiCategory: 9, // General Knowledge
    icon: <Globe className="h-6 w-6 text-secondary-500" />,
  },
  ielts: {
    title: "IELTS",
    apiCategory: 27, //(IELTS Vocabulary) Animals - good for varied nouns
    icon: <Star className="h-6 w-6 text-secondary-500" />,
  },
  toefl: {
    title: "TOEFL",
    apiCategory: 23, //(TOEFL Reading) History - good for reading comprehension
    icon: <BookOpen className="h-6 w-6 text-secondary-500" />,
  },
  sat: {
    title: "SAT",
    apiCategory: 19, //(SAT Math & Logic) Science: Mathematics
    icon: <BrainCircuit className="h-6 w-6 text-secondary-500" />,
  },
  gre: {
    title: "GRE",
    apiCategory: 10, //(GRE Verbal Reasoning) Entertainment: Books - good for verbal skills
    icon: <Star className="h-6 w-6 text-secondary-500" />,
  },
  gmat: {
    title: "GMAT",
    apiCategory: 17, //(GMAT Analytical) Science & Nature - good for analytical questions
    icon: <BrainCircuit className="h-6 w-6 text-secondary-500" />,
  },
};

function decodeHtml(html) {
  if (typeof window === "undefined") {
    return html
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const TestSelectionMenu = ({ onSelectTest, activeTestId }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-lg border border-gray-200 p-4">
      <h2 className="text-xl font-bold text-primary-800 mb-4 p-2">
        Choose Your Test
      </h2>
      <div className="space-y-2">
        {Object.entries(testConfig).map(([id, { title, icon }]) => (
          <button
            key={id}
            onClick={() => onSelectTest(id)}
            className={`w-full flex items-center p-4 rounded-lg text-left transition-all duration-300 ${activeTestId === id
                ? "bg-primary-800 text-white shadow-md"
                : "bg-gray-50 hover:bg-primary-100 hover:shadow-sm"
              }`}
          >
            <div className="mr-4 flex-shrink-0">{icon}</div>
            <span className="font-semibold">{title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const TestPreparation = () => {
  const [activeTestId, setActiveTestId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!activeTestId) {
      setQuestions([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    setShowResult(false);
    setCurrentQuestionIndex(0);
    setUserAnswers({});

    const fetchQuestions = async () => {
      try {
        const category = testConfig[activeTestId].apiCategory;
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions. Please try again later.");
        }
        const data = await response.json();
        if (data.response_code !== 0) {
          throw new Error(
            "Could not retrieve questions for this category. Please try another one."
          );
        }

        const formattedQuestions = data.results.map((q, index) => {
          const incorrectAnswers = q.incorrect_answers.map((a) =>
            decodeHtml(a)
          );
          const correctAnswer = decodeHtml(q.correct_answer);
          const options = [...incorrectAnswers, correctAnswer].sort(
            () => Math.random() - 0.5
          );
          return {
            id: `${activeTestId}-${index}`,
            question: decodeHtml(q.question),
            options,
            answer: correctAnswer,
          };
        });
        setQuestions(formattedQuestions);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const handler = setTimeout(() => {
      fetchQuestions();
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [activeTestId]);

  const handleSelectTest = (testId) => {
    setActiveTestId(testId);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleTryAgain = () => {
    const currentTest = activeTestId;
    setActiveTestId(null);
    setTimeout(() => setActiveTestId(currentTest), 50);
  };

  const score = useMemo(() => {
    if (!showResult) return 0;
    return questions.reduce((acc, question) => {
      return userAnswers[question.id] === question.answer ? acc + 1 : acc;
    }, 0);
  }, [showResult, userAnswers, questions]);

  const renderWelcomeView = () => (
    <div className="text-center p-8">
      <BookOpen className="mx-auto h-20 w-20 text-primary-800 opacity-50 mb-4" />
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome to the Practice Center
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
        Select a test from the menu on the left to begin your practice session.
        Good luck!
      </p>
    </div>
  );

  const renderTestTaker = () => {
    if (isLoading)
      return (
        <div className="flex justify-center items-center h-full p-8">
          <Loader2 className="h-16 w-16 text-primary-800 animate-spin" />
        </div>
      );
    if (error)
      return (
        <div className="text-center p-8 text-red-600">
          <XCircle className="mx-auto h-12 w-12 mb-4" />
          <h3 className="text-2xl font-semibold">An Error Occurred</h3>
          <p>{error}</p>
        </div>
      );
    if (questions.length === 0 && activeTestId) return renderWelcomeView();

    const question = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
      <div className="p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-primary-800 mb-2">
          {testConfig[activeTestId].title}
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-6">
          <div
            className="bg-secondary-500 h-2.5 rounded-full transition-all duration-500"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
            }}
          ></div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h3>
          <p className="text-lg text-gray-700 mb-4">{question.question}</p>
          <div className="space-y-4">
            {question.options.map((option) => (
              <label
                key={option}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${userAnswers[question.id] === option
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-300 hover:border-primary-400"
                  }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={userAnswers[question.id] === option}
                  onChange={() => handleAnswerSelect(question.id, option)}
                  className="h-5 w-5 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-4 text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous
          </button>
          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!userAnswers[question.id]}
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!userAnswers[question.id]}
              className="flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="p-6 sm:p-8">
        <div className="text-center mb-8">
          <Award className="mx-auto h-20 w-20 text-yellow-500" />
          <h2 className="text-4xl font-bold text-primary-800 mt-4">
            Test Completed!
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            Here's your result for the {testConfig[activeTestId].title}.
          </p>
          <div className="mt-6 bg-primary-50 p-6 rounded-xl inline-block border border-primary-200">
            <p className="text-lg text-primary-800">You Scored</p>
            <p className="text-6xl font-bold text-secondary-500 my-2">
              {score} / {totalQuestions}
            </p>
            <p className="text-3xl font-semibold text-primary-700">
              ({percentage}%)
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-t pt-6">
          Review Your Answers
        </h3>
        <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[question.id];
            const isCorrect = userAnswer === question.answer;
            return (
              <div
                key={question.id}
                className={`p-4 rounded-lg border-2 ${isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  }`}
              >
                <p className="font-semibold text-gray-800 mb-2">
                  Q{index + 1}: {question.question}
                </p>
                <p
                  className={`text-sm font-bold ${isCorrect ? "text-green-800" : "text-red-800"
                    }`}
                >
                  Your answer: {userAnswer || "Not answered"}
                </p>
                {!isCorrect && (
                  <p className="text-sm font-bold text-green-800">
                    Correct answer: {question.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleTryAgain}
            className="px-8 py-3 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors"
          >
            Try Again With New Questions
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (!activeTestId) return renderWelcomeView();
    if (showResult) return renderResult();
    return renderTestTaker();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Test Preparation
          </h1>
          <p className="text-secondary-500 text-xl md:text-2xl max-w-5xl mx-auto">
            Select a test, challenge your knowledge, and track your progress.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <TestSelectionMenu
            onSelectTest={handleSelectTest}
            activeTestId={activeTestId}
          />
          <main className="w-full md:w-2/3 lg:w-3/4 bg-white rounded-xl shadow-lg border border-gray-200 min-h-[600px] flex flex-col justify-center">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default TestPreparation;
