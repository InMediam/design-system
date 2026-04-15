
import React, { useState } from "react";
import {
  ArrowLeftToLine,
  Building2,
  ChevronDown,
  FileSearch2,
  Flag,
  Flame,
  Gauge,
  GalleryVerticalEnd,
  Inbox,
  MessageCircleMore,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dot,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  TooltipProvider,
  useSidebar,
} from "@inmediam/ui";

export default {
  title: "Sidebar",
};

const navMainItems = [
  {
    id: "home",
    title: "Início",
    icon: <Gauge className="h-5 w-5" />,
    url: "#",
  },
  {
    id: "clientes",
    title: "Clientes",
    icon: <Users className="h-5 w-5" />,
    items: [
      { id: "locatarios", title: "Locatários", url: "#" },
      { id: "proprietarios", title: "Proprietários", url: "#" },
    ],
  },
  {
    id: "imoveis",
    title: "Imóveis",
    icon: <Building2 className="h-5 w-5" />,
    url: "#",
  },
  {
    id: "locacoes",
    title: "Locações",
    icon: <Inbox className="h-5 w-5" />,
    url: "#",
  },
];

const navServiceItems = [
  {
    id: "cobranca-automatizada-service",
    title: "Cobrança automatizada",
    icon: <TrendingUp className="h-5 w-5" />,
    items: [
      { id: "cobranca-automatizada-visao-geral", title: "Cobranças", url: "#" },
      { id: "cobranca-automatizada-regua-cobrancas", title: "Régua de cobranças", url: "#" },
    ],
  },
  {
    id: "garantia-locaticia-service",
    title: "Garantia locatícia",
    icon: <ShieldCheck className="h-5 w-5" />,
    url: "#",
  },
  {
    id: "vistoria-service",
    title: "Vistoria",
    icon: <FileSearch2 className="h-5 w-5" />,
    items: [
      { id: "vistoria-visao-geral", title: "Visão geral", url: "#" },
      { id: "vistoria-aguardando-ativacao", title: "Ativação", url: "#" },
      { id: "vistoria-solicitacao", title: "Solicitação", url: "#" },
      { id: "vistoria-assinatura", title: "Assinatura", url: "#" },
      { id: "vistoria-configuracoes", title: "Configurações", url: "#" },
    ],
  },
  {
    id: "seguro-incendio-service",
    title: "Seguro incêndio",
    icon: <Flame className="h-5 w-5" />,
    items: [
      { id: "seguro-incendio-cotacoes", title: "Cotações", url: "#" },
      { id: "seguro-incendio-seguros", title: "Seguros", url: "#" },
      { id: "seguro-incendio-configuracoes", title: "Configurações", url: "#" },
    ],
  },
];

const navFooterItems = [
  {
    id: "gerenciar-equipe",
    title: "Gerenciar equipe",
    icon: <Users className="h-5 w-5" />,
    url: "#",
  },
  {
    id: "central-usuario",
    title: "Central do usuário",
    icon: <Flag className="h-5 w-5" />,
    url: "#",
  },
  {
    id: "suporte",
    title: "Suporte",
    icon: <MessageCircleMore className="h-5 w-5" />,
    url: "#",
  },
];

