# QA Coding Test — SauceDemo (Playwright)

**Author:** Nina Lourdes T. Thelmo

---

## Test Strategy

This test suite follows a risk-based, user-journey approach to ensure the most critical functionality of the SauceDemo site is covered with concise and meaningful automation.

### What I Chose to Test
1. Login (Valid and Invalid Scenarios)
   - High business value and frequent use. Ensures authentication and error handling work correctly.
2. Add to Cart
   - Core e-commerce action verifying that selected items appear in the cart.
3. Checkout (Happy Path)
   - End-to-end validation of the complete purchase process, confirming the system supports successful transactions.

### Why These Were Prioritised
- They represent critical business flows and highest user impact.
- Failures in these areas would directly block user transactions.
- Testing these ensures stable regression coverage with minimal effort.

### Framework & Design
- Framework: Playwright (JavaScript)
- Pattern: Page Object Model (Login, Products, Cart)
- Assertions: Clear and business-oriented
- Artifacts: Screenshots, videos, and traces captured automatically on failure

---

## How to Run the Tests

1. Install dependencies
   npm ci
   npx playwright install --with-deps

2. Run all tests
   npm test

3. View the HTML test report
   npx playwright show-report

The report includes execution results, screenshots, and traces for any failed tests.

---

This suite demonstrates a quality-over-quantity approach — focusing on critical paths that provide maximum confidence with minimal, maintainable code.