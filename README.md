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

## Continuous Integration (Bonus)

This project includes GitHub Actions CI integration to automatically run Playwright tests on every push and pull request.

### Workflow Location
.github/workflows/ci.yml

### What the Workflow Does
- Checks out the repository  
- Installs Node.js and dependencies  
- Installs Playwright browsers  
- Runs Playwright tests in headless mode  
- Generates HTML and JUnit reports  
- Uploads test artifacts (reports, screenshots, and traces)

### How to View CI Results
1. Go to the Actions tab in the repository:  
   https://github.com/ninathelmo/saucedemo-playwright/actions  
2. Click the latest Playwright Tests workflow run.  
3. View logs or download artifacts such as:  
   - playwright-report → HTML report  
   - test-results → screenshots and traces

### CI Status Badge
[![Playwright Tests](https://github.com/ninathelmo/saucedemo-playwright/actions/workflows/ci.yml/badge.svg)](https://github.com/ninathelmo/saucedemo-playwright/actions/workflows/ci.yml)

---

## How to Push Changes to GitHub

If you update files or make edits while working in your Codespace, follow these steps to push your changes to GitHub:

1. Check your changes  
   git status

2. Stage all modified or new files  
   git add .

3. Commit with a clear message  
   git commit -m "Describe your changes here"

4. Push the commit to GitHub  
   git push origin main

After pushing, visit your repository page:  
https://github.com/ninathelmo/saucedemo-playwright  
to confirm that your latest commit and files are visible.

Quick one-liner for convenience:  
git add . && git commit -m "Update project files" && git push origin main

---

This suite demonstrates a quality-over-quantity approach — focusing on critical paths that provide maximum confidence with minimal, maintainable code.