import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{T as a,W as u,M as c}from"./index-1aCqK8-A.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const j={title:"Form/Input",component:a,args:{type:"text",placeholder:"Digite o seu nome"}},r={render:n=>e.jsxs(u,{children:[e.jsx(c,{required:!0,htmlFor:"name",children:"Nome:"}),e.jsx(a,{...n})]})},t={args:{type:"text",placeholder:"Digite algo"},argTypes:{type:{options:["text","password","email","number","file"],control:{type:"select"}}},render:n=>e.jsxs(u,{children:[e.jsx(c,{htmlFor:"name",children:"Playground:"}),e.jsx(a,{...n})]})};var s,o,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <InputItemsWrapper>
        <Label required htmlFor="name">Nome:</Label>
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const b=["Primary","Playground"];export{t as Playground,r as Primary,b as __namedExportsOrder,j as default};
