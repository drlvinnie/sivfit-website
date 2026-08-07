import gymImage from "../assets/gym.png";
import FeatureSection from "./featureSection";

export default function Gym() {
  return FeatureSection({
  id: "gym",
    label: "SIVFIT Gym",
    labelColor: "text-blue-600",

    title: "Train Smarter. Achieve More.",

    body:
      "Experience A Modern Fitness Environment Equipped With Quality Facilities And Guided By Professional Fitness Coaches. Every Workout Program Is Tailored To Your Goals, Whether You're Looking To Lose Weight, Build Muscle, Improve Fitness, Or Enhance Overall Health.",

    bullets: [
      "Modern Training Facilities",
      "Certified Fitness Coach",
      "Goal Based Workout Plan",
    ],

    button: "Get A Membership",

    image: gymImage,

    imageLeft: true,

    dark: false,
  });
}