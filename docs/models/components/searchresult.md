# SearchResult

## Example Usage

```typescript
import { SearchResult } from "servicem8/models/components";

let value: SearchResult = {
  uuid: "11b76e6b-fd12-4401-905c-117b37b46f48",
  type: "job",
  title: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `uuid`                                           | *string*                                         | :heavy_check_mark:                               | UUID of the found object                         |                                                  |
| `type`                                           | *string*                                         | :heavy_check_mark:                               | Type of the object                               | job                                              |
| `title`                                          | *string*                                         | :heavy_check_mark:                               | Title of the object                              |                                                  |
| `highlights`                                     | Record<string, *any*>                            | :heavy_minus_sign:                               | Highlighted text snippets that matched the query |                                                  |