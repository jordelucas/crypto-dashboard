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
  { id: "seven-days", name: "7 dias" },
  { id: "thirty-days", name: "30 dias" },
  { id: "ninety-days", name: "90 dias" },
];

export const PeriodFilter = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="period"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Período</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um período" />
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
