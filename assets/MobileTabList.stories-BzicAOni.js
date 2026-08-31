import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{Br as r,Dt as i,Jr as a,qr as o,t as s,zr as c}from"./src-D4mIL-UR.js";import{n as l,t as u}from"./user-BLhZuDdt.js";var d;function f(){return(f=e((()=>{a(),d=o(`Home`,[[`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`y5dka4`}],[`polyline`,{points:`9 22 9 12 15 12 15 22`,key:`e2us08`}]])})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f(),r(),l(),s(),p=t(),m=n(),h={title:`MobileTabList`,component:i,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`mobile1`}}},g=[{id:1,label:`Account`,value:`account`,icon:(0,m.jsx)(u,{className:`h-4 w-4`})},{id:2,label:`Home`,value:`home`,icon:(0,m.jsx)(d,{className:`h-4 w-4`})},{id:3,label:`Settings`,value:`settings`,icon:(0,m.jsx)(c,{className:`h-4 w-4`})}],_=e=>{let[t,n]=(0,p.useState)(`account`);return(0,m.jsxs)(`div`,{className:`w-full max-w-md px-2`,children:[(0,m.jsx)(i,{...e,value:t,onValueChange:n}),(0,m.jsxs)(`div`,{className:`mt-4 rounded-lg p-4 border text-sm text-muted-foreground`,children:[`Active tab: `,(0,m.jsx)(`strong`,{children:t})]})]})},v={args:{tabs:g,showNavigationButton:!1},render:e=>(0,m.jsx)(_,{...e})},y=e=>{let[t,n]=(0,p.useState)(`account`);return(0,m.jsxs)(`div`,{className:`w-full max-w-md`,children:[(0,m.jsx)(i,{...e,value:t,onValueChange:n,sheetTitle:`Menu`,sheetDescription:`Navigate between sections`}),(0,m.jsxs)(`div`,{className:`mt-4 rounded-lg border p-4 text-sm text-muted-foreground`,children:[`Active tab: `,(0,m.jsx)(`strong`,{children:t})]})]})},b={args:{tabs:g,showNavigationButton:!0},render:e=>(0,m.jsx)(y,{...e})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    showNavigationButton: false
  },
  render: args => <PrimaryExample {...args} />
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    showNavigationButton: true
  },
  render: args => <WithNavigationButtonExample {...args} />
}`,...b.parameters?.docs?.source}}},x=[`Primary`,`WithNavigationButton`]})))()}S();export{v as Primary,b as WithNavigationButton,x as __namedExportsOrder,h as default};