import careImage from "../assets/care.png";
import athleticsImage from "../assets/athletics.jpeg";
import gymImage from "../assets/gym.png";
import academyImage from "../assets/academy.png";
import storeImage from "../assets/store.png";

import FeatureSection from "./featureSection";

export default function Ecosystem() {
  return `

<section
  id="ecosystem"
  class="pt-20 pb-8 text-center">
    <p class="text-blue-600 uppercase tracking-[0.25em] text-xs font-semibold">
        WHAT WE OFFER
    </p>

    <h2 class="mt-4 text-4xl font-bold">
        One Ecosystem. Five Ways To Reach Your Goals.
    </h2>

    <p class="mt-5 text-gray-500 max-w-2xl mx-auto">
        Wherever stage you're at, Sivfit meets you there — from managing
        a health condition to chasing a championship.
    </p>

</section>

${FeatureSection({
    id: "care",
    label: "SIVFIT Care",
    labelColor: "blue",

    title: "Exercise As Medicine",

    body:
      "Improve your health through evidence-based exercise programmes designed by qualified professionals. We help individuals manage and reduce the risk of conditions such as high blood pressure, diabetes, obesity, cardiovascular diesease, and other lifestyle-related illnesses through personalized exercise and wellness coaching.",

    bullets: [
      "Personal Coaching Sessions",
      "Measurable Health Improvements",
    ],

    button: "Book A Consultation",

    buttonLink: "https://wa.me/2348064975912",

    image: careImage,

    imageLeft: true,

    dark: false,
})}

${FeatureSection({
    id: "athletics",
    label: "SIVFIT Athletics",
    labelColor: "green",

    title: "Developing Champions",

    body:
      "We Identify, Train, And Support Ambitious Athletes With Structured Performance Programs That Enhance Strength, Endurance, Speed, And Overall Athletic Performance—Helping Them Compete Confidently At The Highest Levels.",

    bullets: [
      "Strength & Speed Development",
      "Athlete Progress Tracking",
      "Career Management",
    ],

    button: "Join The Program",

    buttonLink: "https://wa.me/2348064975912",

    image: athleticsImage,

    imageLeft: false,

    dark: true,
})}

${FeatureSection({
    id: "gym",
    label: "SIVFIT Gym",
    labelColor: "blue",

    title: "Train Smarter. Achieve More.",

    body:
      "Experience a modern fitness environment equipped with quality facilities and guided by professional coaches. Every workout programme is tailored to your goals.",

    bullets: [
      "Modern Training Facilities",
      "Certified Fitness Coaches",
      "Goal-Based Workout Plans",
    ],

    button: "Get A Membership",

    buttonLink: "https://wa.me/2348064975912",

    image: gymImage,

    imageLeft: true,

    dark: false,
})}

${FeatureSection({
    id: "academy",
    label: "SIVFIT Academy",
    labelColor: "green",

    title: "Learn. Grow. Lead.",

    body:
      "Empowering the next generation of fitness professionals through practical education, certifications, workshops and continuous professional development.",

    bullets: [
      "Structured Learning Curriculum",
      "Continuous Professional Development",
      "Practical Certifications",
    ],

    button: "Enroll Now",

    buttonLink: "https://wa.me/2348064975912",

    image: academyImage,

    imageLeft: false,

    dark: true,
})}

${FeatureSection({
    id: "store",
    label: "SIVFIT Store",
    labelColor: "blue",

    title: "Everything You Need To Perform.",

    body:
      "Shop premium gym apparel, fitness accessories, training equipment and wellness essentials carefully selected to support your health and fitness journey.",

    bullets: [
      "Fitness Accessories & Equipment",
      "Premium Gym Apparel",
      "Wellness Essentials",
    ],

    button: "Shop Now",

    buttonLink: "https://wa.me/2348064975912",

    image: storeImage,

    imageLeft: true,

    dark: false,
})}

`;
}