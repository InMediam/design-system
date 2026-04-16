import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-B2WyFcD1.js";import{Bt as n,Dr as r,Gt as i,Ht as a,It as o,Kt as s,Lt as c,Or as l,Rt as u,Ut as d,Vt as f,Wt as p,Xn as m,_r as h,ar as g,dr as _,gr as v,hr as y,ir as b,lr as x,nr as S,pr as C,qt as w,rr as T,t as E,ur as D,vr as O,xr as k,zt as A}from"./src-BJkJ-vRT.js";var j,M,N,P;e((()=>{E(),S(),j=t(),M={title:`Menu/Dropdown`},N={args:{},render:()=>(0,j.jsx)(`div`,{className:`w-full`,children:(0,j.jsxs)(o,{children:[(0,j.jsx)(w,{asChild:!0,children:(0,j.jsx)(m,{variant:`outline`,children:`Open`})}),(0,j.jsxs)(c,{className:`w-56`,children:[(0,j.jsx)(n,{children:`My Account`}),(0,j.jsx)(a,{}),(0,j.jsxs)(u,{children:[(0,j.jsxs)(A,{children:[(0,j.jsx)(b,{}),(0,j.jsx)(`span`,{children:`Profile`}),(0,j.jsx)(d,{children:`⇧⌘P`})]}),(0,j.jsxs)(A,{children:[(0,j.jsx)(r,{}),(0,j.jsx)(`span`,{children:`Billing`}),(0,j.jsx)(d,{children:`⌘B`})]}),(0,j.jsxs)(A,{children:[(0,j.jsx)(x,{}),(0,j.jsx)(`span`,{children:`Settings`}),(0,j.jsx)(d,{children:`⌘S`})]}),(0,j.jsxs)(A,{children:[(0,j.jsx)(O,{}),(0,j.jsx)(`span`,{children:`Keyboard shortcuts`}),(0,j.jsx)(d,{children:`⌘K`})]})]}),(0,j.jsx)(a,{}),(0,j.jsxs)(u,{children:[(0,j.jsxs)(A,{children:[(0,j.jsx)(T,{}),(0,j.jsx)(`span`,{children:`Team`})]}),(0,j.jsxs)(p,{children:[(0,j.jsxs)(s,{children:[(0,j.jsx)(g,{}),(0,j.jsx)(`span`,{children:`Invite users`})]}),(0,j.jsx)(f,{children:(0,j.jsxs)(i,{children:[(0,j.jsxs)(A,{children:[(0,j.jsx)(y,{}),(0,j.jsx)(`span`,{children:`Email`})]}),(0,j.jsxs)(A,{children:[(0,j.jsx)(C,{}),(0,j.jsx)(`span`,{children:`Message`})]}),(0,j.jsx)(a,{}),(0,j.jsxs)(A,{children:[(0,j.jsx)(_,{}),(0,j.jsx)(`span`,{children:`More...`})]})]})})]}),(0,j.jsxs)(A,{children:[(0,j.jsx)(D,{}),(0,j.jsx)(`span`,{children:`New Team`}),(0,j.jsx)(d,{children:`⌘+T`})]})]}),(0,j.jsx)(a,{}),(0,j.jsxs)(A,{children:[(0,j.jsx)(k,{}),(0,j.jsx)(`span`,{children:`GitHub`})]}),(0,j.jsxs)(A,{children:[(0,j.jsx)(h,{}),(0,j.jsx)(`span`,{children:`Support`})]}),(0,j.jsxs)(A,{disabled:!0,children:[(0,j.jsx)(l,{}),(0,j.jsx)(`span`,{children:`API`})]}),(0,j.jsx)(a,{}),(0,j.jsxs)(A,{children:[(0,j.jsx)(v,{}),(0,j.jsx)(`span`,{children:`Log out`}),(0,j.jsx)(d,{children:`⇧⌘Q`})]})]})]})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P=[`Primary`]}))();export{N as Primary,P as __namedExportsOrder,M as default};