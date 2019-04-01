import gulp from 'gulp';
import {build} from './build';
import {test} from './test';

const allSrcGlob = [
  'src/**/*.ts',
  'test/**/*.ts'
];
const allBuildGlob = [
  'build/src/**/*.js',
  'build/test/**/*.js'
];

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(allBuildGlob, test);
  done();
};

gulp.task('watch', watch);
