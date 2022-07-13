"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[5016],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(45443),a=(n(59496),n(49613));const i={title:"Liftoff, Hello Space!"},o=void 0,l={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"Liftoff, Hello Space!",description:"To get started, let's walk through a binding process with the most frequently used platform: Twitter. Hold tight, let's go!",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/zh-Hans/getting-started/quick-start",draft:!1,editUrl:"https://github.com/nextdotid/docs/docs/getting-started/quick-start.md",tags:[],version:"current",frontMatter:{title:"Liftoff, Hello Space!"},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh-Hans/"},next:{title:"How does Next.ID work",permalink:"/zh-Hans/core-concepts/how-it-works"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up your first Avatar",id:"set-up-your-first-avatar",level:2},{value:"Binding Twitter account",id:"binding-twitter-account",level:2},{value:"Get a payload",id:"get-a-payload",level:3},{value:"Generate the signature",id:"generate-the-signature",level:3},{value:"Post a proof Tweet",id:"post-a-proof-tweet",level:3},{value:"Verify the proof",id:"verify-the-proof",level:3},{value:"Check the status of Avatar",id:"check-the-status-of-avatar",level:3},{value:"Next Step",id:"next-step",level:2}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started, let's walk through a binding process with the most frequently used platform: Twitter. Hold tight, let's go!"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basics in Cryptography"),(0,a.kt)("li",{parentName:"ul"},"Basics in Python, TypeScript and Node.js"),(0,a.kt)("li",{parentName:"ul"},"Basics in Postman or cURL"),(0,a.kt)("li",{parentName:"ul"},"Or any programming languages and required libraries you prefer"),(0,a.kt)("li",{parentName:"ul"},"Knowing nothing but keen on learning? Don't panic, it's okay! You can learn it all in just a few hours!")),(0,a.kt)("h2",{id:"set-up-your-first-avatar"},"Set up your first Avatar"),(0,a.kt)("p",null,"In the Crypto world, a cryptographic key pair is what stands as one of your AVATARs. Next.ID uses by far the most secure algorithm to protect your sovereignty: curve secp256k1."),(0,a.kt)("p",null,"We're showing it by using Python's ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/secp256k1/"},"secp256k1-py"),"."),(0,a.kt)("p",null,"First to install secp256k1-py lib:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// get PIP installed in advance or use your own way\npip install secp256k1\n")),(0,a.kt)("p",null,"Then generate your own private and public key pair:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python -m secp256k1 privkey -p\n\n// ATTENTION! We intently replaced the last three digit of private key to be xxx.\n// Private key is everything and NEVER expose it to others or publicly\n43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx\nPublic key: 03bce884894fdc4fb45475733be317dd3c289f003bceebb097ac79a6b95e6edc56\n")),(0,a.kt)("p",null,"Having this one key pair, you now can get to create an Avatar backed by unbreakable cryptography."),(0,a.kt)("h2",{id:"binding-twitter-account"},"Binding Twitter account"),(0,a.kt)("p",null,"From now on, we're demonstrating the whole process by using a Twitter Handle and key-pair generated as above. Replace all fields to be your own as you go on, you'll get acknowledged when and where you should do it."),(0,a.kt)("p",null,"Especially ",(0,a.kt)("inlineCode",{parentName:"p"},"your_twitter_handle")," is where you'll be replacing it with your own."),(0,a.kt)("h3",{id:"get-a-payload"},"Get a payload"),(0,a.kt)("p",null,"If We're heading into space, there'll be a Rocket carrying us as a payload. Joining Cyberspace each time is quite similar."),(0,a.kt)("p",null,"First, let's get the payload needed to represent us. Calling REST API ",(0,a.kt)("inlineCode",{parentName:"p"},"/proof/payload")," by using POSTMAN or using cURL in the command line:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23436).Z,width:"1756",height:"504"})),(0,a.kt)("p",null,"Replace the fields of ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public_key")," to be your own, then it will return like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "post_content": {\n        "default": "\ud83c\udfad Verifying my Twitter ID @your_twitter_handle for @NextDotID.\\nSig: %SIG_BASE64%\\n\\nInstall Mask.io to enhance your Web3 experience.\\n",\n        "en_US": "\ud83c\udfad Verifying my Twitter ID @your_twitter_handle for @NextDotID.\\nSig: %SIG_BASE64%\\n\\nInstall Mask.io to enhance your Web3 experience.\\n",\n        "zh_CN": "\ud83c\udfad \u6b63\u5728\u901a\u8fc7 @NextDotID \u9a8c\u8bc1\u6211\u7684 Twitter \u5e10\u53f7 @your_twitter_handle \u3002\\nSig: %SIG_BASE64%\\n\\n\u8bf7\u4e0b\u8f7d\u5b89\u88c5 Mask.io \u53bb\u589e\u5f3a\u60a8\u7684 Web3 \u4f53\u9a8c\u3002\\n"\n    },\n    "sign_payload": "{\\"action\\":\\"create\\",\\"created_at\\":\\"1656843378\\",\\"identity\\":\\"your_twitter_handle\\",\\"platform\\":\\"twitter\\",\\"prev\\":\\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\\",\\"uuid\\":\\"77f5ccaa-7919-4854-96de-81975f96744a\\"}",\n    "uuid": "77f5ccaa-7919-4854-96de-81975f96744a",\n    "created_at": "1656843378"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sign_payload")," is the payload we're looking for. ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," are also required for the following steps."),(0,a.kt)("h3",{id:"generate-the-signature"},"Generate the signature"),(0,a.kt)("p",null,"With the payload returned, now we can go ahead to sign it. Git clones our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/Signature-Generating-Sample"},"open-source Demo in TypeScript")," to accomplish it."),(0,a.kt)("p",null,"Notice that, you need to set up Node.js and TypeScript before downloading, then go to install the required libs as ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereumjs-util"),"."),(0,a.kt)("p",null,"Let's open up the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file under ",(0,a.kt)("inlineCode",{parentName:"p"},"/src"),", and replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"const message")," with the string ",(0,a.kt)("inlineCode",{parentName:"p"},"sign_payload")," in the former step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { ecsign, toRpcSig, keccakFromString, BN } from \'ethereumjs-util\';\n\nasync function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {\n    const messageHash = keccakFromString(`\\x19Ethereum Signed Message:\\n${message.length}${message}`, 256)\n    const signature = ecsign(messageHash, privateKey)\n    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), \'hex\')\n}\n\nasync function main() {\n    // this message come from the return attribute "sign_payload" of everytime calling API: v1/proof/payload\n    const message = Buffer.from(\'{\\"action\\":\\"create\\",\\"created_at\\":\\"1656843378\\",\\"identity\\":\\"your_twitter_handle\\",\\"platform\\":\\"twitter\\",\\"prev\\":\\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\\",\\"uuid\\":\\"353449e6-3a6f-4ac8-ae65-ba14bf466baf\\"}\', \'utf8\');\n    // ATTENTION! RUN THIS LOCALLY! NEVER SHARE YOUR PRIVATE KEY WITH ANY OTHERS OR PUBLIC!\n    // replace XXX with your own Private Key for generating a signature\n    const secretKey = Buffer.from(\'XXX\', \'hex\');\n    const signature = await personalSign(message, secretKey);\n\n    console.log(`Signature: 0x${signature.toString(\'hex\')}`);\n    // For demo ONLY\n    // Signature: 0xf72fe6b00be411bd70ffe1b9bf322f18529ea10e9559dd26ba10387544849fc86d712709dfb709efc3dcc0a01b6f6b9ca98bd48fe780d58921f4926c6f2c0b871b\n\n    console.log(`Signature(base64): ${signature.toString(\'base64\')}`);\n    // For demo ONLY\n    // Signature(base64): 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=\n}\n\nmain();\n')),(0,a.kt)("p",null,"Now we can run it properly. Go to the root directory to compile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  Generating-Signature-TypeScript git:(main) tsc\n")),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/disc")," directory to get it running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  dist git:(main) \u2717 node index.js\n")),(0,a.kt)("p",null,"We will get two console.log outputs. One is the Signature(base64) that we're going to use for proof posting on Twitter."),(0,a.kt)("h3",{id:"post-a-proof-tweet"},"Post a proof Tweet"),(0,a.kt)("p",null,"Follow the format we get in calling ",(0,a.kt)("inlineCode",{parentName:"p"},"/proof/payload"),", replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sig")," with Signature(base64) we just get and visit twitter.com to tweet as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ud83c\udfad Verifying my Twitter ID @your_twitter_handle for @NextDotID.\nSig: 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=\n\nNext.ID YOUR DIGITAL IDENTITIES IN ONE PLACE\n")),(0,a.kt)("p",null,"Then go to the detail page of this tweet, get its ID at the end of the URL like `1543541274254639104``:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://twitter.com/your_twitter_handle/status/1543541274254639104\n")),(0,a.kt)("p",null,"This ID will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"proof_location")," we needed for verifying."),(0,a.kt)("h3",{id:"verify-the-proof"},"Verify the proof"),(0,a.kt)("p",null,"We're getting close! Calling REST API ",(0,a.kt)("inlineCode",{parentName:"p"},"/proof")," by using POSTMAN or using cURL in the command line:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44668).Z,width:"1756",height:"650"})),(0,a.kt)("p",null,"It will return a code of ",(0,a.kt)("inlineCode",{parentName:"p"},"201")," Created` and empty curly brackets :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{}\n")),(0,a.kt)("h3",{id:"check-the-status-of-avatar"},"Check the status of Avatar"),(0,a.kt)("p",null,"All set! Let's go to have a look at our newly created Avatar."),(0,a.kt)("p",null,"Calling REST API ",(0,a.kt)("inlineCode",{parentName:"p"},"/proof")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," method and with two fields of ",(0,a.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"identity"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://proof-service.next.id/v1/proof?platform=twitter&identity=your_twitter_handle\n")),(0,a.kt)("p",null,"We will get as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "pagination": {\n        "total": 4,\n        "per": 20,\n        "current": 1,\n        "next": 0\n    },\n    "ids": [\n        {\n            "avatar": "0x03bce884894fdc4fb45475733be317dd3c289f003bceebb097ac79a6b95e6edc56",\n            "proofs": [\n                {\n                    "platform": "twitter",\n                    "identity": "your_twitter_handle",\n                    "created_at": "1656844114",\n                    "last_checked_at": "1656844114",\n                    "is_valid": true,\n                    "invalid_reason": ""\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Now you successfully created an Avatar on-chain as who you're. Go exploring cyberspace ahead!"),(0,a.kt)("h2",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View the ","[architecture]"," of Next.ID framework(../core-concepts/architecture.md)"),(0,a.kt)("li",{parentName:"ul"},"Understand ",(0,a.kt)("a",{parentName:"li",href:"/zh-Hans/core-concepts/how-it-works"},"how it works in detail"))))}u.isMDXComponent=!0},23436:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/get-payload-993e92252d7bfff848375af3e672ef0e.png"},44668:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/verify-post-d0d9587cec7ec45656f929f5e05339d0.png"}}]);