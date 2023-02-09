import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { FC } from "react";
import styles from "./styles.css";

export const links: LinksFunction = function () {
  return [{ href: styles, rel: "stylesheet" }];
};

export const meta: MetaFunction = function () {
  return {
    charSet: "utf-8",
    description:
      "Conner Davis is a Full Stack Software Engineer who's always looking for new opportunities.",
    lang: "en-US",
    viewport: "width=device-width,initial-scale=1",
  };
};

const App: FC = function () {
  return (
    <html lang="en-US">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
