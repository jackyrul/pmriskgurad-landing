import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const repoName = "pmriskgurad-landing";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
