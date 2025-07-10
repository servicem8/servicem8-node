# ObjectSearchResponse

## Example Usage

```typescript
import { ObjectSearchResponse } from "servicem8/models/components";

let value: ObjectSearchResponse = {
  results: [
    {
      uuid: "a1dcb468-534e-40fd-abb7-1bdbb1f71abd",
      type: "job",
      title: "<value>",
    },
  ],
  query: "<value>",
  objectType: "<value>",
  count: 68735,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `results`                                                            | [components.SearchResult](../../models/components/searchresult.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `query`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The search query that was used                                       |
| `objectType`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The object type that was searched                                    |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | Number of results returned                                           |