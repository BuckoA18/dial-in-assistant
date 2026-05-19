import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { useSelector } from "react-redux";

export const useShots = () => {
  const { id } = useSelector((state) => state.coffee.activeCoffee);

  console.log(id);
  return useQuery({
    queryKey: ["shots"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("shots")
        .select("")
        .eq("bean_id", id)
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
