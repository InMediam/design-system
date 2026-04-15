---
'@inmediam/ui': minor
---

Add ScrollArea, Sonner, DatePickerInput, Field, and InputGroup components

- Add `ScrollArea` and `ScrollBar` components via `@radix-ui/react-scroll-area`
- Add `Toaster` component (sonner) with next-themes dark/light mode integration
- Add `DatePickerInput` component with Brazilian date format (dd/MM/yyyy), smart input mask with auto-advance cursor and auto-zero-pad — day first digit 4–9 pads to `0x` and jumps to month; month first digit 2–9 pads to `0x` and jumps to year
- Add `Field` and `FieldLabel` layout wrapper components
- Add `InputGroup`, `InputGroupInput`, `InputGroupAddon`, and `InputGroupButton` composition components for inputs with inline addons
- Add `applyDateMask`, `formatMaskedDate`, and `parseMaskedDate` utility helpers in `lib/date-mask`, exported from package root
