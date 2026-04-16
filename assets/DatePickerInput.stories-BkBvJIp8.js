import{n as e}from"./chunk-BneVvdWh.js";import{V as t,t as n}from"./iframe-B2WyFcD1.js";import{n as r,t as i}from"./src-BJkJ-vRT.js";var a,o,s,c,l,u,d;e((()=>{t(),i(),a=n(),o={title:`DatePickerInput`,component:r},s={render:()=>(0,a.jsx)(r,{label:`Data`})},c={render:()=>(0,a.jsx)(r,{label:`Data de início`,defaultValue:`01/06/2025`})},l={render:()=>(0,a.jsx)(r,{label:`Data de vencimento`})},u={render:()=>(0,a.jsx)(r,{label:`Data de nascimento`,onChange:(e,t)=>{e&&console.log(`Data válida:`,e.toISOString(),`| Mascarada:`,t)}})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <DatePickerInput label="Data" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DatePickerInput label="Data de início" defaultValue="01/06/2025" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <DatePickerInput label="Data de vencimento" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <DatePickerInput label="Data de nascimento" onChange={(date, masked) => {
    if (date) {
      console.log("Data válida:", date.toISOString(), "| Mascarada:", masked);
    }
  }} />
}`,...u.parameters?.docs?.source}}},d=[`Default`,`ComValorInicial`,`DataDeVencimento`,`ComCallback`]}))();export{u as ComCallback,c as ComValorInicial,l as DataDeVencimento,s as Default,d as __namedExportsOrder,o as default};