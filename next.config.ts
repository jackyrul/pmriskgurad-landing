import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const repoName = "pmriskgurad-landing";
const useRepoBasePath =
  process.env.NODE_ENV === "production" &&
  process.env.USE_REPO_BASE_PATH === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: useRepoBasePath ? `/${repoName}` : "",
  assetPrefix: useRepoBasePath ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: useRepoBasePath ? `/${repoName}` : "",
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
