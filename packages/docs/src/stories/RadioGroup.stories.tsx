import { Label } from "@inmediam/ui"
import { RadioGroup, RadioGroupItem } from "@inmediam/ui"

export default {
  title: 'Form/Radio Group',
}

export const Primary = {
  args: {},
  render: () => {
    return (
      <div className="w-fit">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    )
  },
}
