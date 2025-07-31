# UpdateKnowledgeArticlesRequest

## Example Usage

```typescript
import { UpdateKnowledgeArticlesRequest } from "servicem8/models/operations";

let value: UpdateKnowledgeArticlesRequest = {
  uuid: "a84d72fc-3739-4e59-96a9-b9b943125297",
  knowledgeArticle: {
    uuid: "123e4567-31f7-4c7c-abd8-23110929ed3b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uuid`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | UUID of the Knowledge Article                                                        |
| `knowledgeArticle`                                                                   | [components.KnowledgeArticleInput](../../models/components/knowledgearticleinput.md) | :heavy_check_mark:                                                                   | Knowledge Article fields to update                                                   |