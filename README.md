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

#### Example:

```typescript
import { ongoing } from "otaku-desu";

const result = await ongoing();
console.log(result);
```

---

### `search(search: string)`

Searches for anime based on a keyword.

#### Parameters:

- `search`: A `string` representing the search query.

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

### `downloadEpisode(url: string, resolution?: resolution)`

Downloads a specific anime episode.

#### Parameters:

- `url`: A `string` representing the URL of the episode page.
- `resolution` (optional): A `resolution` type (`"360p" | "480p" | "720p"`) specifying the video resolution. Defaults to `"720p"`.

#### Returns:

- `Promise<downloadEpsResult>`: The download details with the following properties:
  - `title`: Title of the episode.
  - `resolution`: Selected resolution.
  - `download`: A list of download links with the following properties:
    - `provider`: Name of the provider.
    - `url`: Download link.

#### Example:

```typescript
import { downloadEpisode } from "otaku-desu";

const result = await downloadEpisode("https://example.com/episode1", "480p");
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

const result = await downloadAllEpisode("https://example.com/series", "720p");
console.log(result);
```

---

## Types

### `ongoingResult`

```typescript
export interface ongoingResult {
  number: number;
  title: string;
  day: string;
  date: string;
  episode: string;
  url: string;
  cover: string;
}
```

### `searchResult`

```typescript
export interface searchResult {
  number: number;
  title: string;
  url: string;
  cover: string;
}
```

### `downloadEpsResult`

```typescript
export interface downloadEpsResult {
  title: string;
  resolution: resolution;
  download: Array<{
    provider: string;
    url: string;
  }>;
}
```

### `resolution`

```typescript
export type resolution = "360p" | "480p" | "720p";
```

---

## License

This package is licensed under the MIT License.
