"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[4177],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5715:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905)),l=n(4996);const o={id:"collator_setup",title:"\u642d\u5efa\u6574\u7406\u5668\u8282\u70b9"},i=void 0,p={unversionedId:"collator_setup",id:"collator_setup",title:"\u642d\u5efa\u6574\u7406\u5668\u8282\u70b9",description:"\u8fd9\u662f\u4e00\u4e2a\u542f\u52a8\u5e76\u8fd0\u884c HydraDX \u6574\u7406\u5668\u7684\u5206\u6b65\u64cd\u4f5c\u6307\u5357\u3002\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 Ubuntu 20.04 LTS\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/collator_setup.md",sourceDirName:".",slug:"/collator_setup",permalink:"/cn/collator_setup",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/collator_setup.md",tags:[],version:"current",frontMatter:{id:"collator_setup",title:"\u642d\u5efa\u6574\u7406\u5668\u8282\u70b9"},sidebar:"sidebar",previous:{title:"Omnipool \u8bbe\u8ba1",permalink:"/cn/omnipool_design"},next:{title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5",permalink:"/cn/performance_benchmark"}},c={},d=[{value:"\u6240\u9700\u8981\u7684\u6280\u672f\u6761\u4ef6",id:"technical-specifications",level:2},{value:"\u521b\u5efa\u6280\u672f <code>hydra</code> \u7528\u6237\u5e76\u5c06\u5176\u6dfb\u52a0\u5230 Sudoers",id:"\u521b\u5efa\u6280\u672f-hydra-\u7528\u6237\u5e76\u5c06\u5176\u6dfb\u52a0\u5230-sudoers",level:2},{value:"\u4e0b\u8f7d\u5e76\u914d\u7f6e <code>hydradx</code> \u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u4e0b\u8f7d\u5e76\u914d\u7f6e-hydradx-\u4e8c\u8fdb\u5236\u6587\u4ef6",level:2},{value:"\u547d\u4ee4\u60a8\u7684\u6574\u7406\u5668\u8fd0\u884c",id:"\u547d\u4ee4\u60a8\u7684\u6574\u7406\u5668\u8fd0\u884c",level:2},{value:"\u751f\u6210\u60a8\u7684\u5bc6\u94a5",id:"\u751f\u6210\u60a8\u7684\u5bc6\u94a5",level:2},{value:"\u8bbe\u7f6e\u60a8\u7684\u5bc6\u94a5",id:"\u8bbe\u7f6e\u60a8\u7684\u5bc6\u94a5",level:2},{value:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u542f\u52a8\u5e76\u8fd0\u884c HydraDX \u6574\u7406\u5668\u7684\u5206\u6b65\u64cd\u4f5c\u6307\u5357\u3002\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 Ubuntu 20.04 LTS\u3002"),(0,r.kt)("h2",{id:"technical-specifications"},"\u6240\u9700\u8981\u7684\u6280\u672f\u6761\u4ef6"),(0,r.kt)("p",null,"\u8fd0\u884c HydraDX \u6574\u7406\u5668\u8282\u70b9\u81f3\u5c11\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6280\u672f\u8981\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04"),(0,r.kt)("li",{parentName:"ul"},"CPU: Intel Core i7-7700K @ 4.5Ghz (\u6216\u540c\u7b49\u5355\u6838\u6027\u80fd)"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58: 64GB RAM"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\uff1a\u5bb9\u91cf\u81f3\u5c11\u4e3a 200GB \u7684 NVMe SSD\uff08\u6570\u636e\u5360\u7528\u7a7a\u95f4\u4f1a\u968f\u7740\u65f6\u95f4\u589e\u957f\uff09")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u662f\u7ecf\u56e2\u961f\u9a8c\u8bc1\u8fc7\u7684\u6700\u4f4e\u6280\u672f\u8981\u6c42\u3002\u60f3\u8981\u786e\u4fdd\u60a8\u7684\u673a\u5668\u6709\u8db3\u591f\u7684\u8d44\u6e90\u6765\u8fd0\u884c\u8282\u70b9\uff1f\u8bf7\u8fd0\u884c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/performance_benchmark"},"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5"))," \u4ee5\u627e\u51fa\u7b54\u6848\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa\u6280\u672f-hydra-\u7528\u6237\u5e76\u5c06\u5176\u6dfb\u52a0\u5230-sudoers"},"\u521b\u5efa\u6280\u672f ",(0,r.kt)("inlineCode",{parentName:"h2"},"hydra")," \u7528\u6237\u5e76\u5c06\u5176\u6dfb\u52a0\u5230 Sudoers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser hydra\nsudo usermod -aG sudo hydra\nsu - hydra\n")),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u5e76\u914d\u7f6e-hydradx-\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u4e0b\u8f7d\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h2"},"hydradx")," \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,r.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a 12.x \u7248\u672c\uff0c\u6211\u4eec\u4f7f\u7528\u6211\u4eec\u8d44\u4ea7\u5b58\u50a8\u5e93\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"v12.1.0")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/galacticcouncil/HydraDX-node/releases/download/v12.1.0/hydradx\nsudo mv hydradx /usr/local/bin\nsudo chmod +x /usr/local/bin/hydradx\nsudo chown hydra:hydra /usr/local/bin/hydradx\n\n")),(0,r.kt)("h2",{id:"\u547d\u4ee4\u60a8\u7684\u6574\u7406\u5668\u8fd0\u884c"},"\u547d\u4ee4\u60a8\u7684\u6574\u7406\u5668\u8fd0\u884c"),(0,r.kt)("p",null,"\u6700\u597d\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," \u5c06\u60a8\u7684\u6574\u7406\u5668\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u3002 \u4e3a\u6b64\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/hydradx-collator.service")," \u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydradx-collator.service")," \u7684\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/systemd/system/hydradx-collator.service\n")),(0,r.kt)("p",null,"\u7136\u540e\u7c98\u8d34\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[Unit]\nDescription=hydradx validator\n[Service]\nType=exec\nUser=hydra\nExecStart=/usr/local/bin/hydradx \\\n    --name YOUR_COLLATOR_NAME \\\n    --prometheus-external \\\n    --base-path /var/lib/hydradx \\\n    --collator \\\n    -- \\\n    --execution wasm \\\n    --telemetry-url "wss://telemetry.hydradx.io:9000/submit/ 0" \\\n    --base-path /var/lib/hydradx\n    \nRestart=always\nRestartSec=120\n[Install]\nWantedBy=multi-user.target\n')),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u60a8\u7684\u8282\u70b9\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u521b\u5efa\u57fa\u672c\u8def\u5f84\u6587\u4ef6\u5939\u5e76\u8d4b\u4e88\u5b83\u5fc5\u8981\u7684\u6743\u9650\u548c\u6240\u6709\u6743\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /var/lib/hydradx\nchown hydra:hydra /var/lib/hydradx\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"df -h")," \u547d\u4ee4\u786e\u4fdd\u60a8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"base-path")," \u7559\u6709\u8db3\u591f\u7684\u7a7a\u95f4\u3002")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9 ",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," \u662f\u53ef\u9009\u7684\uff0c\u4f46\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4f7f\u7528\u5b83\uff0c\u4ee5\u4fbf\u60a8\u80fd\u591f\u5bfc\u51fa prometheus \u6307\u6807\u5e76\u901a\u8fc7 Grafana \u76d1\u63a7\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u51b5\u3002\u6709\u5173\u76d1\u63a7\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.hydradx.io/node_monitoring/"},"\u6b64\u94fe\u63a5")),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u540c\u65f6\u76d1\u63a7 ",(0,r.kt)("inlineCode",{parentName:"p"},"parachain")," \u548c",(0,r.kt)("inlineCode",{parentName:"p"},"relaychain")," \u6307\u6807\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," \u5219\u5e94\u5728\u8fd9\u4e24\u4e2a\u90e8\u5206\u4e2d\u8bbe\u7f6e\u9009\u9879\u3002\u60a8\u8fd8\u9700\u8981\u4e3a\u4e2d\u7ee7\u94fe\u90e8\u5206\u8bbe\u7f6e\u4e00\u4e2a\u5355\u72ec\u7684\u7aef\u53e3\uff0c\u5982\u4e0b\u6240\u793a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-port YOUR_CUSTOM_PORT_NUMBER")," \u3002"),(0,r.kt)("p",null,"\u6839\u636e\u60a8\u7684\u8bbe\u7f6e\uff0c\u60a8\u53ef\u80fd\u8fd8\u60f3\u8986\u76d6\u67d0\u4e9b\u53c2\u6570\uff0c\u5982 websocket\u3001rpc \u6216\u60a8\u7684\u8282\u70b9 p2p \u7aef\u53e3\u3002\u6709\u5173\u53ef\u7528\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"hydradx --help")," \u3002"),(0,r.kt)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u8282\u70b9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable hydradx-collator\nsudo systemctl start hydradx-collator.service\n")),(0,r.kt)("p",null,"\u60a8\u7684\u8282\u70b9\u73b0\u5728\u5e94\u8be5\u5df2\u542f\u52a8\u5e76\u6b63\u5728\u8fd0\u884c\u3002\u786e\u4fdd\u60a8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra")," \u7528\u6237\u5177\u6709\u8bbf\u95ee\u60a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"base-path")," \u548c\u5bc6\u94a5\u6587\u4ef6\u7684\u5fc5\u8981\u6743\u9650\u3002\n\u5982\u679c\u60a8\u9700\u8981\u5bf9\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\u8fdb\u884c\u6545\u969c\u6392\u9664\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709\u62d6\u5c3e\u9009\u9879\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"journalctl")," \u547d\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -fu hydradx-collator\n")),(0,r.kt)("h2",{id:"\u751f\u6210\u60a8\u7684\u5bc6\u94a5"},"\u751f\u6210\u60a8\u7684\u5bc6\u94a5"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9\u60a8\u7684\u8282\u70b9\u751f\u6210\u5bc6\u94a5\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,r.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u770b\u5230\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u7684\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}\n')),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u60a8\u7684\u5bc6\u94a5"},"\u8bbe\u7f6e\u60a8\u7684\u5bc6\u94a5"),(0,r.kt)("p",null,"\u8981\u5c06\u751f\u6210\u7684\u4f1a\u8bdd\u5bc6\u94a5\u4e0e\u60a8\u7684\u63a7\u5236\u5668\u5e10\u6237\u76f8\u5173\u8054\uff0c\u8bf7\u5bfc\u822a\u5230 Polkadot \u5e73\u884c\u94fe HydraDX \u4e0a\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics"},"Polkadot/apps"))," \u4e2d\u7684\u4ee5\u4e0b\u83dc\u5355\u9879\uff1a",(0,r.kt)("em",{parentName:"p"},"Developer")," > ",(0,r.kt)("em",{parentName:"p"},"Extrinsics")," \u3002"),(0,r.kt)("p",null,"\u586b\u5199\u5b57\u6bb5:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"using selected account"),"\uff08\u4f7f\u7528\u6240\u9009\u5e10\u6237\uff09\uff1a\u9009\u62e9\u60a8\u7684\u63a7\u5236\u5668\u5e10\u6237\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"submit the following extrinsic"),"\uff08\u63d0\u4ea4\u4ee5\u4e0b\u5916\u90e8\u5185\u5bb9\uff09\uff1a\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"session")," \u5de6\u4fa7\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"setKeys")," \u53f3\u4fa7\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"keys"),"\uff08\u5bc6\u94a5\uff09\uff1a\u8f93\u5165\u60a8\u521a\u521a\u751f\u6210\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"proof"),"\uff08\u8bc1\u660e\uff09: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),";")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,l.Z)("/collator-node/session-keys.png")})),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"},"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"\u786e\u4fdd\u60a8\u7684\u8282\u70b9\u5df2\u5b8c\u5168\u540c\u6b65\u3002\u4e00\u65e6\u5b8c\u6210\uff0c\u8bf7\u5728\u4e13\u7528\u7684 Discord \u9891\u9053\u4e2d\u544a\u8bc9\u6211\u4eec\uff08\u4ec5\u5f53\u60a8\u5df2\u88ab\u9884\u9009\u4e3a\u6574\u7406\u5668\u65f6\uff09\u3002"))}u.isMDXComponent=!0}}]);