"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[3751],{70397:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(59496),n=a(51626),r=a(87222),c=a(32368),s=a(70088),m=a(7799),o=a(2799),i=a(37203);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(i.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},45040:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(59496),n=a(51626),r=a(54966);const c="tag_xJGL",s="tagRegular_GCRm",m="tagWithCount_Zg_Y";function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c,o?m:s)},a,o&&l.createElement("span",null,o))}},2799:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(59496),n=a(87222),r=a(45040);const c="tag_qAvX";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},87222:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(11856);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);