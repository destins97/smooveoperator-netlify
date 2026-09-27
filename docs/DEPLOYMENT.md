# Existing Netlify deployment

Repository: https://github.com/destins97/smooveoperator-netlify. Public at inspection; visibility unchanged.
Project: smooveoperator. Site ID: 39a5f333-e6c4-4ad0-90c8-587092b5e6ac.
Production: https://smoove-operator.com.
Preview: https://deploy-preview-7--smooveoperator.netlify.app.
PR: https://github.com/destins97/smooveoperator-netlify/pull/7.
Review branch: revamp/supplier-editorial. Production branch: main.
Build: npm run build. Publish: dist. Node: 22.

The current supplier-first brief explicitly authorizes publishing the verified redesign. Earlier approval gates in historical handoffs are superseded. No DNS, registrar, Google Workspace, access-control, visibility or paid-service settings were changed.

## Release and rollback

Run npm ci, npm run build and npm test. Inspect the preview and verify real form receipt, then merge the reviewed head into main. Verify the actual production commit, routes, headers, canonical origin and indexing on the custom domain. Previews use noindex; production permits indexing except thank-you and 404 pages.

Pre-redesign rollback deploy: 6ab5521baa1f8400089c36fb. Source: aeec63eaa1ab06a96033a31059ade85237fe71ad. Restore through the existing Netlify deploy history if needed. Preserve history. Rollback does not require DNS changes.

## Forms

Netlify Forms was already enabled. Existing form supplier-fit-check is retained, with honeypot. The redesigned preview detected all 12 expected fields. Labeled QA submission 6ab8af631c20d1c8d6f10d6a was confirmed in Netlify on September 27 UTC. This verifies backend receipt, not mailbox notification delivery.

JavaScript posts URL-encoded data to /. Native HTML posts to /thank-you/. Local preview intentionally returns HTTP 503 for submission. Never commit credentials.
