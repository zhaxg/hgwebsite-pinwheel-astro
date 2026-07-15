import { defineMiddleware } from "astro:middleware";

const ALLOWED = ["CN"];

export const onRequest = defineMiddleware((context, next) => {
  const country = context.request.headers.get("x-vercel-ip-country") || "";
  if (!ALLOWED.includes(country)) {
    return new Response("Access Denied", { status: 403 });
  }
  return next();
});
