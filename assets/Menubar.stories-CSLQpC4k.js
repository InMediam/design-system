import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{a1 as x,a2 as u,a3 as t,a4 as b,a5 as n,a6 as a,a7 as r,a8 as M,a9 as o,aa as d,ab as l,ac as j,ad as i}from"./index-4HHqu6Oe.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const R={title:"Menu/Menubar"},s={args:{},render:()=>e.jsx("div",{className:"w-fit",children:e.jsxs(x,{children:[e.jsxs(u,{children:[e.jsx(t,{children:"File"}),e.jsxs(b,{children:[e.jsxs(n,{children:["New Tab ",e.jsx(a,{children:"⌘T"})]}),e.jsxs(n,{children:["New Window ",e.jsx(a,{children:"⌘N"})]}),e.jsx(n,{disabled:!0,children:"New Incognito Window"}),e.jsx(r,{}),e.jsxs(M,{children:[e.jsx(o,{children:"Share"}),e.jsxs(d,{children:[e.jsx(n,{children:"Email link"}),e.jsx(n,{children:"Messages"}),e.jsx(n,{children:"Notes"})]})]}),e.jsx(r,{}),e.jsxs(n,{children:["Print... ",e.jsx(a,{children:"⌘P"})]})]})]}),e.jsxs(u,{children:[e.jsx(t,{children:"Edit"}),e.jsxs(b,{children:[e.jsxs(n,{children:["Undo ",e.jsx(a,{children:"⌘Z"})]}),e.jsxs(n,{children:["Redo ",e.jsx(a,{children:"⇧⌘Z"})]}),e.jsx(r,{}),e.jsxs(M,{children:[e.jsx(o,{children:"Find"}),e.jsxs(d,{children:[e.jsx(n,{children:"Search the web"}),e.jsx(r,{}),e.jsx(n,{children:"Find..."}),e.jsx(n,{children:"Find Next"}),e.jsx(n,{children:"Find Previous"})]})]}),e.jsx(r,{}),e.jsx(n,{children:"Cut"}),e.jsx(n,{children:"Copy"}),e.jsx(n,{children:"Paste"})]})]}),e.jsxs(u,{children:[e.jsx(t,{children:"View"}),e.jsxs(b,{children:[e.jsx(l,{children:"Always Show Bookmarks Bar"}),e.jsx(l,{checked:!0,children:"Always Show Full URLs"}),e.jsx(r,{}),e.jsxs(n,{inset:!0,children:["Reload ",e.jsx(a,{children:"⌘R"})]}),e.jsxs(n,{disabled:!0,inset:!0,children:["Force Reload ",e.jsx(a,{children:"⇧⌘R"})]}),e.jsx(r,{}),e.jsx(n,{inset:!0,children:"Toggle Fullscreen"}),e.jsx(r,{}),e.jsx(n,{inset:!0,children:"Hide Sidebar"})]})]}),e.jsxs(u,{children:[e.jsx(t,{children:"Profiles"}),e.jsxs(b,{children:[e.jsxs(j,{value:"benoit",children:[e.jsx(i,{value:"andy",children:"Andy"}),e.jsx(i,{value:"benoit",children:"Benoit"}),e.jsx(i,{value:"Luis",children:"Luis"})]}),e.jsx(r,{}),e.jsx(n,{inset:!0,children:"Edit..."}),e.jsx(r,{}),e.jsx(n,{inset:!0,children:"Add Profile..."})]})]})]})})};var c,h,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="w-fit">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>;
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const T=["Primary"];export{s as Primary,T as __namedExportsOrder,R as default};
