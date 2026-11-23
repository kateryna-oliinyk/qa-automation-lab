# Antipatterns

Things to avoid in test code, in my own words.

<!--
## Name
**Looks like:**
**Why it hurts:**
**Do instead:**
-->

## Trusting a type annotation on external data
**Looks like:** `const booking: Booking = await response.json();` followed by assertions on `booking`'s fields.
**Why it hurts:** `response.json()` and `JSON.parse` return `any`, so TypeScript accepts the annotation without checking. Interfaces are erased at runtime. If the API drops or renames a field, `tsc` stays green and the test either crashes with a confusing `TypeError` or quietly asserts on `undefined`. In an API test, the response shape is exactly what should be tested, and the annotation hides it.
**Do instead:** Validate external data at runtime at the boundary, with explicit assertions or a schema check (Module 5). Use `unknown` until the data has been checked.
