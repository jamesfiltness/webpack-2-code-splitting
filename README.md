# Weback 2 code splitting with `import()`.

An experiment to see how Webpack's [`import()`](https://webpack.js.org/api/module-methods/#import-) module method can be used to split code and how that can affect the initial bundle size.

Running npm start initialises an isomorphic React app at `localhost:3000` and the Webpack Bundle Analyzer at `localhost:8888`.

### Default bundle without any optimisation
![default-without-optimisation](https://i.imgur.com/zjKVaDc.png)

### Basic code splitting using `import()`

The two split bundles are actually larger than the original because they both bundle common libraries (`React` and `React-dom` in this case) See `src/universal/app.js` for details:

![basic-code-split](https://i.imgur.com/AYSivkK.png)

### Common chunks extracted

Using the `CommonsChunkPlugin` to extract libraries in to a separate chunk. Starting to see some improvements in bundle sizes.

![commons-chunk-plugin](https://i.imgur.com/fed3Gpa.png)

