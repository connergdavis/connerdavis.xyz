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
      "Conner Davis is a Full Stack Software Engineer who's always looking for new opportunities to grow.",
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
        <LiveReload />
        <CloudflareWebAnalytics />
      </body>
    </html>
  );
};

const CloudflareWebAnalytics: FC = function () {
  return (
    <script
      data-cf-beacon='{"token": "2374b26069754797959758ad6a788a17"}'
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
    />
  );
};

export default App;
