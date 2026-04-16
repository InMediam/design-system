import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-B2WyFcD1.js";import{_ as n,d as r,f as i,g as a,h as o,m as s,p as c,t as l,v as u}from"./src-BJkJ-vRT.js";var d,f,p,m,h;e((()=>{l(),d=t(),f={title:`Table`},p=[{invoice:`INV001`,paymentStatus:`Paid`,totalAmount:`$250.00`,paymentMethod:`Credit Card`},{invoice:`INV002`,paymentStatus:`Pending`,totalAmount:`$150.00`,paymentMethod:`PayPal`},{invoice:`INV003`,paymentStatus:`Unpaid`,totalAmount:`$350.00`,paymentMethod:`Bank Transfer`},{invoice:`INV004`,paymentStatus:`Paid`,totalAmount:`$450.00`,paymentMethod:`Credit Card`},{invoice:`INV005`,paymentStatus:`Paid`,totalAmount:`$550.00`,paymentMethod:`PayPal`},{invoice:`INV006`,paymentStatus:`Pending`,totalAmount:`$200.00`,paymentMethod:`Bank Transfer`},{invoice:`INV007`,paymentStatus:`Unpaid`,totalAmount:`$300.00`,paymentMethod:`Credit Card`}],m={args:{},render:()=>(0,d.jsx)(`div`,{className:`w-full`,children:(0,d.jsxs)(r,{children:[(0,d.jsx)(c,{children:`A list of your recent invoices.`}),(0,d.jsx)(n,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)(a,{className:`w-[100px]`,children:`Invoice`}),(0,d.jsx)(a,{children:`Status`}),(0,d.jsx)(a,{children:`Method`}),(0,d.jsx)(a,{className:`text-right`,children:`Amount`})]})}),(0,d.jsx)(i,{children:p.map(e=>(0,d.jsxs)(u,{children:[(0,d.jsx)(s,{className:`font-medium`,children:e.invoice}),(0,d.jsx)(s,{children:e.paymentStatus}),(0,d.jsx)(s,{children:e.paymentMethod}),(0,d.jsx)(s,{className:`text-right`,children:e.totalAmount})]},e.invoice))}),(0,d.jsx)(o,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)(s,{colSpan:3,children:`Total`}),(0,d.jsx)(s,{className:`text-right`,children:`$2,500.00`})]})})]})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                <TableCell>{invoice.paymentMethod}</TableCell>
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
}`,...m.parameters?.docs?.source}}},h=[`Primary`]}))();export{m as Primary,h as __namedExportsOrder,f as default};