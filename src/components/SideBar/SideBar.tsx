import { ArrowBigDownDash, Component, DollarSign, Home, LogOut, Package, PanelBottom, Settings2, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import logo from "../../img/iaf.png"

export default function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">

      {/* Desktopp */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-slate-900  sm:flex flex-col">

        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="/"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
            >
              <div className="h-8 w-8">
                <Image src={logo} alt="My Image"/>
              </div>
              <span className="sr-only">Logo Icon</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 " />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>


              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 " />
                  <span className="sr-only">Membros</span>

                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Membros</TooltipContent>

              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <Component className="h-5 w-5 " />
                  <span className="sr-only">GC's</span>

                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Grupo de Crescimento</TooltipContent>

              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 " />
                  <span className="sr-only">Em Caixa</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Em caixa</TooltipContent>

              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <DollarSign className="h-5 w-5 " />
                  <span className="sr-only">Ofertas</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Ofertas</TooltipContent>

              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <ArrowBigDownDash className="h-5 w-5 " />
                  <span className="sr-only">Contas</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Contas</TooltipContent>

              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 " />
                  <span className="sr-only">Configurações</span>

                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>

            </Tooltip>

          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
                  prefetch={false}
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>



      {/* Mobile */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
        <header className="stick top-0 z-30 flex h-14 items-center px-4 border-b bg-slate-900  gap-4 
      sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">

                <Link
                  href="#"
                  className="flex h-10 w-10 gap-2 rounded-full txt-lg items-center justify-center text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <div className="h-9 w-9 transition-all" >
                    <Image src={logo} alt="My Image" />
                  </div>
                  <span className="sr-only"> Logo </span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all" />
                  Membros
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <Component className="h-5 w-5 transition-all" />
                  GC's
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  Em caixa
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <DollarSign className="h-5 w-5 transition-all" />
                  Ofertas
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <ArrowBigDownDash className="h-5 w-5 transition-all" />
                  Contas
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  Configurações
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
          <h2 className="text-gray-50">Menu</h2>
        </header>
      </div>

    </div>
  )
}