import React from "react";
import CountryPage from "@/components/country/CountryPage";

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
