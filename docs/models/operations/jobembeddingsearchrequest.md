# JobEmbeddingSearchRequest

## Example Usage

```typescript
import { JobEmbeddingSearchRequest } from "servicem8/models/operations";

let value: JobEmbeddingSearchRequest = {
  q: "replace hot water system",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `q`                                          | *string*                                     | :heavy_check_mark:                           | Search query string                          | replace hot water system                     |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | Maximum number of results to return (max 50) |                                              |
| `similarityThreshold`                        | *number*                                     | :heavy_minus_sign:                           | Minimum similarity score (0.0 to 1.0)        |                                              |