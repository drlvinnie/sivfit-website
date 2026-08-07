export default function Container(content) {
    return `
      <div class="max-w-[1280px] mx-auto px-6 lg:px-10">
        ${content}
      </div>
    `;
  }