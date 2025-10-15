// src/pages/api/obsidian/vault.ts  (or your [...path].ts)
import type { APIRoute } from 'astro';
import https from 'node:https';

export const prerender = false;

export const GET: APIRoute = async () => {
  const base = import.meta.env.OBSIDIAN_API_URL!;
  const token = import.meta.env.OBSIDIAN_API_TOKEN!;
  const url = new URL('/vault/', base);
  const agent = url.protocol === 'https:' ? new https.Agent({ rejectUnauthorized: false }) : undefined;

  const upstream = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    // @ts-ignore
    agent
  });

  // ensure charset is present
  const headers = new Headers(upstream.headers);
  const ct = headers.get('content-type') || 'application/json';
  if (!/charset=/i.test(ct)) headers.set('content-type', `${ct}; charset=utf-8`);

  return new Response(upstream.body, { status: upstream.status, headers });
};
