/**
 * 相対パス（/works/foo）を、デプロイ先のベースパス付きの絶対URLにする。
 * GitHub Pages（/repo/）でも <a href> が正しくなる。
 */
export function resolvePublicUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL;
  return `${window.location.origin}${base}${path}`;
}
