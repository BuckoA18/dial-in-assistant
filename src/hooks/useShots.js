import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

export const useShots = () => {
  return useQuery({
    queryKey: ["shots"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("shots")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
