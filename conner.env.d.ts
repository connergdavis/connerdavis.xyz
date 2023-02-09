import type { DataFunctionArgs } from "@remix-run/server-runtime";
import type {
  TailwindConfig,
  TailwindFontConfig,
  TailwindTheme,
} from "tailwindcss/tailwind-config";

export type AnyObject = Record<string, unknown | unknown[]>;

export type Override<T, U> = Omit<T, keyof U> & U;

export interface Env {
  BASE_URL: string;
}

export interface ConnerFunctionArgs
  extends Pick<DataFunctionArgs, "params" | "request"> {
  context: Env;
}

export type ConnerTailwindConfig = Override<
  TailwindConfig,
  {
    theme: ConnerTailwindTheme;
  }
>;

export type ConnerTailwindTheme = TailwindTheme & {
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    success: string;
    warning: string;
    failure: string;
  };
  fontFamily: {
    sans: string;
    serif: string;
  };
  fontSize: {
    "8xl": TailwindFontConfig;
    "6xl": TailwindFontConfig;
    "5xl": TailwindFontConfig;
    "4xl": TailwindFontConfig;
    "3xl": TailwindFontConfig;
    "2xl": TailwindFontConfig;
    xl: TailwindFontConfig;
    lg: TailwindFontConfig;
  };
};
