# EmbeddingSearchResult

## Example Usage

```typescript
import { EmbeddingSearchResult } from "servicem8/models/components";

let value: EmbeddingSearchResult = {
  uuid: "d9d8c5ab-3749-4a19-a10f-4a319a2171b5",
  type: "job",
  title: "<value>",
  similarityScore: 882.17,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | UUID of the found job                                |                                                      |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | Type of the object                                   | job                                                  |
| `title`                                              | *string*                                             | :heavy_check_mark:                                   | Title of the job                                     |                                                      |
| `description`                                        | *string*                                             | :heavy_minus_sign:                                   | Job description                                      |                                                      |
| `status`                                             | *string*                                             | :heavy_minus_sign:                                   | Current job status                                   |                                                      |
| `similarityScore`                                    | *number*                                             | :heavy_check_mark:                                   | Similarity score between 0.0 and 1.0                 |                                                      |
| `matchedContent`                                     | *string*                                             | :heavy_minus_sign:                                   | The content that was matched in the embedding search |                                                      |