"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[7380],{8282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(6600),a=(n(9496),n(9613));n(9295);const r={id:"rs-graphql",title:"GraphQL",sidebar_position:3},o=void 0,l={unversionedId:"relation-service/rs-graphql",id:"relation-service/rs-graphql",title:"GraphQL",description:"Check out System Architecture first.",source:"@site/docs/relation-service/graphql.md",sourceDirName:"relation-service",slug:"/relation-service/rs-graphql",permalink:"/relation-service/rs-graphql",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/relation-service/graphql.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"rs-graphql",title:"GraphQL",sidebar_position:3},sidebar:"docs",previous:{title:"System Architecture",permalink:"/relation-service/rs-system"},next:{title:"FAQ",permalink:"/relation-service/rs-faq"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Entrypoint",id:"entrypoint",level:2},{value:"General",id:"general",level:2},{value:"Use playground first",id:"use-playground-first",level:3},{value:"Query all data at once",id:"query-all-data-at-once",level:3},{value:"Common use case",id:"common-use-case",level:2},{value:"Query an identity (w/ its relations to other identitites)",id:"query-an-identity-w-its-relations-to-other-identitites",level:3},{value:"Query an identity (w/ its relations to other identitites and their sources)",id:"query-an-identity-w-its-relations-to-other-identitites-and-their-sources",level:3},{value:"Query an identity (w/ its relations and potential NFTs)",id:"query-an-identity-w-its-relations-and-potential-nfts",level:3},{value:"Query an NFT (w/ its owner, owner&#39;s other NFTs, and owner&#39;s related identites)",id:"query-an-nft-w-its-owner-owners-other-nfts-and-owners-related-identites",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Check out ",(0,a.kt)("a",{parentName:"p",href:"rs-system"},"System Architecture")," first.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"You can refer to many existed GraphQL tutorials, e.g.:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.howtographql.com"},"How to GraphQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.graphql.com/guides/"},"GraphQL guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://graphql.cn/learn/"},"GraphQL guide")," (in Chinese)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TLDR: What you get is what you request from server.")),(0,a.kt)("h2",{id:"entrypoint"},"Entrypoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"),(0,a.kt)("th",{parentName:"tr",align:null},"Online?"),(0,a.kt)("th",{parentName:"tr",align:null},"Playground"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Staging"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://relation-service.nextnext.id"},"https://relation-service.nextnext.id")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://relation-service.nextnext.id"},"Yes"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Production"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://relation-service.next.id"},"https://relation-service.next.id")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c (SOON\u2122)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://relation-service.next.id"},"Yes"))))),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"use-playground-first"},"Use playground first"),(0,a.kt)("p",null,'Check "Playground" column in ',(0,a.kt)("a",{parentName:"p",href:"#entrypoint"},"Entrypoint")," section. Open\nit and play a little while before you integrate RelationService into\nyour own system."),(0,a.kt)("p",null,"The playground has many beneficial functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Document (on the right side of the page): It is always aligned with\ncurrent server's implementation, and we have written comments and\nexplanations for every parameter. Things you need to notice are all\nappeared in comments so MAKE SURE YOU READ THE PLAYGROUND DOC BEFORE\nUSE!"),(0,a.kt)("li",{parentName:"ul"},"Schema (on the right side of the page): Use it with a GraphQL code\ngenerator (such as\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dotansimha/graphql-code-generator"},"graphql-code-generator"),")\nwill help you alot when composing your query."),(0,a.kt)("li",{parentName:"ul"},"On-hover document"),(0,a.kt)("li",{parentName:"ul"},"Syntax error checking"),(0,a.kt)("li",{parentName:"ul"},"Code suggestion")),(0,a.kt)("h3",{id:"query-all-data-at-once"},"Query all data at once"),(0,a.kt)("p",null,"Avoid multiple calling. If you have to do so to get something, it's\nour fault. Fill an issue or submit a PR will help us a lot."),(0,a.kt)("h2",{id:"common-use-case"},"Common use case"),(0,a.kt)("admonition",{title:"CHECK THE DOC",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Paste it into ",(0,a.kt)("a",{parentName:"p",href:"#entrypoint"},"playground")," and check documents for each param!")),(0,a.kt)("h3",{id:"query-an-identity-w-its-relations-to-other-identitites"},"Query an identity (w/ its relations to other identitites)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query findOneIdentity {\n  identity(platform: "twitter", identity: "yeiwb") {\n    status\n    uuid\n    displayName\n    createdAt\n    addedAt\n    updatedAt\n    # Here we perform a 3-depth deep search for this identity\'s "neighbor".\n    neighborWithTraversal(depth: 3) {\n      source # Which upstream provides this connection info.\n      from {\n        uuid\n        platform\n        identity\n        displayName\n      }\n      to {\n        uuid\n        platform\n        identity\n        displayName\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Then you have the ability to rebuild the whole relation tree with\n",(0,a.kt)("inlineCode",{parentName:"p"},"from")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," edges and ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," of each vertex."),(0,a.kt)("h3",{id:"query-an-identity-w-its-relations-to-other-identitites-and-their-sources"},"Query an identity (w/ its relations to other identitites and their sources)"),(0,a.kt)("p",null,"If you don't need to rebuild the relation tree\njust want to know which upstream provides this connection info."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query findOneIdentityWithSource {\n  identity(platform: "twitter", identity: "suji_yan") {\n    status\n    uuid\n    displayName\n    createdAt\n    addedAt\n    updatedAt\n    # Here we perform a 3-depth deep search for this identity\'s "neighbor".\n    neighbor(depth: 3) {\n      sources # Which upstreams provide these connection infos.\n      identity {\n        uuid\n        platform\n        identity\n        displayName\n      }\n    }\n  }\n}\n\n')),(0,a.kt)("h3",{id:"query-an-identity-w-its-relations-and-potential-nfts"},"Query an identity (w/ its relations and potential NFTs)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query findOneIdentityWithNFT {\n  identity(platform: "twitter", identity: "yeiwb") {\n    status\n    uuid\n    displayName\n    createdAt\n    addedAt\n    updatedAt\n    # Here we perform a 3-depth deep search for this identity\'s "neighbor".\n    neighborWithTraversal(depth: 3) {\n      source # Which upstream provides this connection info.\n      from {\n        uuid\n        platform\n        identity\n        displayName\n        nft {\n          id\n          category\n          address\n          chain\n          source\n        }\n      }\n      to {\n        uuid\n        platform\n        identity\n        displayName\n        nft {\n          id\n          category\n          address\n          chain\n          source\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"nft")," field will possibly have value only when its parent identity is ",(0,a.kt)("inlineCode",{parentName:"p"},"platform: ethereum"),".")),(0,a.kt)("h3",{id:"query-an-nft-w-its-owner-owners-other-nfts-and-owners-related-identites"},"Query an NFT (w/ its owner, owner's other NFTs, and owner's related identites)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query findOneNFTWithOwnerNeighbor {\n  nft(chain: "ethereum", category: "ENS", id: "sujiyan.eth") {\n    owner {\n      platform\n      identity\n      nft {\n        category\n        chain\n        id\n      }\n      neighborWithTraversal(depth: 3) {\n        source\n        from {\n          platform\n          identity\n          uuid\n        }\n        to {\n          platform\n          identity\n          uuid\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);