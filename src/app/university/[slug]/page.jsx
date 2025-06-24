import React from "react";
import UniversityDetails from "@/components/universities/UniversityDetail";

export const UniversityDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Unversity Details Not Found</div>;
  }

  return <UniversityDetails slug={slug} />;
};

export default UniversityDetailPage;
