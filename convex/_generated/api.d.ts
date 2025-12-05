/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as blogPosts from "../blogPosts.js";
import type * as contacts from "../contacts.js";
import type * as faqs from "../faqs.js";
import type * as http from "../http.js";
import type * as init from "../init.js";
import type * as projects from "../projects.js";
import type * as router from "../router.js";
import type * as seed from "../seed.js";
import type * as testimonials from "../testimonials.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  blogPosts: typeof blogPosts;
  contacts: typeof contacts;
  faqs: typeof faqs;
  http: typeof http;
  init: typeof init;
  projects: typeof projects;
  router: typeof router;
  seed: typeof seed;
  testimonials: typeof testimonials;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
