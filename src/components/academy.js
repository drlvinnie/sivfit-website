import academyImage from "../assets/academy.png";
import FeatureSection from "./featureSection";

export default function Academy() {
  return FeatureSection({
  id: "academy",
    label: "SIVFIT Academy",
    labelColor: "text-lime-400",

    title: "Learn. Grow. Lead.",

    body:
      "Empowering The Next Generation Of Fitness Professionals Through Practical Education, Certifications, Workshops, And Continuous Professional Development In Health, Exercise, And Wellness.",

    bullets: [
      "Structured Learning Curriculum",
      "Continuous Professional Development",
      "Practical Certifications",
    ],

    button: "Enroll Now",

    image: academyImage,

    imageLeft: false,

    dark: true,
  });
}