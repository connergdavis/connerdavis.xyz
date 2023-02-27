/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {
    unstable_dev: {
      appServerPort: 3000,
      rebuildPollIntervalMs: 500,
    },
  },
  serverDependenciesToBundle: ["@remix-run/react"],
  serverModuleFormat: "esm",
};
