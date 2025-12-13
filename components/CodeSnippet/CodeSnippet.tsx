import { Code } from "bright";
import type { ComponentProps } from "react";

type CodeSnippetProps = ComponentProps<typeof Code>;

export default function CodeSnippet(props: CodeSnippetProps) {
  return (
    <Code
      {...props}
      theme={{
        dark: "github-dark",
        light: "github-light",
        lightSelector: '[data-theme="light"]',
        darkSelector: '[data-theme="dark"]',
      }}
      lang={props.lang}
      lineNumbers
      // title={"hello"}
    />
  );
}
