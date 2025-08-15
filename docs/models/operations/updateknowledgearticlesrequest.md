# UpdateKnowledgeArticlesRequest

## Example Usage

```typescript
import { UpdateKnowledgeArticlesRequest } from "servicem8/models/operations";

let value: UpdateKnowledgeArticlesRequest = {
  uuid: "a84d72fc-3739-4e59-96a9-b9b943125297",
  knowledgeArticle: {
    uuid: "123e4567-1f61-4b1b-b208-2320ac63b73b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uuid`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | UUID of the Knowledge Article                                                        |
| `knowledgeArticle`                                                                   | [components.KnowledgeArticleInput](../../models/components/knowledgearticleinput.md) | :heavy_check_mark:                                                                   | Knowledge Article fields to update                                                   |