---
"@inmediam/ui": minor
---

Add the `2xl` (1536px) breakpoint to the Tailwind preset. The preset defines `screens` outside of `extend`, which replaced Tailwind's default scale and left `xl` (1280px) as the largest named breakpoint — consumers targeting wide monitors had to fall back to arbitrary variants such as `min-[1600px]:`. `2xl` now restores Tailwind's own default value.
