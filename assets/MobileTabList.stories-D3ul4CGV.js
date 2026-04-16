import{a as e,n as t}from"./chunk-BneVvdWh.js";import{V as n,t as r}from"./iframe-B2WyFcD1.js";import{br as i,ir as a,lr as o,nr as s,t as c,ut as l}from"./src-BJkJ-vRT.js";var u,d,f,p,m,h,g;t((()=>{s(),c(),u=e(n()),d=r(),f={title:`MobileTabList`,component:l,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`mobile1`}}},p=[{id:1,label:`Account`,value:`account`,icon:(0,d.jsx)(a,{className:`h-4 w-4`})},{id:2,label:`Home`,value:`home`,icon:(0,d.jsx)(i,{className:`h-4 w-4`})},{id:3,label:`Settings`,value:`settings`,icon:(0,d.jsx)(o,{className:`h-4 w-4`})}],m={args:{tabs:p,showNavigationButton:!1},render:e=>{let[t,n]=(0,u.useState)(`account`);return(0,d.jsxs)(`div`,{className:`w-full max-w-md px-2`,children:[(0,d.jsx)(l,{...e,value:t,onValueChange:n}),(0,d.jsxs)(`div`,{className:`mt-4 rounded-lg p-4 border text-sm text-muted-foreground`,children:[`Active tab: `,(0,d.jsx)(`strong`,{children:t})]})]})}},h={args:{tabs:p,showNavigationButton:!0},render:e=>{let[t,n]=(0,u.useState)(`account`);return(0,d.jsxs)(`div`,{className:`w-full max-w-md`,children:[(0,d.jsx)(l,{...e,value:t,onValueChange:n,sheetTitle:`Menu`,sheetDescription:`Navigate between sections`}),(0,d.jsxs)(`div`,{className:`mt-4 rounded-lg border p-4 text-sm text-muted-foreground`,children:[`Active tab: `,(0,d.jsx)(`strong`,{children:t})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    showNavigationButton: false
  },
  render: args => {
    const [value, setValue] = useState("account");
    return <div className="w-full max-w-md px-2">
        <MobileTabList {...args} value={value} onValueChange={setValue} />
        <div className="mt-4 rounded-lg p-4 border text-sm text-muted-foreground">
          Active tab: <strong>{value}</strong>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    showNavigationButton: true
  },
  render: args => {
    const [value, setValue] = useState("account");
    return <div className="w-full max-w-md">
        <MobileTabList {...args} value={value} onValueChange={setValue} sheetTitle="Menu" sheetDescription="Navigate between sections" />
        <div className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
          Active tab: <strong>{value}</strong>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Primary`,`WithNavigationButton`]}))();export{m as Primary,h as WithNavigationButton,g as __namedExportsOrder,f as default};