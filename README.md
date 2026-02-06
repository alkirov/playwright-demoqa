# QA Automation Portfolio – Playwright DemoQA Project

## Overview
This repository contains **UI and API automation tests** for DemoQA using **Playwright (JavaScript/TypeScript)**.

It demonstrates:
- Manual QA experience (8+ years)
- QA Automation with **Page Object Model (POM)**
- UI & API testing
- End-to-End user flows
- CI-ready structure with screenshots and video reporting

---

## Table of Contents
1. [Technologies](#technologies)
2. [Project Structure](#project-structure)
3. [Key Features](#key-features)
4. [E2E Testing](#e2e-testing)
5. [CI Integration](#ci-integration)
6. [How to Run](#how-to-run)
7. [Notes / Limitations](#notes--limitations)
8. [Contact](#contact)

---

## Technologies
- **Playwright (JS/TS)** – UI and API automation  
- **Node.js** – runtime for Playwright  
- **npm** – package management  
- **DemoQA** – test application  
- **GitHub Actions** – CI/CD workflow

---

## Project Structure

playwright-demoqa/
├── config/
├── data/ ← test data (users, input sets)
├── node_modules/
├── pages/ ← Page Object Model classes
├── tests/ ← UI & API test suites
├── utils/
├── package.json
├── playwright.config.js
└── README.md


---

## Key Features
- **Page Object Model (POM)** – clean and reusable design  
- **UI tests** – login, forms, checkboxes, dropdowns  
- **API tests** – user creation, validation, error handling  
- **Data-driven testing** – external test data via `data/`  
- **Negative & boundary tests** – invalid login, empty fields, special characters  
- **Random user generation** for E2E tests  
- **Screenshots & video capture** on failure  

---

## E2E Testing
- Demonstrates full **end-to-end user journey**:
  1. Register a random user via API
  2. Attempt login via UI
  3. Assert system behavior (DemoQA does not allow reliable positive login verification)
- Notes:
  - Validates **system stability**, not fake success
  - Screenshots & videos are captured for CI reporting

---

## CI Integration
- GitHub Actions ready
- Runs Playwright tests headless
- Captures **screenshots & video artifacts**
- Example badge:
![Build Status](https://github.com/alkirov/playwright-demoqa/actions/workflows/ci.yml/badge.svg)

---

## How to Run
- Install dependencies
 - npm install
- Run all tests
 - npx playwright install --with-deps
 - npx playwright test
- Run a single test file
 - npx playwright test tests/ui/login.spec.js

---

## Notes / Limitations
-DemoQA is a demo site: some features (login, delete) are not fully functional
-All tests are isolated and repeatable

---

## Contact
Prepared by: Aleksandar Kirov

LinkedIn: https://www.linkedin.com/in/aleksandar-kirov-00925b110/

GitHub: https://github.com/alkirov
