import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    emotion: true, // SWC에서 Emotion 지원 활성화
  },
  output: "export",
};

export default nextConfig;