import gulp from "gulp";

import "./test";
import "./distclean";
import "./dist";
import "./lint";
import "./doc";

gulp.task(
  "prepublish",
  gulp.series("test", "distclean", "dist", "dist-lint", "doc")
);
