import type { NextConfig } from "next";
const config: NextConfig = {
  async redirects() {
    return [
      {
        source: "/collections/essentielle",
        destination: "/collections/wildflower",
        permanent: true,
      },
      {
        source: "/collections/signature",
        destination: "/collections/nocturne",
        permanent: true,
      },
      {
        source: "/collections/prestige",
        destination: "/collections/townhouse",
        permanent: true,
      },
    ];
  },
};
export default config;
