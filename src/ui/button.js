export default function LinkButton(text, dark = false) {
    return `
        <a
          href="#"
          class="
              inline-flex
              mt-10
              font-bold
              underline
              underline-offset-4
              transition
              hover:opacity-70
              ${dark ? "text-white" : "text-[#0A0A0A]"}
          "
        >
            ${text}
        </a>
    `;
  }