import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function formatDate(date: Date) {
  return fullDateFormatter.format(date);
}

export function readingTime(html: string) {
  const textOnlyChars: string[] = [];
  let inTag = false;
  let quoteChar: "\"" | "'" | null = null;
  let escapedInQuote = false;

  for (const char of html) {
    if (inTag) {
      if (quoteChar !== null) {
        if (escapedInQuote) {
          escapedInQuote = false;
        } else if (char === "\\") {
          escapedInQuote = true;
        } else if (char === quoteChar) {
          quoteChar = null;
        }
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
  const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const start = monthYearFormatter.format(startDate);
  const end =
    endDate === undefined
      ? ""
      : typeof endDate === "string"
        ? endDate
        : monthYearFormatter.format(endDate);

  return `${start} - ${end}`;
}
