import React from "react";
import ajaxCall from "@/helpers/ajaxCall";
import CountryPage from "@/components/country/CountryPage";

// Generate static params for country guides
export async function generateStaticParams() {
  return [];
}

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const country = resolvedParams?.country;
  const normalCountry = country
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Custom meta descriptions for each country
  const countryDescriptions = {
    "Australia": "Your complete guide to studying in Australia with details on universities, visa process, cost of living, and student life for international students.",
    "Canada": "Comprehensive guide for studying in Canada covering top universities, admission steps, visa info, and student life essentials.",
    "Caribbean": "Discover study options and visa guidance for Caribbean countries, offering diverse course and enriching education opportunities.",
    "Czech Republic": "Guide for studying in the Czech Republic with course details, visa information, and insights on living for international students.",
    "Dubai": "Study in Dubai with expert guidance on universities, admissions, visa procedures, and tips for living in the dynamic UAE city.",
    "France": "Explore studying in France with comprehensive info on top institutions, courses, admissions, and student life for foreign learners.",
    "Georgia": "Georgia study guide covering university programs, admission criteria, visa details, and lifestyle insights for international students.",
    "Germany": "Germany study guide with course offerings, scholarship info, admission steps, visa advice, and living guidance for global students.",
    "Greece": "Detailed guide for studying in Greece, including universities, visa rules, admission details, and student support information.",
    "Grenada": "Study in Grenada with info on universities, accommodation options, admission process, and living tips for international students.",
    "Hungary": "Hungary study guide with comprehensive info on courses, admissions, visa procedures, and student life for overseas learners.",
    "Ireland": "Ireland study guide featuring university options, admission process, visa info, and cultural insights for international students.",
    "Malaysia": "Malaysia study abroad guide with details on courses, admissions, visa process, and cost of living for international students.",
    "Netherland": "Study in the Netherlands with comprehensive info on visa aid, university selection, and tips for foreign students.",
    "New Zealand": "Explore studying in New Zealand with comprehensive guide on universities, admission, visa processes, and lifestyle for international students.",
    "Spain": "Spain study guide offering details on top universities, admission criteria, visa guidance, and student living essentials.",
    "Switzerland": "Study in Switzerland with info on universities, admission steps, visa requirements, and living tips for global students.",
    "United Arab Emirates": "UAE study guide covering university options, admissions, visas, and tips for living and studying in the United Arab Emirates.",
    "United Kingdom": "UK study guide with info on courses, universities, visa procedures, and student life tips to support international learners.",
    "Usa": "USA study guide with comprehensive details on universities, admission steps, visa support, and tips for successful overseas education.",
  };

  if (!country) {
    return {
      title: "Country Not Found | OEC India",
      description: "The requested country was not found on OEC India.",
    };
  }

  try {
    const { data: country } = await ajaxCall(
      `/academics/academics/countries/`,
      {
        method: "GET",
      }
    );
    const countryData = country.results.find((c) => c.name === normalCountry);
    const meta_title = `Study in ${countryData?.name} - Top Universities & Visa Guidance | OEC India`;
    const meta_description = countryDescriptions[normalCountry] || `Get expert advice on studying in ${countryData?.name} including top universities, courses, scholarships, and student visa requirements with OEC India.`;

    return {
      title: meta_title,
      description: meta_description,
      openGraph: {
        title: meta_title,
        description: meta_description,
        images: [
          {
            url: countryData?.flag_image,
            alt: countryData?.flag_image || countryData?.name,
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
        title: meta_title,
        description: meta_description,
        images: [
          {
            url: countryData?.flag_image,
            alt: countryData?.flag_image || countryData?.name,
            width: 800,
            height: 600,
          },
        ],
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      title: "Study Abroad with OEC India",
      description:
        "Explore guides, tips, and expert advice for studying abroad with OEC India.",
    };
  }
};

export const Country = async ({ params }) => {
  const resolvedParams = await params;
  const country = resolvedParams?.country;

  if (!country) {
    return <div>Country Not Found</div>;
  }

  const normalCountry = country
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <CountryPage normalCountry={normalCountry} />;
};

export default Country;
