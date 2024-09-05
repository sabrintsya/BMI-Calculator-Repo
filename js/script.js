// Dapatkan referensi ke elemen input dengan ID "weight"
const weight = document.getElementById("weight");

// Dapatkan referensi ke elemen input dengan ID "height"
const height = document.getElementById("height");

// Dapatkan radio button yang dipilih dari grup "gender"
const genderRadio = document.querySelector('input[name="gender"]:checked');

// Dapatkan referensi ke elemen form dengan ID "form"
const form = document.getElementById("form");

// Dapatkan referensi ke elemen dengan class "comment" (area hasil)
const resultArea = document.querySelector(".comment");

// Referensi elemen modal (opsional)
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function calculate() {
    // Periksa apakah semua input terisi
    if (weight.value === "" || height.value === "" || !genderRadio) {
        modal.style.display = "block";
        modalText.innerHTML = `Semua kolom harus diisi!`;
        return; // keluar dari fungsi jika ada input kosong
    }

    countBmi ();
}

function countBmi () {
    // Konversi nilai input ke angka
    let weightValue = Number(weight.value);
    let heightValue = Number(height.value);

    // Hitung BMI
    let bmi = weightValue / (heightValue * heightValue);

    // Tentukan kategori BMI
    let result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = 'Overweight';
    } else if (bmi >= 35) {
        result = 'Obesity';
    }

    // Tampilkan Hasil
    resultArea.style.display ="block";
    document.querySelector(".comment").innerHTML = `Berat badan Anda <span id="status">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Tutup modal ketika tombol tutup (class "close") diklik
span.onclick = function() {
    modal.style.display = "none";
}

// Tutup modal ketika diklik diluar area modal 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}