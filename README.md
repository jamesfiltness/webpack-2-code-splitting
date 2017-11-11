# Weback 2 closing splitting with `import()`.

An experiment to see how Webpack's [`import()`](https://webpack.js.org/api/module-methods/#import-) module method can be used to split code and how that can affect the initial bundle size.

Running npm start initialises an isomorphic React app at `localhost:3000` and the Webpack Bundle Analyzer at `localhost:8888`.

### Default bundle without any optimisation
![default-without-optimisation](https://i.imgur.com/zjKVaDc.png)
