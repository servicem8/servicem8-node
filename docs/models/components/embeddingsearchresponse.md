# EmbeddingSearchResponse

## Example Usage

```typescript
import { EmbeddingSearchResponse } from "servicem8/models/components";

let value: EmbeddingSearchResponse = {
  results: [
    {
      uuid: "c77b4b32-b931-43db-932a-ced56063422d",
      type: "job",
      title: "<value>",
      similarityScore: 1106.18,
    },
  ],
  query: "<value>",
  count: 834839,
  searchType: "embedding",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `results`                                                                              | [components.EmbeddingSearchResult](../../models/components/embeddingsearchresult.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `query`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The search query that was used                                                         |                                                                                        |
| `count`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | Number of results returned                                                             |                                                                                        |
| `searchType`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Type of search performed                                                               | embedding                                                                              |