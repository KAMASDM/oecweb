import React from "react";
import { notFound } from "next/navigation";
import { readingExamsData } from "@/lib/Reading/readingExamsData";
import { listeningExamsData } from "@/lib/Listening/listeningExamsData";
import LiveReadingExam from "@/components/IELTS/Reading/LiveReadingExam";
import LiveListeningExam from "@/components/IELTS/Listening/LiveListeningExam";

const examDataSources = {
  reading: readingExamsData,
  listening: listeningExamsData,
};

const ExamComponents = {
  reading: LiveReadingExam,
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
