import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl font-bold">{children}</h1>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-semibold text-primary">{children}</h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-2xl font-medium">{children}</h3>
);
