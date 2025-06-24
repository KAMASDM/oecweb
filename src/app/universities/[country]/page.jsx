import React from "react";
import Universities from "@/components/universities/Universities";

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

  return <Universities country={normalCountry} />;
};

export default Country;
