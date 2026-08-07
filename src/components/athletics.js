import athleticsImage from "../assets/athletics.jpeg";

export default function Athletics() {
  return `
<section class="bg-black py-20 lg:py-24">

  <div class="max-w-6xl mx-auto px-6">

    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Left Content -->

      <div>

        <p class="text-[#A3E635] uppercase tracking-[0.18em] text-sm font-bold">
          SIVFIT Athletics
        </p>

        <h2 class="mt-5 text-[58px] lg:text-[60px] font-extrabold leading-[1.05] text-white">
          Developing
          <br />
          Champions
        </h2>

        <p class="mt-8 max-w-xl text-[17px] leading-8 text-gray-400">
          We Identify, Train, And Support Ambitious Athletes With Structured
          Performance Programs That Enhance Strength, Endurance, Speed, And
          Overall Athletic Performance—Helping Them Compete Confidently At
          The Highest Levels.
        </p>

        <ul class="mt-8 space-y-4 text-gray-300">

          <li class="flex items-center gap-3">
            <span>•</span>
            <span>Structured Performance Programs</span>
          </li>

          <li class="flex items-center gap-3">
            <span>•</span>
            <span>Strength & Speed Development</span>
          </li>

          <li class="flex items-center gap-3">
            <span>•</span>
            <span>Athlete Progress Tracking</span>
          </li>

        </ul>

        <a
          href="#"
          class="inline-block mt-20 text-white font-semibold underline underline-offset-4 hover:text-blue-400 transition"
        >
          Join The Program
        </a>

      </div>

      <!-- Right Image -->

      <div class="flex justify-end">

        <img
          src="${athleticsImage}"
          alt="SIVFIT Athletics"
          class="w-full max-w-[500px] h-[430px] object-cover rounded-3xl"
        />

      </div>

    </div>

  </div>

</section>
`;
}