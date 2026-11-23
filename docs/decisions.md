# Decisions

Why the framework is built the way it is. One entry per decision.

<!--
## YYYY-MM-DD: Title
**Context:**
**Decision:**
**Alternatives considered:**
**Consequences:**
-->

## 2026-11-23: Commit package-lock.json, install with npm ci in CI
**Context:** `package.json` uses version ranges (`^4.23.15`). Without a lock file, a fresh install can resolve newer versions, so the same commit can pass on one day and fail on another with no change in the repo.
**Decision:** Commit `package-lock.json`. CI installs with `npm ci`, which installs exactly what the lock file says and fails if the lock file and `package.json` disagree.
**Alternatives considered:** Not committing the lock file, rejected because installs can't be reproduced. Pinning exact versions in `package.json`, rejected because it only pins direct dependencies, not their dependencies.
**Consequences:** Dependency updates are deliberate (`npm install` or `npm update` locally, then commit the changed lock file). A merge conflict in the lock file is fixed by re-running `npm install`, not by editing the file by hand.

