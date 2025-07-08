import React from "react";
import { notFound } from "next/navigation";
import { readingExamsData } from "@/lib/Reading/readingExamsData";
import LiveReadingExam from "@/components/IELTS/Reading/LiveReadingExam";

const page = ({ params }) => {
  const { id } = params;

  const examId = parseInt(id, 10);
  if (isNaN(examId)) {
    notFound(); 
  }

  const examData = readingExamsData.find((exam) => exam.id === examId);

  if (!examData) {
    notFound();
  }

  return <LiveReadingExam examData={examData} />;
};

export default page;
