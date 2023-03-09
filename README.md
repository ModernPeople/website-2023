# Modern People

This is a reimagining of the modernpeople website in SvelteKit. 

## Setup

As a "modern JS application", development setup is slightly involved. If you're not used to local web development, we recomend you use a hosted, cloud-based workspace such as Github Code Spaces.

### Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


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

If you have any idea how to fix this — maybe by finding a way to run `sharp` on Stackblitz's Web Container architecture, or maybe by allowing to run in a mode in which images aren't downscaled dynamically so we don;t need `sharp`; please let us know!


#### Code Spaces, on Github infrastructure

…trying out atm.
