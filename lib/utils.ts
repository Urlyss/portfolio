import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TAbout = {
  logo: string;
  job_title: string;
  about_me: string;
  header: string;
}

export type TExperience = {
  company: string;
  job_title: string;
  dates: string;
  link: string;
}

export type TWork = {
  category: string[];
  name: string;
  icon: string;
  link: string;
}