export default function FAQ() {
  return `
<section class="bg-white border-t border-gray-100 py-20">

  <div class="max-w-3xl mx-auto px-6">

    <div class="text-center">

      <p class="text-[#2563EB] text-xs font-semibold uppercase tracking-[0.18em]">
        FAQ
      </p>

      <h2 class="mt-2 text-[42px] font-bold text-[#2B2B2B] leading-tight">
        Got Questions?
      </h2>

      <p class="mt-3 text-[14px] text-gray-500">
        Everything You Need To Know Before Getting Started With Sivfit.
      </p>

    </div>

    <div class="mt-10">

      ${faqItem(
        "What Is Sivfit?",
        "Sivfit is a health and fitness ecosystem offering evidence-based exercise coaching, preventive healthcare, athlete development, professional education, and fitness retail — all under one brand."
      )}

      ${faqItem(
        "How Do I Get Started?",
        "Book a consultation for Care or Athletics, sign up for a Gym membership, or enroll directly into the Academy. Each service has its own quick start process."
      )}

      ${faqItem(
        "Do I Need To Choose Just One Sivfit Service, Or Can I Use More Than One?",
        "Many members combine multiple Sivfit services depending on their goals."
      )}

      ${faqItem(
        "Is Sivfit Only For People Who Are Already Fit Or Athletic?",
        "No. Sivfit supports complete beginners, people managing health conditions, and experienced athletes."
      )}

      ${faqItem(
        "How Does Sivfit Care Work?",
        "You begin with an assessment, after which a personalized evidence-based exercise and wellness plan is created."
      )}

      ${faqItem(
        "Can Sivfit Care Help Manage An Existing Health Condition?",
        "Yes. Our programs are designed to support people living with hypertension, diabetes, obesity and other chronic conditions."
      )}

    </div>

  </div>

</section>
`;
}

function faqItem(question, answer) {
  return `
<details class="group border-b border-gray-200">

  <summary class="list-none cursor-pointer flex justify-between items-center py-6">

    <span class="font-semibold text-[18px] text-[#2B2B2B] leading-7 pr-8">
      ${question}
    </span>

    <span class="relative w-5 h-5 flex-shrink-0">

      <span class="absolute inset-0 rounded-full border border-[#2563EB]"></span>

      <span
        class="absolute left-1/2 top-1/2 w-[10px] h-[1.5px] bg-[#2563EB] -translate-x-1/2 -translate-y-1/2">
      </span>

      <span
        class="absolute left-1/2 top-1/2 h-[10px] w-[1.5px] bg-[#2563EB] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-open:rotate-45 group-open:scale-y-0">
      </span>

    </span>

  </summary>

  <div class="pb-6">

    <p class="text-[15px] leading-8 text-gray-500 pr-10">
      ${answer}
    </p>

  </div>

</details>
`;
}