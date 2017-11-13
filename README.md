# Weback 2 code splitting with `import()`.

An experiment to see how Webpack's [`import()`](https://webpack.js.org/api/module-methods/#import-) module method can be used to split code and how that can affect the initial bundle size.

Running npm start initialises an isomorphic React app at `localhost:3000` and the Webpack Bundle Analyzer at `localhost:8888`.

### Default bundle without any optimisation
![default-without-optimisation](https://i.imgur.com/zjKVaDc.png)

### Basic code splitting using `import()`

The two split bundles are actually larger than the original because they both bundle common libraries (`React` and `React-dom` in this case) See `src/universal/app.js` for code splitting example:

![basic-code-split](https://i.imgur.com/AYSivkK.png)

### Common chunks extracted: [845a9e3](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/845a9e3d735289eb3968c04fe22669793ef0037d)

Using the `CommonsChunkPlugin` to extract libraries in to a separate chunk. Starting to see some improvements in bundle sizes:

![commons-chunk-plugin](https://i.imgur.com/fed3Gpa.png)

### Analyzing chunks with Webpack Bundle Analyzer

Reduce `SomeOtherComponent` bundle size by only importing what we need from `lodash`

![reduce-lodash-footprint](https://i.imgur.com/PZCAxba.png)

### Uglifying has a big impact on bundle size
![uglified](https://i.imgur.com/yKVMgUO.png)

### Build for production environment

This has another large impact on the vendor bundle size as development artefacts are not packed in the bundle.

![prod-build](https://i.imgur.com/srJSxez.png)
