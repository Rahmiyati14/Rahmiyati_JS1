var nilai = 70;

if (nilai >= 85) {
    console.log("Nilai Kamu A");
} else if (nilai >= 80) {
    console.log("Nilai Kamu B");
} else if (nilai >= 60) {
    console.log("Nilai Kamu C");
} else {
    console.log("Nilai Kamu D");
}

var hari = "Selasa";
var kegiatan;

switch (hari) {
    case "Senin":
        kegiatan = "Pergi ke London";
        break;
    case "Selasa":
        kegiatan = "Main Golf";
        break;
    case "Rabu":
        kegiatan = "Meeting dengan klien";
        break;
    default:
        kegiatan = "Istirahat";
}

console.log("Hari ini:", hari);
console.log("Kegiatan hari ini:", kegiatan);


for (var i = 3; i <= 12; i++) {
    console.log("Iterasi ke-" + i);
}


var angka = 2;

while (angka <= 8) {
    console.log("Angka: " + angka);
    angka++;
}


var x = 4;

do {
    console.log("Nilai x: " + x);
    x++;
} while (x <= 16);


function tambahkan(a, b) {
    return a + b;
}

var hasil = tambahkan(15, 5);
console.log("Hasil penambahan:", hasil);
