const textItem = [
    {
        num: "01",
        title: "Tekuni setiap hitungan",
        subtitle: "agar mimpi punya pijakan di langit."
    },
    {
        num: "02",
        title: "Uji dengan sabar",
        subtitle: "agar cahaya dan nalar menemukan kebenarannya."
    },
    {
        num: "03",
        title: "Berani berdiri di garis depan",
        subtitle: "agar laut dan ruang hidup tetap terlindungi."
    }
]

const listContainter = document.getElementById("textBox");

    listContainter.innerHTML = textItem
        .map(
            (item) => `
                <div class="space-y-4">
                    <hr class="text-white/40">
    
                    <div class="flex flex-row space-y-2 space-x-5">
                        <p class="text-sm text-white/60">${item.num}</p>
    
                        <div class="text-sm">
                            <h1 class="text-white">${item.title}</h1>
    
                            <p class="text-white/70">${item.subtitle}</p>
                        </div>
                    </div>
                </div>
            `
        ).join("");