import{j as r}from"./jsx-runtime-CqU-cyDI.js";import{q as b,r as p,s as e,t as m,u as n,v as B,D as x,w as h,x as j,y as g,z as d}from"./index-4HHqu6Oe.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const N={title:"Breadcrumb"},a={args:{},render:()=>r.jsx("div",{className:"w-full",children:r.jsx(b,{children:r.jsxs(p,{children:[r.jsx(e,{children:r.jsx(m,{children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(B,{children:"Breadcrumb"})})]})})})},s={args:{},render:()=>r.jsx("div",{className:"w-full",children:r.jsx(b,{children:r.jsxs(p,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(x,{children:[r.jsxs(h,{className:"flex items-center gap-1",children:[r.jsx(j,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),r.jsxs(g,{align:"start",children:[r.jsx(d,{children:"Documentation"}),r.jsx(d,{children:"Themes"}),r.jsx(d,{children:"GitHub"})]})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(B,{children:"Breadcrumb"})})]})})})};var c,o,t;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>;
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var u,i,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>;
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const k=["Primary","WithEllipsis"];export{a as Primary,s as WithEllipsis,k as __namedExportsOrder,N as default};
