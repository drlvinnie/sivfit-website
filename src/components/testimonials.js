export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Sivfit isn't just a gym; it's a data-driven partner in my health journey. The integration of clinical assessments with my daily workouts has changed everything.",
      name: "Kassie",
      role: "Journalist",
    },
    {
      quote:
        "At 57, I didn't think I'd feel strong again after my diabetes diagnosis. My coach built a plan around my pace, and six months in, my blood sugar is more stable than it's been in years.",
      name: "Mrs Grace",
      role: "Civil Servant",
    },
    {
      quote:
        "I've tried a lot of gyms around me, but Sivfit is different. My coach actually built a plan around my goals instead of giving me a generic routine. Three months in, I've seen real changes.",
      name: "Harry E.",
      role: "Physiotherapist",
    },
    {
      quote:
        "Ordered a set of resistance bands and a gym bag. The quality was way better than I expected for the price, and delivery was fast. I'll definitely shop here again.",
      name: "Chukwuebuka G.",
      role: "Biochemist",
    },
  ];

  return `
<section class="py-20 md:py-28 bg-white overflow-hidden">

  <div class="max-w-7xl mx-auto px-6">

    <!-- Heading -->
    <div class="text-center">

      <p class="text-blue-600 text-xs md:text-sm font-semibold uppercase tracking-[0.18em]">
        Testimonials
      </p>

      <h2 class="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
        Trusted Across The Sivfit Community
      </h2>

      <p class="mt-5 text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-7 md:leading-8">
        Real feedback from people managing their health,
        training harder, and reaching their goals with Sivfit.
      </p>

    </div>


    <!-- ===================================================== -->
    <!-- MOBILE TESTIMONIALS                                    -->
    <!-- ===================================================== -->

    <div class="mt-16 md:hidden">

      ${testimonials.map(cardMobile).join("")}

    </div>


    <!-- ===================================================== -->
    <!-- DESKTOP TESTIMONIALS                                   -->
    <!-- ===================================================== -->

    <div
      id="testimonial-slider"
      class="hidden md:flex mt-20 gap-24 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing pb-6"
    >

      ${testimonials.map(cardDesktop).join("")}

    </div>

  </div>

</section>
`;
}


/* ============================================================
   MOBILE CARD
   ============================================================ */

function cardMobile(item) {
  return `
<div class="w-full text-center py-10 border-b border-gray-200 last:border-b-0">

  <!-- Quote -->

  <p class="text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 italic">
    "${item.quote}"
  </p>


  <!-- Name -->

  <h3 class="mt-8 text-2xl font-bold text-gray-900">
    ${item.name}
  </h3>


  <!-- Role -->

  <p class="mt-1 text-sm text-gray-500">
    ${item.role}
  </p>


  <!-- Socials -->

  <div class="mt-5 flex justify-center gap-5 text-xs text-gray-500">

    <a
      href="#"
      class="hover:text-blue-600 transition"
    >
      Twitter(X)
    </a>

    <a
      href="#"
      class="hover:text-blue-600 transition"
    >
      Facebook
    </a>

    <a
      href="#"
      class="hover:text-blue-600 transition"
    >
      Instagram
    </a>

  </div>

</div>
`;
}


/* ============================================================
   DESKTOP CARD
   ============================================================ */

function cardDesktop(item) {
  return `
<div class="snap-center shrink-0 w-[900px] text-center">

  <!-- Quote -->

  <p class="text-2xl leading-10 text-gray-600 italic">
    "${item.quote}"
  </p>


  <!-- Name -->

  <h3 class="mt-10 text-4xl font-bold text-black">
    ${item.name}
  </h3>


  <!-- Role -->

  <p class="mt-2 text-gray-500">
    ${item.role}
  </p>


  <!-- Socials -->

  <div class="mt-5 flex justify-center gap-4 text-sm text-gray-500">

    <a
      href="#"
      class="hover:text-blue-600 transition"
    >
      Twitter(X)
    </a>

    <a
      href="#"
      class="hover:text-blue-600 transition"
    >
      Facebook
    </a>

    <a
      href="#"
      class="hover:text-blue-600 transition"
    >
      Instagram
    </a>

  </div>

</div>
`;
}


/* ============================================================
   DESKTOP DRAG FUNCTIONALITY
   ============================================================ */

export function initTestimonials() {
  const slider = document.getElementById("testimonial-slider");

  if (!slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;


  slider.addEventListener("mousedown", (e) => {
    isDown = true;

    slider.classList.add("cursor-grabbing");

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;
  });


  slider.addEventListener("mouseleave", () => {
    isDown = false;

    slider.classList.remove("cursor-grabbing");
  });


  slider.addEventListener("mouseup", () => {
    isDown = false;

    slider.classList.remove("cursor-grabbing");
  });


  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;
  });
}