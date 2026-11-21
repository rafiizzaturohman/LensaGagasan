const tocItems = [
      { num: "01", label: "B.J. Habibie", href: "#bjhabibie" },
      { num: "02", label: "Ibn Al-Haitsam", href: "#alhaitsam" },
      { num: "03", label: "Susi Pudjiastuti", href: "#susip" },
];

const tocContainer = document.getElementById("toc-list");

  tocContainer.innerHTML = tocItems
    .map(
      (item) => `
        <a href="${item.href}" class="group flex items-baseline gap-3 text-xs transition-colors">
          <span class="font-medium text-neutral-400 group-hover:text-neutral-700">${item.num}</span>
          <span class="text-neutral-500 group-hover:text-neutral-900">${item.label}</span>
        </a>
      `
    )
    .join("");