# UpdateCategoriesRequest

## Example Usage

```typescript
import { UpdateCategoriesRequest } from "servicem8/models/operations";

let value: UpdateCategoriesRequest = {
  uuid: "a91e8171-6ae0-4f6a-8b4c-d78c5601e0a9",
  categoryCreate: {
    name: "<value>",
    uuid: "123e4567-cf19-4393-b682-23482fb0acbb",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Category                                                   |
| `categoryCreate`                                                       | [components.CategoryCreate](../../models/components/categorycreate.md) | :heavy_check_mark:                                                     | Category fields to update                                              |