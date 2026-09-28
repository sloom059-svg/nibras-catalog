# Nibras external video providers

This folder documents provider-specific catalog data without changing the current YouTube catalog behavior.

## Dailymotion fields

Future Nibras builds can read these optional fields from catalog items and manual videos:

- `source`: `youtube` (default) or `dailymotion`.
- `videoId`: provider video id, e.g. `x9itz54`.
- `contentId`: stable Nibras content identity. Keep this unchanged when switching providers.
- `audioKey`: lookup key in the provider audio map.
- `audioProfile`: `mapped`, `craft`, or `original`.
- `audioOffsetMs`: timing adjustment for the clean/custom audio track.
- `fallback`: optional secondary provider definition.

Existing catalog entries without `source` stay YouTube and are not affected.

## Recommended model

Keep one stable `contentId` per episode or craft video. Provider ids may change later without breaking the audio association.

Example:

```json
{
  "title": "الحلقة 1",
  "source": "dailymotion",
  "videoId": "x123abc",
  "contentId": "octonauts_s01e01",
  "audioProfile": "mapped",
  "audioKey": "octonauts_s01e01",
  "audioOffsetMs": 0
}
```

For drawing/crafts, use `audioProfile: "craft"` and its own `audioKey`. This keeps those custom tracks separate from ordinary cleaned-audio episodes.
