"use client"

import * as React from "react"
import { LayoutGrid, Settings } from "lucide-react"

import { Button } from "./button"
import { Separator } from "./separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./sheet"
import { Tabs, TabsList, TabsTrigger } from "./tabs"
import { cn } from "../../lib/utils"

export type MobileTabItem = {
  id: number
  label: string
  value: string
  icon?: React.ReactNode
}

export interface MobileTabListProps {
  tabs: MobileTabItem[]
  showNavigationButton?: boolean
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  sheetTitle?: string
  sheetDescription?: string
  sheetIcon?: React.ReactNode
}

export const MobileTabList = React.forwardRef<
  HTMLDivElement,
  MobileTabListProps
>(
  (
    {
      tabs,
      showNavigationButton = false,
      value,
      defaultValue,
      onValueChange,
      sheetTitle = "Menu",
      sheetDescription = "Navigate between sections",
      sheetIcon,
    },
    ref
  ) => {
    const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0)
    const [isSheetOpen, setIsSheetOpen] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? tabs[0]?.value ?? ""
    )
    const tabsListRef = React.useRef<HTMLDivElement>(null)

    const isControlled = value !== undefined
    const activeValue = isControlled ? value : internalValue

    React.useEffect(() => {
      const checkActiveTab = () => {
        if (tabsListRef.current) {
          const activeTrigger = tabsListRef.current.querySelector(
            '[data-state="active"]'
          )
          if (activeTrigger) {
            const allTriggers =
              tabsListRef.current.querySelectorAll('[role="tab"]')
            const index = Array.from(allTriggers).indexOf(activeTrigger)
            if (index !== -1) {
              setActiveTabIndex(index)

              if (activeTrigger instanceof HTMLElement) {
                activeTrigger.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                })
              }
            }
          }
        }
      }

      checkActiveTab()

      const observer = new MutationObserver(checkActiveTab)
      if (tabsListRef.current) {
        observer.observe(tabsListRef.current, {
          attributes: true,
          subtree: true,
          attributeFilter: ["data-state"],
        })
      }

      return () => observer.disconnect()
    }, [])

    const isFirstTabSelected = activeTabIndex === 0
    const isLastTabSelected = activeTabIndex === tabs.length - 1

    const handleTabSelect = (tabValue: string) => {
      if (!isControlled) setInternalValue(tabValue)
      onValueChange?.(tabValue)
      setIsSheetOpen(false)
    }

    const handleValueChange = (tabValue: string) => {
      if (!isControlled) setInternalValue(tabValue)
      onValueChange?.(tabValue)
    }

    return (
      <>
        <div ref={ref} className="relative">
          <div className="scrollbar-hide mx-1 my-4 overflow-x-auto pb-1">
            <Tabs value={activeValue} onValueChange={handleValueChange}>
              <TabsList
                ref={tabsListRef}
                className="flex w-max min-w-full justify-start gap-2 bg-transparent"
              >
                {showNavigationButton && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSheetOpen(true)}
                      className="ml-5 gap-2 rounded-full border border-primary bg-primary"
                      aria-label="Open tab navigation"
                    >
                      <LayoutGrid className="h-5 w-5 text-fg-quaternary" />
                    </Button>

                    <Separator orientation="vertical" className="h-full" />
                  </>
                )}

                {tabs.map((tab, index) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.value}
                    className={cn(
                      "gap-2 rounded-full border border-primary bg-primary data-[state=active]:border-brand data-[state=active]:bg-brand-primary data-[state=active]:text-brand-primary",
                      index === 0 && !showNavigationButton && "ml-1",
                      index === tabs.length - 1 && "mr-1"
                    )}
                  >
                    {tab.icon}
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {!isFirstTabSelected && (
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-background to-transparent" />
          )}

          {!isLastTabSelected && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-background to-transparent" />
          )}
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent
            side="left"
            className="w-[280px] rounded-lg sm:w-[320px]"
          >
            <SheetHeader className="space-y-3 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary">
                  {sheetIcon ?? (
                    <Settings className="h-5 w-5 text-fg-brand-primary" />
                  )}
                </div>
                <SheetTitle className="text-xl font-semibold">
                  {sheetTitle}
                </SheetTitle>
              </div>
              <p className="text-sm text-tertiary">
                {sheetDescription}
              </p>
            </SheetHeader>
            <Separator className="mb-4" />
            <div className="flex flex-col gap-2 py-1">
              {tabs.map((tab) => {
                const isActive = activeValue === tab.value
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabSelect(tab.value)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all hover:border-brand hover:bg-brand-primary",
                      isActive
                        ? "border-brand bg-brand-primary"
                        : "border-secondary bg-primary"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                        isActive
                          ? "bg-brand-quaterary-on-brand"
                          : "bg-tertiary text-tertiary group-hover:bg-brand-secondary group-hover:text-brand-tertiary"
                      )}
                    >
                      {tab.icon}
                    </div>
                    <span
                      className={cn(
                        "flex-1 text-sm font-medium transition-colors",
                        isActive
                          ? "text-brand-primary"
                          : "text-secondary group-hover:text-brand-primary"
                      )}
                    >
                      {tab.label}
                    </span>
                    {isActive && (
                      <div className="h-2 w-2 rounded-full bg-brand-quaterary" />
                    )}
                  </button>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </>
    )
  }
)
MobileTabList.displayName = "MobileTabList"
