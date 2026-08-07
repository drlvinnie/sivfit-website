import clubImage from "../assets/club.png";

export default function RunClub() {
  return `
<section id="runclub" class="bg-white py-24">

  <div class="max-w-6xl mx-auto px-6">

    <!-- Heading -->

    <div class="text-center mb-16">

      <p class="text-blue-600 text-sm font-semibold uppercase tracking-[0.18em]">
        Events
      </p>

      <h2 class="mt-3 text-5xl font-extrabold text-gray-900">
        Sivfit Run Club
      </h2>

      <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-8">
        Lace Up And Run With The Sivfit Community — All Fitness Levels Welcome.
      </p>

    </div>

    <!-- Content -->

    <div class="grid lg:grid-cols-2 gap-20 items-center">

      <!-- Left -->

      <div class="max-w-md">

        <p class="text-2xl leading-8 text-gray-700">

          Join Us For Our Next Community Run.
          Connect With Other Members,
          Build Endurance, And Be Part Of A Growing
          Movement Toward Better Health —
          No Experience Necessary.

        </p>

        <a
          href="https://chat.whatsapp.com/DeYlNhhJPBYECEGynPEs7s?s=cl&p=a&ilr=0&amv=2"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex mt-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition">

          Join The WhatsApp Group

        </a>

      </div>

      <!-- Right -->

      <div class="flex justify-center lg:justify-end">

        <img
          src="${clubImage}"
          alt="Sivfit Run Club"
          class="w-full max-w-[420px] rounded-3xl object-cover"
        />

      </div>

    </div>

  </div>

</section>
`;
}