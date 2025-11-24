import React from "react";
import { notFound } from "next/navigation";
import { readingExamsData } from "@/lib/Reading/readingExamsData";
import { writingExamsData } from "@/lib/Writing/writingExamsData";
import { listeningExamsData } from "@/lib/Listening/listeningExamsData";
import LiveReadingExam from "@/components/IELTS/Reading/LiveReadingExam";
import LiveWritingExam from "@/components/IELTS/Writing/LiveWritingExam";
import LiveListeningExam from "@/components/IELTS/Listening/LiveListeningExam";

// Generate static params for static export
export async function generateStaticParams() {
  return [];
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const data = await params;
  const { category, subCategory, id } = data;

  const metaDescriptions = {
    listening: "Practice IELTS Listening tests with expert guidance to boost scores and succeed in your study abroad journey with OEC India.",
    reading: "Improve your IELTS Reading skills with focused test practice and resources aimed at helping you study abroad with confidence.",
    writing: "Gain expert IELTS Writing preparation and resources to help you excel in your test and unlock overseas study opportunities.",
  };

  const titles = {
    listening: `IELTS Listening Practice Test ${id} - OEC India`,
    reading: `IELTS Reading Practice Test ${id} - OEC India`,
    writing: `IELTS Writing Practice Test ${id} - OEC India`,
  };

  const title = titles[subCategory] || `IELTS ${subCategory} Test ${id} - OEC India`;
  const description = metaDescriptions[subCategory] || `Practice IELTS ${subCategory} tests with expert guidance to boost scores and succeed in your study abroad journey with OEC India.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://oecindia.com/oec.png",
          width: 800,
          height: 600,
          alt: "OEC India",
        },
      ],
      siteName: "OEC India",
      locale: "en_US",
      type: "website",
    },
  };
}

const examDataSources = {
  reading: readingExamsData,
  writing: writingExamsData,
  listening: listeningExamsData,
};

const ExamComponents = {
  reading: LiveReadingExam,
  writing: LiveWritingExam,
  listening: LiveListeningExam,
};

const page = async ({ params }) => {
  const data = await params;

  const dataSource = examDataSources[data.subCategory];
  const ExamComponent = ExamComponents[data.subCategory];

  if (!dataSource || !ExamComponent) {
    notFound();
  }

  const examId = parseInt(data.id, 10);
  if (isNaN(examId)) {
    notFound();
  }

  const examData = dataSource.find((exam) => exam.id === examId);

  if (!examData) {
    notFound();
  }

  const categoryTitles = {
    listening: "IELTS Listening Practice",
    reading: "IELTS Reading Practice",
    writing: "IELTS Writing Practice",
  };

  const title = categoryTitles[data.subCategory] || `IELTS ${data.subCategory} Practice`;

  return (
    <>
      <header className="bg-primary-800 text-white py-8 mt-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {title} - Test {examId}
          </h1>
          <p className="text-secondary-500 text-lg md:text-xl mt-2">
            Practice IELTS {data.subCategory} with expert guidance from OEC India
          </p>
        </div>
      </header>
      <ExamComponent examData={examData} />
    </>
  );
};

export default page;
