(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(e,t,a){"use strict";a.r(t),t.default={resourceName:"category",extendsController:"BaseNestedResource",mapParentTo:"parentCategory",mapChildrenTo:"childCategories",setupList:function({list:e}){this.addCreateControl("Create new category"),e.addFilter("TextFormElement",{name:"title",label:"Title"}),e.addFilter("NestedSelectFormElement",{name:"parentCategory",label:"Parent category",mapCaptionTo:"title",mapParentTo:"parentCategory",mapChildrenTo:"childCategories",selectableLevel:"all",relation:{resourceName:"category"}}),e.addMassAction([{caption:"Publish",updateAttributes:{published:!0}},{caption:"Unpublish",updateAttributes:{published:!1}}]),e.addItem("LinkListItem",{caption:"Title",mapTo:"title",action:"editItem"}),e.addItem("TextListItem",{caption:"Description",mapTo:"description"}),e.addItem("BlipListItem",{caption:"Published",mapTo:"published",addIf:this.screenIsLarge}),e.addItem("ContextMenuListItem",{caption:"Actions",items:[{caption:"Edit",action:"editItem"}]})},setupEdit:function({edit:e}){this.addToIndexControl().addSaveControl(),e.addField("TextFormElement",{label:"Title",name:"title",attributes:{input:{class:"inputType2 size2"}},layoutReference:"mainRegion"}),e.addField("TextareaFormElement",{label:"Description",name:"description",layoutReference:"mainRegion"}),e.addField("FileAttachmentFormElement",{label:"Image",name:"image",mapThumbnailTo:"imageThumbnailUrl",mapCurrentFileUrlTo:"imageOriginalUrl",layoutReference:"mainRegion"}),e.addField("NestedSelectFormElement",{readOnly:!0,name:"parentCategory",label:"Parent category",mapCaptionTo:"title",mapParentTo:"parentCategory",mapChildrenTo:"childCategories",selectableLevel:"all",relation:{type:"hasOne",resourceName:"category"},layoutReference:"sideRegion"}),e.addField("SelectFormElement",{label:"Published status",name:"published",selectOptions:[{caption:"Published",value:!0},{caption:"Not published",value:!1}],layoutReference:"sideRegion"})}}}}]);