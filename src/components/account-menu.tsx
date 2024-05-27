import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          Pizza Shop
          <ChevronDown className="h-4 w-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Raissa Macedo</span>
          <span className="text-xs font-normal text-muted-foreground">
            raissamacedo7@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
          <Building className="w-4 h-4 mr-2"/>
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-purple-500 dark:text-purple-400">
          <LogOut className="w-4 h-4 mr-2"/>
          <span>Sair</span>
        </DropdownMenuItem>

      </DropdownMenuContent>
     </DropdownMenu>
  )
}