import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{O as o,P as d,B as s,Q as g,R as c,S as m,T as u,N as r,U as i,V as p}from"./index-4HHqu6Oe.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const f={title:"Dialogs/Dialog"},a={args:{},render:()=>e.jsxs(o,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Edit Profile"})}),e.jsxs(g,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(u,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(r,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(i,{id:"name",defaultValue:"Douglas Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(r,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(i,{id:"username",defaultValue:"@duarteDouglas",className:"col-span-3"})]})]}),e.jsx(p,{children:e.jsx(s,{type:"submit",children:"Save changes"})})]})]})};var n,l,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Douglas Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@duarteDouglas" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...(t=(l=a.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const y=["Primary"];export{a as Primary,y as __namedExportsOrder,f as default};
