import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{Ar as n,i as r,o as i,s as a,t as o}from"./src-D4mIL-UR.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{i(),o(),s=t(),c={title:`Sonner`,component:r,args:{variant:`default`,message:`Evento registrado com sucesso.`,description:``,withAction:!1,position:`bottom-right`,richColors:!1,expand:!1}},l=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{className:`w-fit`,onClick:()=>{let t={description:e.description||void 0,action:e.withAction?{label:`Desfazer`,onClick:()=>a.success(`Ação desfeita.`)}:void 0};e.variant==="default"?a(e.message,t):a[e.variant](e.message,t)},children:`Mostrar toast`}),(0,s.jsx)(r,{position:e.position,richColors:e.richColors,expand:e.expand})]}),u={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{className:`w-fit`,onClick:()=>a(`Evento registrado com sucesso.`),children:`Mostrar toast`}),(0,s.jsx)(r,{})]})},d=l.bind({}),d.argTypes={variant:{options:[`default`,`success`,`error`,`warning`,`info`],control:{type:`select`}},position:{options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],control:{type:`select`}},message:{control:{type:`text`}},description:{control:{type:`text`}},withAction:{control:{type:`boolean`}},richColors:{control:{type:`boolean`}},expand:{control:{type:`boolean`}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Button className="w-fit" onClick={() => toast("Evento registrado com sucesso.")}>
        Mostrar toast
      </Button>
      <Toaster />
    </>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const handleClick = () => {
    const options = {
      description: args.description || undefined,
      action: args.withAction ? {
        label: "Desfazer",
        onClick: () => toast.success("Ação desfeita.")
      } : undefined
    };
    if (args.variant === "default") {
      toast(args.message, options);
    } else {
      toast[args.variant](args.message, options);
    }
  };
  return <>
      <Button className="w-fit" onClick={handleClick}>
        Mostrar toast
      </Button>
      <Toaster position={args.position} richColors={args.richColors} expand={args.expand} />
    </>;
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Playground`]})))()}p();export{u as Default,d as Playground,f as __namedExportsOrder,c as default};