import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-B2WyFcD1.js";import{Xn as n,a as r,i,r as a,t as o}from"./src-BJkJ-vRT.js";var s,c,l,u,d,f,p,m,h;e((()=>{i(),o(),s=t(),c={title:`Sonner`,component:a,decorators:[e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e,{}),(0,s.jsx)(a,{})]})]},l={render:()=>(0,s.jsx)(n,{onClick:()=>r(`Evento registrado com sucesso.`),children:`Mostrar toast`})},u={render:()=>(0,s.jsx)(n,{variant:`success`,onClick:()=>r.success(`Operação realizada com sucesso!`),children:`Toast de sucesso`})},d={render:()=>(0,s.jsx)(n,{variant:`destructive`,onClick:()=>r.error(`Ocorreu um erro inesperado.`),children:`Toast de erro`})},f={render:()=>(0,s.jsx)(n,{variant:`warning`,onClick:()=>r.warning(`Atenção: verifique os dados antes de continuar.`),children:`Toast de aviso`})},p={render:()=>(0,s.jsx)(n,{variant:`outline`,onClick:()=>r(`Arquivo enviado`,{description:`O arquivo foi processado e está disponível.`}),children:`Toast com descrição`})},m={render:()=>(0,s.jsx)(n,{variant:`outline`,onClick:()=>r(`Registro removido`,{description:`O item foi excluído da lista.`,action:{label:`Desfazer`,onClick:()=>r.success(`Ação desfeita.`)}}),children:`Toast com ação`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Button onClick={() => toast("Evento registrado com sucesso.")}>
      Mostrar toast
    </Button>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="success" onClick={() => toast.success("Operação realizada com sucesso!")}>
      Toast de sucesso
    </Button>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="destructive" onClick={() => toast.error("Ocorreu um erro inesperado.")}>
      Toast de erro
    </Button>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="warning" onClick={() => toast.warning("Atenção: verifique os dados antes de continuar.")}>
      Toast de aviso
    </Button>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast("Arquivo enviado", {
    description: "O arquivo foi processado e está disponível."
  })}>
      Toast com descrição
    </Button>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast("Registro removido", {
    description: "O item foi excluído da lista.",
    action: {
      label: "Desfazer",
      onClick: () => toast.success("Ação desfeita.")
    }
  })}>
      Toast com ação
    </Button>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Sucesso`,`Erro`,`Aviso`,`ComDescricao`,`ComAcao`]}))();export{f as Aviso,m as ComAcao,p as ComDescricao,l as Default,d as Erro,u as Sucesso,h as __namedExportsOrder,c as default};