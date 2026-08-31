import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{Qt as n,Xt as r,d as i,en as a,t as o}from"./src-D4mIL-UR.js";var s,c,l,u,d;function f(){return(f=e((()=>{o(),s=t(),c={title:`Form/Input`,component:a,args:{type:`text`,placeholder:`Digite o seu nome`}},l={render:e=>(0,s.jsxs)(n,{children:[(0,s.jsx)(r,{required:!0,htmlFor:`name`,children:`Nome:`}),(0,s.jsx)(a,{...e}),(0,s.jsx)(i,{children:`This is an error message.`})]})},u={args:{type:`text`,placeholder:`Digite algo`},argTypes:{type:{options:[`text`,`password`,`email`,`number`,`file`],control:{type:`select`}}},render:e=>(0,s.jsxs)(n,{children:[(0,s.jsx)(r,{htmlFor:`name`,children:`Playground:`}),(0,s.jsx)(a,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Primary`,`Playground`]})))()}f();export{u as Playground,l as Primary,d as __namedExportsOrder,c as default};