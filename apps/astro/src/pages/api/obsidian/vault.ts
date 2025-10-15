// src/pages/api/obsidian/vault.ts
import type { APIRoute } from 'astro';
import https from 'node:https';

export const prerender = false;

export const GET: APIRoute = async () => {
  const base = import.meta.env.OBSIDIAN_API_URL;   // e.g. http://127.0.0.1:27123
  const token = import.meta.env.OBSIDIAN_API_TOKEN;
  if (!base || !token) {
    return new Response(JSON.stringify({ error: 'Missing OBSIDIAN_API_URL or OBSIDIAN_API_TOKEN' }), {
      status: 500, headers: { 'content-type': 'application/json' }
    });
  }

  const url = new URL('/vault/', base);
  const agent = url.protocol === 'https:' ? new https.Agent({ rejectUnauthorized: false }) : undefined;

  const upstream = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    // @ts-ignore node fetch agent (Astro’s runtime accepts this)
    agent
  });

  const ct = upstream.headers.get('content-type') ?? 'application/json';
  return new Response(upstream.body, { status: upstream.status, headers: { 'content-type': ct } });
};
