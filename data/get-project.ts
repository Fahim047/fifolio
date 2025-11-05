import data from "@/data/data.json" with { type: "json" };
import { cache } from "react";

export const getProjectBySlug = cache((slug:string) => {
  return data.projects.find((project) => project.slug === slug);
})