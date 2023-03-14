# Modern People

This is a reimagining of the modernpeople website in SvelteKit. 



## Repository 

We store image and video assets in this repository using [Git LFS](https://git-lfs.github.com/). For local development, please follow the link to setup.

## Setup

As a "modern JS application", development setup is slightly involved. If you're not used to local web development, we recomend you use a hosted, cloud-based workspace such as Github Code Spaces. Ironically they're not working out of the box atm though. :|

### Developing

First, ensure you have a node-based JS development stack. You can [follow these instructions](https://nodejs.org/en/) to install Node locally. On a Mac, you can install this using [homebrew](https://brew.sh):

```bash
brew install node
```

Check out the repository to a local folder, e.g. ~/code:

```bash
mkdir -p ~/code && cd ~/code
git clone https://github.com/ModernPeople/website-2023.git
cd website-2023
```

Then, inside the project directory, install development dependencies specified in `package.js` using `npm` or an alternative JS package manager such as `pnpm` or `yarn`. (As of 2023-03-14 we're using `npm` in CI, so Ludwig uses `npm` locally, too.)

```bash
npm install

# or pnpm, yarn, etc
pnpm install
yarn install
```
That can take a minute, but if it succeeds, you can start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a local production build of the site:

```bash
npm run build
```

You can then locally preview the production build with `npm run preview`.

### Deploying

The site is built by Github actions and deployed to Github pages — you can develop on branches, then simply commit to the `main` branch to deploy.

### Using a "Devcontainer"

To insulate your development environment, you can develop in a container image specified by a `.devcontainer/devcontainer.json` file. You can use this in VS Code by following [these three installation steps](https://code.visualstudio.com/docs/devcontainers/containers#_installation) — installing [Docker Desktop](https://www.docker.com/products/docker-desktop),  [VSCode](https://code.visualstudio.com/), and its [`Dev Containers extension`](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

### Using a cloud-based editor

You can avoid having to install anything to edit this website by opening this repository in a code editor that you operate from inside your browser. These can either actually run directly, locally, inside your browser, or they can be remotes for servers running in a data center somewhere.

#### Stackblitz, in your browser
 An example of this is Stackblitz, which works "in Chromium-based browsers and Firefox":

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ModernPeople/website-2023?startScript=dev)

Unfortunately this currently doesn't work with out dynamic image compression pipeline, which isn't being offered for the weird in-browser architecture we're running on:

```
Cannot find module '../build/Release/sharp-linuxnull-x64.node'

Require stack:
- /home/projects/mklimxkmw.github/node_modules/sharp/lib/sharp.js
- /home/projects/mklimxkmw.github/node_modules/sharp/lib/constructor.js
- /home/projects/mklimxkmw.github/node_modules/sharp/lib/index.js

Possible solutions:
- Install with verbose logging and look for errors: "npm install --ignore-scripts=false --foreground-scripts --verbose sharp"
- Install for the current linuxnull-x64 runtime: "npm install --platform=linuxnull --arch=x64 sharp"
- Consult the installation documentation: https://sharp.pixelplumbing.com/install
```

If you have any idea how to fix this — maybe by finding a way to run `sharp` on Stackblitz's Web Container architecture, or maybe by allowing to run in a mode in which images aren't downscaled dynamically so we don't need `sharp`; please let us know!


#### Codespaces, on Github infrastructure

On the [Github repo overview page](https://github.com/ModernPeople/website-2023) you can click the green Code button, select the "Codespaces" tab instead of the "local" one. This should work out of the box with the configured devcontainer.json image, but will sometimes give me trouble were I can't view the running app in my browser; something goes wrong on Github's end wrt to port forwarding; it just hangs forever instead of connecting. I've tried switching to publicly visible previews instead, and adding `-- --host` to my `npm run dev` script.

## Adding a new project

Projects on the Modern People website show up in two spaces: 
- as a preview on the main `/work` page:
![preview on main /work page](docs/work-previews.png)
- as a number of deep dive info snippets shown paginated on the project-specific sub-pages:
![project deep dive](docs/project-deepdive.png)

### Per-project folder organization

Both of these are stored in one subfolder per project (e.g. `src/routes/(pages)/work/(projects)/phantogram`), together with any required image assets. For example, in the above screenshots, the 2-by-2 image of screengrabs (`src/routes/(pages)/work/(projects)/phantogram/Phantogram.jpg`) is used in both the preview and in the deepdive. The preview is defined in a file called `Preview.svelte`, the deep dive pages are defined in a file called `+page.svelte`:

- Deep dive: `src/routes/(pages)/work/(projects)/[project slug]/+page.svelte`
- Preview: `src/routes/(pages)/work/(projects)/[project slug]/Preview.svelte`

Both those files can import shared assets, for example the `Preview.svelte` here is really just this single 2-by-2 image of screengrabs, which is also imported in the deep dive pages:

```ts
import image from './Phantogram.jpg?run';
```

The Preview *component* itself then also needs to be imported in the main `/work` page (at `src/routes/(pages)/work/+page.svelte`) and connected to the project slug and name:

```ts
import PhantogramPreview from './(projects)/phantogram/Preview.svelte';
…
let projects: Project[] = [
		{ slug: 'siriusxm', name: 'SiriusXM', preview: SiriusXMPreview },
        …
];
```

The `slug` property is used to construct the project URL. (like this: `[domain]/work/[slug]`, e.g. `https://modernpeople.io/work/phantogram`). The name property is used as the project name in the list of projects on the work overview page.

### Reuseable layouts

For common layouts like 2-by-2 images, a column of three images, etc we want to set up resueable CSS classes. These should be defined as `:global()`, not-component level scoped styles in `src/routes/(pages)/work/(projects)/+layout.svelte` so they can be used in all sub-projects without explicit imports. Here's a list of image containers we have so far:

- 2-by-2
- TBD

While we're in the process of drafting more project-specific layouts, these will be a WIP, to be cleaned up and documented here by Ludwig at a later stage.