(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(88)),i={id:"install",title:"Install",sidebar_label:"Install"},l={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Install",description:"Environmental Preparation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/INSTALL.md",slug:"/install",permalink:"/fiora/docs/install",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/INSTALL.md",version:"current",sidebar_label:"Install",sidebar:"docs",previous:{title:"Getting Start",permalink:"/fiora/docs/getting-start"},next:{title:"Config",permalink:"/fiora/docs/config"}},c=[{value:"Environmental Preparation",id:"environmental-preparation",children:[]},{value:"How to run",id:"how-to-run",children:[{value:"Run in the background",id:"run-in-the-background",children:[]},{value:"Run With Develop Mode",id:"run-with-develop-mode",children:[]},{value:"Running on the docker",id:"running-on-the-docker",children:[]}]}],b={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"environmental-preparation"},"Environmental Preparation"),Object(o.b)("p",null,"To run Fiora, you need Node.js(recommend v14 LTS version), MongoDB and redis"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install Node.js",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Official website ",Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),Object(o.b)("li",{parentName:"ul"},"It is recommended to use nvm to install Node.js",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Install nvm ",Object(o.b)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#install--update-script"},"https://github.com/nvm-sh/nvm#install--update-script")),Object(o.b)("li",{parentName:"ul"},"Install Node.js via nvm ",Object(o.b)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#usage"},"https://github.com/nvm-sh/nvm#usage")))))),Object(o.b)("li",{parentName:"ul"},"Install MongoDB",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Official website ",Object(o.b)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/installation/#install-mongodb"},"https://docs.mongodb.com/manual/installation/#install-mongodb")))),Object(o.b)("li",{parentName:"ul"},"Install redis",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Official website ",Object(o.b)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/installation/#install-mongodb"},"https://docs.mongodb.com/manual/installation/#install-mongodb"))))),Object(o.b)("p",null,"Recommended to running on Linux or MacOS systems"),Object(o.b)("h2",{id:"how-to-run"},"How to run"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clone the project ",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/yinxin630/fiora.git -b master")),Object(o.b)("li",{parentName:"ol"},"Ensure you have install ",Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/yarn"},"yarn")," before, if not please run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install -g yarn")),Object(o.b)("li",{parentName:"ol"},"Install project dependencies ",Object(o.b)("inlineCode",{parentName:"li"},"yarn install")),Object(o.b)("li",{parentName:"ol"},"Build client ",Object(o.b)("inlineCode",{parentName:"li"},"yarn build:web")),Object(o.b)("li",{parentName:"ol"},"Config JwtSecret ",Object(o.b)("inlineCode",{parentName:"li"},'echo "JwtSecret=<string>" > .env2'),". Change ",Object(o.b)("inlineCode",{parentName:"li"},"<string>")," to a secret text"),Object(o.b)("li",{parentName:"ol"},"Start the server ",Object(o.b)("inlineCode",{parentName:"li"},"yarn start")),Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"http://[ip]:[port]"),"(such as ",Object(o.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:9200"),") in browser")),Object(o.b)("h3",{id:"run-in-the-background"},"Run in the background"),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," to run the server will stop running after disconnecting the ssh connection, it is recommended to use pm2 to run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# install pm2\nnpm install -g pm2\n\n# use pm2 to run fiora\npm2 start yarn --name fiora -- start\n\n# view pm2 apps status\npm2 ls\n\n# view pm2 fiora logging\npm2 logs fiora\n")),Object(o.b)("h3",{id:"run-with-develop-mode"},"Run With Develop Mode"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Start the server ",Object(o.b)("inlineCode",{parentName:"li"},"yarn dev:server")),Object(o.b)("li",{parentName:"ol"},"Start the client ",Object(o.b)("inlineCode",{parentName:"li"},"yarn dev:web")),Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8080")," in browser")),Object(o.b)("h3",{id:"running-on-the-docker"},"Running on the docker"),Object(o.b)("p",null,"First install docker ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"https://docs.docker.com/install/")),Object(o.b)("h4",{id:"run-directly-from-the-dockerhub-image"},"Run directly from the DockerHub image"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Pull mongo\ndocker pull mongo\n\n# Pull redis\ndocker pull redis\n\n# Pull fiora\ndocker pull suisuijiang/fiora\n\n# Create a virtual network\ndocker network create fiora-network\n\n# Run mongodB\ndocker run --name fioradb -p 27017:27017 --network fiora-network mongo\n\n# Run redis\ndocker run --name fioraredis -p 6379:6379 --network fiora-network redis\n\n# Run fiora\ndocker run --name fiora -p 9200:9200 --network fiora-network -e Database=mongodb://fioradb:27017/fiora -e RedisHost=fioraredis suisuijiang/fiora\n")),Object(o.b)("h4",{id:"local-build-image-and-run"},"Local build image and run"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clone the project to the local ",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/yinxin630/fiora.git -b master")),Object(o.b)("li",{parentName:"ol"},"Build the image ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose build --no-cache --force-rm")),Object(o.b)("li",{parentName:"ol"},"Run it ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose up"))))}s.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?a.a.createElement(d,l(l({ref:n},b),{},{components:t})):a.a.createElement(d,l({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);