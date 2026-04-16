import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-B2WyFcD1.js";import{At as n,c as r,jt as i,kt as a,t as o}from"./src-BJkJ-vRT.js";var s,c,l,u,d;e((()=>{o(),s=t(),c={title:`Form/Input`,component:i,args:{type:`text`,placeholder:`Digite o seu nome`}},l={render:e=>(0,s.jsxs)(n,{children:[(0,s.jsx)(a,{required:!0,htmlFor:`name`,children:`Nome:`}),(0,s.jsx)(i,{...e}),(0,s.jsx)(r,{children:`This is an error message.`})]})},u={args:{type:`text`,placeholder:`Digite algo`},argTypes:{type:{options:[`text`,`password`,`email`,`number`,`file`],control:{type:`select`}}},render:e=>(0,s.jsxs)(n,{children:[(0,s.jsx)(a,{htmlFor:`name`,children:`Playground:`}),(0,s.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InputItemsWrapper>
        <Label required htmlFor="name">Nome:</Label>
        <Input {...args} />
        <HintText>
          This is an error message.
        </HintText>
      </InputItemsWrapper>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Primary`,`Playground`]}))();export{u as Playground,l as Primary,d as __namedExportsOrder,c as default};