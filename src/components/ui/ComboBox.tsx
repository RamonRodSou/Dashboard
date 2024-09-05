"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type Funcao = {
  value: number;
  label: string;
};

type Props = {
  funcao: Funcao[];
  onChange: (value: number | undefined) => void;

};

export const ComboBox: React.FC<Props> = ({funcao, onChange }) => {  
 const [open, setOpen] = React.useState(false)
 const [value, setValue] = React.useState<number | undefined>(undefined);

 const handleSelect = (newValue: number) => {
  const selectedValue = value === newValue ? undefined : newValue;
  setValue(selectedValue);
  onChange(selectedValue);
  setOpen(false);
};

  return (
   <Popover open={open} onOpenChange={setOpen}>
   <PopoverTrigger asChild>
     <Button
       variant="outline"
       role="combobox"
       aria-expanded={open}
       className="w-[200px] justify-between"
     >
       {value !== undefined
         ? funcao.find((funcao) => funcao.value === value)?.label
         : "Selecione"}
       <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
     </Button>
   </PopoverTrigger>
   <PopoverContent className="w-[200px] p-0">
     <Command>
       <CommandInput placeholder="Selecione" />
       <CommandList>
         <CommandEmpty>No funcao found.</CommandEmpty>
         <CommandGroup>
           {funcao.map((funcao) => (
             <CommandItem
               key={funcao.value}
               // onSelect={() => {
               //   setValue(value === funcao.value ? undefined : funcao.value);
               //   setOpen(false);
               // }}
               onSelect={() => handleSelect(funcao.value)}

             >
               <Check
                 className={cn(
                   "mr-2 h-4 w-4",
                   value === funcao.value ? "opacity-100" : "opacity-0"
                 )}
               />
               {funcao.label}
             </CommandItem>
           ))}
         </CommandGroup>
       </CommandList>
     </Command>
   </PopoverContent>
 </Popover>
  )
}
