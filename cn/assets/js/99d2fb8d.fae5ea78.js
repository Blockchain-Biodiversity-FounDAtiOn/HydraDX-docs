"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[241],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6409:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905)),o=n(4996);const i={id:"howto_stake",title:"\u8d28\u62bc HDX"},l=void 0,p={unversionedId:"howto_stake",id:"howto_stake",title:"\u8d28\u62bc HDX",description:"\u8d28\u62bc\uff0c\u5141\u8bb8\u7528\u6237\u8d28\u62bc\u5176 HDX \u4ee3\u5e01\uff0c\u5e76\u8d5a\u53d6\u968f\u65f6\u95f4\u63a8\u79fb\u800c\u5206\u914d\u7684\u5956\u52b1\u3002 \u672c\u9875\u9762\u5305\u542b\u4e86\u5982\u4f55\u8d28\u62bc HDX \u7684\u5206\u6b65\u6307\u5357\uff0c\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u5efa\u8bae\u60a8\u719f\u6089 HDX \u8d28\u62bc\u7684\u57fa\u7840\u77e5\u8bc6\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/howto_stake.md",sourceDirName:".",slug:"/howto_stake",permalink:"/cn/howto_stake",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_stake.md",tags:[],version:"current",frontMatter:{id:"howto_stake",title:"\u8d28\u62bc HDX"},sidebar:"sidebar",previous:{title:"\u52a0\u5165\u4e5d\u5934\u86c7\u519c\u573a",permalink:"/cn/howto_hydrated_farms"},next:{title:"\u521b\u5efa HDX \u65b0\u8d26\u6237",permalink:"/cn/create_account"}},u={},c=[{value:"\u6b65\u9aa4 0: \u5bfc\u822a\u81f3 HydraDX \u8d28\u62bc\u9875\u9762",id:"\u6b65\u9aa4-0-\u5bfc\u822a\u81f3-hydradx-\u8d28\u62bc\u9875\u9762",level:3},{value:"\u6b65\u9aa4 1: \u8d28\u62bc\u60a8\u7684 HDX",id:"\u6b65\u9aa4-1-\u8d28\u62bc\u60a8\u7684-hdx",level:3},{value:"\u6b65\u9aa4 2: \u4fdd\u6301\u60a8\u7684 HDX \u8d28\u62bc",id:"\u6b65\u9aa4-2-\u4fdd\u6301\u60a8\u7684-hdx-\u8d28\u62bc",level:3},{value:"\u6b65\u9aa4 3: \u63d0\u5347\u60a8\u7684\u5956\u52b1",id:"\u6b65\u9aa4-3-\u63d0\u5347\u60a8\u7684\u5956\u52b1",level:3},{value:"\u6b65\u9aa4 4: \u9886\u53d6\u60a8\u7684\u5956\u52b1",id:"\u6b65\u9aa4-4-\u9886\u53d6\u60a8\u7684\u5956\u52b1",level:3}],s={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8d28\u62bc\uff0c\u5141\u8bb8\u7528\u6237\u8d28\u62bc\u5176 HDX \u4ee3\u5e01\uff0c\u5e76\u8d5a\u53d6\u968f\u65f6\u95f4\u63a8\u79fb\u800c\u5206\u914d\u7684\u5956\u52b1\u3002 \u672c\u9875\u9762\u5305\u542b\u4e86\u5982\u4f55\u8d28\u62bc HDX \u7684\u5206\u6b65\u6307\u5357\uff0c\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u5efa\u8bae\u60a8\u719f\u6089 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/staking"},"HDX \u8d28\u62bc\u7684\u57fa\u7840\u77e5\u8bc6")),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8fd8\u6ca1\u6709 HDX\uff0c\u53ef\u4ee5\u5728\u6211\u4eec\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://app.hydradx.io/#/trade"},"\u4ea4\u6613\u9875\u9762"))," \u4e0a\uff0c\u901a\u8fc7\u4e0e Omnipool\uff08\u4e07\u80fd\u6c60\uff09 \u652f\u6301\u7684\u4e00\u7cfb\u5217\u8d44\u4ea7\u8fdb\u884c\u4ea4\u6362\uff0c\u6765\u83b7\u5f97\u4e00\u4e9b HDX\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa4-0-\u5bfc\u822a\u81f3-hydradx-\u8d28\u62bc\u9875\u9762"},"\u6b65\u9aa4 0: \u5bfc\u822a\u81f3 HydraDX \u8d28\u62bc\u9875\u9762"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.hydradx.io/staking"},"https://app.hydradx.io/staking")),(0,a.kt)("p",null,"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Connect Account")),"\uff08\u8fde\u63a5\u8d26\u6237\uff09\uff0c\u5c06\u60a8\u7684\u94b1\u5305\u8fde\u63a5\u5230 HydraDX\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa4-1-\u8d28\u62bc\u60a8\u7684-hdx"},"\u6b65\u9aa4 1: \u8d28\u62bc\u60a8\u7684 HDX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5e76\u586b\u5165\u60a8\u60f3\u8981\u8d28\u62bc\u7684 HDX \u4ee4\u724c\u6570\u91cf ",(0,a.kt)("strong",{parentName:"li"},"(3)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Stake")),"\uff08\u8d28\u62bc\uff09",(0,a.kt)("strong",{parentName:"li"},"(4)")," \u4f7f\u7528\u60a8\u7684\u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\u786e\u8ba4\u5e76\u7b7e\u7f72\u4ea4\u6613\u3002")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_stake/staking_1.jpg")})),(0,a.kt)("h3",{id:"\u6b65\u9aa4-2-\u4fdd\u6301\u60a8\u7684-hdx-\u8d28\u62bc"},"\u6b65\u9aa4 2: \u4fdd\u6301\u60a8\u7684 HDX \u8d28\u62bc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u83b7\u5f97\u5956\u52b1\u7684\u91d1\u989d\uff0c\u53d6\u51b3\u4e8e\u60a8\u8d28\u62bc\u7684 HDX\uff0c\u76f8\u5bf9\u6574\u4e2a\u8d28\u62bc\u6c60\u7684\u5927\u5c0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5206\u914d\u7ed9\u60a8\u7684\u5927\u90e8\u5206\u5956\u52b1\uff0c\u5c06\u4f1a\u88ab\u89e3\u9501\u3002 \u89e3\u9501\u7387\u7531\u5956\u52b1\u8054\u5408\u66f2\u7ebf\u51b3\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u9605 ",(0,a.kt)("a",{parentName:"li",href:"/staking"},"\u8d28\u62bc\u4ea7\u54c1\u6587\u6863"),"\u3002")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-3-\u63d0\u5347\u60a8\u7684\u5956\u52b1"},"\u6b65\u9aa4 3: \u63d0\u5347\u60a8\u7684\u5956\u52b1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6536\u96c6\u884c\u52a8\u79ef\u5206\uff0c\u4ee5\u589e\u52a0\u5956\u52b1\u5e76\u52a0\u5feb\u5956\u52b1\u89e3\u9501\u7684\u901f\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://hydradx.subsquare.io/democracy/referenda"},"\u516c\u6295\u6295\u7968"))," \u6765\u6536\u96c6\u884c\u52a8\u79ef\u5206\u3002 \u60a8\u7528\u4e8e\u6295\u7968\u7684\u8d28\u62bc HDX \u8d8a\u591a\uff0c\u4fe1\u5ff5\u4e58\u6570\u8d8a\u9ad8\uff0c\u60a8\u83b7\u5f97\u7684\u884c\u52a8\u79ef\u5206\u5c31\u8d8a\u591a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u4fe1\u606f\u53ef\u5728 ",(0,a.kt)("a",{parentName:"li",href:"/staking"},"\u8d28\u62bc\u4ea7\u54c1\u6587\u6863")," \u4e2d\u4e86\u89e3\u3002")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-4-\u9886\u53d6\u60a8\u7684\u5956\u52b1"},"\u6b65\u9aa4 4: \u9886\u53d6\u60a8\u7684\u5956\u52b1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u8d28\u62bc\u7edf\u8ba1\u6570\u636e\uff0c\u89c2\u5bdf\u5e76\u89c4\u5212\u60a8\u81ea\u5df1\u7684\u8d28\u62bc\u7b56\u7565 ",(0,a.kt)("strong",{parentName:"li"},"(5)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u60f3\u8981\u7ed3\u675f\u8d28\u62bc\uff0c\u53ef\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Claim"),"\uff08\u9886\u53d6\uff09\uff0c\u9886\u53d6\u60a8\u89e3\u9501\u7684\u5956\u52b1 ",(0,a.kt)("strong",{parentName:"li"},"(8)"),"\u3002")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_stake/staking_2.jpg")})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e00\u65e6\u51b3\u5b9a\u9886\u53d6\u89e3\u9501\u7684\u8d28\u62bc\u5956\u52b1\uff0c\u60a8\u90fd\u4f1a\u5931\u53bb\u5176\u4f59\u6240\u6709\u8fd8\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\u7684\u5956\u52b1\uff0c\u5b83\u4eec\u5c06\u4f1a\u88ab\u91cd\u65b0\u5206\u914d\u7ed9\u6240\u6709\u5176\u4ed6\u8d28\u62bc\u8005\u3002 \u6b64\u5916\uff0c\u60a8\u8fc7\u53bb\u7684\u884c\u52a8\u79ef\u5206\uff0c\u4e5f\u5c06\u88ab\u91cd\u7f6e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5982\u679c\u8d28\u62bc\u8005\u5728\u83b7\u5f97 75% \u7684\u5956\u52b1\u65f6\u9886\u53d6\u5956\u52b1\uff0c\u5219\u5269\u4f59\u7684 25% \u5c06\u88ab\u6ca1\u6536\u3002 \u7136\u540e\uff0c\u8d28\u62bc\u8005\u5fc5\u987b\u7b49\u5f85\u76f8\u540c\u7684\u65f6\u95f4\uff0c\u624d\u80fd\u9886\u53d6\u540e\u7eed\u6279\u6b21\u5956\u52b1\u7684 75%\u3002")))}d.isMDXComponent=!0}}]);