import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

type ImageZoomProps = ComponentProps<typeof ImageZoom>;

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    img: (props) => (
      <ImageZoom
        {...(props as ImageZoomProps)}
        className="rounded-2xl overflow-hidden"
      />
    ),
    ...components,
  };
}
