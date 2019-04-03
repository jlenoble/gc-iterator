import gulp from "gulp";
import ts from "gulp-typescript";
import merge from "merge2";

const options = {
  strict: true,
  target: "esnext",
  lib: ["esnext"],
  module: "commonjs",
  moduleResolution: "node",
  declaration: true,
  noEmitOnError: true,
  noEmitHelpers: true
};

const libDir = "lib";
const srcGlob = ["src/**/*.ts"];

export const dist = () => {
  const tsResult = gulp
    .src(srcGlob, {
      since: gulp.lastRun(dist)
    })
    .pipe(ts(options));

  return merge([
    tsResult.dts.pipe(gulp.dest(libDir)),
    tsResult.js.pipe(gulp.dest(libDir))
  ]);
};

gulp.task("dist", dist);
