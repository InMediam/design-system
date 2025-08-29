import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{E as d,F as u,G as x,H as C,I as p,J as j,K as f,L as h}from"./index-4HHqu6Oe.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const I={title:"Carousel",args:{orientation:"horizontal"}},r={render:a=>e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs(d,{...a,className:"w-full max-w-xs",children:[e.jsx(u,{children:Array.from({length:5}).map((N,s)=>e.jsx(x,{children:e.jsx("div",{className:"p-1",children:e.jsx(C,{children:e.jsx(p,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:s+1})})})})},s))}),e.jsx(j,{}),e.jsx(f,{}),e.jsx(h,{})]})})},n={argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},render:a=>e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs(d,{...a,className:"w-full max-w-xs",children:[e.jsx(u,{children:Array.from({length:5}).map((N,s)=>e.jsx(x,{children:e.jsx("div",{className:"p-1",children:e.jsx(C,{children:e.jsx(p,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:s+1})})})})},s))}),e.jsx(j,{}),e.jsx(f,{}),e.jsx(h,{})]})})};var t,o,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex items-center justify-center">
        <Carousel {...args} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({
            length: 5
          }).map((_, index) => <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>;
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: 'select'
      }
    }
  },
  render: args => {
    return <div className="flex items-center justify-center">
        <Carousel {...args} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({
            length: 5
          }).map((_, index) => <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const b=["Primary","Playground"];export{n as Playground,r as Primary,b as __namedExportsOrder,I as default};
