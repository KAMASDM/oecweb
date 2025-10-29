import Courses from "@/components/courses/Courses";
import React from "react";

// Generate static params for static export
export async function generateStaticParams() {
  return [];
}

export const CoursesPage = async ({ params }) => {
  const resolvedParams = await params;
  const course = resolvedParams?.course;

  if (!course) {
    return <div>Course Not Found</div>;
  }

  const normalCourse = course
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <Courses course={normalCourse} />;
};

export default CoursesPage;
