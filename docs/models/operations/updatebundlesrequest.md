# UpdateBundlesRequest

## Example Usage

```typescript
import { UpdateBundlesRequest } from "servicem8/models/operations";

let value: UpdateBundlesRequest = {
  uuid: "d45c0120-3311-46fc-88a9-f516add2d3b1",
  materialBundleCreate: {
    uuid: "123e4567-8ec0-497f-8964-2346779754cb",
    itemNumber: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Bundle                                                                 |
| `materialBundleCreate`                                                             | [components.MaterialBundleCreate](../../models/components/materialbundlecreate.md) | :heavy_check_mark:                                                                 | Bundle fields to update                                                            |