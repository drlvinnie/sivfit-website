export function Eyebrow(text, color = "text-blue-600") {
    return `
      <p class="${color} text-sm font-bold uppercase tracking-[0.18em]">
        ${text}
      </p>
    `;
  }
  
  export function SectionTitle(text, dark = false) {
    return `
      <h2 class="
        mt-4
        text-4xl
        md:text-5xl
        font-extrabold
        leading-tight
        ${dark ? "text-white" : "text-[#0A0A0A]"}
      ">
        ${text}
      </h2>
    `;
  }