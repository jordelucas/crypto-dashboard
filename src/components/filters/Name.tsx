import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { cn } from "@/lib/utils";
import { api } from "@/services/api";

type Coin = {
  id: string;
  name: string;
  symbol: string;
};

export const NameFilter = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const { control, setValue } = useFormContext();

  useEffect(() => {
    const params = {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "100",
      page: "1",
    };

    api
      .get<Coin[]>("/coins/markets", { params })
      .then(({ data }) => setCoins(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nome da Criptomoeda</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between font-normal"
                >
                  {field.value
                    ? coins.find((coin) => coin.id === field.value)?.name
                    : "Selecione uma criptomoeda"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
              <Command>
                <CommandInput
                  placeholder="Pesquise uma criptomoeda..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>Nenhuma criptomoeda encontrada.</CommandEmpty>
                  <CommandGroup>
                    {coins.map((coin) => (
                      <CommandItem
                        value={coin.name}
                        key={coin.id}
                        onSelect={() => {
                          setValue("name", coin.id);
                        }}
                      >
                        {coin.name}
                        <Check
                          className={cn(
                            "ml-auto",
                            coin.id === field.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};
