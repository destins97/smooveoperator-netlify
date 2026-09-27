# Recovery deployment

Preview only. The September 27 recovery brief supersedes earlier publishing authorization. Do not merge or replace production until Destin explicitly says "Ship it."

Repository: https://github.com/destins97/smooveoperator-netlify
Netlify project: smooveoperator (39a5f333-e6c4-4ad0-90c8-587092b5e6ac)
Production: https://smoove-operator.com
Production branch: main
Recovery branch: recovery/premium-industrial-commerce
Preservation branch: preserve/production-2026-09-27
Preserved production commit: 5a2ff52dd7cb6083b4b84f47565893d5a86761ce
Preserved production deploy: 6ab8b1a09ea4800008737c6b
Preferred Departures reference: aeec63eaa1ab06a96033a31059ade85237fe71ad

Build: npm run build. Publish directory: dist. Node 22. Existing Git integration creates the pull request preview. No DNS, registrar, Google Workspace, repository visibility, access controls or paid settings changed.

## Approval and publication

After the preview is reviewed and Destin says "Ship it", merge the recovery pull request into main. Verify the resulting production deploy, custom-domain routes, indexing and form behavior. Preserve both reference branches and Netlify deployment history. Rollback can restore the preserved deployment without DNS changes.

## Forms

Existing supplier-fit-check form and honeypot are preserved. JavaScript posts URL-encoded data to /. Native HTML posts to /thank-you/. Local development deliberately responds HTTP 503 to form submissions. Never commit credentials. Preview receipt will be recorded in the review handoff; backend receipt does not prove mailbox notification delivery.
