export const EVENTS_LANDING_COUNTRY_ALLOWLIST = [
  "UK",
  "USA",
  "CANADA",
  "DUBAI",
  "GERMANY",
  "EUROPE",
  "AUSTRALIA",
  "NEW ZEALAND",
];

const COUNTRY_MATCHERS = {
  UK: ["uk", "united kingdom"],
  USA: ["usa", "united states", "united states of america"],
  CANADA: ["canada"],
  DUBAI: ["dubai", "uae", "united arab emirates"],
  GERMANY: ["germany"],
  EUROPE: ["europe"],
  AUSTRALIA: ["australia"],
  "NEW ZEALAND": ["new zealand"],
};

const normalize = (value) => (value || "").toString().trim().toLowerCase();

export const filterAndSortCountries = (countries = [], allowlist = []) => {
  if (!Array.isArray(allowlist) || allowlist.length === 0) {
    return countries;
  }

  const byNormalizedName = new Map();
  countries.forEach((country) => {
    byNormalizedName.set(normalize(country.name), country);
  });

  const selected = [];
  allowlist.forEach((countryKey) => {
    const aliases = COUNTRY_MATCHERS[countryKey] || [countryKey];
    const match = aliases
      .map((alias) => byNormalizedName.get(normalize(alias)))
      .find(Boolean);

    if (match) {
      selected.push(match);
    }
  });

  return selected;
};
