import gulp from "gulp";
import eslint from "gulp-eslint";
import cached from "gulp-cached";

const allSrcGlob = ["src/**/*.ts", "test/**/*.ts"];

export const lint = () => {
  return gulp
    .src(allSrcGlob, { base: process.cwd() })
    .pipe(cached("lint"))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(cached("lint")) // Write only if something was fixed
    .pipe(gulp.dest("."));
};

gulp.task("lint", lint);
