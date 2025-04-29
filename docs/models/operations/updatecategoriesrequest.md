# UpdateCategoriesRequest

## Example Usage

```typescript
import { UpdateCategoriesRequest } from "servicem8/models/operations";

let value: UpdateCategoriesRequest = {
  uuid: "a91e8171-6ae0-4f6a-8b4c-d78c5601e0a9",
  category: {
    uuid: "123e4567-3d68-47a1-8419-22b4ddbc000b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Category                                                 |
| `category`                                                           | [components.CategoryInput](../../models/components/categoryinput.md) | :heavy_check_mark:                                                   | Category fields to update                                            |