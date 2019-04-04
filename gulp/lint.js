import gulp from "gulp";
import eslint from "gulp-eslint";
import cached from "gulp-cached";
import merge from "merge2";

const allSrcGlob = ["src/**/*.ts", "test/**/*.ts"];
const libGlobTs = ["lib/**/*.ts"];
const libGlobJs = ["lib/**/*.js"];

export const lint = () => {
  return gulp
    .src(allSrcGlob, { base: process.cwd() })
    .pipe(cached("lint"))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(cached("lint")) // Write only if something was fixed
    .pipe(gulp.dest("."));
};

export const distLint = () => {
  const s1 = gulp
    .src(libGlobTs, { base: process.cwd() })
    .pipe(cached("lint"))
    .pipe(
      eslint({
        fix: true,
        rules: { "@typescript-eslint/explicit-member-accessibility": ["off"] }
      })
    )
    .pipe(eslint.format())
    .pipe(cached("lint")) // Write only if something was fixed
    .pipe(gulp.dest("."));

  const s2 = gulp
    .src(libGlobJs, { base: process.cwd() })
    .pipe(cached("lint"))
    .pipe(
      eslint({
        fix: true,
        rules: { "@typescript-eslint/no-var-requires": ["off"] }
      })
    )
    .pipe(eslint.format())
    .pipe(cached("lint")) // Write only if something was fixed
    .pipe(gulp.dest("."));

  return merge([s1, s2]);
};

gulp.task("lint", lint);
gulp.task("dist-lint", distLint);
