import{j as n}from"./jsx-runtime-CqU-cyDI.js";import{W as r,b2 as i,b3 as l,b4 as c,b5 as h,b6 as s,b7 as a,b8 as p,b9 as m}from"./index-4HHqu6Oe.js";import{U as C,C as x,S as y}from"./user-CKsDCkfk.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=r("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),E={title:"Command"},e={render:()=>n.jsxs(i,{className:"rounded-lg border shadow-md md:min-w-[450px]",children:[n.jsx(l,{placeholder:"Type a command or search..."}),n.jsxs(c,{children:[n.jsx(h,{children:"No results found."}),n.jsxs(s,{heading:"Suggestions",children:[n.jsxs(a,{children:[n.jsx(j,{}),n.jsx("span",{children:"Calendar"})]}),n.jsxs(a,{children:[n.jsx(S,{}),n.jsx("span",{children:"Search Emoji"})]}),n.jsxs(a,{disabled:!0,children:[n.jsx(u,{}),n.jsx("span",{children:"Calculator"})]})]}),n.jsx(p,{}),n.jsxs(s,{heading:"Settings",children:[n.jsxs(a,{children:[n.jsx(C,{}),n.jsx("span",{children:"Profile"}),n.jsx(m,{children:"⌘P"})]}),n.jsxs(a,{children:[n.jsx(x,{}),n.jsx("span",{children:"Billing"}),n.jsx(m,{children:"⌘B"})]}),n.jsxs(a,{children:[n.jsx(y,{}),n.jsx("span",{children:"Settings"}),n.jsx(m,{children:"⌘S"})]})]})]})]})};var d,o,t;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>;
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const v=["Primary"];export{e as Primary,v as __namedExportsOrder,E as default};
