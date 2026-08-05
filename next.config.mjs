import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @param {string} phase */
export default function nextConfig(phase) {
  return {
    devIndicators: false,
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"
  };
}
