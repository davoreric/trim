(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{341:function(t,e,i){"use strict";i.r(e),e.default={extendsController:"BaseResourceEdit",cssClass:"mySettingsController",getModel:t=>t.getFromApi({type:"user",id:1}),setupEdit({edit:t}){this.setPageTitle("My settings"),this.addControl({caption:"Documentation",action:()=>window.open("https://trikoder.github.io/trim/","_blank")}),this.addSaveControl(),t.addField("TextFormElement",{label:"Email",name:"email",attributes:{input:{class:"inputType2 size2"}}})}}}}]);