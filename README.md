<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / carbonplan.org

**main carbonplan website**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]

[github]: https://github.com/carbonplan/carbonplan.org
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/carbonplan/carbonplan.org/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/carbonplan/carbonplan.org/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue

This repository includes the source code for the [carbonplan.org](https://carbonplan.org/) landing page. The site is a [Next.js](https://nextjs.org/) project, deployed on [Vercel](https://vercel.com/). The research, cdr-database, and data pages referenced here are built and deployed separately and can be found in separate repositories:

| Site         | GitHub Repo                                                                              | URL                                                                    |
| ------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| research     | [https://github.com/carbonplan/research](https://github.com/carbonplan/research)         | [carbonplan.org/research](https://carbonplan.org/research)             |
| cdr-database | [https://github.com/carbonplan/cdr-database](https://github.com/carbonplan/cdr-database) | [carbonplan.org/research/cdr-database](https://carbonplan.org/reports) |
| data         | [https://github.com/carbonplan/data](https://github.com/carbonplan/data)                 | [carbonplan.org/data](https://carbonplan.org/data)                     |

## to build the site locally

Assuming you already have `Node.js` installed, you can install the build dependencies with:

```shell
npm install .
```

To start a development version of the site, simply run:

```shell
npm run dev
```

and then visit `http://localhost:3000/` in your browser.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, copy, etc.).

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/carbonplan.org/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
