# Moore Migration Website
This repository contains the source and documentation for the moore migration website. It is built using [gatsby](https://www.gatsbyjs.org/docs) and
[styled-components](https://www.styled-components.com/) and makes heavy use of [rebass](http://jxnblk.com/rebass/). This means that all associated
docs for these libraries are relevant throughout the code base.
# Prerequisites
* [Node JS](https://nodejs.org/en/)
* [Python 2.7.x](https://www.python.org/downloads/)
* [c++ build tools for visual studio 2017](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15) or equivalent

**Please Note** Python and c++ build tools are a pre-req for the image sharp NPM package which gets compiled on the associated platform. This
is only required if you are looking to run the site locally for development purposes.

# Installation
First ensure you have yarn installed. You can either follow the [official documentation](https://yarnpkg.com/en/docs/install) or if you already
have node installed you can install yarn globally using the following command

```shell
npm install yarn --global
```

Once yarn is installed from the root of the project
```shell
yarn install
```

# Running
To run the application in development mode i.e. watch simply execute
```shell
npm run develop
```

To build a production version of the application execute
```shell
npm run build
```

# Deployment
The production version of the site is a static build which can be hosted with any provided, however there are some features that netlify provides
which we currently rely on. It is therefore expected that [continuous deployment](https://www.netlify.com/docs/continuous-deployment/) is being used via a github integration for the master branch. It is expected that this branch is always the current live version of the site. This means that all
changes should be made against feature branches and pull requests made to this branch which will provide you with netlify's branch previews before
doing the final merge to master. It will also allow us to use netlify CMS when the time comes.

**Please note** that we have created a .nvmrc file at the root of the project for the netlify build to specify a specifc version of node for the build
to succeed.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shaunmarx/moore-gatsby.git)