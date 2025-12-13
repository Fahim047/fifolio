import { ReactNode } from "react";

export default function Keyword({ children }: { children: ReactNode }) {
  return <code className="bg-muted-foreground note-prose">{children}</code>;
}
