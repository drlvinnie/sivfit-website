import heroImage from "../assets/hero.PNG";
import logo from "../assets/sivfit logo.jpg";

export default function Hero() {
  return `
<section id="hero" class="bg-white pt-16">

  <!-- ================= NAVBAR ================= -->

  <header class="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">

    <div class="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

      <!-- Logo -->

      <a href="#hero" class="flex items-center">
        <img
          src="${logo}"
          alt="Sivfit"
          class="h-9 w-auto"
        />
      </a>

      <!-- Desktop Navigation -->

      <nav class="hidden lg:flex items-center gap-8 text-[14px] text-gray-700">

        <a href="#hero" class="hover:text-blue-600 transition">
          Home
        </a>

        <a href="#care" class="hover:text-blue-600 transition">
          Care
        </a>

        <a href="#athletics" class="hover:text-blue-600 transition">
          Athletics
        </a>

        <a href="#gym" class="hover:text-blue-600 transition">
          Gym
        </a>

        <a href="#academy" class="hover:text-blue-600 transition">
          Academy
        </a>

        <a href="#store" class="hover:text-blue-600 transition">
          Store
        </a>

      </nav>

      <!-- Desktop Button -->

      <a
        href="#contact"
        class="hidden lg:flex items-center justify-center h-10 px-6 rounded-lg bg-gray-100 text-[13px] font-medium text-gray-700 hover:bg-gray-200 transition">

        Get Started

      </a>

      <!-- Mobile Menu Button -->

      <button
        id="menu-btn"
        type="button"
        aria-label="Open menu"
        class="lg:hidden text-2xl text-gray-800">

        ☰

      </button>

    </div>

    <!-- ================= MOBILE MENU ================= -->

    <div
      id="mobile-menu"
      class="hidden lg:hidden absolute top-full left-0 right-0 border-t border-gray-200 bg-white shadow-md">

      <nav class="flex flex-col">

        <a href="#hero" class="px-6 py-4 border-b border-gray-200 hover:bg-gray-50">
          Home
        </a>

        <a href="#care" class="px-6 py-4 border-b border-gray-200 hover:bg-gray-50">
          Care
        </a>

        <a href="#athletics" class="px-6 py-4 border-b border-gray-200 hover:bg-gray-50">
          Athletics
        </a>

        <a href="#gym" class="px-6 py-4 border-b border-gray-200 hover:bg-gray-50">
          Gym
        </a>

        <a href="#academy" class="px-6 py-4 border-b border-gray-200 hover:bg-gray-50">
          Academy
        </a>

        <a href="#store" class="px-6 py-4 hover:bg-gray-50">
          Store
        </a>

      </nav>

    </div>

  </header>


  <!-- ================= HERO ================= -->

  <div class="max-w-7xl mx-auto px-6 py-14 lg:py-16">

    <div class="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

      <!-- LEFT -->

      <div>

        <h1 class="font-extrabold text-[54px] lg:text-[72px] leading-[0.92] tracking-[-2px] text-[#111827]">

          REDEFINING

          <span class="block text-[#2563EB] italic">
            HEALTH
          </span>

          AND

          <span class="block">
            FITNESS IN NIGERIA
          </span>

        </h1>

        <p class="mt-8 max-w-[560px] text-[18px] leading-[34px] text-gray-600">

          A Fitness Ecosystem Delivering Result-Driven Fitness Coaching,
          Preventive Healthcare, Athlete Development And Digital Health
          Solutions For Individuals, Businesses And Communities.

        </p>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">

          <a
            href="#ecosystem"
            class="bg-[#0D6EFD] hover:bg-blue-700 transition text-white font-semibold px-8 py-4 rounded-lg text-center">

            Explore The Ecosystem

          </a>

          <a
            href="#contact"
            class="bg-white border border-gray-300 hover:bg-gray-100 transition text-gray-900 font-semibold px-8 py-4 rounded-lg text-center">

            Get Started

          </a>

        </div>

      </div>


      <!-- RIGHT -->

      <div>

        <img
          src="${heroImage}"
          alt="Sivfit Hero"
          class="w-full h-full max-h-[720px] object-cover rounded-xl"
        />

      </div>

    </div>

  </div>


  <!-- ================= MISSION ================= -->

  <section class="border-y border-gray-200 py-10">

    <div class="max-w-4xl mx-auto px-6 text-center">

      <h2 class="text-4xl font-bold text-gray-900">
        Mission Statement
      </h2>

      <p class="mt-6 text-[18px] leading-[34px] text-gray-600">

        At Sivfit, our mission is to bridge the gap between preventive healthcare and
        human performance by delivering evidence-based, results-driven
        wellness solutions that improve the health, fitness and quality of
        life of our clients. We are committed to empowering athletes to reach their highest
        level of performance through expert coaching, scientific training
        and personalized support.

      </p>

    </div>

  </section>

</section>
`;
}


export function initMobileMenu() {

  const button = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!button || !menu) return;


  button.addEventListener("click", () => {

    menu.classList.toggle("hidden");

  });


  menu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      menu.classList.add("hidden");

    });

  });

}