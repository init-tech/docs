# Welcome to init! 🚀
> init is a tool built so you can stop worrying about documentation and focus on your code.
## Getting Started
Currently we are running a closed beta to ensure nothing [massively] breaks, you can get early access [here](https://init-tech.typeform.com/to/prpf3wWe).

If you want to try it out on an open source project you can go to https://init.me/open-src/:owner/:repo

Also, feel free to join our [discord](https://discord.com/invite/hkCh2bb) to get in touch with us and get the latest updates :)

## How it works
We currently support React components and custom hooks.

Once you access a certain repo through init, with the right permissions, we crawl through your codebase to extract all your React code. We further analyze your components and output documentation just like this one. Once it loads, you should have a getting started section with all your top-level `.md` files, a component section with all your components and their docs, and a hooks section with all your custom hooks and their docs.

init automatically generates your documentation by compiling your project up. Once we detect a component, you should see:
- how it looks like (through a sandboxed version of your component)
- how to use it (through other usages within the codebase)
- its API (through Typescript, PropTypes, or our inference engine)
- its state, context, reducers and lifecycle (if you use React Hooks)
- and how its connected to the codebase (through Dependency Graph)

## Demos
There are many example projects created by the React community, and we're trying to document them all. Here are a few projects that the React team [showcases](https://reactjs.org/community/examples.html) or by friends of init:
- [React Sandbox Editor](https://init.me/open-src/malerba118/react-sandbox-editor) A set of React components including a sandbox interpreter and editor
- [Calculator](https://init.me/open-src/ahfarmer/calculator) Implementation of the iOS calculator built in React
- [BMI Calculator](https://init.me/open-src/GermaVinsmoke/bmi-calculator) A React Hooks app for calculating BMI
- [Snap Shot](http://init.me/open-src/Yog9/SnapShot) A photo gallery with search

## Issues

We're currently working on a roadmap in which, in the future, you will be able to upvote issues so we can get the features you want out of the door faster. Want a feature that's not there? Talk to us on [discord](https://discord.com/invite/hkCh2bb) and we will start working on it.

## Something Missing?
If something is missing in the documentation or if you found some part confusing, please talk to us on [discord](https://discord.com/invite/hkCh2bb), or file an issue for this repository with your suggestions for improvement. We love hearing from you!
