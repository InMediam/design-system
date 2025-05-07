import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{T as s,W as u,M as c,X as d}from"./index-BY7mLBZ8.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const T={title:"Form/Input",component:s,args:{type:"text",placeholder:"Digite o seu nome"}},r={render:n=>e.jsxs(u,{children:[e.jsx(c,{required:!0,htmlFor:"name",children:"Nome:"}),e.jsx(s,{...n}),e.jsx(d,{children:"This is an error message."})]})},t={args:{type:"text",placeholder:"Digite algo"},argTypes:{type:{options:["text","password","email","number","file"],control:{type:"select"}}},render:n=>e.jsxs(u,{children:[e.jsx(c,{htmlFor:"name",children:"Playground:"}),e.jsx(s,{...n})]})};var a,o,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <InputItemsWrapper>
        <Label required htmlFor="name">Nome:</Label>
        <Input {...args} />
        <HintText>
          This is an error message.
        </HintText>
      </InputItemsWrapper>;
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,i,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["Primary","Playground"];export{t as Playground,r as Primary,b as __namedExportsOrder,T as default};
