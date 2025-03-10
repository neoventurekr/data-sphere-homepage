import type { NextConfig } from "next";
import {i18n} from "./next-i18next.config";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    emotion: true, // SWC에서 Emotion 지원 활성화
  },
  output: "export",
  i18n
};

export default nextConfig;