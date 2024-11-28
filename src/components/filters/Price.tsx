import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const OPTIONS = [
  { id: "usd", name: "USD" },
  { id: "eur", name: "EUR" },
  { id: "btc", name: "BTC" },
  { id: "eth", name: "ETH" },
];

export const PriceFilter = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Moeda</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma moeda de cotação" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {OPTIONS.map((option) => (
                <SelectItem value={option.id}>{option.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};
