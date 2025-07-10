import React from "react";
import { notFound } from "next/navigation";
import { readingExamsData } from "@/lib/Reading/readingExamsData";
import { writingExamsData } from "@/lib/Writing/writingExamsData";
import { listeningExamsData } from "@/lib/Listening/listeningExamsData";
import LiveReadingExam from "@/components/IELTS/Reading/LiveReadingExam";
import LiveWritingExam from "@/components/IELTS/Writing/LiveWritingExam";
import LiveListeningExam from "@/components/IELTS/Listening/LiveListeningExam";

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

  return <ExamComponent examData={examData} />;
};

export default page;
