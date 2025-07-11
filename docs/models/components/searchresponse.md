# SearchResponse

## Example Usage

```typescript
import { SearchResponse } from "servicem8/models/components";

let value: SearchResponse = {
  results: [],
  query: "<value>",
  count: 368902,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `results`                                                            | [components.SearchResult](../../models/components/searchresult.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `query`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The search query that was used                                       |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | Number of results returned                                           |