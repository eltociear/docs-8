"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[464],{6829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=a(6600),n=(a(9496),a(9613));a(9295);const o={title:"How Next.ID works"},r="How Next.ID works",s={unversionedId:"core-concepts/how-it-works",id:"core-concepts/how-it-works",title:"How Next.ID works",description:"Next.ID's backend workflow is simple and streamlined. Here, we'll go through the core system design concepts of Next.ID. This is also a guide to creating your first application with Next.ID.",source:"@site/docs/core-concepts/how-it-works.md",sourceDirName:"core-concepts",slug:"/core-concepts/how-it-works",permalink:"/core-concepts/how-it-works",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/core-concepts/how-it-works.md",tags:[],version:"current",frontMatter:{title:"How Next.ID works"},sidebar:"docs",previous:{title:"Liftoff, Hello Space!",permalink:"/getting-started/quick-start"},next:{title:"Product & System Architecture",permalink:"/core-concepts/architecture"}},l={},p=[{value:"Avatars in Next.ID",id:"avatars-in-nextid",level:2},{value:"ProofService",id:"proofservice",level:2},{value:"Binding an Avatar to an Application",id:"binding-an-avatar-to-an-application",level:3},{value:"Binding an Avatar to an Application via Ethereum wallet",id:"binding-an-avatar-to-an-application-via-ethereum-wallet",level:3},{value:"Revoke Binding",id:"revoke-binding",level:3},{value:"KVService",id:"kvservice",level:2},{value:"Write Data",id:"write-data",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-nextid-works"},"How Next.ID works"),(0,n.kt)("p",null,"Next.ID's backend workflow is simple and streamlined. Here, we'll go through the core system design concepts of Next.ID. This is also a guide to creating your first application with Next.ID. "),(0,n.kt)("h2",{id:"avatars-in-nextid"},"Avatars in Next.ID"),(0,n.kt)("p",null,"You can create Avatars which will perform actions via Next.ID (eg. sign a follow action) for both on-chain & off-chain activities. Next.ID's relation aggregation can map all these actions:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(962).Z,width:"2422",height:"1715"})),(0,n.kt)("p",null,"How two users' Avatars may interact:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7215).Z,width:"2422",height:"1715"})),(0,n.kt)("h2",{id:"proofservice"},"ProofService"),(0,n.kt)("h3",{id:"binding-an-avatar-to-an-application"},"Binding an Avatar to an Application"),(0,n.kt)("p",null,"In this scenario, the user requests an Avatar Binding to an Application, allowing an Avatar to be bound to a user account on the Application. ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," returns ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," and post-content based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload"),". "),(0,n.kt)("p",null,"Then, the Application requests for the user\u2019s Avatar's Private Key to generate a signature based on ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". Following which, the user publishes the Proof Post on target platforms. The Proof Post link and ID with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," will be sent to ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," per request and be verified from the Application\u2019s post-content. "),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," validates the Proof Post's existence and verifies the Private Key, it will relay the successful binding notification back to Application and User."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example of how it will look like to a user:")," The user requests for the account (eg: @nextdotid on Twitter) to be bound to their Avatar.  The user signs a transaction to authenticate ownership of the account of the Twitter account. The Avatar then generates a public tweet with a signature. When published by the user, this tweet, along with the signature, indepenently verifies the user's linking of the account to the Avatar."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6152).Z,width:"1186",height:"676"})),(0,n.kt)("h3",{id:"binding-an-avatar-to-an-application-via-ethereum-wallet"},"Binding an Avatar to an Application via Ethereum wallet"),(0,n.kt)("p",null,"In this scenario, the user requests an Avatar Binding to an Application with identity ",(0,n.kt)("inlineCode",{parentName:"p"},"0xWALLET_ADDRESS"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," will return the Avatar's ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload"),". "),(0,n.kt)("p",null,"Then, the Application requests the user\u2019s Avatar's Private Key to generate a signature based on Avatar",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". After that, the Application requests user\u2019s Wallet's Private Key to generate a signature based on Wallet",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ProofService"),"validates the ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),", then verifies the Avatar's and Wallet's signature. After this, it will relay the successful binding notification back to the Application and User."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9306).Z,width:"1186",height:"676"})),(0,n.kt)("h3",{id:"revoke-binding"},"Revoke Binding"),(0,n.kt)("p",null,"In this scenario, User revokes a previously-established Binding made with an Application. ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," will return the Avatar's ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload")," as a Revoke action. "),(0,n.kt)("p",null,"Then, the Application requests the user\u2019s Avatar Private Key to generate a signature based on ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". "),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService"),"validates the signature with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," , it verifies the Avatar's and Wallet's signatures for a Revoke action. When this is done, it will relay the successful Revoke notification back to the Application and user. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3685).Z,width:"1186",height:"676"})),(0,n.kt)("h2",{id:"kvservice"},"KVService"),(0,n.kt)("h3",{id:"write-data"},"Write Data"),(0,n.kt)("p",null,"In this scenario, User requests for a modification on the Application. ",(0,n.kt)("inlineCode",{parentName:"p"},"KVService")," will return the ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/KV/payload"),". "),(0,n.kt)("p",null,"Then, the application requests the user\u2019s Avatar's Private Key to generate a signature based on ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". "),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"KVService")," validates the signature with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," , it will then verify the Avatar Signature for the Write Data action. After that, it will relay the successful notification back to Application and User. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4620).Z,width:"1186",height:"676"})))}c.isMDXComponent=!0},962:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/avatar-diagram-e1ac638f86da894f57cfe4ecbfd87617.png"},7215:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/avatar-interaction-aba0ab05aa82eb90e00a55adf9abad8b.png"},9306:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ethereum-binding-6f923b29a476f38b32fa74caf033d85a.png"},6152:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/platform-binding-0331240b6a6400bc2a2f825f72083444.png"},3685:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/revoke-binding-f1008cc1addf99d2a650c3d98901ab6a.png"},4620:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/write-data-a09bcda7990a86b7dd50bc1a0676161d.png"}}]);