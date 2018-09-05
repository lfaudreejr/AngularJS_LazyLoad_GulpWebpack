'use strict'

import 'angular'
import '@uirouter/angularjs'
import 'oclazyload'
import 'app.css'
import(/* webpackChunkName: "bootstrap" */ 'bootstrap')
import(/* webpackChunkName: "bootstrap-css" */ 'bootstrap/dist/css/bootstrap.min.css')
import(/* webpackChunkName: "jquery" */ 'jquery')
import(/* webpackChunkName: "popperjs" */ 'popper.js')
import(/* webpackChunkName: "moment" */ 'moment')

var app = angular.module('app', ['ui.router', 'oc.lazyLoad'])
import { router } from './router'
require('./main/main')
// require('./contacts/contacts')
router(app)

export default app
