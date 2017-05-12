const paths = {
  client: {
    jsx: './src/**/*.jsx',
    js: './src/**/*.js',
  },
};

const gulp = require('gulp');
const serve = require('gulp-serve');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task('serve', ['watch:client'], serve({
  port: 3000,
}));

gulp.task('watch:client', ['build:client'], () => {
  gulp.watch([paths.client.jsx, paths.client.js], ['build:client']);
});

gulp.task('build:client', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new Error('build:client', err);

    console.log(stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));

    callback();
  });
});
