import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{$n as n,Jn as r,Qn as i,Xn as a,Yn as o,Zn as s,nr as c,t as l,tr as u}from"./src-D4mIL-UR.js";var d,f,p,m,h;function g(){return(g=e((()=>{l(),d=t(),f={title:`Carousel`,args:{orientation:`horizontal`,size:`sm`}},p={render:({size:e,...t})=>(0,d.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,d.jsxs)(r,{...t,className:`w-full max-w-xs`,children:[(0,d.jsx)(o,{children:Array.from({length:5}).map((e,t)=>(0,d.jsx)(s,{children:(0,d.jsx)(`div`,{className:`p-1`,children:(0,d.jsx)(u,{children:(0,d.jsx)(c,{className:`flex aspect-square items-center justify-center p-6`,children:(0,d.jsx)(`span`,{className:`text-4xl font-semibold`,children:t+1})})})})},t))}),(0,d.jsx)(n,{}),(0,d.jsx)(i,{}),(0,d.jsx)(a,{size:e})]})})},m={argTypes:{orientation:{options:[`horizontal`,`vertical`],control:{type:`select`}},size:{options:[`sm`,`md`,`lg`,`xl`],control:{type:`select`}}},render:({size:e,...t})=>(0,d.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,d.jsxs)(r,{...t,className:`w-full max-w-xs`,children:[(0,d.jsx)(o,{children:Array.from({length:5}).map((e,t)=>(0,d.jsx)(s,{children:(0,d.jsx)(`div`,{className:`p-1`,children:(0,d.jsx)(u,{children:(0,d.jsx)(c,{className:`flex aspect-square items-center justify-center p-6`,children:(0,d.jsx)(`span`,{className:`text-4xl font-semibold`,children:t+1})})})})},t))}),(0,d.jsx)(n,{}),(0,d.jsx)(i,{}),(0,d.jsx)(a,{size:e})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`Playground`]})))()}g();export{m as Playground,p as Primary,h as __namedExportsOrder,f as default};