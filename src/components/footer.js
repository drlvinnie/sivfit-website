import logo from "../assets/sivfit logo.jpg";

export default function Footer() {
  return `

<!-- CTA -->

<section class="bg-[#EEF5FF] py-24">

  <div class="max-w-6xl mx-auto px-6 text-center">

    <h2 class="text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
      Your Health. Your Goals. One Ecosystem
    </h2>

    <p class="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
      Stop Guessing. Start Measuring. Join The Elite Community
      Redefining What Is Possible For Human Performance.
    </p>

    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">

      <a
        href="https://wa.me/2348064975912"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">

        Book Your Assessment

      </a>

      <a
        href="https://wa.me/2348064975912"
        target="_blank"
        rel="noopener noreferrer"
        class="border border-gray-300 bg-white px-8 py-3 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition">

        Get Started

      </a>

    </div>

  </div>

</section>


<!-- Footer -->

<footer class="bg-white">

  <div class="max-w-6xl mx-auto px-6 py-20">

    <div class="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-14">

      <!-- Logo -->

      <div>

        <img
          src="${logo}"
          alt="Sivfit"
          class="w-40 mb-6"
        />

        <p class="text-gray-600 leading-7 max-w-sm">
          Precision Medical-Grade Fitness For Nigeria's High-Performers.
          Unlocking Health Through Science, Technology, And Expert Care.
        </p>

      </div>


      <!-- Services -->

      <div>

        <h4 class="font-semibold text-gray-900 mb-5">
          Services
        </h4>

        <ul class="space-y-3">

          <li>
            <a
              href="#care"
              class="text-gray-600 hover:text-blue-600 transition">
              Sivfit Care
            </a>
          </li>

          <li>
            <a
              href="#athletics"
              class="text-gray-600 hover:text-blue-600 transition">
              Sivfit Athletics
            </a>
          </li>

          <li>
            <a
              href="#gym"
              class="text-gray-600 hover:text-blue-600 transition">
              Sivfit Gym
            </a>
          </li>

          <li>
            <a
              href="#academy"
              class="text-gray-600 hover:text-blue-600 transition">
              Sivfit Academy
            </a>
          </li>

          <li>
            <a
              href="#store"
              class="text-gray-600 hover:text-blue-600 transition">
              Sivfit Store
            </a>
          </li>

          <li>
            <a
              href="#runclub"
              class="text-gray-600 hover:text-blue-600 transition">
              Run Club
              <span class="ml-2 text-green-500 text-xs font-semibold">
                New
              </span>
            </a>
          </li>

        </ul>

      </div>


      <!-- Socials -->

      <div>

        <h4 class="font-semibold text-gray-900 mb-5">
          Socials
        </h4>

        <ul class="space-y-3">

          <li>
            <a
              href="https://www.linkedin.com/in/odo-kelvin-maduabuchi-36a887371"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-blue-600 transition">

              LinkedIn

            </a>
          </li>

          <li>
            <a
              href="https://web.facebook.com/odokelvinmaduabuchi?rdid=MGDqET3nYa3JHNHB&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1CCzXzotjX%2F%3F_rdc%3D1%26_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-blue-600 transition">

              Facebook

            </a>
          </li>

          <li>
            <a
              href="https://x.com/TTalkingkelly"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-blue-600 transition">

              Twitter (X)

            </a>
          </li>

          <li>
            <a
              href="https://www.tiktok.com/@sivfithq"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-blue-600 transition">

              TikTok

            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/sivfitltd?igsh=dWY5cGsxbmNrcTRh"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-blue-600 transition">

              Instagram

            </a>
          </li>

        </ul>

      </div>


      <!-- Contact -->

      <div>

        <h4 class="font-semibold text-gray-900 mb-5">
          Contact
        </h4>

        <ul class="space-y-3">

          <li>
            <a
              href="mailto:sivfitltd@gmail.com"
              class="text-gray-600 hover:text-blue-600 transition">

              sivfitltd@gmail.com

            </a>
          </li>

          <li>
            <a
              href="tel:+2348064975912"
              class="text-gray-600 hover:text-blue-600 transition">

              +234 806 497 5912

            </a>
          </li>

        </ul>

      </div>

    </div>


    <!-- Copyright -->

    <div class="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">

      © 2026 SIVFIT. All Rights Reserved.

    </div>

  </div>

</footer>

`;
}