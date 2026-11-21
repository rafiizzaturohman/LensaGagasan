const tokohData = [
    {
      id: "bjhabibie",
      number: "01",
      category: "Teknologi & Ketekunan",
      name: "B.J. Habibie:",
      subtitle: "Ketelitian yang Berani Bermimpi",
      subtitleClass: "text-[2.5rem] text-taupe-600",
      image: {
        src: "./img/tokoh/BJ Habibie.jpg",
        alt: "B.J. Habibie",
        imgClass: "w-max",
        label: "GAMBAR 01",
        caption: "Di balik tatapan yang tenang, tersimpan hitungan yang berani menembus batas.",
      },
      paragraphs: [
        "Bagi Bacharuddin Jusuf Habibie, mimpi bukan lawan dari ketelitian. Keduanya justru saling membutuhkan. Ia melihat pesawat bukan hanya sebagai mesin, melainkan sebagai bukti bahwa sebuah bangsa dapat menolak batas yang dibuat orang lain.",
        "Tahun-tahunnya di dunia kedirgantaraan dibangun dari kesabaran yang nyaris tak terlihat: membaca retakan mikroskopis, menguji perhitungan berulang kali, lalu menjelaskan gagasan rumit sampai orang lain ikut percaya. Ambisi yang besar ditopang oleh kebiasaan yang sangat kecil.",
      ],
      quote: {
        text: '"Tanpa cinta, kecerdasan itu berbahaya. Dan tanpa kecerdasan, cinta saja tidak cukup."',
        author: "— B.J. Habibie",
      },
      closingParagraph:
        "Dari Habibie kita belajar bahwa optimisme bukanlah menutup mata dari kesulitan. Optimisme adalah memandang masalah dengan cukup dekat, lalu bekerja sampai ia memiliki bentuk yang bisa dipecahkan.",
      keyTakeaway: {
        title: "PELAJARI KUNCI",
        body: "Mimpi yang paling berani membutuhkan disiplin yang paling tenang. Pecah visi besar menjadi pekerjaan kecil yang dapat diuji hari ini.",
      },
    },
    {
      id: "alhaitsam",
      number: "02",
      category: "Optik & Cahaya",
      name: "Ibn Al-Haitsam (Alhazen):",
      subtitle: "Ketajaman yang Menyingkap Cahaya",
      subtitleClass: "text-[2.3rem] text-taupe-600",
      image: {
        src: "./img/tokoh/Ibn_al-Haytham.png",
        alt: "Ibn Al-Haitsam (Alhazen)",
        imgClass: "w-160",
        label: "GAMBAR 02",
        caption: "Ketajaman pengamatan selalu bermula dari keberanian menguji apa yang selama ini diterima begitu saja.",
      },
      paragraphs: [
        "Bagi Ibn Al-Haitsam, melihat bukan sekadar peristiwa pasif saat mata terbuka. Penglihatan adalah proses aktif ketika cahaya menembus ruang, memantul, dan diuji oleh nalar. Ia memandang fenomena cahaya bukan sebagai teka-teki gaib yang tak tersentuh, melainkan sebagai sesuatu yang bisa diamati, diukur, dan dibuktikan.",
        "Tahun-tahun pencariannya di bidang optik dibangun dari ketekunan di ruang gelap: melewatkan seberkas cahaya melalui celah kecil pada camera obscura, memperhatikan bayangan yang terbalik, lalu membandingkan hasil percobaan dengan struktur cara kerja mata manusia. Gagasan besar lahir dari eksperimen sabar yang dilakukan berulang kali.",
      ],
      quote: {
        text: '"Kebenaran dicari bukan demi membela pendapat sendiri, melainkan demi menguji setiap dugaan dengan pengamatan dan bukti."',
        author: "— Disesuaikan dari semangat metode ilmiah Ibn Al-Haitsam",
      },
      closingParagraph:
        "Dari Ibn Al-Haitsam kita belajar bahwa ketajaman berpikir tidak lahir dari asumsi tergesa. Ketajaman tumbuh ketika seseorang berani meragukan dugaan awal, mengamati dengan jujur, dan menyusun langkah pengujian yang runtut.",
      keyTakeaway: {
        title: "PELAJARI KUNCI",
        body: "Ketajaman nalar bermula dari pengamatan yang sabar. Uji setiap dugaan lewat langkah kecil yang jelas sebelum menarik kesimpulan.",
      },
    },
    {
      id: "susip",
      number: "03",
      category: "Kelautan & Ketegasan", // Disesuaikan dari teks aslinya; ganti kembali ke "Optik & Cahaya" jika memang disengaja
      name: "Susi Pudjiastuti:",
      subtitle: "Keberanian yang Menjaga Laut",
      subtitleClass: "text-[2.5rem] text-taupe-600",
      image: {
        src: "./img/tokoh/SUSI-PUDJIASTUTI.jpg",
        alt: "Susi Pudjiastuti",
        imgClass: "w-160",
        label: "GAMBAR 03",
        caption: "Keberanian sejati sering tampak lugas, tanpa ragu berdiri di garis depan.",
      },
      paragraphs: [
        "Bagi Susi Pudjiastuti, menjaga laut bukan sekadar urusan batas wilayah di peta. Laut adalah ruang hidup yang menuntut keberanian nyata ketika aturan mulai diabaikan. Sebagai mantan menteri kelautan Indonesia, ia memandang perbatasan laut bukan sebagai garis pasif, melainkan wilayah kedaulatan yang harus dijaga dengan sikap lugas dan konsisten.",
        "Perjalanan dan kebijakannya di sektor kelautan dibangun dari keberanian mengambil keputusan yang sering kali tidak populer: menindak tegas pelanggaran di perbatasan laut, melindungi nelayan kecil, serta memperjuangkan kelestarian sumber daya bahari. Prinsip yang kuat membuat sikap tegasnya berdiri di atas alasan yang jelas dan terukur.",
      ],
      quote: {
        text: '"Laut adalah masa depan kita. Jika kita tidak berani menjaganya hari ini, kita sedang menyerahkan ruang hidup generasi berikutnya."',
        author: "— Disesuaikan dari semangat ketegasan Susi Pudjiastuti menjaga kelautan Indonesia",
      },
      closingParagraph:
        "Dari Susi Pudjiastuti kita belajar bahwa keberanian tidak selalu hadir dengan suara keras tanpa arah. Keberanian yang berdampak lahir dari kejujuran prinsip, kesiapan menanggung risiko, dan kesediaan bertindak nyata demi kepentingan yang lebih luas.",
      keyTakeaway: {
        title: "PELAJARI KUNCI",
        body: "Keberanian yang menjaga laut tumbuh dari prinsip yang tidak mudah goyah. Sikap tegas menjadi bermakna ketika diarahkan untuk melindungi ruang hidup bersama.",
      },
    },
  ];

  const tokohContainer = document.getElementById("tokoh-sections");

  tokohContainer.innerHTML = tokohData
    .map((item) => {
      const paragraphsHtml = item.paragraphs
        .map((text) => `<p>${text}</p>`)
        .join("");

        return `
        <section id="${item.id}" class="space-y-5">
          <div class="flex items-center gap-3.5">
            <!-- Nomor Bagian -->
            <span class="font-mono text-xs font-medium tracking-wider text-[#2E2A85]">
              ${item.number}
            </span>

            <!-- Garis Pemisah Horizontal Tipis -->
            <span aria-hidden="true" class="h-px w-8 bg-neutral-300"></span>

            <!-- Label Kategori Uppercase -->
            <h2 class="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              ${item.category}
            </h2>
          </div>

          <div class="space-y-8">
            <div class="space-y-10">
              <div>
                <h1 class="text-4xl font-bold">${item.name}</h1>
                <h2 class="${item.subtitleClass}">${item.subtitle}</h2>
              </div>

              <div class="space-y-2">
                <img src="${item.image.src}" alt="${item.image.alt}" class="${item.image.imgClass}">

                <p class="font-sans text-xs text-gray-600">
                  <span class="font-semibold uppercase tracking-wide text-black">${item.image.label}</span>
                  &ndash; ${item.image.caption}
                </p>
              </div>
            </div>

            <div class="space-y-6 text-lg">
              ${paragraphsHtml}

              <div class="space-y-3 border-l-2 border-blue-900 bg-gray-100 px-6 py-2 text-xl tracking-wide">
                <p>${item.quote.text}</p>
                <p class="text-sm text-gray-600">${item.quote.author}</p>
              </div>

              <p>${item.closingParagraph}</p>

              <div class="flex flex-row items-center space-x-4 space-y-3 border-l-2 border-blue-900 bg-gray-100 px-6 py-2 text-xs">
                <i class="fa-solid fa-star text-blue-950"></i>

                <div class="space-y-2 font-sans">
                  <p class="font-semibold tracking-widest">${item.keyTakeaway.title}</p>
                  <p class="tracking-wide">${item.keyTakeaway.body}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    })
    .join("");