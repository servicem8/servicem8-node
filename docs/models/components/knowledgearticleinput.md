# KnowledgeArticleInput

## Example Usage

```typescript
import { KnowledgeArticleInput } from "servicem8/models/components";

let value: KnowledgeArticleInput = {
  uuid: "123e4567-5ff6-4dc5-99f2-22b56f6d1e2b",
  name: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Record UUID key                                                                        | 123e4567-5ff6-4dc5-99f2-22b56f6d1e2b                                                   |
| `active`                                                                               | [components.KnowledgeArticleActive](../../models/components/knowledgearticleactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]                           |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `content`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `articleType`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `tags`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `relationships`                                                                        | [components.Relationship](../../models/components/relationship.md)[]                   | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |