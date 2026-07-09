export type Continent =
  | "Europe"
  | "Asia"
  | "North America"
  | "South America"
  | "Africa"
  | "Oceania";

export type LocationEntry = {
  name: string;
  lat: number;
  lng: number;
  note: string;
  continent: Continent;
};

export const CONTINENT_ORDER: Continent[] = [
  "Europe",
  "Asia",
  "North America",
  "South America",
  "Africa",
  "Oceania",
];