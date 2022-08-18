"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9705],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(62081),o=(t(59496),t(49613));const a={title:"Go"},i=void 0,c={unversionedId:"developer-guide/go",id:"developer-guide/go",title:"Go",description:"Proof Service",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/go.md",sourceDirName:"developer-guide",slug:"/developer-guide/go",permalink:"/zh-Hans/developer-guide/go",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/developer-guide/go.md",tags:[],version:"current",frontMatter:{title:"Go"},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-Hans/relation-service/rs-faq"},next:{title:"Rust",permalink:"/zh-Hans/developer-guide/rust"}},s={},l=[{value:"Proof Service",id:"proof-service",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"proof-service"},"Proof Service"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You could git clone and run this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/Signature-Generating-Sample/tree/main/go"},"Go open demo")," as a help")),(0,o.kt)("p",null,"The core example of codes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="cmd/playground.go"',title:'"cmd/playground.go"'},'package main\n\nimport (\n    "crypto/ecdsa"\n    "fmt"\n\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nconst (\n    // ATTENTION! We intently replaced the last three digit of private key to be xxx.\n    // Private key is everything and NEVER expose it to others or publicly\n    SECRET_KEY   = "43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx"\n    SIGN_PAYLOAD = "Test123123!"\n)\n\nfunc main() {\n    sk, err := crypto.HexToECDSA(SECRET_KEY)\n    if err != nil {\n        panic(err)\n    }\n\n    sign, err := signPersonal([]byte(SIGN_PAYLOAD), sk)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Signature: %s\\n", hexutil.Encode(sign))\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401\n}\n\n// signPersonal signs a payload using given secret key.\nfunc signPersonal(payload []byte, sk *ecdsa.PrivateKey) (signature []byte, err error) {\n    digest := signPersonalDigest(payload)\n    signature, err = crypto.Sign(digest, sk)\n    if err != nil {\n        return nil, err\n    }\n\n    return signature, nil\n}\n\n// signPersonalDigest hashes the given payload with eth.personal.sign struct.\nfunc signPersonalDigest(data []byte) []byte {\n    messsage := fmt.Sprintf("\\x19Ethereum Signed Message:\\n%d%s", len(data), data)\n    return crypto.Keccak256([]byte(messsage))\n}\n')))}p.isMDXComponent=!0}}]);