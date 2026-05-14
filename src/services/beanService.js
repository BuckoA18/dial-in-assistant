import { supabase } from "../lib/supabase";
export const fetchBeans = async () => {
  try {
    const { data, error } = await supabase.from("beans").select();
    if (error) throw new Error("Failed to fetch");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
