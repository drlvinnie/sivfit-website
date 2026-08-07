import storeImage from "../assets/store.png";
import FeatureSection from "./featureSection";

export default function Store() {
  return FeatureSection({
  id: "store",
    label: "SIVFIT Store",
    labelColor: "text-blue-600",

    title: "Everything You Need To Perform",

    body:
      "Shop Premium Gym Apparel, Fitness Accessories, Training Equipment, And Wellness Essentials Carefully Selected To Support Your Health And Fitness Journey.",

    bullets: [
      "Fitness Accessories & Equipment",
      "Premium Gym Apparel",
      "Wellness Essentials",
    ],

    button: "Shop Now",

    image: storeImage,

    imageLeft: true,

    dark: false,
  });
}