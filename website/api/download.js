export default async function handler(req, res) {
  try {
    const metaUrl = 'https://f005.backblazeb2.com/file/Nibras-audio/app-releases/nibras-update.json';
    const response = await fetch(metaUrl, { headers: { 'Cache-Control': 'no-cache' } });
    if (!response.ok) throw new Error('metadata_http_' + response.status);
    const meta = await response.json();
    const apkUrl = typeof meta?.apk_url === 'string' ? meta.apk_url.trim() : '';
    const allowed =
      /^https:\/\/f005\.backblazeb2\.com\/file\/Nibras-audio\/app-releases\/Nibras-[0-9A-Za-z._-]+\.apk$/.test(apkUrl);
    if (!allowed) {
      throw new Error('invalid_apk_url');
    }
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.redirect(302, apkUrl);
  } catch (error) {
    res.status(503).send('تعذر تحديد أحدث إصدار من نبراس حاليًا.');
  }
}
