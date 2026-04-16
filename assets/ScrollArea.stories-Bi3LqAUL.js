import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-B2WyFcD1.js";import{o as n,s as r,t as i}from"./src-BJkJ-vRT.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),o={title:`ScrollArea`,component:n},s=`Accordions.Alert Dialog.Avatar.Badge.Breadcrumb.Button.Calendar.Card.Carousel.Checkbox.Collapsible.Command.Context Menu.Dialog.Drawer.Dropdown Menu.Form.Hover Card.Input.Input OTP.Label.Menubar.Navigation Menu.Pagination.Popover.Progress.Radio Group.Resizable.Scroll Area.Select.Separator.Sheet.Skeleton.Slider.Sonner.Switch.Table.Tabs.Textarea.Toast.Toggle.Toggle Group.Tooltip`.split(`.`),c={render:()=>(0,a.jsx)(n,{className:`h-72 w-48 rounded-md border`,children:(0,a.jsxs)(`div`,{className:`p-4`,children:[(0,a.jsx)(`h4`,{className:`mb-4 text-sm font-medium leading-none`,children:`Componentes`}),s.map(e=>(0,a.jsx)(`div`,{children:(0,a.jsx)(`div`,{className:`text-sm py-1`,children:e})},e))]})})},l={render:()=>(0,a.jsxs)(n,{className:`w-96 whitespace-nowrap rounded-md border`,children:[(0,a.jsx)(`div`,{className:`flex w-max gap-4 p-4`,children:Array.from({length:20},(e,t)=>(0,a.jsxs)(`div`,{className:`flex h-24 w-24 shrink-0 items-center justify-center rounded-md border bg-muted text-sm font-medium`,children:[`Item `,t+1]},t))}),(0,a.jsx)(r,{orientation:`horizontal`})]})},u={render:()=>(0,a.jsx)(n,{className:`h-48 w-full rounded-md border`,children:(0,a.jsx)(`div`,{className:`p-4 space-y-2`,children:Array.from({length:30},(e,t)=>(0,a.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Linha `,t+1,` — conteúdo de exemplo para demonstrar o scroll vertical.`]},t))})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Componentes</h4>
        {tags.map(tag => <div key={tag}>
            <div className="text-sm py-1">{tag}</div>
          </div>)}
      </div>
    </ScrollArea>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md border bg-muted text-sm font-medium">
            Item {i + 1}
          </div>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-48 w-full rounded-md border">
      <div className="p-4 space-y-2">
        {Array.from({
        length: 30
      }, (_, i) => <p key={i} className="text-sm text-muted-foreground">
            Linha {i + 1} — conteúdo de exemplo para demonstrar o scroll vertical.
          </p>)}
      </div>
    </ScrollArea>
}`,...u.parameters?.docs?.source}}},d=[`Vertical`,`Horizontal`,`ComConteudoLongo`]}))();export{u as ComConteudoLongo,l as Horizontal,c as Vertical,d as __namedExportsOrder,o as default};