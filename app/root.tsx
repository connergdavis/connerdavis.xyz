import type { HtmlLinkDescriptor, HtmlMetaDescriptor } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import styles from "~/tailwind.css";

export function links(): HtmlLinkDescriptor[] {
  return [{ href: styles, rel: "stylesheet" }];
}

export function meta(): HtmlMetaDescriptor {
  return { title: "Conner Davis | Full Stack Engineer" };
}

export default function App(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
}
