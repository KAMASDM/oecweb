import CourseDetail from "@/components/courses/CourseDetail";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Course Not Found</div>;
  }
  return <CourseDetail slug={slug} />;
};

export default CourseDetailsPage;
