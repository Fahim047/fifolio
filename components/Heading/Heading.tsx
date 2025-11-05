import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl font-bold my-6">{children}</h1>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-semibold my-4">{children}</h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-2xl font-medium my-3">{children}</h3>
);
