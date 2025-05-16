# UpdateBundlesRequest

## Example Usage

```typescript
import { UpdateBundlesRequest } from "servicem8/models/operations";

let value: UpdateBundlesRequest = {
  uuid: "d45c0120-3311-46fc-88a9-f516add2d3b1",
  materialBundle: {
    uuid: "123e4567-5f4f-4b92-814c-22bdc6ed9a2b",
    itemNumber: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Bundle                                                               |
| `materialBundle`                                                                 | [components.MaterialBundleInput](../../models/components/materialbundleinput.md) | :heavy_check_mark:                                                               | Bundle fields to update                                                          |