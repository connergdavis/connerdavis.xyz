import type { ConnerTailwindConfig, ConnerTailwindTheme } from "conner.env";
import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error CommonJS file
import tailwindConfigFile from "../../tailwind.config";

export default function theme(): ConnerTailwindTheme {
  return (resolveConfig(tailwindConfigFile) as ConnerTailwindConfig).theme;
}
