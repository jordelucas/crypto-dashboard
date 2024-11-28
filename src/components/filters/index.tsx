import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { NameFilter } from "./Name";
import { PeriodFilter } from "./Period";
import { PriceFilter } from "./Price";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  period: z.string().optional(),
  price: z.string().optional(),
  name: z.string().optional(),
});

export const Filters = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("check data ===> ", data);
  }

  return (
    <div className="flex flex-col space-y-8 rounded p-5 shadow-2xl first:mt-3 md:first:mt-0">
      <h4 className="text-aquamarine text-sm font-semibold">Filtros gerais:</h4>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-3"
        >
          <div className="col-span-3">
            <PeriodFilter />
          </div>

          <div className="col-span-3">
            <PriceFilter />
          </div>

          <div className="col-span-3">
            <NameFilter />
          </div>

          <div className="col-span-3 content-end">
            <Button type="submit">Buscar</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
