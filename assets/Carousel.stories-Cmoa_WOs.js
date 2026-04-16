import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-B2WyFcD1.js";import{Cn as n,Dn as r,En as i,On as a,Sn as o,Tn as s,t as c,wn as l,xn as u}from"./src-BJkJ-vRT.js";var d,f,p,m,h;e((()=>{c(),d=t(),f={title:`Carousel`,args:{orientation:`horizontal`,size:`sm`}},p={render:({size:e,...t})=>(0,d.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,d.jsxs)(u,{...t,className:`w-full max-w-xs`,children:[(0,d.jsx)(o,{children:Array.from({length:5}).map((e,t)=>(0,d.jsx)(l,{children:(0,d.jsx)(`div`,{className:`p-1`,children:(0,d.jsx)(r,{children:(0,d.jsx)(a,{className:`flex aspect-square items-center justify-center p-6`,children:(0,d.jsx)(`span`,{className:`text-4xl font-semibold`,children:t+1})})})})},t))}),(0,d.jsx)(i,{}),(0,d.jsx)(s,{}),(0,d.jsx)(n,{size:e})]})})},m={argTypes:{orientation:{options:[`horizontal`,`vertical`],control:{type:`select`}},size:{options:[`sm`,`md`,`lg`,`xl`],control:{type:`select`}}},render:({size:e,...t})=>(0,d.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,d.jsxs)(u,{...t,className:`w-full max-w-xs`,children:[(0,d.jsx)(o,{children:Array.from({length:5}).map((e,t)=>(0,d.jsx)(l,{children:(0,d.jsx)(`div`,{className:`p-1`,children:(0,d.jsx)(r,{children:(0,d.jsx)(a,{className:`flex aspect-square items-center justify-center p-6`,children:(0,d.jsx)(`span`,{className:`text-4xl font-semibold`,children:t+1})})})})},t))}),(0,d.jsx)(i,{}),(0,d.jsx)(s,{}),(0,d.jsx)(n,{size:e})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    size,
    ...args
  }) => {
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
          <CarouselDots size={size} />
        </Carousel>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: {
        type: 'select'
      }
    }
  },
  render: ({
    size,
    ...args
  }) => {
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
          <CarouselDots size={size} />
        </Carousel>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`Playground`]}))();export{m as Playground,p as Primary,h as __namedExportsOrder,f as default};