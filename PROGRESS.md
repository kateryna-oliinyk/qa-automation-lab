# Progress

## Current: Module 1, step 1 done (pending: commit); next is step 2

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

## Weak spots (revisit)
- (none yet)

## Drill scores
| Drill | Found | Missed | False alarms |
|---|---|---|---|

## Shown (not solved by the learner)
- (none yet)
