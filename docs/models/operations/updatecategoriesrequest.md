# UpdateCategoriesRequest

## Example Usage

```typescript
import { UpdateCategoriesRequest } from "servicem8/models/operations";

let value: UpdateCategoriesRequest = {
  uuid: "a91e8171-6ae0-4f6a-8b4c-d78c5601e0a9",
  category: {
    name: "<value>",
    uuid: "123e4567-cd9d-437c-8a14-230b7bc1b2cb",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Category                                                 |
| `category`                                                           | [components.CategoryInput](../../models/components/categoryinput.md) | :heavy_check_mark:                                                   | Category fields to update                                            |