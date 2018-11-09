# Quick Start Module

This is a module template to help you get started coding your own module. Please refer to the [_Developer's Guide_](https://botpress.io/docs/latest/docs/modules/install) to learn more about _Botpress Modules_.

## How to install

- **clone**: `cd modules/ && git clone git@github.com:botpress/quick-start-module.git`
- **zip**: Download the zip and move it under the `modules/` folder.

1. Add the module to `src/templates/data/global/botpress.config.json` under `modules`:

```json
{
  "location": "MODULES_ROOT/quick-start-module",
  "enabled": true
}
```

2. Run `yarn build` in botpress root.
1. Run `yarn start` and you should see an hint in your logs that it worked 😉
