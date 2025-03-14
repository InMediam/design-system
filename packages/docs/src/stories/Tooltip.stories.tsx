import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from "@inmediam/ui"
import { Button } from "@inmediam/ui"

export default {
  title: 'Tooltip',
}

export const Primary = {
  args: {},
  render: () => {
    return (
      <div className='ml-20 mt-10'>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
              <TooltipArrow fill='white' />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  },
}
