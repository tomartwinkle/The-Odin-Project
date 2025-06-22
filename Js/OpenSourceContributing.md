# OSS Contributions
1. First find a github open source repo to make contributions on, read the contribution docs and find good issues
The key players are :
- upstream (the original github repo)
- origin (your fork of that repo)
- local (your local clone of that repo)
“local” can only pull from upstream, not push
2. Fork the repository
3. Clone your forked repository onto your local machine using something like git clone git@github.com:your_user_name_here/curriculum.git(use SSH)
4. Since we cloned it locally , we already have a remote pointing towards our origin which is what we use to push our changes into your github repo however we wont be able to pull anything from the original github(upstream) which is why we need to create another remote pointing towards upstream
```
git remote add upstream git@github.com:TheOdinProject/curriculum.git
```
5. So by default we have the main branch - this branch is used for production ready code (of the original repo not our forked repo). Whatever changes we make should be made in a separate branch inside our repo and sent to the main via a pull request to be merged.
So first create a new branch.
6. Once we are done with our work , chances are someone has made changes into the upstream in the meantime which is why to avoid any conflicts we fetch the most updates copy
```
git fetch upstream
```
7. Now merge the changes in upstream into our local version using git merge and make sure ur on ur main branch using `git checkout main` and then to merge the upstream changes we just fetched : `git merge upstream/main`
8.  Now that the main branch is upto date , we need to merge our feature branch into the main branch (Yes , its weird cuz shudnt we merge our feature branch into main instead ? Not yet, we need to make sure our branch is conflict free so anytime we want to merge it we shud first merge it with a senior branch like our local repo's main to make sure its conflict free)
```
git checkout branchName
git merge main
```
9.  You can’t send directly to upstream because you don’t have access, so you’ll need to make a pull request. Use git push origin your_feature_name to ship your feature branch up to your fork on GitHub.
