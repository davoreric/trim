(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{230:function(e,t,n){var a=n(255);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(5).default)("5a15b266",a,!0,{})},254:function(e,t,n){"use strict";var a=n(230);n.n(a).a},255:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"\n.fileUploadType1[data-v-73f8e18b] {\n  overflow: hidden;\n  border: 1px solid #E5E5E5;\n  border-radius: 0.3em;\n}\n.fileUploadType1 > .handle[data-v-73f8e18b] {\n    font-size: 1.6em;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n    padding: 3.125em 1.25em 1.25em;\n    text-align: center;\n    background-color: #f5f5f5;\n    color: #666666;\n    cursor: pointer;\n}\n.fileUploadType1 > .handle[data-v-73f8e18b]:before {\n      font-size: 1.5625em;\n      left: 50%;\n      top: 1.2em;\n      margin-left: -0.8em;\n}\n.fileUploadType1 .dz-preview[data-v-73f8e18b] {\n    padding: 1em;\n    position: relative;\n}\n.fileUploadType1 .dz-image[data-v-73f8e18b] {\n    display: inline-block;\n    width: 6em;\n    height: 6em;\n    line-height: 6em;\n    margin-right: 1em;\n    background-color: #f5f5f5;\n    text-align: center;\n}\n.fileUploadType1 .dz-image > img[data-v-73f8e18b] {\n      display: inline-block;\n      max-width: 6em;\n      max-height: 6em;\n      vertical-align: middle;\n      border-radius: 0.3em;\n}\n.fileUploadType1 .dz-details[data-v-73f8e18b] {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.5em;\n}\n.fileUploadType1 .dz-size[data-v-73f8e18b] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.fileUploadType1 .dz-filename[data-v-73f8e18b] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.fileUploadType1 .dz-progress[data-v-73f8e18b] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 1px;\n    background-color: #E5E5E5;\n}\n.fileUploadType1 .dz-progress > .dz-upload[data-v-73f8e18b] {\n      display: block;\n      height: 100%;\n      background-color: #e03431;\n}\n.fileUploadType1 .dz-error-message[data-v-73f8e18b] {\n    font-size: 1.4em;\n    padding: 1.42857em;\n    background-color: #F8E6E5;\n    color: #cd4b44;\n    text-align: center;\n    border-radius: 0.23077em;\n    margin-top: 1.15385em;\n    border: 1px solid #cd4b44;\n    display: none;\n}\n.fileUploadType1 .dz-error .dz-error-message[data-v-73f8e18b] {\n    -webkit-animation: slideDownFadeIn 0.2s;\n            animation: slideDownFadeIn 0.2s;\n    display: block;\n}\n.fileUploadType1 .dz-success-mark[data-v-73f8e18b],\n  .fileUploadType1 .dz-error-mark[data-v-73f8e18b] {\n    display: none;\n}\n",""])},312:function(e,t,n){"use strict";n.r(t);var a=n(62),r=n(0),o=n(6),i=n(2),s=n(14),d=n(13),l=n(60),c=n(247),u=n.n(c),p=n(22),f={props:{uploadCaption:{type:String,required:!0},uploadUrl:{type:String,required:!0},clickableSelector:{type:String,default:".handle"},paramName:{type:String,default:"binary"},mediaType:{type:String,default:"image"},removePreviewOnUpload:{type:Boolean,default:!0},headers:Object,maxFiles:Number},mounted:function(){this.setupUpload()},beforeDestroy:function(){this.dropzone&&this.dropzone.destroy()},methods:{setupUpload:function(){var e=this,t=[].slice.call(this.$el.querySelectorAll(this.clickableSelector)),n=this.dropzone=new u.a(this.$el,{url:this.uploadUrl,params:this.mediaType&&{mediaType:this.mediaType},clickable:!t.length||t,maxFiles:this.maxFiles,paramName:this.paramName,headers:Object(r.a)(Object(r.s)({},p.a.defaults.headers.common,["Authorization"]),this.headers)});n.on("sending",function(t,n,a){e.$emit("sending",{file:t,xhr:n,formData:a})}).on("success",function(t,a){e.$emit("upload",{file:t,response:a}),e.removePreviewOnUpload&&n.removeFile(t)}).on("error",function(t,a){e.$emit("uploadError",{file:t,errorMessage:a}),e.removePreviewOnUpload&&n.removeFile(t)})}}},m=(n(254),n(1)),g=Object(m.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fileUploadType1"},[t("div",{staticClass:"handle iconUpload dz-clickable"},[this._v(this._s(this.uploadCaption))])])},[],!1,null,"73f8e18b",null);g.options.__file="fileUpload.vue";var h=g.exports,b=n(87),v=n(52),y=n(61),C=a.a.extend({components:{FileUpload:h,IncludedAdmin:b.a,Message:v.a},mixins:[y.a],data:function(){var e=this;return{mapMediaTypeTo:"mediaType",uploadParameter:"binary",uploadHeaders:void 0,mediaTypes:["image"],uploadControls:[{caption:Object(i.a)("resourceControls.toIndex"),className:"withLeftIcon iconArrowLeft",action:function(){return e.openIndex(e.indexQuery)}},{isSaveControl:!0,caption:Object(i.a)("resourceControls.save"),className:"accented iconUploadCloud",action:function(){return e.saveUploadedMedia()}}],uploadUrl:function(){var e=Object(s.a)("baseApiUrl","/api/");return d.b.extend({type:this.resourceName},{baseUrl:e}).url()+"/upload"},prepareModelFromUpload:function(e,t){return d.b.getFromApi({url:e.xhr.getResponseHeader("Location")})},resolvedMediaTypes:[],uploadedIdentifiers:"",statusMessage:null}},computed:{isStandardEditContext:function(){return["edit"].concat(this.resolvedMediaTypes.reduce(function(e,t){return!t.hasUploadUi&&e.push(t.createContext),e},[])).indexOf(this.currentContext)>=0},currentResourceControls:function(){var e=this;return"index"===this.currentContext||this.isStandardEditContext?this.resourceControls:this.uploadControls.filter(function(t){return 0!==e.uploadedIdentifiers.length||!t.isSaveControl})},currentUploadConfig:function(){var e=this;return Object(r.m)(this.resolvedMediaTypes,function(t){return t.createContext===e.currentContext})}},watch:{currentContext:function(){this.uploadedIdentifiers="",this.statusMessage=null}},created:function(){this.resolveMediaTypes(),this.setupMediaTypeMethods()},methods:{resolveMediaTypes:function(){var e=this;this.resolvedMediaTypes=this.mediaTypes.map(function(t){var n="string"==typeof t?{name:t}:t,a=n.name,s=Object(r.c)(Object(o.space)(a))+" "+Object(i.a)("baseMediaController.uploadCaption");return Object(r.a)({createPageTitle:s,createRouteName:["resource",e.resourceName,"create"+Object(o.pascal)(a)].join("."),uploadCaption:s,hasUploadUi:!0},n,{createContext:"create"+Object(o.pascal)(a)})})},setupMediaTypeMethods:function(){var e=this;this.resolvedMediaTypes.forEach(function(t){var n="create"+Object(o.pascal)(t.name),a="open"+Object(o.pascal)(n),r="get"+Object(o.pascal)(n)+"Url",s="add"+Object(o.pascal)(n)+"Control";e[n]=function(e,a){this.resetContext(n,a),this.setPageTitle(t.createPageTitle),this.$emit("afterCreateSetup",{controller:this})},e[a]=function(e){var t=this;return this.isExternal?this[n](null,e):new Promise(function(n){t.$once("afterCreateSetup",function(){return n()}),t.$router.push(t[r](e))})},e[r]=function(e){return this.$router.url({name:t.createRouteName,query:e})},e[s]=function(e){var t=this;return this.addControl({caption:e||Object(i.a)("resourceControls.create"),url:this[r](),className:"accented iconEdit",action:function(){return t[a]()}})}})},getIndexConfigurator:function(){var e=this;return function(t){return e.resetResourceControls(),t.setTemplate("cards"),e.setupList({list:t,query:e.indexQuery})}},getEditConfigurator:function(){var e=this;return function(t){e.resetResourceControls();var n=void 0;if("edit"===e.currentContext){var a=t.resourceModel,i="function"==typeof e.mapMediaTypeTo?e.mapMediaTypeTo(a):a.get(e.mapMediaTypeTo);n="setup"+Object(o.pascal)(i)+"Edit"}else n="setup"+e.currentContext.replace("create","")+"Edit";return e[n](Object(r.a)({query:e.currentQuery},t))}},processUploadedFile:function(e){var t=this;this.prepareModelFromUpload(e.file,e.response).then(function(e){t.$refs.includedMedia.addNewIncludedItem(e)})},saveUploadedMedia:function(){var e=this;return this.$refs.includedMedia.saveRelatedResources().then(function(){window.scrollTo(0,0),e.statusMessage={text:Object(i.a)("baseResourceController.entitySavedMessage"),type:"messageType1"},e.$emit("resourcesUploadedAndUpdated",{models:e.$refs.includedMedia.models})}).catch(function(e){})}}});C.getDataKeys=function(){return["mapMediaTypeTo","mediaTypes","uploadParameter","uploadHeaders","uploadControls","uploadUrl","prepareModelFromUpload"]},C.toVueComponent=Object(l.a)({extends:C,dataKeys:a.a.getDataKeys().concat(C.getDataKeys())});var T=C,x=Object(m.a)(T,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resourceController"},[n(e.getResourceHeaderType(),{tag:"component",attrs:{breadcrumbs:e.breadcrumbs,hasBottomBorder:e.headerHasBorder}},[n(e.getResourceControlsType(),{tag:"component",attrs:{controls:e.currentResourceControls}})],1),e._v(" "),"index"===e.currentContext?n(e.getResourceListType(),{tag:"component",attrs:{query:e.indexQuery,configure:e.getIndexConfigurator(),Collection:e.getCollectionType(),getEditUrl:e.getEditUrl,getIndexUrl:e.getIndexUrl,openEdit:e.openEdit,resourceCaption:e.resourceCaption,apiInclude:e.includeApiData.index},on:{queryChange:e.openIndex,beforeConfigure:function(t){e.processIndexEvent("beforeConfigure",t)},afterConfigure:function(t){e.processIndexEvent("afterConfigure",t)}}}):e.isStandardEditContext?n(e.getResourceEditType(),{ref:"editHandler",tag:"component",staticClass:"resourceEdit resourceEditType1",attrs:{ModelType:e.getModelType(),configure:e.getEditConfigurator(),apiInclude:e.includeApiData.edit,resourceId:e.editResourceId,createRequiresDraft:e.createRequiresDraft,createRelatedStrategy:e.createRelatedStrategy,resourceSavedMessage:e.resourceSavedMessage,resourceCreatedMessage:e.resourceCreatedMessage},on:{beforeConfigure:function(t){e.processConfigureEvent("beforeConfigure",t)},afterConfigure:function(t){e.processConfigureEvent("afterConfigure",t)},resourceModelSaved:function(t){e.processSaveEvent(t)}}}):n("div",{key:e.currentContext,staticClass:"mediaUploadType1 resourceEdit resourceEditType1"},[e.statusMessage?n("message",e._b({on:{close:function(t){e.statusMessage=null}}},"message",e.statusMessage,!1)):e._e(),e._v(" "),n("div",{staticClass:"layoutContainer"},[e.currentUploadConfig?n("file-upload",{attrs:{uploadCaption:e.currentUploadConfig.uploadCaption,mediaType:e.currentUploadConfig.name,uploadUrl:e.uploadUrl(),paramName:e.uploadParameter,headers:e.uploadHeaders},on:{upload:e.processUploadedFile}}):e._e(),e._v(" "),n("included-admin",{directives:[{name:"show",rawName:"v-show",value:e.uploadedIdentifiers.length>0,expression:"uploadedIdentifiers.length > 0"}],ref:"includedMedia",attrs:{name:"uploadedIdentifiers",setupEdit:e.getEditConfigurator(),removeItems:!1,addItems:!1,attributes:{wrapper:{class:"includedAdminBlockType1"},inputWrapper:{class:"includedAdminElement"}}},model:{value:e.uploadedIdentifiers,callback:function(t){e.uploadedIdentifiers=t},expression:"uploadedIdentifiers"}})],1)],1)],1)},[],!1,null,null,null);x.options.__file="baseMediaResource.vue";t.default=x.exports}}]);