/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="vite-plugin-simple-scope/types" />
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}