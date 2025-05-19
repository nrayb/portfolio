# Portfolio

## Next.js

Let's create a simple next.js app to host a static page.

### Dev Setup

1. Install [node.js](https://nodejs.org/en)
2. Install pnpm via `sudo npm install -g pnpm@latest-10`

### Deploy to Github Pages

Follow this [nextjs template](https://github.com/nextjs/deploy-github-pages/tree/main)

#### Configuring Custom Domain From Squarespace

Repo -> Settings -> Pages:
* Custom Domain: "www.<your.domain>" and enable `Enforce HTTPS`
  * I had issues with `https`; turns out I needed to add `www.` based on how I setup DNS Settings.
* In squarespace, set the following DNS settings:
  * Clear all default settings
  * Add the following info:

|Host|Type|Priority|TTL|Data|
| --- | --- | --- | --- | --- |
|@|A|N/A|4 hrs|185.199.111.153|
|@|A|N/A|4 hrs|185.199.110.153|
|@|A|N/A|4 hrs|185.199.109.153|
|@|A|N/A|4 hrs|185.199.108.153|
|www|CNAME|N/A|4 hrs|<github_user>.github.io|
