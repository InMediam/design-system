import * as React from 'react'

import { cn } from '../../lib/utils'

const Table = ({ className, ...props }: React.ComponentProps<'table'>) => (
  <div className={cn(
    'relative w-full overflow-auto border rounded-t-xl rounded-b-xl',
    'border-secondary',
  )}
  >
    <table
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
)
Table.displayName = 'Table'

const TableHeader = ({
  className,
  ...props
}: React.ComponentProps<'thead'>) => (
  <thead
    className={cn('[&_tr]:border-b border-secondary bg-secondary', className)}
    {...props}
  />
)
TableHeader.displayName = 'TableHeader'

const TableBody = ({ className, ...props }: React.ComponentProps<'tbody'>) => (
  <tbody
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
)
TableBody.displayName = 'TableBody'

const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<'tfoot'>) => (
  <tfoot
    className={cn(
      'border-t font-medium [&>tr]:last:border-b-0 ',
      className,
    )}
    {...props}
  />
)
TableFooter.displayName = 'TableFooter'

const TableRow = ({ className, ...props }: React.ComponentProps<'tr'>) => (
  <tr
    className={cn(
      'border-b border-secondary transition-colors hover:bg-secondary',
      'data-[state=selected]:bg-tertiary',
      className,
    )}
    {...props}
  />
)
TableRow.displayName = 'TableRow'

const TableHead = ({ className, ...props }: React.ComponentProps<'th'>) => (
  <th
    className={cn(
      'h-5 px-6 py-0 text-left align-middle font-medium text-tertiary',
      'text-xs [&:has([role=checkbox])]:pr-0',
      '[&>[role=checkbox]]:translate-y-[2px]',
      className,
    )}
    {...props}
  />
)
TableHead.displayName = 'TableHead'

const TableCell = ({ className, ...props }: React.ComponentProps<'td'>) => (
  <td
    className={cn(
      'px-6 py-4 align-middle [&:has([role=checkbox])]:pr-0',
      '[&>[role=checkbox]]:translate-y-[2px]',
      className,
    )}
    {...props}
  />
)
TableCell.displayName = 'TableCell'

const TableCaption = ({
  className,
  ...props
}: React.ComponentProps<'caption'>) => (
  <caption
    className={cn('mt-4 text-sm text-tertiary', className)}
    {...props}
  />
)
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}
