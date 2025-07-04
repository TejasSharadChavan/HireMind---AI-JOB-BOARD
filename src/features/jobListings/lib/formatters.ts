import {
  ExperienceLevels,
  JobListingsStatus,
  JobListingsType,
  LocationRequirement,
  WageInterval,
} from "@/drizzle/schema";

export function formatWageInterval(interval: WageInterval) {
  switch (interval) {
    case "hourly":
      return "Hour";
    case "yearly":
      return "Year";
    default:
      throw new Error(`Invalid wage interval: ${interval satisfies never}`);
  }
}

export function formatLocationRequirement(
  locationRequirement: LocationRequirement
) {
  switch (locationRequirement) {
    case "remote":
      return "Remote";
    case "in-office":
      return "In Office";
    case "hybrid":
      return "Hybrid";
    default:
      throw new Error(
        `Unknown location requirement:${locationRequirement satisfies never}`
      );
  }
}

export function formatJobType(type: JobListingsType) {
  switch (type) {
    case "full-time":
      return "Full Time";
    case "internship":
      return "Internship";
    case "part-time":
      return "Part Time";
    default:
      throw new Error(`Unknown location requirement:${type satisfies never}`);
  }
}
export function formatExperienceLevel(experiencelevels: ExperienceLevels) {
  switch (experiencelevels) {
    case "junior":
      return "Junior";
    case "mid-level":
      return "Mid Level";
    case "senior":
      return "Senior";
    default:
      throw new Error(
        `Unknown location requirement:${experiencelevels satisfies never}`
      );
  }
}

export function formatJobListingStatus(status: JobListingsStatus) {
  switch (status) {
    case "published":
      return "Published";
    case "draft":
      return "Draft";
    case "delisted":
      return "Delisted";
    default:
      throw new Error(`Unknown location requirement:${status satisfies never}`);
  }
}

export function formatWage(wage: number, wageInterval: WageInterval) {
  const wageFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  switch (wageInterval) {
    case "hourly": {
      return `${wageFormatter.format(wage)} / hr`;
    }
    case "yearly": {
      return wageFormatter.format(wage);
    }
    default:
      throw new Error(`Unknown wage interval: ${wageInterval satisfies never}`);
  }
}

export function formatJobListingLocation({
  stateAbbreviation,
  city,
}: {
  stateAbbreviation: string | null
  city: string | null
}) {
    if(stateAbbreviation == null && city == null) return "None"
    const locationParts = []
    if(city != null) locationParts.push(city)
    if(stateAbbreviation != null) {
        locationParts.push(stateAbbreviation.toUpperCase())
    }
    return locationParts.join(", ")
}
