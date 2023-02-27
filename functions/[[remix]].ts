import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "../build";

let remixHandler: ReturnType<typeof createRequestHandler>;

export const onRequest: PagesFunction<Env> = (context) => {
  if (!remixHandler) {
    remixHandler = createRequestHandler(build, context.env.ENVIRONMENT);
  }

  return remixHandler(context.request);
};
