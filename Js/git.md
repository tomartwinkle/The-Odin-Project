# Git 
# Changing git history 
If you ever mess up a commit or miss writing one, you can always change the git history. 

```
//example : 
touch test{1..4}.md
git add test1.md && git commit -m "create first file"
git add test2.md && git commit -m "create send file"
git add test3.md && git commit -m "create third and fourth file"
```
The issue here is that 2nd commit message has a type where 'send' should have been 'second' and the 4th file was never added.
```
//check any issues using:
git log && git status

//fix using --amend
git add test4.md
git commit --amend
```
The command `git commit --amend` aopens the code editor and we can make the changes we require. <br><br>
**NOTE : ** Remember to only amend commits that have not been pushed anywhere! The reason for this is that git commit --amend does not edit the last commit, it replaces that commit with an entirely new one. This means that you could potentially destroy a commit other developers are basing their work on. When rewriting history always make sure that you’re doing so in a safe manner, and that your coworkers are aware of what you’re doing.
# Changing multiple commits 
We can use `git rebase -i` command that needs to have what files we want to edit after it so lets say we want our last 2 files : 
```
git rebase -i HEAD~2

//code editor opens the last 2 commits 
```
(its in opposite order)
Then we have lots of options to select from , for now if we want to fix the typo in 2nd commit we can use 'edit'as a prefix and then close and save. Then using 
`git commit --amend` we can make the changes and finally `git rebase --continue` to save the changes and continue. Instead of pick and edit there are many other options as well. 
## Squashing commits
Its a way to combine multiple edits into one. <br>
Example : Lets try to squash our 2nd commit into our 1st one. First we rebase into our root `git rebase -i --root` .Pick the first commit and squash the second commit.
```
git rebase -i --root
//inside VSCode :
pick e30ff48 Create first file
squash 92aa6f3 Create second file
pick 05e5413 Create third file and create fourth file
```
A new VSCode window will open where we can now  rename the commit to `create first and second file` and then continue with the rebase and log the changes `git log`
## Splitting up a comment 
`git reset` is a command that helps us split a commit message. 
<br>Example : Lets say the commit `create third and fourth file` is giving too much info for now and we want to split it for better organisation of commits.<br>
Again open up the rebase tool all the way upto the root `git rebase -i --root` and change the commit we want to split from pick to edit. Now code `git reset HEAD~` This resets the commit to the one right before HEAD and allows us to add files individually with their own commit messages.
```
git reset HEAD~
git add test3.md && git commit -m 'Create third file'
git add test4.md && git commit -m 'Create fourth file'

```
Notes: 
- git reset HEAD~: Resets to previous commit and un-stages changes.

- git reset --soft HEAD~: Moves HEAD but keeps staging area.

- git reset --hard HEAD~: Resets HEAD, staging area, and working directory.

⚠️ --hard can delete uncommitted work. Use with caution.
# Branches are pointers
Branches are most used in team work where we upload our alternate versions of the files by creating a branch , updating upto date and then making our changes and instead of pushing it into origin, we send a PR request to be accepted (merged).
## Branching basics
1. Create a branch and checkout(come to that branch as by default we are in the main branch)
```
git checkout -b branchName
```
2. Make changes, commit your code:
3. Push your branch to GitHub:
```
git push origin branchName
```
4. Create a Pull Request (PR):

Go to GitHub repo.

Click "Compare & pull request" to propose merging your changes into main.
5. Merge after review:
Once approved, you or a teammate can merge it into main.

6. Clean up:
Delete the branch locally and on GitHub:
```
git branch -d branchName
git push origin --delete branchName
```

- Imagine Git like a timeline of photos (commits).
- Every time you commit, Git takes a snapshot (like saving your work).

- Each commit points back to the one before it — like a linked chain of events.
<br><br>
So, what’s a branch?
<br><br>A branch is simply a label or pointer to the latest snapshot (commit) in your timeline.
<br><br>
It helps Git know "Hey, this is where I'm working right now."

When you make a new commit, the branch moves forward to point to the new one.
<br><br>
What about HEAD?
<br><br>
HEAD is Git's current focus — it points to the branch you're working on, which in turn points to the latest commit.
<br><br>
In short:
- Branch = Points to a commit.

- Commit = Snapshot + points to the commit before it.

- HEAD = Pointer to the current branch you're on.
