# Website Scraper

A TypeScript package for scraping otakudesu website. This package includes utility functions for fetching ongoing anime lists, searching, and downloading anime.

## Installation

Install the package using npm or yarn:

```bash
npm install github:arsa24/otaku-desu
```

## Functions

### `ongoing()`

Fetches the list of ongoing anime.

#### Returns:

- `Promise<ongoingResult[]>`: A list of ongoing anime with the following properties:
  - `number`: Index number of the anime.
  - `title`: Title of the anime.
  - `day`: The day it airs.
  - `date`: The release date.
  - `episode`: Current episode available.
  - `url`: URL to the anime page.
  - `cover`: Cover image URL.
  - `download`: `downloadAllEpisode()`

#### Example:

```typescript
import { ongoing } from "otaku-desu";

const result = await ongoing("480p");
console.log(result);
```

---

### `search(resolution?: resolution)`

Searches for anime based on a keyword.

#### Parameter:

- `resolution` (optional): A `resolution` type (`"360p" | "480p" | "720p"`) specifying the video resolution. Defaults to `"720p"`.

#### Returns:

- `Promise<searchResult[]>`: A list of search results with the following properties:
  - `number`: Index number of the result.
  - `title`: Title of the anime.
  - `url`: URL to the anime page.
  - `cover`: Cover image URL.

#### Example:

```typescript
import { search } from "otaku-desu";

const result = await search("naruto");
console.log(result);
```

---

### `infoAnime(url: string)`

Get some information from url

#### Parameter

- `url`: A `string` representing the URL of the series page.

#### Returns

- `title`: string;
- `titleJp`: string;
- `studio`: string;
- `producer`: string;
- `score`: string;
- `type`: string;
- `status`: string;
- `totalEpisode`: string;
- `release`: string;
- `duration`: string;
- `genre`: string;
- `synopsis`: string;
- `cover`: string;

#### Example

```typescript
import { infoAnime } from "otaku-desu";

const result = await downloadEpisode(
  "https://otakudesu.cloud/anime/blue-archive-sub-indo/"
);
console.log(result);
```

---

### `downloadEpisode(url: string, resolution?: resolution)`

Downloads a specific anime episode.

#### Parameters:

- `url`: A `string` representing the URL of the episode page.
- `resolution` (optional): A `resolution` type (`"360p" | "480p" | "720p"`) specifying the video resolution. Defaults to `"720p"`.

#### Returns:

- `Promise<downloadEpsResult>`: The download details with the following properties:
  - `title`: Title of the episode.
  - `resolution`: Selected resolution.
  - `dl`: A list of download links with the following properties:
    - `Series`: Download all episode from anime
    - `Batch` : Download batch anime

#### Example:

```typescript
import { downloadEpisode } from "otaku-desu";

const result = await downloadEpisode(
  "https://otakudesu.cloud/episode/bata-episode-12-sub-indo/",
  "480p"
);
console.log(result);
```

---

### `downloadAllEpisode(url: string, resolution?: resolution)`

Downloads all episodes from a series page.

#### Parameters:

- `url`: A `string` representing the URL of the series page.
- `resolution` (optional): A `resolution` type (`"360p" | "480p" | "720p"`) specifying the video resolution. Defaults to `"720p"`.

#### Returns:

- `Promise<downloadEpsResult[]>`: A list of download details for all episodes.

#### Example:

```typescript
import { downloadAllEpisode } from "otaku-desu";

const result = await downloadAllEpisode(
  "https://otakudesu.cloud/anime/blue-archive-sub-indo/",
  "720p"
);
console.log(result);
```

---

### `downloadBatch(url: string, resolution?: resolution)`

Download Batch from otaku batch link

#### Parameters:

- `url`: A `string` representing the URL of the batch page.
- `resolution` (optional): A `resolution` type (`"360p" | "480p" | "720p"`) specifying the video resolution. Defaults to `"720p"`.

#### Returns:

- A list of download batch for anime.

#### Example:

```typescript
import { downloadBatch } from "otaku-desu";

const result = await downloadBatch(
  "https://otakudesu.cloud/batch/bata-batch-sub-indo/"
);
console.log(result);
```

---

## Types

### `resolution`

```typescript
export type resolution = "360p" | "480p" | "720p";
```

---

## License

This package is licensed under the MIT License.
