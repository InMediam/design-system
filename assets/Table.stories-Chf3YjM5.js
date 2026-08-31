import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{C as n,S as r,_ as i,b as a,fr as o,t as s,v as c,w as l,x as u,y as d}from"./src-D4mIL-UR.js";var f,p,m,h,g;function _(){return(_=e((()=>{s(),f=t(),p={title:`Table`},m=[{invoice:`INV001`,paymentStatus:`Paid`,totalAmount:`$250.00`,paymentMethod:`Credit Card`},{invoice:`INV002`,paymentStatus:`Pending`,totalAmount:`$150.00`,paymentMethod:`PayPal`},{invoice:`INV003`,paymentStatus:`Unpaid`,totalAmount:`$350.00`,paymentMethod:`Bank Transfer`},{invoice:`INV004`,paymentStatus:`Paid`,totalAmount:`$450.00`,paymentMethod:`Credit Card`},{invoice:`INV005`,paymentStatus:`Paid`,totalAmount:`$550.00`,paymentMethod:`PayPal`},{invoice:`INV006`,paymentStatus:`Pending`,totalAmount:`$200.00`,paymentMethod:`Bank Transfer`},{invoice:`INV007`,paymentStatus:`Unpaid`,totalAmount:`$300.00`,paymentMethod:`Credit Card`}],h={args:{},render:()=>(0,f.jsx)(`div`,{className:`w-full`,children:(0,f.jsxs)(i,{children:[(0,f.jsx)(d,{children:`A list of your recent invoices.`}),(0,f.jsx)(n,{children:(0,f.jsxs)(l,{children:[(0,f.jsx)(r,{className:`w-[100px]`,children:`Invoice`}),(0,f.jsx)(r,{children:`Status`}),(0,f.jsx)(r,{children:`Method`}),(0,f.jsx)(r,{className:`text-right`,children:`Amount`})]})}),(0,f.jsx)(c,{children:m.map(e=>(0,f.jsxs)(l,{children:[(0,f.jsx)(a,{className:`font-medium`,children:e.invoice}),(0,f.jsx)(a,{children:e.paymentStatus}),(0,f.jsx)(a,{children:(0,f.jsx)(o,{className:`rounded-[0.375rem]`,variant:`outline`,children:e.paymentMethod})}),(0,f.jsx)(a,{className:`text-right`,children:e.totalAmount})]},e.invoice))}),(0,f.jsx)(u,{children:(0,f.jsxs)(l,{children:[(0,f.jsx)(a,{colSpan:3,children:`Total`}),(0,f.jsx)(a,{className:`text-right`,children:`$2,500.00`})]})})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="w-full">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map(invoice => <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>
                  <Badge className="rounded-[0.375rem]" variant="outline">
                    {invoice.paymentMethod}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Primary`]})))()}_();export{h as Primary,g as __namedExportsOrder,p as default};