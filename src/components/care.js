import careImage from "../assets/care.png";
import FeatureSection from "./featureSection";

export default function Care() {
  return FeatureSection({
    id: "care",

    label: "SIVFIT Care",
    labelColor: "text-[#0D6EFD]",

    title: "Exercise As Medicine",

    body:
      "Improve Your Health Through Evidence-Based Exercise Programs Designed By Qualified Professionals. We Help Individuals Manage And Reduce The Risk Of Conditions Such As High Blood Pressure, Diabetes, Obesity, Cardiovascular Disease, And Other Lifestyle-Related Illnesses Through Personalized Exercise And Wellness Coaching.",

    bullets: [
      "Blood Pressure & Diabetes Management",
      "One-On-One Coaching Sessions",
      "Measurable Health Improvements",
    ],

    button: "Book A Consultation",

    buttonLink: "https://wa.me/2348064975912",

    image: careImage,

    imageLeft: true,

    dark: false,
  });
}