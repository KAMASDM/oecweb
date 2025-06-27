import Courses from "@/components/courses/Courses";
import React from "react";

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
