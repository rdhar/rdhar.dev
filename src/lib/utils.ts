import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnlyChars: string[] = [];
  let inTag = false;
  let quoteChar = "";

  for (const char of html) {
    if (inTag) {
      if (quoteChar) {
        if (char === quoteChar) quoteChar = "";
      } else if (char === "\"" || char === "'") {
        quoteChar = char;
      } else if (char === ">") {
        inTag = false;
      }
    } else if (char === "<") {
      inTag = true;
    } else {
      textOnlyChars.push(char);
    }
  }

  const textOnly = textOnlyChars.join("");
  const trimmedText = textOnly.trim();
  const safeWordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
  const readingTimeMinutes = ((safeWordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}
