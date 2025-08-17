"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78020],{503546:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(667294),r=n(616550),i=n(282999),o=n(297728),l=n(730212),s=n(383399),u=n(402189),m=n(862014),p=n(984821);function c(){let e=(0,s.Z)(),t=(0,o.F)(),{isRTL:n}=(0,l.B)(),c=(0,r.TH)(),d=(0,r.k6)(),h=c.search,b=(0,p.Z)(c)&&!n&&e.isAuth&&!e.isPartner&&!(0,i.OK)(c);return(0,a.useEffect)(()=>{h.includes("enable_vertical_nav")&&((0,m.M)(),d.push("/"),window.location.reload())},[h,d]),{enabled:b&&t.checkExperiment("web_vertical_nav").anyEnabled,group:b?t.checkExperiment("web_vertical_nav").group:u.lR.NONE}}},776919:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(667294),r=n(883119),i=n(573706),o=n(986782);function l(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s={},u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class m{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var p=n(587435),c=n(39260),d=n(876594),h=n(934980),b=n(512541),f=n(785893);let y=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,w={backgroundColor:d._VP,animation:"pulsing 2s ease-out 0.5s infinite",borderRadius:d.Ev2};function _({data:e}){let{height:t}=e;return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsx)(b.Z,{unsafeCSS:(0,h.Ll)([y])}),(0,f.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:w},"data-test-id":"skeleton-pin",children:(0,f.jsx)(r.xu,{height:t})})]})}var g=n(679482),x=n(297728),v=n(730212),E=n(410150),C=n(415787),M=n(855746);function k({analyticsData:e,children:t,idx:n,isMeasuring:r,masonryV2ExpName:i,masonryV2ExpGroup:l}){let s=(0,E.ZP)(),{isAuthenticated:u}=(0,v.B)(),m=(0,M.MM)();return(0,a.useEffect)(()=>{if(e.current[n]){let{fetchTimestamp:t,measureTimestamp:a,hasRendered:o,pageCount:p}=e.current[n]??{},c={deviceType:s,experimentName:i,experimentGroup:l,handlerId:m,isAuthenticated:u,pageCount:p};r&&!a&&(e.current[n].measureTimestamp=Date.now(),(0,C.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:c})),r||o||((0,C.LY)("webapp.masonry.itemRenderStart",Date.now()-a,{tags:c}),e.current[n].hasRendered=!0)}},[r]),(0,f.jsx)(o.Z,{name:"MasonryItem",children:t})}function S(e){let{align:t,cacheKey:n,id:l,isFetching:u,isGridCentered:d=!0,items:h,layout:y,loadItems:w,masonryRef:S,optOutFluidGridExperiment:$=!1,renderItem:R,scrollContainerRef:O,virtualize:N=!0,_getColumnSpanConfig:j,_dynamicHeights:T,useLoadingState:W}=e,G=(0,E.ZP)(),{isAuthenticated:I,isRTL:A}=(0,v.B)(),{logContextEvent:L}=(0,i.v)(),D=(0,x.F)(),B="desktop"===G,P=(0,M.MM)(),Z=(0,a.useRef)(h.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),{experimentalColumnWidth:V,experimentalGutter:F,anyEnabled:H,group:z}=(0,p.Z)("flexible"!==y&&!$),Y=e.serverRender??!!B,U="flexible"===y||"uniformRowFlexible"===y||"desktop"!==G||H,J=(U&&y?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(Y?"serverRenderedFlexible":"flexible"),K=e.columnWidth??V??g.yF;U&&(K=Math.floor(K));let X=e.gutterWidth??F??(B?g.oX:1),q=e.minCols??g.yc,Q=(0,a.useRef)(0),ee=K+X,et=function(e){if(null==e)return;let t=function(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}(e);return t.measurementCache||(t.measurementCache=new m),t.measurementCache}(n),en=(0,a.useCallback)(()=>O?.current||window,[O]),ea=(0,a.useRef)(!0),{anyEnabled:er,group:ei}=j?D.checkExperiment("web_masonry_mixed_early_bailout"):{anyEnabled:!1,group:""},eo=er?e=>e<=3?2*X:3*X:void 0,el=d&&ea.current?"centered":"",{className:es,styles:eu}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:r,itemWidth:i,maxColumns:o,minColumns:l,items:s,_getColumnSpanConfig:u}=e,m=u?s.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=i+a,c=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let s=e===l?0:e*p,u=e===o?null:(e+1)*p-.01,{styles:c,numberOfVisibleItems:d}=m.reduce((r,o)=>{let{columnSpanConfig:l}=o,s=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:l}),e),u=null!=o.index&&r.numberOfVisibleItems>=s+o.index,m=n?100/e*s:i*s+a*(s-1),{numberOfVisibleItems:p}=r;return u?p-=s-1:o.index<p&&(p+=1),{styles:r.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:r,flexible:i}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return i?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${r}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${r}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:u,width:m,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${i}px !important;
      }
    `;return{minWidth:s,maxWidth:u,styles:`
      .${t} .static:nth-child(-n+${d}) {
        position: static !important;
        visibility: visible !important;
        float: ${r?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${h}

      ${c}
    `}}),d=c.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=c.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),b=`
    ${d.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${b}
  `}}({gutterWidth:X,flexible:U,items:h,isRTL:A,itemWidth:K,maxColumns:e.maxColumns??Math.max(h.length,g.g5),minColumns:q,_getColumnSpanConfig:j}),em=`${el} ${es}`.trim(),{anyEnabled:ep,expName:ec,group:ed,isMeasureAllEnabled:eh}=(0,c.Z)(),eb=(0,a.useMemo)(()=>!et||h.every(e=>!et.has(e)),[]),ef=ed&&eb,ey=(0,a.useRef)(),ew=(0,a.useRef)(h.length),e_=(0,a.useRef)(0);(0,a.useEffect)(()=>{ef&&h.forEach((e,t)=>{Z.current[t]||(Z.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:e_.current})}),ew.current=h.length,e_.current+=1},[h]),(0,a.useEffect)(()=>{ea.current&&(ea.current=!1)},[]),(0,a.useEffect)(()=>{let e=()=>Q.current+=1;return ef&&(ey.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(ef){let t=Z.current;window.removeEventListener("scroll",e);let n=t.filter(e=>!!e.measureTimestamp).length,a=t.filter(e=>e.hasRendered).length,r=ew.current,i={deviceType:G,experimentName:ec,experimentGroup:ed,handlerId:P,isAuthenticated:I};(0,C.LY)("webapp.masonry.timeSpent",ey.current?Date.now()-ey.current:0,{tags:i}),(0,C.S0)("webapp.masonry.itemsFetched",r,{tags:i}),(0,C.S0)("webapp.masonry.itemsMeasured",n,{tags:i}),(0,C.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(n/r*100),{tags:i}),(0,C.S0)("webapp.masonry.itemsRendered",a,{tags:i}),(0,C.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(a/r*100),{tags:i}),(0,C.S0)("webapp.masonry.scrollCount",Q.current,{tags:i})}}},[]);let eg=(0,a.useCallback)((e,t,n)=>{let a=e.reduce((e,t)=>e+t),r=a/e.length;(0,C.S0)("webapp.masonry.multiColumnWhitespace.average",r,{sampleRate:1,tags:{earlyBailoutExperimentGroup:ei||"unknown",experimentalMasonryGroup:ed||"unknown",fluidGridGroup:z||"unknown",handlerId:P,isAuthenticated:I,multiColumnItemSpan:e.length}}),(0,C.S0)("webapp.masonry.twoColWhitespace",r,{sampleRate:1,tags:{columnWidth:K,minCols:q}}),ei&&(0,C.S0)("webapp.masonry.graphIterations",t,{sampleRate:1,tags:{columnSpan:n,exprimentGroup:ei}}),L({event_type:15878,component:14468,aux_data:{total_whitespace_px:a}}),L({event_type:16062,component:14468,aux_data:{average_whitespace_px:r}}),L({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,C.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{earlyBailoutExperimentGroup:ei||"unknown",experimentalMasonryGroup:ed||"unknown",fluidGridGroup:z||"unknown",handlerId:P,isAuthenticated:I,multiColumnItemSpan:e.length}}),L({event_type:16261,component:14468})),t>=100&&((0,C.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{earlyBailoutExperimentGroup:ei||"unknown",experimentalMasonryGroup:ed||"unknown",fluidGridGroup:z||"unknown",handlerId:P,isAuthenticated:I,multiColumnItemSpan:e.length}}),L({event_type:16262,component:14468}))}),(0,C.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{earlyBailoutExperimentGroup:ei||"unknown",experimentalMasonryGroup:ed||"unknown",fluidGridGroup:z||"unknown",handlerId:P,isAuthenticated:I,multiColumnItemSpan:e.length}})},[K,ei,L,q,I,P,z,ed]),{_items:ex,_renderItem:ev}=function({useLoadingState:e,pinCount:t=50,items:n,renderItem:r,isFetching:i}){let o=(0,a.useMemo)(()=>Array.from({length:t}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[t]);return{_items:(0,a.useMemo)(()=>e&&i&&0===n.length?o:n,[e,i,n,o]),_renderItem:(0,a.useMemo)(()=>e?e=>{let{itemIdx:t,data:a}=e;return t>=n.length&&a&&"object"==typeof a&&"key"in a&&"height"in a?(0,f.jsx)(_,{data:a},a.key):r(e)}:r,[e,r,n.length])}}({useLoadingState:W,items:h,renderItem:(0,a.useCallback)(e=>ef?(0,f.jsx)(k,{analyticsData:Z,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:ed,masonryV2ExpName:ec,children:(0,f.jsx)(o.Z,{name:"MasonryItem",children:R(e)})}):(0,f.jsx)(o.Z,{name:"MasonryItem",children:R(e)}),[R]),isFetching:u});return(0,f.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:l,style:H?{padding:`0 ${X/2}px`}:void 0,children:(0,f.jsxs)("div",{className:em,children:[Y&&ea.current?(0,f.jsx)(b.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:eu}):null,(0,f.jsx)(r.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ee*e.maxColumns:void 0,children:ep?(0,f.jsx)(r.GX,{ref:e=>{S&&(S.current=e)},_dynamicHeights:T,_earlyBailout:eo,_getColumnSpanConfig:j,_logTwoColWhitespace:eg,_measureAll:eh,align:t,columnWidth:K,gutterWidth:X,items:ex,layout:U?J:y??"basic",loadItems:w,measurementStore:et,minCols:q,renderItem:ev,scrollContainer:en,virtualBufferFactor:.3,virtualize:N}):(0,f.jsx)(r.Rk,{ref:e=>{S&&(S.current=e)},_dynamicHeights:T,_earlyBailout:eo,_getColumnSpanConfig:j,_logTwoColWhitespace:eg,align:t,columnWidth:K,gutterWidth:X,items:ex,layout:U?J:y??"basic",loadItems:w,measurementStore:et,minCols:q,renderItem:ev,scrollContainer:en,virtualBufferFactor:.3,virtualize:N})})]})})}},587435:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(503546),r=n(297728),i=n(730212),o=n(410150);let l=({isEligible:e=!0,skipActivation:t,skipVerticalNavCheck:n})=>{let l=(0,o.ZP)(),{isAuthenticated:s}=(0,i.B)(),u=(0,r.F)(),{enabled:m}=(0,a.Z)();return"desktop"===l&&e?m&&!n?{anyEnabled:!0,group:"enabled_221_16"}:u.checkExperiment(s?"web_fluid_grid_desktop_auth":"web_fluid_grid_desktop_unauth",{dangerouslySkipActivation:t||!1}):{group:"",anyEnabled:!1}};function s(e=!0){let{group:t,anyEnabled:n}=l({isEligible:e}),a=t.match(/enabled_([\d]+)_([\d]+)/),r=a?parseInt(a[1],10):void 0,i=a?parseInt(a[2],10):void 0,o=i?Math.floor(i/4):void 0;return{anyEnabled:n,group:t,experimentalColumnWidth:r,experimentalGutter:i,experimentalGutterBoints:o}}},402189:(e,t,n)=>{n.d(t,{BO:()=>v,GC:()=>S,GJ:()=>f,L7:()=>h,Lc:()=>p,Mh:()=>u,Qf:()=>m,Qq:()=>k,Un:()=>$,X$:()=>M,Z7:()=>d,bT:()=>_,bd:()=>w,df:()=>c,iz:()=>O,kl:()=>y,lR:()=>R,m6:()=>E,mT:()=>x,pS:()=>g,uW:()=>C,zz:()=>b});var a,r,i=n(883119),o=n(876594),l=n(65967),s=n(241716);let u="right",m=72,p="VerticalNavContent",c=24,d="lg",h=16,b=16,f=392,y=12,w=o.mJW,_=o.Kuk,g=new i.H3([s.NW]),x=new i.Ry(s.fe-3),v=new i.H3([g,l.kl]),E=new i.H3([v]),C=2,M=8,k=3,S=12,$=((a={}).PINTEREST_LOGO="web.vertical_nav.pinterest_logo.click",a.HOME="web.vertical_nav.home.click",a.TODAY="web.vertical_nav.today.click",a.CREATE="web.vertical_nav.create.click",a.NEWS="web.vertical_nav.news.click",a.CONVERSATIONS="web.vertical_nav.conversations.click",a.AVATAR="web.vertical_nav.avatar.click",a.ACCOUNT_SWITCHER="web.vertical_nav.account_switcher.click",a.MORE_OPTIONS_OPT_OUT="web.vertical_nav.more_options.opt_out",a.MORE_OPTIONS="web.vertical_nav.more_options.click",a),R=((r={}).CONTROL="control",r.EMPLOYEES="employees",r.ENABLED="enabled",r.ENABLED_HOME_BUTTON="enabled_home_button",r.ENABLED_HOME_AND_LOGO="enabled_home_and_logo",r.NONE="",r),O=e=>({tags:{experimentGroup:e}})},862014:(e,t,n)=>{n.d(t,{M:()=>i,f:()=>r});var a=n(914896);let r=()=>{a.t8({name:"forced_experiments",purpose:"personalization",httpOnly:!1,duration:"30d"},JSON.stringify({web_vertical_nav:!1}))},i=()=>{a.zN("forced_experiments")}},984821:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(282999);function r(e){return!((0,a.Gl)(e)||(0,a.PY)(e)||(0,a.jC)(e)||(0,a.Xn)(e)||(0,a.b_)(e)||(0,a.oF)(e)||(0,a.dt)(e)||(0,a.x7)(e)||(0,a.cY)(e)||(0,a.bb)(e))}},65967:(e,t,n)=>{n.d(t,{CZ:()=>o,Db:()=>s,Lu:()=>i,kl:()=>a,sb:()=>l,t3:()=>r,to:()=>u});let a=new(n(883119)).Ry(700),r="defaultInboxView",i="newMessageView",o="newMessageSelectRecipientsView",l="invitesRequestsView",s="followInviteEducationView",u=64}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78020-90fa5bc8a8263442.mjs.map