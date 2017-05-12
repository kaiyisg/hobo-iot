const gulp = require('gulp');
const eslint = require('gulp-eslint');
const yarn = require('gulp-yarn');
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');

gulp.task('lint', () => {
  gulp.src(['**/*.js', '!node_modules/**', '!static/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('install', () => {
  gulp.src(['./package.json'])
    .pipe(yarn());
});

gulp.task('serve', () => {
  const daemon = nodemon({
    script: './app/index.js',
    tasks: ['lint'],
    env: {
      NODE_ENV: 'development',
    },
  });
  gulp.watch(['./package.json'], () => {
    runSequence('install', () => {
      daemon.emit('restart');
    });
  });
});

gulp.task('default', ['lint', 'install', 'serve']);
