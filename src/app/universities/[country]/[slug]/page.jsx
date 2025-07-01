import React from "react";
import ajaxCall from "@/helpers/ajaxCall";
import UniversityDetail from "@/components/universities/UniversityDetail";

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return {
      title: "University Not Found",
      description: "The requested university was not found",
    };
  }

  try {
    const { data: university } = await ajaxCall(
      `/academics/academics/universities/${slug}/`,
      {
        method: "GET",
      }
    );
    return {
      title: university?.meta_title,
      description: university?.meta_description,
      openGraph: {
        title: university?.meta_title,
        description: university?.meta_description,
        images: [
          {
            url: university?.banner_image,
            alt: university?.banner_image || university?.meta_title,
            width: 800,
            height: 600,
          },
        ],
        siteName: "OEC India",
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: university?.meta_title,
        description: university?.meta_description,
        images: [
          {
            url: university?.banner_image,
            alt: university?.banner_image || university?.meta_title,
            width: 800,
            height: 600,
          },
        ],
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      title: "Top Universities Abroad - Partner Institutions | OEC India",
      description:
        "Discover the best global universities partnered with OEC India for admissions in the UK, USA, Canada, Australia & Europe.",
    };
  }
};

export const UniversityDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Unversity Details Not Found</div>;
  }

  return <UniversityDetail slug={slug} />;
};

export default UniversityDetailPage;
