# Progress

## Current: Module 1, step 3 done (pending: commit); next is step 4 (functions, optional/default params, unions, narrowing; revisit `unknown` via narrowing)
Open question, not yet answered: why doesn't pinning exact versions in package.json replace a lock file? (transitive dependencies)

Note for later: `tsconfig.json` has `"types": []`, so Node types are not loaded. Expect `process.env` to fail type-checking in Module 3 (dotenv). Let the learner hit it and diagnose it.

Module 1 plan:
1. Project setup: npm, TypeScript, tsx, `tsconfig.json` with strict mode
2. Types and inference, `any` vs `unknown`
3. Interfaces and type aliases for test data
4. Functions: optional/default params, union types, narrowing
5. Modules: import/export
6. Promises and async/await, floating promises
7. Exit check: explain what every `await` in a Playwright test waits for

## Mastered
- tsx/Playwright erase types without checking; `tsc --noEmit` checks only. Predicted correctly, verified with exit codes (2026-11-23)
- Lock file must be committed (reproducible installs); introduced `npm ci` for CI (2026-11-23)
- Inference, annotate at boundaries; `any` disables checking (typo passes tsc, crashes at runtime). Predicted correctly (2026-11-23)
- `tsc` checks the whole project; passing a file name ignores tsconfig (TS5112)
- Interfaces, optional props; object literals are checked but `JSON.parse` (any) is not. Predicted A–D correctly (2026-11-23)
- Interface on external data is a promise, not a check (antipattern logged). On E, predicted "undefined" and missed that `.toFixed` on undefined throws

## Weak spots (revisit)
- `unknown`: predicted tsc would pass; it blocks any use until narrowed. Verified with TS18046. Re-check in step 3/4 (narrowing)
- Connecting types to test value: needed scaffolding (3 small questions) to see that a `: Booking` annotation on `response.json()` verifies nothing and only `expect` lines check. Got there after that. Re-test in a Module 2/5 drill
- Checking results: ran tsc against an unsaved empty file and took exit 0 as a pass. Theme: "green only means something if it could fail"

## Drill scores
| Drill | Found | Missed | False alarms |
|---|---|---|---|

## Shown (not solved by the learner)
- (none yet)
