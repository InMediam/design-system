import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{S as a,L as u}from"./toggle-group-B6_MuHnw.js";import{I as c}from"./inputItemsWrapper-BCT53hPa.js";import"./index-CzSziqNJ.js";import"./extends-CF3RwP-h.js";import"./index-BFjp_sMt.js";import"./_commonjsHelpers-BosuxZz1.js";const b={title:"Form/Input",component:a,args:{type:"text",placeholder:"Digite o seu nome"}},r={render:n=>e.jsxs(c,{children:[e.jsx(u,{htmlFor:"name",children:"Nome:"}),e.jsx(a,{...n})]})},t={args:{type:"text",placeholder:"Digite algo"},argTypes:{type:{options:["text","password","email","number","file"],control:{type:"select"}}},render:n=>e.jsxs(c,{children:[e.jsx(u,{htmlFor:"name",children:"Playground:"}),e.jsx(a,{...n})]})};var s,o,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <InputItemsWrapper>
        <Label htmlFor="name">Nome:</Label>
        <Input {...args} />
      </InputItemsWrapper>;
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,l,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Digite algo'
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'number', 'file'],
      control: {
        type: 'select'
      }
    }
  },
  render: args => {
    return <InputItemsWrapper>
        <Label htmlFor="name">Playground:</Label>
        <Input {...args} />
      </InputItemsWrapper>;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const f=["Primary","Playground"];export{t as Playground,r as Primary,f as __namedExportsOrder,b as default};
