# Weback 2 code splitting with `import()`.

An experiment to see how Webpack's [`import()`](https://webpack.js.org/api/module-methods/#import-) module method can be used to split code and how that can affect the bundle size.

Running npm start initialises an isomorphic React app at `localhost:3000` (and optionally the Webpack Bundle Analyzer at `localhost:8888` - needs to be enabled in webpack config).

### Default bundle without any optimisation [da2ef00](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/da2ef0082cc7740d388b629016c8133b9e2725fd)
![default-without-optimisation](https://i.imgur.com/zjKVaDc.png)

### Basic code splitting using `import()` [c696a0f](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/c696a0f8d0ade5f7857a3e242bbff315beeb157a)

The two split bundles combined size is actually larger than the original. See `src/universal/app.js` for an example of code splitting. The `SomeOtherComponent` bundle is only requested when the user clicks on the button.

![basic-code-split](https://i.imgur.com/AYSivkK.png)

### Common chunks extracted: [845a9e3](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/845a9e3d735289eb3968c04fe22669793ef0037d)

Using the `CommonsChunkPlugin` to extract libraries in to a separate chunk. Starting to see some improvements in bundle sizes:

![commons-chunk-plugin](https://i.imgur.com/fed3Gpa.png)

### Partial imports

Using the ` WebpackBundleAnalyzer` showed that `SomeOtherComponent` bundle size was mainly comprised of `lodash`. Reduce the size of this by only importing what we need from `lodash` [27ea766](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/27ea766b5c8e6c7f6dff71a8d84a5b4127ce09ff)

![reduce-lodash-footprint](https://i.imgur.com/PZCAxba.png)

### Other improvements on bundle size using common Webpack techniques:

* Uglification [4fc6cf7](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/4fc6cf7cfc837cd88d3790a184afa90531bc9605)

* Build for production environment [293a509](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/293a509bae291792b8a52b3eaa53ffdf5a3e33b4)

* Gzip bundles using Webpack's Compression plugin [39a0c45](https://github.com/jamesfiltness/webpack-2-code-splitting/commit/39a0c45f38a26dd5e3d3b06939f0796a9a5575f3). Further reducers file sizes but requires the server to be configured to serve gzipped assets. Nginx would be a good option for this.

(Currently it seems there is an issue with the compression plugin not producing compressed versions of bundles that are dynamically imported. There is an open issue on github here: https://github.com/webpack-contrib/compression-webpack-plugin/issues/79)

### Final bundle sizes
![final](https://i.imgur.com/yZsIZFJ.png)

In a real-world app there are other techniques that can be used to further reduce bundle size. They don't really make any difference in the context of this tiny example app:

* Extract CSS in to separate files
* Control how sourcemaps are generated in your production build using the [Devtool](https://webpack.js.org/configuration/devtool/) option (this can have a big impact on bundle size)
* Dead code elimination with [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
* Replace the React.createElement function with babelHelpers using [Babel's transform-react-inline-elements plugin](https://babeljs.io/docs/plugins/transform-react-inline-elements/)
* [Agressive Merge plugin](https://github.com/webpack/docs/wiki/list-of-plugins#aggressivemergingplugin)


