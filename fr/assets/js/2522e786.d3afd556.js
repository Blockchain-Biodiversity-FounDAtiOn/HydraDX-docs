"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[73],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},696:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=(t(4996),["components"]),s={id:"node_setup",title:"Installer un node HydraDX"},l=void 0,u={unversionedId:"node_setup",id:"node_setup",title:"Installer un node HydraDX",description:"Cette section vous guide \xe0 travers le proc\xe9d\xe9 d'installation et de fonctionnement d'un node HydraDX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/node_setup.md",sourceDirName:".",slug:"/node_setup",permalink:"/fr/node_setup",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_setup.md",tags:[],version:"current",frontMatter:{id:"node_setup",title:"Installer un node HydraDX"},sidebar:"sidebar",previous:{title:"Omnipool Design",permalink:"/fr/omnipool_design"},next:{title:"Set up a Collator Node",permalink:"/fr/collator_setup"}},c=[{value:"00 configurations techniques requises",id:"00-required-technical-specifications",children:[],level:2},{value:"01 v\xe9rifier si votre horloge syst\xe8me est synchronis\xe9e",id:"01-check-whether-your-system-clock-is-synchronized",children:[],level:2},{value:"02 R\xe8gler vos param\xe8tres de firewall",id:"02-adjust-your-firewall-settings",children:[],level:2},{value:"03 T\xe9l\xe9charger et construire un binary",id:"03-download-or-build-a-binary",children:[],level:2},{value:"04 ex\xe9cuter le binaire",id:"04-run-the-binary",children:[],level:2},{value:"05 Fonctionnement avec systemd",id:"05-running-with-systemd",children:[],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cette section vous guide \xe0 travers le proc\xe9d\xe9 d'installation et de fonctionnement d'un node HydraDX."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Faire fonctionner un node validateur requiert une certaine comp\xe9tence technique n\xe9cessaire pour l'installation correcte du node, et pour garantir sa disponibilit\xe9. Si vous n'\xeates pas s\xfbr de ce que vous faites ici, nous recommandons de ",(0,o.kt)("a",{parentName:"p",href:"/start_nominating"},"D\xe9l\xe9guer vos HDX")," \xe0 un validateur exp\xe9riment\xe9 \xe0 la place. En d\xe9l\xe9guant vos HDX, vous vous prot\xe9gez vous, et vos nominateurs contre une perte de fonds involontaire."))),(0,o.kt)("h2",{id:"00-required-technical-specifications"},"00 configurations techniques requises"),(0,o.kt)("p",null,"Voici la configuration minimale pour faire fonctionner un node validateur HydraDX : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Syst\xe8me d'exploitation: Ubuntu 20.04"),(0,o.kt)("li",{parentName:"ul"},"Processeur: Intel Core i7-7700K @ 4.5Ghz (ou monoc\u0153ur \xe0 performance \xe9quivalente)"),(0,o.kt)("li",{parentName:"ul"},"M\xe9moire: 64GB RAM"),(0,o.kt)("li",{parentName:"ul"},"Stockage: NVMe SSD avec une capacit\xe9 d'au moins 200GB (l'empreinte de donn\xe9e va cro\xeetre \xe0 l'avenir)")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ce sont les exigences techniques minimales qui ont \xe9t\xe9 v\xe9rifi\xe9es et approuv\xe9es par l'\xe9quipe. Si vous voulez vous assurer que votre machine a les ressources suffisantes pour faire fonctionner un node, lancer un ",(0,o.kt)("a",{parentName:"p",href:"/performance_benchmark"},"benchamark de performance")," pour le d\xe9couvrir."))),(0,o.kt)("h2",{id:"01-check-whether-your-system-clock-is-synchronized"},"01 v\xe9rifier si votre horloge syst\xe8me est synchronis\xe9e"),(0,o.kt)("p",null,"Avant de faire fonctionner un node, vous devriez vous assurer que votre horloge syst\xe8me est synchronis\xe9e - c'est important car les validateurs travaillent ensemble. Sur Ubuntu 20.04 l'horloge syst\xe8me devrait \xeatre synchronis\xe9e par d\xe9faut. Pour le v\xe9rifier, lancer la commande suivante et v\xe9rifier le r\xe9sultat :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ timedatectl | grep "System clock"\nSystem clock synchronized: yes\n')),(0,o.kt)("p",null,"Si le r\xe9sultat est diff\xe9rent, alors vous pouvez installer le paquet ",(0,o.kt)("em",{parentName:"p"},"NTP")," manuellement et v\xe9rifier que votre horloge syst\xe8me est synchronis\xe9e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt install ntp\n$ ntpq -p\n")),(0,o.kt)("h2",{id:"02-adjust-your-firewall-settings"},"02 R\xe8gler vos param\xe8tres de firewall"),(0,o.kt)("p",null,"Le port ",(0,o.kt)("inlineCode",{parentName:"p"},"30333")," est utilis\xe9 pour des connexions peer-to-peer avec d'autres nodes. Si vous faites fonctionner le node en tant que validateur, nous recommandons que vous installiez un firewall et le configuriez pour exposer ce port seulement aux connexions distantes."),(0,o.kt)("p",null,"Si vous ne faites pas fonctionner le node en tant que validateur, vous pouvez aussi exposer ",(0,o.kt)("inlineCode",{parentName:"p"},"9944"),"  (pour des connexions websocket avec des applications externes) et ",(0,o.kt)("inlineCode",{parentName:"p"},"9933")," (pour les requ\xeates HTTP \xe0 votre node). Vous pouvez utiliser le port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944")," pour vous connecter \xe0 votre node avec ",(0,o.kt)("a",{parentName:"p",href:"/polkadotjs_apps_local"},"Polkadot/apps"),".   "),(0,o.kt)("h2",{id:"03-download-or-build-a-binary"},"03 T\xe9l\xe9charger et construire un binary"),(0,o.kt)("p",null,"Vous pouvez t\xe9l\xe9charger un binaire de notre derni\xe8re version sur ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/releases"},"github"),"."),(0,o.kt)("p",null,"Vous pouvez aussi construire un binaire depuis la source :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\n$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n\n# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# Build the binary\n$ cd HydraDX-node/\n$ cargo build --release\n")),(0,o.kt)("p",null,"Si vous avez construit un binaire selon les \xe9tapes ci-dessus, le chemin de votre binaire se trouve ici :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"target/release/hydra-dx\n")),(0,o.kt)("h2",{id:"04-run-the-binary"},"04 ex\xe9cuter le binaire"),(0,o.kt)("p",null,"Vous pouvez lancer le binaire en ex\xe9cutant la commande suivante:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Les nodes validateurs requierent la base de donn\xe9e de la cha\xeene enti\xe8re. Si vous avez lanc\xe9 le node avant sans le flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--validator"),", vous allez avoir besoin de resynchroniser la base de donn\xe9e en purgeant la cha\xeene avant de lancer le node."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna\n")))),(0,o.kt)("p",null,"Outre le chemin de votre binaire (voir au dessus), vous devez sp\xe9cifier un nom de node qui sera utilis\xe9 pour identifier votre node dans ",(0,o.kt)("a",{parentName:"p",href:"https://telemetry.hydradx.io/#/HydraDX%20Snakenet%20Gen2"},"Telemetry")," o\xf9 vous pouvez trouver une liste de toutes les nodes fonctionnement sur le Snakenet HydraDX."),(0,o.kt)("h2",{id:"05-running-with-systemd"},"05 Fonctionnement avec systemd"),(0,o.kt)("p",null,"Pour vous assurer que votre node est lanc\xe9 automatiquement au red\xe9marrage de votre machine, nous recommandons de lancer le node HydraDX en tant que processus de systemd. Pour ce faire, cr\xe9er le fichier suivant et ins\xe9rer le contenu en rempla\xe7ant les variables indiqu\xe9es comme ",(0,o.kt)("inlineCode",{parentName:"p"},"{VARIABLE}"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch /etc/systemd/system/hydradx-validator.service\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=HydraDX validator\n\n[Service]\nType=exec\nUser={UNIX_USER}\nExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"R\xe9gler ",(0,o.kt)("strong",{parentName:"p"},"RestartSec")," est recommand\xe9 parce que cela retarde la remise en route du node en cas de crash. Cela permet \xe0 n'importe quelle donn\xe9e imperturbable (comme les votes de consensus) d'\xeatre \xe9crite sur le disque avant que le node ne se remette en route. Relancer le node imm\xe9diatement apr\xe8s qu'il ait crash\xe9 peut provoquer une ambigu\xeft\xe9 ou une double signature, provoquant ainsi un slashing (punition)."))),(0,o.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 le fichier de configuration vous pouvez r\xe9agir avec votre node validateur HydraDX comme un processus du syst\xe8me:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the node at system boot\n$ systemctl enable hydradx-validator.service\n\n# Start the node manually\n$ systemctl start hydradx-validator.service\n\n# Check the status of the node\n$ systemctl status hydradx-validator.service\n\n# Check the logs of the node\n$ journalctl -f -u hydradx-validator.service\n")),(0,o.kt)("p",null,"Votre node HydraDX est maintenant configur\xe9 et fonctionnel !"),(0,o.kt)("p",null,"Vous pouvez maintenant compl\xe9ter les derni\xe8res \xe9tapes pour ",(0,o.kt)("a",{parentName:"p",href:"/start_validating"},"Commencer \xe0 valider"),"."))}p.isMDXComponent=!0}}]);