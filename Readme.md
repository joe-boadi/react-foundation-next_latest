# React Foundation

> ### Importance of React/Nextjs

## UI components

- Three Core Concepts
  - Components
  - Props
  - State

**Components**

- User interfaces can be broken down into smaller building blocks called **Components.** They allow to build self-contained, resusable snippets of code

**Code Snippet in HMTL**

```html
<script type="text/jsx">
  const app = document.getElementById('app');
  function Header(){
    return <h1>New Project. Preview and Approval.</h1>
  }
  ReactDOM.render(<Header/>,app)
</script>
```

> In depth example on React foundation [here](https://nextjs.org/learn/react-foundations/building-ui-with-components)


### Displaying Data with Props
 Changing the src attribute of an ``<img>`` element changes the image that is shown same way one can pass pieces of information as properties to React components. These are called __props__

 > Note: In React, data flows down the component tree. This is referred to as __one-way data flow.__  State, can be passed from parent to child components as __props.__


 ### State and Hooks
 React has a set of functions called hooks. Hooks allow you to add additional logic such as state to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.


 ```jsx
  import { useState } from 'react';
 ```
 > Functions starting with ``use`` are called Hooks. ```useState``` is a built-in Hook provided by React


 ## From React to Next.Js
 While React excels at building UI, it does take some work to independently build that UI into a fully functioning scalable application. There are also newer React features, like Server and Client Components, that require a framework. The good news is that Next.js handles much of the setup and configuration and has additional features to help you build React applications.

 ### Installing Next.js
  **Terminal**
 ```bash
  npm install react@latest react-dom@latest next@latest
 ```

 Once you have the next, react, and react-dom packages installed, you're good to go.

You will also notice a new file called package-lock.json file that contains detailed information about the exact versions of each package.

