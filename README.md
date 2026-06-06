# README Demo Generator

Add a polished demo section to a README in one command.

```bash
node ./bin/readme-demo.js --image assets/demo.png --title "Product walkthrough"
```

Great for fast GitHub launches where a screenshot or GIF should be visible near the top of the repo.

## Idempotent Updates

The generator uses a stable marker, so running it again replaces the existing demo block instead of duplicating it.
