(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms"],{"0894":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._e(),n("hero-bar",[e._v(" Log register "),n("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[e._v(" Dashboard ")])],1),n("section",{staticClass:"section is-main-section"},[n("card-component",{attrs:{title:"Forms",icon:"ballot"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("b-field",{attrs:{label:"From",horizontal:""}},[n("b-field",[n("b-input",{attrs:{icon:"account",placeholder:"Name",name:"name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-field",[n("b-input",{attrs:{icon:"email",type:"email",placeholder:"E-mail",name:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),n("b-field",{attrs:{message:"Do not enter the leading zero",horizontal:""}},[n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-static"},[e._v(" +44 ")])]),n("b-input",{attrs:{type:"tel",name:"phone",expanded:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),n("b-field",{attrs:{label:"Department",horizontal:""}},[n("b-select",{attrs:{placeholder:"Select a department",required:""},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}},e._l(e.departments,(function(t,o){return n("option",{key:o,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1),n("hr"),n("b-field",{attrs:{label:"Subject",message:"Message subject",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. Partnership proposal",required:""},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}})],1),n("b-field",{attrs:{label:"Question",message:"Your question. Max 255 characters",horizontal:""}},[n("b-input",{attrs:{type:"textarea",placeholder:"Explain how we can help you",maxlength:"255",required:""},model:{value:e.form.question,callback:function(t){e.$set(e.form,"question",t)},expression:"form.question"}})],1),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("b-field",{attrs:{grouped:""}},[n("div",{staticClass:"control"},[n("b-button",{attrs:{"native-type":"submit",type:"is-primary"}},[e._v("Submit")])],1),n("div",{staticClass:"control"},[n("b-button",{attrs:{type:"is-primary is-outlined"},on:{click:e.reset}},[e._v("Reset")])],1)])],1)],1)]),n("card-component",{attrs:{title:"Custom elements",icon:"ballot-outline"}},[n("b-field",{staticClass:"has-check",attrs:{label:"Checkbox",horizontal:""}},[n("checkbox-picker",{attrs:{options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"},type:"is-primary"},model:{value:e.customElementsForm.checkbox,callback:function(t){e.$set(e.customElementsForm,"checkbox",t)},expression:"customElementsForm.checkbox"}})],1),n("hr"),n("b-field",{staticClass:"has-check",attrs:{label:"Radio",horizontal:""}},[n("radio-picker",{attrs:{options:{one:"One",two:"Two"}},model:{value:e.customElementsForm.radio,callback:function(t){e.$set(e.customElementsForm,"radio",t)},expression:"customElementsForm.radio"}})],1),n("hr"),n("b-field",{attrs:{label:"Switch",horizontal:""}},[n("b-switch",{model:{value:e.customElementsForm.switch,callback:function(t){e.$set(e.customElementsForm,"switch",t)},expression:"customElementsForm.switch"}},[e._v(" Default ")])],1),n("hr"),n("b-field",{attrs:{label:"File",horizontal:""}},[n("file-picker",{model:{value:e.customElementsForm.file,callback:function(t){e.$set(e.customElementsForm,"file",t)},expression:"customElementsForm.file"}})],1)],1)],1)],1)},l=[],a=n("9e86"),r=n.n(a),s=n("1e1d"),i=n("6df7"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,o){return n("div",{key:o,staticClass:"control"},[n("b-checkbox",{attrs:{"native-value":o,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},c=[],m={name:"CheckboxPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:Array,default:()=>[]}},data(){return{newValue:[]}},watch:{value(e){this.newValue=e}},created(){this.newValue=this.value},methods:{input(){this.$emit("input",this.newValue)}}},p=m,f=n("2877"),b=Object(f["a"])(p,u,c,!1,null,null,null),d=b.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,o){return n("div",{key:o,staticClass:"control"},[n("b-radio",{attrs:{"native-value":o,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},v=[],k={name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:[String,Number],default:null}},data(){return{newValue:null}},watch:{value(e){this.newValue=e}},created(){this.newValue=this.value},methods:{input(){this.$emit("input",this.newValue)}}},x=k,w=Object(f["a"])(x,h,v,!1,null,null,null),y=w.exports,_=n("3b73"),g=n("503b"),F={name:"Forms",components:{HeroBar:g["a"],FilePicker:_["a"],RadioPicker:y,CheckboxPicker:d,CardComponent:i["a"],TitleBar:s["a"]},data(){return{isLoading:!1,form:{name:null,email:null,phone:null,department:null,subject:null,question:null},customElementsForm:{checkbox:[],radio:null,switch:!0,file:null},departments:["Business Development","Marketing","Sales"]}},computed:{titleStack(){return["Admin","Forms"]}},methods:{submit(){},reset(){this.form=r()(this.form,e=>e&&"object"===typeof e?[]:null),this.$buefy.snackbar.open({message:"Reset successfully",queue:!1})}}},E=F,C=Object(f["a"])(E,o,l,!1,null,null,null);t["default"]=C.exports},"242e":function(e,t,n){var o=n("72af"),l=n("ec69");function a(e,t){return e&&o(e,t,l)}e.exports=a},"3b4a":function(e,t,n){var o=n("0b07"),l=function(){try{var e=o(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=l},"72af":function(e,t,n){var o=n("99cd"),l=o();e.exports=l},"872a":function(e,t,n){var o=n("3b4a");function l(e,t,n){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}e.exports=l},"99cd":function(e,t){function n(e){return function(t,n,o){var l=-1,a=Object(t),r=o(t),s=r.length;while(s--){var i=r[e?s:++l];if(!1===n(a[i],i,a))break}return t}}e.exports=n},"9e86":function(e,t,n){var o=n("872a"),l=n("242e"),a=n("badf");function r(e,t){var n={};return t=a(t,3),l(e,(function(e,l,a){o(n,l,t(e,l,a))})),n}e.exports=r}}]);
//# sourceMappingURL=forms.6aeabe56.js.map