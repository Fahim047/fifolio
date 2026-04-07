import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import { H1, H2, H3 } from "@/components/Heading";
import Keyword from "@/components/Keyword/Keyword";
import type { MDXComponents } from "mdx/types";
export const COMPONENTS_MAP: MDXComponents = {
  pre: CodeSnippet,
  h1: H1,
  h2: H2,
  h3: H3,
  code: Keyword,
};
