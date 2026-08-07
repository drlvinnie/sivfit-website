import "./style.css";

import Hero, { initMobileMenu } from "./components/hero";
import Ecosystem from "./components/ecosystem";
import Testimonials, { initTestimonials } from "./components/testimonials";
import FAQ from "./components/faq";
import StillHaveQuestions from "./components/stillHaveQuestions";
import Founder from "./components/founder";
import RunClub from "./components/runclub";
import Footer from "./components/footer";

document.querySelector("#app").innerHTML = `
    ${Hero()}
    ${Ecosystem()}
    ${Testimonials()}
    ${FAQ()}
    ${StillHaveQuestions()}
    ${Founder()}
    ${RunClub()}
    ${Footer()}
`;

initTestimonials();
initMobileMenu();