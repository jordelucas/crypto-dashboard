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
  { id: "7", name: "7 dias" },
  { id: "30", name: "30 dias" },
  { id: "90", name: "90 dias" },
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
