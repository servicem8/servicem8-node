# UpdateKnowledgeArticlesRequest

## Example Usage

```typescript
import { UpdateKnowledgeArticlesRequest } from "servicem8/models/operations";

let value: UpdateKnowledgeArticlesRequest = {
  uuid: "a84d72fc-3739-4e59-96a9-b9b943125297",
  knowledgeArticleCreate: {
    uuid: "123e4567-aa25-4b0f-96f3-2342287eb84b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Knowledge Article                                                          |
| `knowledgeArticleCreate`                                                               | [components.KnowledgeArticleCreate](../../models/components/knowledgearticlecreate.md) | :heavy_check_mark:                                                                     | Knowledge Article fields to update                                                     |