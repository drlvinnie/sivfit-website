import founderImage from "../assets/founder.png";

export default function Founder() {
  return `
<section id="founder" class="bg-white">

    <!-- Top Divider -->

    <div class="border-t border-gray-200"></div>

    <div class="max-w-6xl mx-auto px-6 py-24">

        <!-- Heading -->

        <div class="text-center">

            <p class="text-blue-600 text-sm font-semibold">
                About
            </p>

            <h2 class="mt-2 text-4xl lg:text-5xl font-bold text-gray-900">
                Meet The Founder
            </h2>

            <p class="mt-3 text-gray-500">
                The Person Behind Sivfit's Evidence-Based Approach To Health.
            </p>

        </div>

        <!-- Content -->

        <div class="mt-16 grid lg:grid-cols-2 gap-14 items-start">

            <!-- Image -->

            <div class="relative">

                <img
                    src="${founderImage}"
                    alt="Founder"
                    class="rounded-2xl w-full object-cover"
                />

                <div
                    class="absolute top-4 left-4 bg-white rounded-xl shadow px-4 py-2">

                    <p class="text-[11px] font-semibold text-gray-600">
                        CEO & Founder
                    </p>

                </div>

            </div>

            <!-- Text -->

            <div>

                <h3 class="text-5xl font-bold text-gray-900">
                    Odo Kelvin
                </h3>

                <p class="mt-6 text-gray-600 leading-7">

                    Odo Kelvin Maduabuchi (Odo K.M) is a Human Physiologist,
                    Fitness Entrepreneur and a Fitness Coach with over five years
                    of experience in the Health and Wellness Industry.

                    Driven by a passion for preventive healthcare and human
                    performance, he is committed to helping individuals improve
                    their health, manage lifestyle-related conditions and achieve
                    sustainable wellness through evidence-based exercise and
                    lifestyle interventions.

                </p>

                <!-- Social Icons -->

                <div class="flex gap-4 mt-8">

                    <!-- LinkedIn -->

                    <a href="https://www.linkedin.com/in/odo-kelvin-maduabuchi-36a887371"
                        target="_blank"
                        class="text-gray-700 hover:text-blue-600 transition">

                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24">

                            <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.87v1.91h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58V22h-3v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22h-3V8z"/>

                        </svg>

                    </a>

                    <!-- Instagram -->

                    <a href="https://www.instagram.com/talkingkellytvshow?igsh=MWI5bWx1c2h5N2oyZA%3D%3D"
                        target="_blank"
                        class="text-gray-700 hover:text-pink-600 transition">

                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24">

                            <rect x="2" y="2" width="20" height="20" rx="5"/>

                            <circle cx="12" cy="12" r="4"/>

                            <circle cx="18" cy="6" r="1"/>

                        </svg>

                    </a>

                    <!-- Facebook -->

                    <a href="https://web.facebook.com/odokelvinmaduabuchi"
                        target="_blank"
                        class="text-gray-700 hover:text-blue-700 transition">

                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24">

                            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.79-3.89 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.57V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0 0 22 12"/>

                        </svg>

                    </a>

                    <!-- TikTok -->

                    <a href="https://www.tiktok.com/@sivfithq"
                        target="_blank"
                        class="text-gray-700 hover:text-black transition">

                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24">

                            <path d="M19 8.3a6.5 6.5 0 0 1-3.9-1.3V15a5 5 0 1 1-5-5c.2 0 .4 0 .6.03v2.3a2.7 2.7 0 1 0 2.7 2.7V2h2.3a4.2 4.2 0 0 0 3.3 3.9V8.3z"/>

                        </svg>

                    </a>

                    <!-- X -->

                    <a href="https://x.com/TTalkingkelly"
                        target="_blank"
                        class="text-gray-700 hover:text-black transition">

                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24">

                            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.5 22H3.4l7.2-8.2L1 2h6.3l4.3 5.8L18.9 2z"/>

                        </svg>

                    </a>

                </div>

                <!-- Experience -->

                <div class="mt-10">

                    <h4 class="text-blue-600 font-bold mb-4">
                        Experience
                    </h4>

                    <ul class="list-disc pl-5 text-gray-700 space-y-2">

                        <li>Founder And CEO, Sivfit Ltd</li>

                        <li>Fitness Coach At TNH Gym (2024–2025)</li>

                        <li>Founder, Health Watch Podcast On Radio</li>

                    </ul>

                </div>

            </div>

        </div>

    </div>

    <!-- Bottom Divider -->

    <div class="border-b border-gray-200"></div>

</section>
`;
}