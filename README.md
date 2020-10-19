# Angular Single-Page Application (SPA) with Auth0

A simple SPA [Angular](https://angular.io/) web app, with user authentication. 

Authentication and authorization will be handled by an Identity-as-a-Service (IDaaS) platform, in this case, [Auth0](https://auth0.com) 

This uses the following:

1. [Angular CLI](https://cli.angular.io/) to create angular app, components, services, etc
2. [Auth0 Angular SDK](https://github.com/auth0/auth0-angular) to secure the web application

_________________

#### Caveats

__Basically this is for me, to cement knowledge. In the unlikely event anyone else is reading this, [ymmv](https://dictionary.cambridge.org/dictionary/english/ymmv)__

1. The reader of this tutorial is on mac, installed npm, yarn, anglular cli, node, etc.
2. No tests, static analysis, code quality checking, no css, no fluff.
3. Rabbit holes of futher reading are clearly marked with this symbol :rabbit:
4. The world doesn't stop, so versions, dependencies, and documentation working as of Oct 2020...After that good luck!

_________________

Instruction set is WIP
_________________


## Angular + Auth0 Bare Bones

### Step 1 - Create Angular app

Open a terminal and go to your chosen directory for new projects. Using the Angluar CLI, create a new workspace and an initial Angular app.

```bash
ng new simple-secure-spa --routing=true --minimal=true --skipTests=true --skipGit --style=css
```

:rabbit: [ng new](https://angular.io/cli/new) command has lots of flags available


### Step 2 - Auth0 account

Sign up for a free [Auth0](https://auth0.com) account.


### Step 3 - Create application on Auth0

Log into your Auth0 account, and from the Application section, `create new application`. 

Give your app a name, and select `Single Page Web Applications`, then select `Angular` as the technology.

After the application is created select the `Settings` tab and enter `http://localhost:4200` for `Allowed Callback URLs`, `Allowed Logout URLs`, and `Allowed Web Origins`

:rabbit: Much to learn about these three settings, head over to [Auth0 Docs](https://auth0.com/docs/get-started/dashboard/application-settings) for more information on create new applications

Scroll down to the botton of the page and click the `Save Changes` button.


### Step 4 - Allow Angular app to resolve json [Drop!]

Configure your `CompilerOptions` in the `tsconfig.json` in your Angular app to `"resolveJsonModule": true`.

```json
"compilerOptions": {
    "resolveJsonModule": true,
  
```

:rabbit: [TypeScript allows importing of json](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html?#new---resolvejsonmodule)


### Step 5 - Congigure Angular app with Auth0 details [Combine with Step 6!]

Next we need to configure the Angular app with details from the Auth0 application. Angular application must identify itself as an authorized party, in order for Auth0 to carry out an authentication process.

Create a `config.json` file in the root of your Angular app. 

```json
{
  "domain": "[COPY DOMAIN VALUE]",
  "clientId": "[COPY CLIENT ID VALUE]"
}
```

The values you need to copy into this json file can be found under the settings on your Auth0 application under `Basic information`. You will see Domain and Client Id need by your Angular app to communication with Auth0.

![alt text](https://github.com/dominicfarr/tutorial-blog-angular-auth0/blob/gh-pages/BasicInfoAuth0App.jpg "Auth0 App - Basic Information")


### Step 6 - Configure Angular app with Auth0 details [Combine with Step 5!]

Update your Angular app `environment.js` file. Extend the environment const field object with an `auth` object continaing your Auth0 config.

```js
import { domain, clientId } from "config.json";
export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUrl: window.location.origin,
  }
};
```


### Step 7 - Install Auth0 into Angular app

Now install the Auth0 Angular SDK. Make sure you are in the Angular app root directory.

```bash
ng add @auth0/auth0-angular
```

:rabbit: [ng add](https://angular.io/cli/add) has lots of flags to learn about

:rabbit: [Auth0 Angular SDK](https://auth0.com/docs/libraries/auth0-angular-spa) This SDK documentation has all you need to know about securing your Angular App 
