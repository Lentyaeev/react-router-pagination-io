const path = require('path')

const modulePath = process.cwd()
const clientPath = path.resolve(modulePath, 'client')
const appPath = path.resolve('./app.js')

const gulp = require('gulp')
const server = require('gulp-develop-server')

gulp
  .task('watch', () => {
    gulp.watch(appPath, { name: 'watch' }, (next) => {
      server.restart()
      return next()
    })
    gulp.watch(clientPath, { name: 'watch' }, (next) => {
      server.restart()
      return next()
    })
  })

gulp
  .task('server', (next) => {
    server.listen({ path: appPath })

    return next()
  })

gulp
  .task('default', gulp.parallel('watch', 'server'))
