# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

TODO:
Set up authentication by creating an OAuth app on GitHub:
Go to GitHub Settings > Developer Settings > OAuth Apps > New OAuth App
Set the Authorization callback URL to: https://api.netlify.com/auth/done
Save the Client ID and Client Secret for later use
After deploying to Vercel, need to:
Go to Vercel project settings
Add these environment variables:
OAUTH_CLIENT_ID: Your GitHub OAuth app client ID
OAUTH_CLIENT_SECRET: Your GitHub OAuth app client secret
Important Notes:
Replace YOUR_GITHUB_USERNAME/YOUR_REPO_NAME in the config.yml with  actual GitHub repository details
Make sure repository is public or your GitHub users have proper access
The users will need to be added as collaborators to your GitHub repository
Users will authenticate through GitHub when accessing the CMS
After setting this up:
Non-technical users can access the CMS by clicking the CMS button on your homepage
They'll be prompted to authenticate with GitHub
Once logged in, they'll see a user-friendly interface to create and edit documentation
All changes will be committed directly to your GitHub repository
The site will automatically rebuild and deploy with the new changes