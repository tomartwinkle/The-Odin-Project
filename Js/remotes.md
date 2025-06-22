# Remotes
In Git, a remote is a version of your repository that’s hosted somewhere else, typically on a server or platform like GitHub, GitLab, or Bitbucket.
It allows you to collaborate with others by pushing your changes to the remote and pulling updates made by others.
| Command                       | What it does                                           |
| ----------------------------- | ------------------------------------------------------ |
| `git remote -v`               | Shows the URLs of your remote repositories             |
| `git remote add origin <url>` | Connects your local repo to a remote repo              |
| `git push origin main`        | Pushes your local `main` branch to the `origin` remote |
| `git pull origin main`        | Pulls the latest changes from `origin/main`            |
| `git fetch upstream`          | Downloads commits from the `upstream` repo             |

<br>Here's a typical workflow when working with the original repo and your own fork:

```bash
git fetch upstream main
git checkout your_branch_name
git push origin your_branch_name
# Create Pull Request to Upstream Repository
# Maintainers review and merge
```
## git push --force (Danger)
Why it's risky:
- Overwrites remote history
- Can destroy work others have added
- Should be avoided in team settings unless necessary

Example that causes loss:
```
git rebase -i --root
# Removed a commit accidentally
git push --force
```
Safer alternatives:
Instead of force-pushing, use:
```
git fetch origin
git merge origin/main
```
Undoing Commits Safely
You made a mistake and want to undo a commit?
Use:
```
git revert HEAD
git push origin main
This adds a new commit that reverses the last commit—safe for teams!
```
When is git push --force OK?
- Updating your own pull request (when you're the only one working on the branch)
- Removing sensitive info (like API keys accidentally pushed)
- Use --force-with-lease instead of --force:
```
git push --force-with-lease
It checks if the remote branch has been updated before overwriting!
```
Dangers & Best Practices for History-Altering Commands

- NEVER rewrite public/shared history without talking to teammates.
- Use these commands only on branches you work on alone.
- The -f or --force flag should make you stop and double-check.
- Avoid rewriting history if the branch is already pushed

| Command              | Best Practice                                              |
| -------------------- | ---------------------------------------------------------- |
| `git commit --amend` | Don’t amend commits that are already pushed                |
| `git rebase`         | Never rebase shared/public branches                        |
| `git reset`          | Avoid resetting pushed commits (can delete work)           |
| `git push --force`   | Use only when truly necessary, prefer `--force-with-lease` |
