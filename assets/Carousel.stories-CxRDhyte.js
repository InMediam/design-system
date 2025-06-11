import{j as e}from"./jsx-runtime-CqU-cyDI.js";import{E as d,F as u,G as x,H as p,I as C,J as f,K as j}from"./index-CZBfYc8w.js";import"./index-CzSziqNJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFjp_sMt.js";import"./extends-CF3RwP-h.js";const _={title:"Carousel",args:{orientation:"horizontal"}},r={render:a=>e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs(d,{...a,className:"w-full max-w-xs",children:[e.jsx(u,{children:Array.from({length:5}).map((h,s)=>e.jsx(x,{children:e.jsx("div",{className:"p-1",children:e.jsx(p,{children:e.jsx(C,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:s+1})})})})},s))}),e.jsx(f,{}),e.jsx(j,{})]})})},n={argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},render:a=>e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs(d,{...a,className:"w-full max-w-xs",children:[e.jsx(u,{children:Array.from({length:5}).map((h,s)=>e.jsx(x,{children:e.jsx("div",{className:"p-1",children:e.jsx(p,{children:e.jsx(C,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:s+1})})})})},s))}),e.jsx(f,{}),e.jsx(j,{})]})})};var t,l,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        </Carousel>
      </div>;
  }
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        </Carousel>
      </div>;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const I=["Primary","Playground"];export{n as Playground,r as Primary,I as __namedExportsOrder,_ as default};
