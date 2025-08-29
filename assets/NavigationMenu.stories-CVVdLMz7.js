import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{ae as s,af as h,ag as f,ah as x,ai as a,aj as o,ak as r,al as v}from"./index-4HHqu6Oe.js";import{R as N}from"./index-CzSziqNJ.js";import"./index-BFjp_sMt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";const C={title:"Menu/Navigation"},y=[{title:"Alert Dialog",href:"/docs/primitives/alert-dialog",description:"A modal dialog that interrupts the user with important content and expects a response."},{title:"Hover Card",href:"/docs/primitives/hover-card",description:"For sighted users to preview content available behind a link."},{title:"Progress",href:"/docs/primitives/progress",description:"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."},{title:"Scroll-area",href:"/docs/primitives/scroll-area",description:"Visually or semantically separates content."},{title:"Tabs",href:"/docs/primitives/tabs",description:"A set of layered sections of content—known as tab panels—that are displayed one at a time."},{title:"Tooltip",href:"/docs/primitives/tooltip",description:"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}],t=N.forwardRef(({className:n,title:m,children:u,...p},g)=>e.jsx("li",{children:e.jsx(s,{asChild:!0,children:e.jsxs("a",{ref:g,className:h("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",n),...p,children:[e.jsx("div",{className:"text-sm font-medium leading-none",children:m}),e.jsx("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:u})]})})}));t.displayName="ListItem";const i={args:{},render:()=>e.jsx("div",{className:"flex w-full",children:e.jsx(f,{children:e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(o,{children:"Getting started"}),e.jsx(r,{children:e.jsxs("ul",{className:"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[e.jsx("li",{className:"row-span-3",children:e.jsx(s,{asChild:!0,children:e.jsxs("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",href:"/",children:[e.jsx("div",{className:"mb-2 mt-4 text-lg font-medium",children:"shadcn/ui"}),e.jsx("p",{className:"text-sm leading-tight text-muted-foreground",children:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."})]})})}),e.jsx(t,{href:"/docs",title:"Introduction",children:"Re-usable components built using Radix UI and Tailwind CSS."}),e.jsx(t,{href:"/docs/installation",title:"Installation",children:"How to install dependencies and structure your app."}),e.jsx(t,{href:"/docs/primitives/typography",title:"Typography",children:"Styles for headings, paragraphs, lists...etc"})]})})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Components"}),e.jsx(r,{children:e.jsx("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:y.map(n=>e.jsx(t,{title:n.title,href:n.href,children:n.description},n.title))})})]}),e.jsx(a,{children:e.jsx(s,{className:v(),children:"Documentation"})})]})})})};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex w-full">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map(component => <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>)}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>;
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["Primary"];export{i as Primary,T as __namedExportsOrder,C as default};
