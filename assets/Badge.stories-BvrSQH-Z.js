import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{ab as f,a_ as m}from"./toggle-CJJyiZfr.js";import"./index-CzSziqNJ.js";import"./extends-CF3RwP-h.js";import"./index-BFjp_sMt.js";import"./_commonjsHelpers-BosuxZz1.js";const p=m("w-1.5 h-1.5 rounded-full",{variants:{variant:{default:"bg-brand-500",secondary:"bg-gray-500",destructive:"bg-error-500",success:"bg-success-500",warning:"bg-warning-500",outline:"bg-gray-500"}},defaultVariants:{variant:"default"}});function x({className:r,variant:a,...s}){return e.jsx("div",{className:f(p({variant:a}),r),...s})}const y=m("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex gap-1.5 w-fit",{variants:{variant:{default:"border-brand-200 bg-brand-50 text-brand-700 hover:bg-brand-100",secondary:"border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100",destructive:"border-error-200 bg-error-50 text-error-700 hover:bg-error-100",success:"border-success-200 bg-success-50 text-success-700 hover:bg-success-100",warning:"border-warning-200 bg-warning-50 text-warning-700 hover:bg-warning-100",outline:"text-gray-700 dark:text-gray-500"}},defaultVariants:{variant:"default"}});function o({className:r,variant:a,dot:s=!1,...i}){return e.jsxs("div",{className:f(y({variant:a}),r),...i,children:[s&&e.jsx(x,{variant:a}),i.children]})}const V={title:"Badge",component:o,args:{variant:"default",children:"Badge"}},n={render:r=>e.jsx(o,{...r})},t={args:{dot:!0},argTypes:{variant:{options:["default","secondary","success","warning","destructive","outline"],control:{type:"select"}}},render:r=>e.jsx(o,{...r})};var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Badge {...args} />;
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,l,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    dot: true
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'success', 'warning', 'destructive', 'outline'],
      control: {
        type: 'select'
      }
    }
  },
  render: args => {
    return <Badge {...args} />;
  }
}`,...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const _=["Primary","Playground"];export{t as Playground,n as Primary,_ as __namedExportsOrder,V as default};
