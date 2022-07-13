"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9447],{49613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},62027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(45443),r=(a(59496),a(49613));const i={id:"kv-api",title:"API",sidebar_position:10},l=void 0,p={unversionedId:"kv-service/kv-api",id:"kv-service/kv-api",title:"API",description:"Changelog",source:"@site/docs/kv-service/api.md",sourceDirName:"kv-service",slug:"/kv-service/kv-api",permalink:"/kv-service/kv-api",draft:!1,editUrl:"https://github.com/nextdotid/docs/docs/kv-service/api.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"kv-api",title:"API",sidebar_position:10}},o={},c=[{value:"Changelog",id:"changelog",level:2},{value:"General",id:"general",level:2},{value:"Structure",id:"structure",level:3},{value:"About struct patching",id:"about-struct-patching",level:3},{value:"Group KV",id:"group-kv",level:2},{value:"Get current KV of a persona GET /v1/kv",id:"query",level:3},{value:"Get signature payload for updating POST /v1/kv/payload",id:"payload",level:3},{value:"Apply a patch POST /v1/kv",id:"patch",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"<2022-02-28 Mon> :: init")),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("p",null,"All requests and responses should be ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json"),"."),(0,r.kt)("h3",{id:"about-struct-patching"},"About struct patching"),(0,r.kt)("p",null,"We choose ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7396"},"RFC 7396")," standard for\nKV modifying."),(0,r.kt)("p",null,"Client should choose a lib which implements this."),(0,r.kt)("p",null,"e.g.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pierreinglebert/json-merge-patch"},"json-merge-patch"),"\nfor JavaScript, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/idubrov/json-patch"},"json-patch"),"\nfor Rust."),(0,r.kt)("h2",{id:"group-kv"},"Group KV"),(0,r.kt)("h3",{id:"query"},"Get current KV of a persona ","[GET /v1/kv]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Parameters"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"persona (string, required) - Persona public key (hexstring started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Example"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/kv?persona=0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"persona (string, required) - Persona public key (uncompressed hexstring started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")."),(0,r.kt)("li",{parentName:"ul"},"proofs (array","[object]",", required) - All proofs belong to this persona",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"platform (string, required) - Platform (incl. ",(0,r.kt)("inlineCode",{parentName:"li"},"nextid"),", which means public key itself)."),(0,r.kt)("li",{parentName:"ul"},"identity (string, required) - Identity."),(0,r.kt)("li",{parentName:"ul"},"content (object, required) - KV-pair of this entry."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "persona": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "proofs": [{\n    "platform": "nextid",\n    "identity": "0x04c7cacde73.....",\n    "content": {\n      "this": "is",\n      "a": ["sample", "kv", "content"]\n    }\n  }, {\n    "platform": "twitter",\n    "identity": "yeiwb",\n    "content": {\n      "twitter": "only",\n      "kv": ["content", "goes", "here"]\n    }\n  }]\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 404 (application/json)"))),(0,r.kt)("p",null,"Persona not found (no KV was ever created)."),(0,r.kt)("h3",{id:"payload"},"Get signature payload for updating ","[POST /v1/kv/payload]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure to save order-aware struct in ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," value.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"persona (string, required) - Persona public key (both comressed / uncompressed and with/without ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," are OK)."),(0,r.kt)("li",{parentName:"ul"},"platform (string, required) - Platform (incl. ",(0,r.kt)("inlineCode",{parentName:"li"},"nextid"),", which means public key itself)."),(0,r.kt)("li",{parentName:"ul"},"identity (string, required) - Identity."),(0,r.kt)("li",{parentName:"ul"},"patch (object, required) - Patch to current data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "persona": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "platform": "nextid",\n  "identity": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "patch": {\n      "this": "is",\n      "a": "sample",\n      "structure": ["it", "could", "be", "anything"],\n      "key": {\n        "to": {\n          "delete": null\n        }\n      }\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (body)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID for this patch action. Send this UUID in ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv")," as-is."),(0,r.kt)("li",{parentName:"ul"},"created_at (number, required) - Creation timestamp of this request. Send this in ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv")," as-is."),(0,r.kt)("li",{parentName:"ul"},"sign_payload (string, required) - String to sign to."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "uuid": "40c13c92-31e5-40d1-aebb-143d8e5b9c5e",\n  "created_at": 1646983606,\n  "sign_payload": "{\\"action\\":\\"kv\\",\\"created_at\\":1646983606,\\"patch\\":{\\"a\\":\\"sample\\",\\"key_to_delete\\":null,\\"structure\\":[\\"it\\",\\"could\\",\\"be\\",\\"anything\\"],\\"this\\":\\"is\\"},\\"prev\\":null,\\"uuid\\":\\"40c13c92-31e5-40d1-aebb-143d8e5b9c5e\\"}"\n}\n')))))),(0,r.kt)("h3",{id:"patch"},"Apply a patch ","[POST /v1/kv]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request (application/json)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes (object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"persona (string, required) - Persona public key (hexstring, both comressed / uncompressed are OK)."),(0,r.kt)("li",{parentName:"ul"},"platform (string, required) - Platform (incl. ",(0,r.kt)("inlineCode",{parentName:"li"},"nextid"),", which means public key itself)."),(0,r.kt)("li",{parentName:"ul"},"identity (string, required) - Identity."),(0,r.kt)("li",{parentName:"ul"},"uuid (string, required) - UUID given by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv/payload"),"."),(0,r.kt)("li",{parentName:"ul"},"created_at (number, required) - Creation timestamp given by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /v1/kv/payload"),"."),(0,r.kt)("li",{parentName:"ul"},"signature (string, required) - Signature of this request. Base64-ed."),(0,r.kt)("li",{parentName:"ul"},"patch (object, required) - Patch content"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "persona": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "platform": "nextid",\n  "identity": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",\n  "uuid": "40c13c92-31e5-40d1-aebb-143d8e5b9c5e",\n  "created_at": 1646983606,\n  "signature": "BASE64_SIGNATURE_HERE",\n  "patch": {\n      "this": "is",\n      "a": "sample",\n      "structure": ["it", "could", "be", "any", "JSON"],\n      "key": {\n        "to": {\n          "delete": null\n        }\n      }\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response 201 (application/json)"))),(0,r.kt)("p",null,"Created successfully. Response is same as ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/kv"),"."))}d.isMDXComponent=!0}}]);