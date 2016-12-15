const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();


const projectName = 'test',
      basePath = `apps/${projectName}`,
      dest = `${basePath}/build`,
      src = `${basePath}/src`;

gulp.task('sass', () => gulp.src(`${src}/scss/**`).
  pipe(sass()).
  pipe(gulp.dest(`${dest}/css`)).
  pipe(browserSync.stream()));

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: `${basePath}`
    },
    port: 1990
  });

  gulp.watch(`${src}/scss/**`, ['sass']);
  gulp.watch(`${basePath}/index.html`).on('change', browserSync.reload);
})

gulp.task('default', ['serve']);
