(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Trikoder Trim is user interface framework for building headless content management systems that connect to JSON API powered backend.\nCraft responsive single page applications that work on all devices.")]),t._v(" "),a("p",[t._v("Content management systems built on top of Trikoder Trim are decoupled from server side technology stack.\nUI framework works nicely with any server side technology that can process and render json api dataset compliant with "),a("a",{attrs:{href:"http://jsonapi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("json:api specification"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Trim enables you to quickly build administration CRUD (create, read, update, delete) interface for your application resources. Resulting CMS is responsive and fast - all styles and behavior for standard use cases come included - programmers job is only to define how each application resource is listed and edited.")]),t._v(" "),a("p",[t._v("Sensible dependency on standardized backend api enables us to create CMS domain specific language or api in javascript that is pretty much decoupled from JS libraries and frameworks that are used underneath. Any capable programmer should be able to define complete interface for resource in need of administration.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Trikoder Trim is built on following open source stack:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),a("OutboundLink")],1),t._v(" are used for application views, routing and store management.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Axios"),a("OutboundLink")],1),t._v(" is used as http client")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://dbrekalo.github.io/json-api-resource/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON api resource"),a("OutboundLink")],1),t._v(" is used for querying and persisting resources")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack"),a("OutboundLink")],1),t._v(" is used for module bundling and code splitting")])]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v('Lets assume your application has a simple "tag" resource and backend api for this resource is ready.\nYou want to show list of tags that can be filtered by title.\nAdditionally you want to setup create and edit interface with input for setting tag title.\nYour code should end up looking something like this:')]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("Visit "),a("a",{attrs:{href:"https://trikoder.github.io/trim/demo/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo application"),a("OutboundLink")],1),t._v(' to get a feeling how CMS built with Trikoder CMF looks and behaves. Is is completely safe to browse, edit and delete items - backend api on demo pages is running on client json api server that stores data in browser memory - so no harm can be done. Dataset can be reset by clicking "reset demo data" control in lower left corner of administration UI. Examine how everything is composed in '),a("a",{attrs:{href:"https://github.com/trikoder/trim/tree/master/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo codebase"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Feel free to browse, cut and paste from demo codebase for your CMS needs and use it as reference.")])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"about"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[this._v("#")]),this._v(" About")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"technology-and-tooling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#technology-and-tooling","aria-hidden":"true"}},[this._v("#")]),this._v(" Technology and tooling")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"code-sneek-peek"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-sneek-peek","aria-hidden":"true"}},[this._v("#")]),this._v(" Code sneek peek")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    resourceName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tag'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    setupList"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addCreateControl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Create new tag'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        list"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'TextFormElement'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Title'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        list"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'TextListItem'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            caption"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ID'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mapTo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'id'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        list"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'LinkListItem'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            caption"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mapTo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            action"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'editItem'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    setupEdit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("edit"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addToIndexControl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addSaveControl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        edit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addField")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'TextFormElement'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"demo-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo-application","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo application")])}],!1,null,null,null);e.options.__file="about.md";n.default=e.exports}}]);