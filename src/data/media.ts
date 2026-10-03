import { existsSync } from 'node:fs';
import { join } from 'node:path';
// A local video counts only if the file is actually in public/, so the page never shows a broken player.
export function videoOf(p: { video?: string }): string | undefined {
  if (!p.video) return undefined;
  if (p.video.startsWith('http')) return p.video;
  return existsSync(join(process.cwd(), 'public', p.video)) ? p.video : undefined;
}

// Company logo: drop public/img/logos/<work id>.svg|png|webp|jpg and it is picked up automatically.
export function logoOf(id: string): string | undefined {
  for (const ext of ['svg', 'png', 'webp', 'jpg']) {
    const rel = `/img/logos/${id}.${ext}`;
    if (existsSync(join(process.cwd(), 'public', rel))) return rel;
  }
  return undefined;
}
