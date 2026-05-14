import React from "react";
import { PlusCircle } from "lucide-react";

const CreateOption = () => {
  return (
    <div className="flex items-center gap-2">
      <PlusCircle className="text-stone-400" />
      <p className="text-stone-400">Add new coffee</p>
    </div>
  );
};

export default CreateOption;
