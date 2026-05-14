import { Droplets, Flame, CheckCircle2Icon } from "lucide-react";

export const grindHistory = [
  {
    id: 1,
    grindSetting: 18,
    date: "May 5, 2026",
    description: "Perfect balance, very sweet finish.",
    dose: 18,
    coffeeYield: 36,
    time: 26,
  },

  {
    id: 2,
    grindSetting: 20,
    date: "May 4, 2026",
    description: "A bit watery, need to go bit finer.",
    dose: 18,
    coffeeYield: 35,
    time: 15,
  },
  {
    id: 3,
    grindSetting: 25,
    date: "May 3, 2026",
    description: "Really watery and acidic, need to go a lot finer",
    dose: 18,
    coffeeYield: 38,
    time: 13,
  },
  {
    id: 4,
    grindSetting: 25,
    date: "May 3, 2026",
    description: "Really watery and acidic, need to go a lot finer",
    dose: 18,
    coffeeYield: 36,
    time: 10,
  },
];

export const TasteProfiles = [
  {
    id: "sour",
    label: "Sour / Acidic",
    description: "Sharp, vinegary, or salty notes",
    notes: ["Salty", "Sharp", "Thin/Watery", "Metallic"],
    icon: Droplets,
    sliderLabels: ["Sour", "Sweetly Acidic"],
  },
  {
    id: "balanced",
    label: "Sweet / Balanced",
    description: "Sweet, syrupy and rich",
    icon: CheckCircle2Icon,
    notes: ["Caramel", "Chocolate", "Fruity", "Velvety"],
    sliderLabels: ["OK", "Perfect"],
  },
  {
    id: "bitter",
    label: "Bitter / Harsh",
    description: "Dry, ashy, or burnt flavors",
    icon: Flame,
    notes: ["Ashy", "Dry/Astringent", "Tobacco", "Medicinal"],
    sliderLabels: ["Very Bitter", "Bitter Sweet"],
  },
];
