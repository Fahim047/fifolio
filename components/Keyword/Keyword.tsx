import { ReactNode } from "react";

export default function Keyword({ children }: { children: ReactNode }) {
  return <code className="note-prose italic">{children}</code>;
}
