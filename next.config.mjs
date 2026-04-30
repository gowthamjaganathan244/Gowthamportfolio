/** @type {import('next').NextConfig} */

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const isUserSite = repoName?.endsWith(".github.io")

const basePath =
  isGithubActions && repoName && !isUserSite ? `/${repoName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["three"],
}

export default nextConfig
