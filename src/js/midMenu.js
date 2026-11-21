const menuItems = [
    {
      num: "01.",
      href: "#bjhabibie",
      title: "B.J. Habibie",
      subtitle: "Ketelitian yang Berani Bermimpi",
    },
    {
      num: "02.",
      href: "#alhaitsam",
      title: "Ibn Al-Haitsam",
      subtitle: "Ketajaman yang Menyingkap Cahaya",
    },
    {
      num: "03.",
      href: "#susip",
      title: "Susi Pudjiastuti",
      subtitle: "Keberanian yang Menjaga Laut",
    },
];

const listContainer = document.getElementById("middle-link-menu");

  listContainer.innerHTML = menuItems
    .map(
      (item) => `
        <a href="${item.href}" class="flex flex-row gap-2 text-xs">
          <p class="font-semibold tracking-wide text-gray-400">${item.num}</p>
          <div>
            <p class="font-semibold">${item.title}</p>
            <p class="tracking-wide text-gray-500">${item.subtitle}</p>
          </div>
        </a>
      `
    )
    .join("");