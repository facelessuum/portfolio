import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    rules: {
      // The contact form synchronizes its cooldown with browser storage on mount.
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
