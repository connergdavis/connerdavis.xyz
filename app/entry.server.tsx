import type { EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

const connects = "'self' ws:";
const forms = "'self'";
const frameAncestors = "'none'";
const imgs = "'self'";
const media = "'none'";
const objects = "'none'";
const styles = "'self'";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
): Response {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Security-Policy", contentSecurityPolicy());
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
  responseHeaders.set("Cross-Origin-Resource-Policy", "same-origin");
  responseHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  responseHeaders.set("X-Content-Type-Options", "nosniff");
  responseHeaders.set("X-Frame-Options", "deny");
  responseHeaders.set("X-XSS-Protection", "1");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

function contentSecurityPolicy(): string {
  const isDevelopmentMode = process.env["NODE_ENV"] === "development";
  const scripts =
    "'self' static.cloudflareinsights.com " +
    (isDevelopmentMode ? "'unsafe-inline'" : "");

  return (
    "default-src 'self'; " +
    "base-uri 'none'; " +
    `connect-src ${connects}; ` +
    `form-action ${forms}; ` +
    `frame-ancestors ${frameAncestors}; ` +
    `img-src ${imgs}; ` +
    `media-src ${media}; ` +
    `object-src ${objects}; ` +
    `script-src ${scripts}; ` +
    `style-src ${styles};`
  );
}
