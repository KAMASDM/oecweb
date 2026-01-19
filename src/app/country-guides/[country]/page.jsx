import React from "react";
import ajaxCall from "@/helpers/ajaxCall";
import CountryPage from "@/components/country/CountryPage";

// Helper function to normalize country names
const normalizeCountryName = (countrySlug) => {
  // Special cases for abbreviations
  const abbreviations = {
    'usa': 'USA',
    'uk': 'UK',
    'uae': 'UAE',
  };

  const lowercaseSlug = countrySlug.toLowerCase();
  
  // Check if it's an abbreviation
  if (abbreviations[lowercaseSlug]) {
    return abbreviations[lowercaseSlug];
  }

  // Regular capitalization for other countries
  return countrySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Generate static params for country guides
export async function generateStaticParams() {
  return [];
}

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const country = resolvedParams?.country;
  const normalCountry = normalizeCountryName(country);

  // Custom meta descriptions for each country
  const countryDescriptions = {
    "Australia": "Your complete guide to studying in Australia with details on universities, admissions, visa process, and living tips for international students.",
    "Canada": "A comprehensive guide for studying in Canada covering universities, admissions, accommodation, visa info, and student life essentials.",
    "Caribbean": "Discover study options and visa guidance for Caribbean countries, offering diverse and enriching education opportunities.",
    "Czech Republic": "A guide for studying in the Czech Republic with course details, visa information, and insights on living for international students.",
    "Dubai": "Study in Dubai with expert guidance on universities, admissions, visa procedures, and tips for living in the dynamic UAE city.",
    "France": "Explore studying in France with comprehensive info on top institutions, admissions, and student life for foreign learners.",
    "Georgia": "Georgia study guide covering university programs, admissions, student visa details, and lifestyle insights for international students.",
    "Germany": "Germany study guide with course options, scholarships, admission steps, visa advice, and living guidance for global students.",
    "Greece": "Detailed guide for studying in Greece, including universities, visa rules, admission details, and student support information.",
    "Grenada": "Study in Grenada with info on universities, accommodation options, admissions process, and living tips for international students.",
    "Hungary": "Hungary study guide with comprehensive info on courses, admissions, visa procedures, and student life for overseas learners.",
    "Ireland": "Ireland study guide featuring university options, admission process, visa info, and cultural insights for international students.",
    "Malaysia": "Malaysia study abroad guide with info on courses, admissions, visa process, and cost of living for international students.",
    "Netherland": "Study in the Netherlands with info on programs, visa aid, university selection, and student life tips for foreign students.",
    "New Zealand": "Explore studying in New Zealand with comprehensive guide on universities, admissions, visa processes, and lifestyle for international students.",
    "Spain": "Spain study guide offering details on top universities, admission criteria, visa guidance, and student living essentials.",
    "Switzerland": "Study in Switzerland with info on universities, admission steps, visa requirements, and living tips for global students.",
    "United Arab Emirates": "UAE study guide covering university options, admissions, visas, and tips for living and studying in the United Arab Emirates.",
    "United Kingdom": "UK study guide with info on courses, universities, visa procedures, and student life to support international learners.",
    "USA": "USA study guide with comprehensive details on universities, admission steps, visa support, and tips for successful overseas education.",
  };

  if (!country) {
    return {
      title: "Country Not Found | OEC India",
      description: "The requested country was not found on OEC India.",
    };
  }

  try {
    const { data: countryResponse } = await ajaxCall(
      `/academics/academics/countries/`,
      {
        method: "GET",
      }
    );
    const countryData = countryResponse.results.find((c) => c.name.toLowerCase() === normalCountry.toLowerCase());
    
    if (!countryData) {
      return {
        title: "Country Not Found | OEC India",
        description: "The requested country was not found on OEC India.",
      };
    }

    const displayName = countryData.name;
    const meta_title = `Study in ${displayName} - Top Universities & Visa Guidance | OEC India`;
    const meta_description = countryDescriptions[displayName] || countryDescriptions[normalCountry] || `Get expert advice on studying in ${displayName} including top universities, courses, scholarships, and student visa requirements with OEC India.`;

    return {
      title: meta_title,
      description: meta_description,
      openGraph: {
        title: meta_title,
        description: meta_description,
        images: [
          {
            url: countryData?.flag_image,
            alt: countryData?.flag_image || displayName,
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
            alt: countryData?.flag_image || displayName,
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

  const normalCountry = normalizeCountryName(country);

  return <CountryPage normalCountry={normalCountry} />;
};

export default Country;
