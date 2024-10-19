# Commit Messages
## Why Good Commit Messages Matter
1. Career Advantage: Potential employers review your GitHub repositories and commit history. Clear, concise messages demonstrate professionalism and attention to detail.
2. Collaboration: A well-structured commit history makes it easier for developers working on the same codebase to understand what changes were made and why.
3. Future Reference: If you come back to a project after some time, meaningful commit messages help you understand your own thought process and decisions when you revisited the code.

## Bad vs. Good Commit Messages
Bad Example: fix a bug
This doesn’t explain what the bug was or how it was fixed, which can confuse other developers.

Good Example:
Subject: Add missing link and alt text to the company’s logo
Body:
Screen readers won’t read the images to users with disabilities without this information.
This provides context about what was changed and why, improving clarity for others (or yourself later on).

## How to Write a Good Commit Message
Subject:
Summarize what the change is in a short, clear sentence (within 72 characters).
Body:
Explain the why behind the changes and any relevant details (e.g., bug fixes, improvements, new features).
Keep the body concise but informative.
Formatting:
Separate the subject and body with a blank line for clarity.
Use active voice (e.g., "Fix card generator" instead of "Fixed card generator").
Avoid vague messages like “saved” or “updated.”

## When to Commit
Commit frequently: Each time you reach a milestone or fix something important.
Capture meaningful snapshots: Commit when code is functional or a bug is resolved, ensuring that your progress is saved.
Track your progress: If you’re unsure of what you changed, revisiting past commits can help you identify the exact point where things broke.
How to Commit with Multi-Line Messages

Instead of using git commit -m "message", run git commit without the -m flag. This will open an editor (like Visual Studio Code) where you can enter a detailed message.

Use a clear subject line.
Add a meaningful description in the body.
Follow a consistent format.
Avoid vague or meaningless messages.
Key Tips
Use an active voice: "Fix card generator" rather than "Updated card generator".
Write early and often: Commit regularly rather than making huge commits.

### Benefits of Good Commit Messages:
Help employers understand your work.
Provide clarity on changes, making it easier to debug later.
Subject Line Character Limit:
It should be under 72 characters for readability.

