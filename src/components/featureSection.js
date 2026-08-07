export default function FeatureSection({
  id,
  label,
  labelColor,
  title,
  body,
  bullets,
  button,
  buttonLink = "#",
  image,
  imageLeft = true,
  dark = false,
}) {
  const imageSection = `
    <div>
      <img
        src="${image}"
        alt="${label}"
        class="w-full rounded-2xl object-cover aspect-[1.18/1]"
      />
    </div>
  `;

  const textSection = `
    <div>

      <p class="${
        labelColor === "green"
          ? "text-lime-400"
          : "text-blue-600"
      } text-sm font-bold uppercase tracking-[0.18em]">
        ${label}
      </p>

      <h2 class="mt-3 text-[42px] lg:text-[56px] font-extrabold ${
        dark ? "text-white" : "text-[#0A0A0A]"
      } leading-tight">
        ${title}
      </h2>

      <p class="mt-5 leading-9 ${
        dark ? "text-gray-400" : "text-gray-500"
      }">
        ${body}
      </p>

      <ul class="mt-6 space-y-4">
        ${bullets
          .map(
            (item) => `
          <li class="flex items-start gap-3 ${
            dark ? "text-gray-300" : "text-gray-600"
          }">
            <span class="mt-2 h-2 w-2 rounded-full bg-current flex-shrink-0"></span>
            <span>${item}</span>
          </li>
        `
          )
          .join("")}
      </ul>

      <a
        href="${buttonLink}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mt-8 font-bold underline underline-offset-4 transition hover:text-blue-600 ${
          dark ? "text-white" : "text-[#0A0A0A]"
        }">

        ${button}

      </a>

    </div>
  `;

  return `
<section
  id="${id}"
  class="${dark ? "bg-[#0A0A0A]" : "bg-white"} py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-10">

    <div class="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

      ${imageLeft ? imageSection : textSection}

      ${imageLeft ? textSection : imageSection}

    </div>

  </div>

</section>
`;
}