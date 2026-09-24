// Runs before first paint so the mobile menu and the Fit Check steps render collapsed from the start.
// netlify.toml allows exactly this script by its sha256 hash; scripts/check.mjs keeps the two in step.
export const BOOT = "document.documentElement.className='js'";
