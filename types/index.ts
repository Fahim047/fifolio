export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedOn: string;
  tags?: string[];
  readingTime?: string;
  [key: string]: any; // allows custom fields
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
}

export interface BlogPostData {
  content: string;
  frontmatter: BlogFrontmatter;
}
