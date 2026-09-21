# Netlify deployment

## Existing resources

- Repository: `https://github.com/destins97/smooveoperator-netlify` (private).
- Existing Netlify project: `smooveoperator`.
- Existing site ID: `39a5f333-e6c4-4ad0-90c8-587092b5e6ac`.
- Current production origin: `https://smooveoperator.netlify.app`.
- The inspected current deploy is a manual upload, not a Git build. A repository connection has not been verified.
- Netlify reported Forms as **not enabled** during inspection.

## Recommended: review first

The redesign is delivered on its own review branch. Keep the current production deploy until visual review, policy review, and form delivery verification are complete. No domain purchase or paid integration is required by this code.

1. In the existing Netlify project's continuous deployment settings, link the existing private GitHub repository. Keep the repository private. Use root base directory, build command `npm run build`, and publish directory `dist`. The committed `netlify.toml` supplies these values.
2. Enable deploy previews and use the redesign pull request to build a review deployment. Check the account's current plan and usage limits before enabling features that might cause charges.
3. Enable Netlify form detection in the project's Forms settings. Redeploy the preview so Netlify detects the static `business-inquiry` form.
4. Check that the registered form contains name, company, email, phone, inquiry, message, and the honeypot field. Submit a clearly labeled test from the preview and confirm receipt in the Netlify Forms dashboard. A UI success state alone is not proof of dashboard delivery.
5. Configure an email notification only after a monitored business mailbox is verified. Without notifications, submissions are reviewed in Netlify's dashboard.
6. Complete the browser checks in `TESTING.md`, finalize the privacy notice and terms, and merge the review branch when ready for production.

If connecting Git automatically triggers a build of the original `main`, do not change production publish settings in a way that breaks the old site. Set up a preview from the redesign branch first or use the CLI draft workflow below, then coordinate the production branch switch with the merge.

## CLI draft workflow

On a trusted machine already signed in to the correct Netlify account:

```sh
npm ci
npm run build
npm test
npx netlify-cli login
npx netlify-cli link --id 39a5f333-e6c4-4ad0-90c8-587092b5e6ac
npx netlify-cli deploy --dir=dist --no-build
```

The final command creates a draft deployment. Do not add `--prod` until the release gates pass. For a noindex draft build, set `CONTEXT=deploy-preview` when running the build (PowerShell: `$env:CONTEXT = 'deploy-preview'`). Clear that override and rebuild before production. Do not paste authentication tokens into chat or commit them.

## Production and domain

After approval and a production build, `npx netlify-cli deploy --dir=dist --no-build --prod` publishes to the existing project. The preferred long-term flow is merging the reviewed PR into the configured production branch so GitHub triggers Netlify automatically.

After a domain is already owned and connected in Netlify, set `SITE_URL=https://the-verified-domain` and redeploy. Configure business email separately with a chosen email provider. This project does not assume `smooveoperator.com` or any mailbox is owned or working.

## Contact behavior

The form is present in generated static HTML and includes its Netlify name and honeypot. JavaScript URL-encodes a POST to `/`, shows success only after an HTTP success response, and preserves inputs after non-2xx, network, or timeout errors. Native no-JS submission uses `/thank-you/`. Netlify may intentionally treat spam differently; verify dashboard delivery with a real staging test.

## Rollback

Netlify retains deploy history; restore the previous published deploy from the dashboard if necessary. Original source is preserved in Git history. Do not delete old deploys during rollout.
