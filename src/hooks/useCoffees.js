import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

export const useCoffees = () => {
  return useQuery({
    queryKey: ["coffees"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("beans")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
