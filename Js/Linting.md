# Linting 
## Style Guides
Consistent style improves readability and maintainability.

Popular JavaScript Style Guides:

Airbnb Style Guide

Google JavaScript Style Guide

JavaScript Standard Style

## Linting with ESLint
What is it?
A tool to detect and optionally fix style errors in your code based on defined rules.

Key Tool:

ESLint

Setup Highlights:

Installed as a dev dependency.

Configurable through .eslintrc (v8) or eslint.config.js (v9+ flat config).

Some plugins (e.g., eslint-config-airbnb-base) may not yet support ESLint v9.

Note:
If using Airbnb's config, stick with ESLint v8 for now.

## Formatting with Prettier
What is it?
A tool that auto-formats code for consistent layout (e.g., spacing, indentation, line-breaks).

Key Tool:

Prettier

Highlights:

Installed as a dev dependency.

Minimal configuration.

Reduces decisions and improves speed by enforcing consistent formatting.

## IDE Extensions
Both ESLint and Prettier have Visual Studio Code extensions for real-time feedback.

ESLint Extension: Shows inline errors/warnings.

Prettier Extension: Formats code on save or shortcut.

Important:
These extensions are for convenience only. You should still include ESLint and Prettier as project dependencies with proper config files.

## Using ESLint + Prettier Together
Both tools can be used side-by-side.

If using plugins like eslint-config-airbnb-base, install eslint-config-prettier to prevent conflicts.

If using default ESLint, no special config is needed.

## Template Repositories
You can pre-configure ESLint and Prettier in template repositories to streamline future projects.