function NavHeader() {
  const { open } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="px-2">
        <SidebarMenuButton
          className="bg-transparent w-full hover:bg-transparent active:bg-transparent data-[open=false]:flex data-[open=false]:justify-center"
          size="lg"
          data-open={open}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <GalleryVerticalEnd className="h-4 w-4" />
            </span>
            <span
              className="text-base font-semibold data-[open=false]:hidden"
              data-open={open}
            >
              InMediam
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function NavMain({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { open, setOpen } = useSidebar();
  const [openCollapsible, setOpenCollapsible] = useState<string | null>("clientes");

  return (
    <SidebarGroup>
      <SidebarMenu
        className="items-center justify-center data-[open=true]:pl-4 data-[open=true]:pr-4"
        data-open={open}
      >
        {navMainItems.map((main) => {
          const isActive = activeId === main.id ||
            (main.items?.some((sub) => sub.id === activeId) ?? false);

          if (main.items) {
            const isOpen = openCollapsible === main.id;
            return (
              <Collapsible
                asChild
                className="group/collapsible"
                key={main.id}
                open={isOpen}
                onOpenChange={(o) => {
                  if (!open) { setOpen(true); setOpenCollapsible(main.id); return; }
                  setOpenCollapsible(o ? main.id : null);
                }}
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className="h-10 pr-3 data-[open=false]:flex data-[open=true]:w-[17.5rem] data-[open=false]:justify-center group-data-[state=open]/collapsible:data-[open=true]:bg-transparent"
                      tooltip={main.title}
                      isActive={isActive}
                      data-open={open}
                    >
                      <Separator
                        className="fixed -ml-3 h-5 w-1 rounded-xl data-[open=false]:-ml-8 data-[active=false]:hidden data-[active=true]:bg-brand-500 group-data-[state=open]/collapsible:data-[open=true]:hidden"
                        orientation="vertical"
                        data-open={open}
                        data-active={isActive}
                      />
                      <div
                        className="mr-1 text-gray-500 data-[icon=false]:hidden data-[active=true]:text-gray-600"
                        data-icon={true}
                        data-active={isActive}
                      >
                        {main.icon}
                      </div>
                      <span
                        className="text-sm font-medium text-gray-600 data-[open=false]:hidden data-[active=true]:group-data-[state=closed]/collapsible:font-semibold data-[active=true]:group-data-[state=closed]/collapsible:text-gray-800"
                        data-open={open}
                        data-active={isActive}
                      >
                        {main.title}
                      </span>
                      <ChevronDown
                        className="ml-auto text-gray-500 transition-transform duration-200 data-[open=false]:hidden group-data-[state=open]/collapsible:rotate-180"
                        data-open={open}
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="mx-0 border-none px-0">
                      {main.items.map((subItem) => {
                        const isItemActive = activeId === subItem.id;
                        return (
                          <SidebarMenuSubItem
                            className="h-10 data-[open=true]:w-[17.5rem]"
                            key={subItem.id}
                            data-open={open}
                          >
                            <SidebarMenuSubButton
                              asChild
                              className="h-10"
                              isActive={isItemActive}
                            >
                              <a
                                href={subItem.url}
                                className="pl-0"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onSelect(subItem.id);
                                }}
                              >
                                <Separator
                                  className="m-0 mr-8 h-5 w-1 rounded-xl bg-transparent p-0 data-[active=true]:bg-brand-500"
                                  orientation="vertical"
                                  data-active={isItemActive}
                                />
                                <div className="flex w-full items-center justify-between pr-1">
                                  <span
                                    className="whitespace-nowrap text-sm font-medium text-gray-600 data-[active=true]:font-semibold data-[active=true]:text-gray-800"
                                    data-active={isItemActive}
                                  >
                                    {subItem.title}
                                  </span>
                                </div>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          return (
            <SidebarMenuItem key={main.id}>
              <SidebarMenuButton
                className="flex h-10 py-0 text-center align-middle data-[open=true]:w-[17.5rem] data-[open=false]:justify-center"
                tooltip={main.title}
                isActive={isActive}
                data-open={open}
              >
                <Separator
                  className="fixed -ml-2 h-5 w-1 rounded-xl data-[open=false]:-ml-8 data-[active=false]:hidden data-[active=true]:bg-brand-500"
                  orientation="vertical"
                  data-open={open}
                  data-active={isActive}
                />
                <a
                  href={main.url}
                  className="flex h-full w-full items-center gap-3"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(main.id);
                  }}
                >
                  <div
                    className="text-gray-500 data-[active=true]:text-gray-600"
                    data-active={isActive}
                  >
                    {main.icon}
                  </div>
                  <span
                    className="text-sm font-medium text-gray-600 data-[open=false]:hidden data-[active=true]:font-semibold data-[active=true]:text-gray-800"
                    data-open={open}
                    data-active={isActive}
                  >
                    {main.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavService({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { open, setOpen } = useSidebar();
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-4 pb-1 text-xs text-gray-500 duration-300">
        SERVIÇOS
      </SidebarGroupLabel>
      <SidebarMenu
        className="items-center justify-center data-[open=true]:pl-4 data-[open=true]:pr-4"
        data-open={open}
      >
        {navServiceItems.map((main) => {
          const isActive =
            activeId === main.id ||
            (main.items?.some((sub) => sub.id === activeId) ?? false);

          if (main.url) {
            return (
              <SidebarMenuItem key={main.id}>
                <SidebarMenuButton
                  className="flex h-10 py-0 text-center align-middle data-[open=true]:w-[17.5rem] data-[open=false]:justify-center"
                  tooltip={main.title}
                  isActive={isActive}
                  data-open={open}
                >
                  <Separator
                    className="fixed -ml-2 h-5 w-1 rounded-xl data-[open=false]:-ml-8 data-[active=false]:hidden data-[active=true]:bg-brand-500"
                    orientation="vertical"
                    data-open={open}
                    data-active={isActive}
                  />
                  <a
                    href={main.url}
                    className="flex h-full w-full items-center gap-3"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelect(main.id);
                    }}
                  >
                    <div
                      className="text-gray-500 data-[active=true]:text-gray-600"
                      data-active={isActive}
                    >
                      {main.icon}
                    </div>
                    <span
                      className="text-sm font-medium text-gray-600 data-[open=false]:hidden data-[active=true]:font-semibold data-[active=true]:text-gray-800"
                      data-open={open}
                      data-active={isActive}
                    >
                      {main.title}
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          const isOpen = openCollapsible === main.id;
          return (
            <Collapsible
              asChild
              className="group/collapsible"
              key={main.id}
              open={isOpen}
              onOpenChange={(o) => {
                if (!open) { setOpen(true); setOpenCollapsible(main.id); return; }
                setOpenCollapsible(o ? main.id : null);
              }}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className="h-10 px-2 data-[open=false]:flex data-[open=true]:w-[17.5rem] data-[open=false]:justify-center group-data-[state=open]/collapsible:data-[open=true]:bg-transparent"
                    tooltip={main.title}
                    isActive={isActive}
                    data-open={open}
                  >
                    <Separator
                      className="fixed -ml-2 h-5 w-1 rounded-xl data-[open=false]:-ml-8 data-[active=false]:hidden data-[active=true]:bg-brand-500 group-data-[state=open]/collapsible:data-[open=true]:hidden"
                      orientation="vertical"
                      data-open={open}
                      data-active={isActive}
                    />
                    <div
                      className="mr-1 text-gray-500 data-[active=true]:text-gray-600"
                      data-active={isActive}
                    >
                      {main.icon}
                    </div>
                    <span
                      className="text-sm font-medium text-gray-600 data-[open=false]:hidden data-[active=true]:group-data-[state=closed]/collapsible:font-semibold data-[active=true]:group-data-[state=closed]/collapsible:text-gray-800"
                      data-open={open}
                      data-active={isActive}
                    >
                      {main.title}
                    </span>
                    <ChevronDown
                      className="ml-auto text-gray-500 transition-transform duration-200 data-[open=false]:hidden group-data-[state=open]/collapsible:rotate-180"
                      data-open={open}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="mx-0 border-none px-0">
                    {main.items?.map((subItem) => {
                      const isItemActive = activeId === subItem.id;
                      return (
                        <SidebarMenuSubItem
                          className="h-10 data-[open=true]:w-[17.5rem]"
                          key={subItem.id}
                          data-open={open}
                        >
                          <SidebarMenuSubButton
                            asChild
                            className="h-10"
                            isActive={isItemActive}
                          >
                            <a
                              href={subItem.url}
                              className="pl-0"
                              onClick={(e) => {
                                e.preventDefault();
                                onSelect(subItem.id);
                              }}
                            >
                              <Separator
                                className="m-0 mr-8 h-5 w-1 rounded-xl bg-transparent p-0 data-[active=true]:bg-brand-500"
                                orientation="vertical"
                                data-active={isItemActive}
                              />
                              <span
                                className="whitespace-nowrap text-sm font-medium text-gray-600 data-[active=true]:font-semibold data-[active=true]:text-gray-800"
                                data-active={isItemActive}
                              >
                                {subItem.title}
                              </span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavFooter({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { open } = useSidebar();

  return (
    <SidebarGroup className="py-1">
      <SidebarMenu
        className="items-center justify-center data-[open=true]:pl-4 data-[open=true]:pr-4"
        data-open={open}
      >
        {navFooterItems.map((main) => {
          const isActive = activeId === main.id;
          return (
            <SidebarMenuItem key={main.id}>
              <SidebarMenuButton
                className="flex h-10 py-0 text-center align-middle data-[open=true]:w-[17.5rem] data-[open=false]:justify-center"
                tooltip={main.title}
                isActive={isActive}
                data-open={open}
              >
                <Separator
                  className="fixed -ml-2 h-5 w-1 rounded-xl data-[open=false]:-ml-8 data-[active=false]:hidden data-[active=true]:bg-brand-500"
                  orientation="vertical"
                  data-open={open}
                  data-active={isActive}
                />
                <a
                  href={main.url}
                  className="flex h-full w-full items-center gap-3"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(main.id);
                  }}
                >
                  <div
                    className="text-gray-500 data-[active=true]:text-gray-600"
                    data-active={isActive}
                  >
                    {main.icon}
                  </div>
                  <span
                    className="whitespace-nowrap text-sm font-medium text-gray-600 data-[open=false]:hidden data-[active=true]:font-semibold"
                    data-open={open}
                    data-active={isActive}
                  >
                    {main.title}
                  </span>
                  <span className="ml-20">
                    <Badge
                      className="rounded-[0.375rem] data-[open=false]:hidden data-[suporte=false]:hidden"
                      variant="outline"
                      data-suporte={main.title === "Suporte"}
                      data-open={open}
                    >
                      <Dot
                        className="data-[ativo=true]:bg-success-500"
                        data-ativo={true}
                      />
                      <span className="font-semibold">online</span>
                    </Badge>
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function SidebarButtonTrigger() {
  const { open, setOpen } = useSidebar();

  return (
    <Button
      className="h-10 w-[17.5rem] justify-start gap-3 rounded-md px-2 hover:bg-sidebar-accent active:bg-transparent data-[open=false]:w-fit"
      variant="ghost"
      onClick={() => setOpen((prev) => !prev)}
      data-open={open}
    >
      <ArrowLeftToLine
        className="h-5 w-5 text-gray-500 data-[open=false]:rotate-180"
        data-open={open}
      />
      <span
        className="text-sm font-medium text-gray-600 data-[open=false]:hidden"
        data-open={open}
      >
        Recolher menu
      </span>
    </Button>
  );
}

function AppSidebar() {
  const [activeId, setActiveId] = useState("home");

  return (
    <TooltipProvider delayDuration={200}>
      <Sidebar collapsible="icon">
        <SidebarHeader className="pt-6">
          <NavHeader />
        </SidebarHeader>
        <SidebarContent className="overflow-x-hidden">
          <NavMain activeId={activeId} onSelect={setActiveId} />
          <NavService activeId={activeId} onSelect={setActiveId} />
        </SidebarContent>
        <SidebarFooter className="flex items-center justify-center px-0 pt-0">
          <NavFooter activeId={activeId} onSelect={setActiveId} />
          <Separator
            className="w-full bg-gray-neutral-200 dark:bg-muted"
            orientation="horizontal"
          />
          <SidebarButtonTrigger />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  );
}

export const Primary = {
  args: {},
  render: () => {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  },
};