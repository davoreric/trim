(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{340:function(e,t,n){"use strict";n.r(t);var u=n(9),r={elementType:"number",components:{ElementWrapper:n(10).a},mixins:[u.a],props:{value:{type:[Number,Object],default:null}},getInitialValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=parseFloat(e.value);return t||(0===t?t:null)},computed:{inputAttributes:function(){return this.normalizeAttributes({type:"number"},this.attributes.input)}},methods:{processInputEvent:function(e){this.$emit("input",parseFloat(e.target.value))}}},p=n(1),a=Object(p.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("element-wrapper",e._b({},"element-wrapper",e.elementWrapperProps,!1),[n("input",e._b({attrs:{id:e.elementId,name:e.name,disabled:e.readOnly},domProps:{value:e.value},on:{input:e.processInputEvent}},"input",e.inputAttributes,!1))])},[],!1,null,null,null);a.options.__file="number.vue";t.default=a.exports}}]);