import { Skeleton } from "@inmediam/ui"

export default {
  title: 'Skeleton',
  component: Skeleton,
}

export const Primary = {
  args: {},
  render: () => {
    return (
      <div className="flex w-full">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    )
  },
}
