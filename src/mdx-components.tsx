import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ImgHTMLAttributes } from "react";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    img: (props) => (
      <ImageZoom
        {...(props as ImgHTMLAttributes<HTMLImageElement>)}
        className="rounded-2xl overflow-hidden"
      />
    ),
    ...components,
  };
}
