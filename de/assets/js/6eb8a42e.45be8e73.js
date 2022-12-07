"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[633],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4047:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(3117),i=r(102),a=(r(7294),r(3905)),o=(r(4996),["components"]),c={id:"performance_benchmark",title:"Leistungs-Benchmark"},s=void 0,l={unversionedId:"performance_benchmark",id:"performance_benchmark",title:"Leistungs-Benchmark",description:"Sie k\xf6nnen sicherstellen, dass ihre Hardware die technischen Mindestanforderungen erf\xfcllt, indem Sie einen Leistungs-Benchmark ausf\xfchren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/performance_benchmark.md",sourceDirName:".",slug:"/performance_benchmark",permalink:"/de/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",tags:[],version:"current",frontMatter:{id:"performance_benchmark",title:"Leistungs-Benchmark"},sidebar:"sidebar",previous:{title:"Set up a Collator Node",permalink:"/de/collator_setup"},next:{title:"Node Monitoring",permalink:"/de/node_monitoring"}},u=[],p={toc:u};function d(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sie k\xf6nnen sicherstellen, dass ihre Hardware die ",(0,a.kt)("a",{parentName:"p",href:"/collator_setup#technical-specifications"},"technischen Mindestanforderungen")," erf\xfcllt, indem Sie einen Leistungs-Benchmark ausf\xfchren.",(0,a.kt)("br",{parentName:"p"}),"\n","Nutzen Sie hierf\xfcr Folgenden Befehl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prepare for running the benchmark\n## Install Rust following https://rustup.rs\n$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n## Configure Rust\n$ ./scripts/init.sh\n$ rustup default nightly\n\n## Install additional libraries\n$ apt install python3-pip\n$ apt install clang\n\n# Run the benchmark\n$ ./scripts/check_performance.sh\n")),(0,a.kt)("p",null,"Nachdem Ihr Benchmark ausgef\xfchrt wurde sollte ihre Ausgabe \xe4hnlich zu folgedem sein:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |  diff* (\xb5s)   |   diff* (%)    |            |   Rerun\namm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |\nexchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |\ntransaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |\n\nNotes:\n- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine\n- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node\n- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node\n")),(0,a.kt)("p",null,"Sie k\xf6nnen die Unterschiede in der Leistungsf\xe4higkeit zwischen Ihrem Server und den Mindestanforderungen in der diff* (%)-Spalte sehen.\nWenn alle drei Werte positiv sind sollte Ihr Server in der Lage sein eine HydraDX Validator Node zu betreiben.\nWenn einer der Werte niedriger als -10 % ist empfehlen wir Ihnen vom Betreiben eines Validators auf diesem Server abzusehen."),(0,a.kt)("p",null,"Sie k\xf6nnen gerne unserem Discord Channel beitreten wenn sie Ihre Benchmark Ergebnisse diskutieren wollen oder Hilfe brauchen. Unsere Community hilft Ihnen gerne!"))}d.isMDXComponent=!0}}]);