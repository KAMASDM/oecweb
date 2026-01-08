"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { X, LoaderCircle } from "lucide-react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
      <div
        className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 m-4 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Confirm Submission
        </h3>
        <p className="text-gray-600 mb-8">
          Are you sure you want to submit your answer for evaluation?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-6 py-2 rounded-lg text-sm font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="px-6 py-2 rounded-lg text-sm font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isLoading && <LoaderCircle className="animate-spin" size={18} />}
            {isLoading ? "Evaluating..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ScoreModal = ({ isOpen, onClose, scoreDetails }) => {
  if (!isOpen || !scoreDetails) return null;

  const { feedback, submittedText, examName } = scoreDetails;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{examName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={28} />
          </button>
        </div>
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Detailed Feedback
            </h3>
            <div
              className="prose prose-sm max-w-none bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: feedback }}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Your Submission
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto text-gray-700 whitespace-pre-wrap">
              {submittedText}
            </div>
          </div>
        </div>
        <div className="flex justify-end p-5 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-lg text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Finish Review
          </button>
        </div>
      </div>
    </div>
  );
};

const LiveWritingExam = ({ examData }) => {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isScoreModalOpen, setScoreModalOpen] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState(null);

  const wordCount = useMemo(() => {
    const words = answer.trim().split(/\s+/);
    return words[0] === "" ? 0 : words.length;
  }, [answer]);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleConfirmSubmit = async () => {
    if (!answer || answer.trim() === "") {
      alert("Please write an answer before submitting.");
      return;
    }

    setIsLoading(true);

    // Sanitize the passage to remove HTML tags for the prompt
    const cleanPassage = examData.passage.replace(/<[^>]*>/g, " ");

    try {
      // Use the server-side API route instead of calling OpenAI directly
      const res = await fetch("/api/ai-writing-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: "Task 1",
          prompt: cleanPassage,
          answer: answer,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `API error: ${res.statusText}`);
      }

      const data = await res.json();
      
      // Format the feedback data as HTML
      let formattedFeedback = "<p>Could not retrieve feedback.</p>";
      
      if (data) {
        formattedFeedback = `
          <h4>Task Achievement</h4>
          <p>${data.taskAchievement || 'N/A'}</p>
          <h4>Coherence and Cohesion</h4>
          <p>${data.coherence || 'N/A'}</p>
          <h4>Lexical Resource</h4>
          <p>${data.lexicalResource || 'N/A'}</p>
          <h4>Grammatical Range and Accuracy</h4>
          <p>${data.grammar || 'N/A'}</p>
          <p><strong>#Band: ${data.bandScore || 'N/A'}</strong></p>
        `;
      }

      setSubmissionDetails({
        feedback: formattedFeedback,
        submittedText: answer,
        examName: examData.exam_name,
      });

      setConfirmationModalOpen(false);
      setScoreModalOpen(true);
    } catch (error) {
      console.error("Error fetching AI evaluation:", error);
      alert(
        "An error occurred while evaluating your answer. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800 min-h-screen">
      <div className="mx-auto p-4 mt-24 sm:p-6 lg:p-8">
        <main
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{ height: "calc(100vh - 250px)", minHeight: "500px" }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg h-full overflow-y-auto border border-gray-200 prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: examData.passage }} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg h-full border border-gray-200 flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              Your Answer
            </h2>
            <textarea
              value={answer}
              onChange={handleAnswerChange}
              className="w-full h-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Start writing your answer here..."
            />
            <div className="text-right mt-2 text-sm font-semibold text-gray-600">
              Word Count: {wordCount}
            </div>
          </div>
        </main>
        <footer className="bg-white shadow-lg rounded-xl p-4 mt-6 border border-gray-200">
          <div className="flex justify-end items-center flex-wrap gap-4">
            <button
              className="px-8 py-3 rounded-lg text-sm font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
              onClick={() => setConfirmationModalOpen(true)}
            >
              Submit
            </button>
          </div>
        </footer>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        onConfirm={handleConfirmSubmit}
        isLoading={isLoading}
      />
      <ScoreModal
        isOpen={isScoreModalOpen}
        onClose={() => {
          setScoreModalOpen(false);
          router.push("/test-preparation");
        }}
        scoreDetails={submissionDetails}
      />
    </div>
  );
};

export default LiveWritingExam;
