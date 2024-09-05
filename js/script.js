// Dapatkan referensi ke elemen input dengan ID "weight"
const weight = document.getElementById("weight");

// Dapatkan referensi ke elemen input dengan ID "height"
const height = document.getElementById("height");

// Dapatkan referensi ke elemen input dengan ID "Age"
const age = document.getElementById("age");

// Dapatkan refernsi ke elemen input dengan ID "gender"
const male = document.getElementById("m");
const female = document.getElementById("f");

// Dapatkan referensi ke elemen form dengan ID "form"
const form = document.getElementById("form");

// Dapatkan referensi ke elemen dengan class "comment" (area hasil)
const resultArea = document.querySelector(".comment");

// Referensi elemen modal (opsional)
const modalContent = document.querySelector(".modal-content");
const modalText = document.querySelector("#modalText");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function calculate() {
    // Periksa apakah semua input terisi
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
        modal.style.display = "block";
        modalText.innerHTML = `All fields are required!`;
      } else {
        countBmi();
      }  
}

function countBmi () {
    let p = [age.value, height.value, weight.value];
    
if(male.checked){
  p.push("male");
} else if(female.checked){
  p.push("female");
}

    // Hitung BMI
    let bmi = Number(p[2]) / ((Number(p[1]) / 100) * (Number(p[1]) / 100));

    // Tentukan kategori BMI
    let result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Normal';
    } else if (25 <= bmi && bmi <= 29.9) {
        result = 'Overweight';
    } else if 
    (35 <= bmi) {
        result = 'Obesity';
    }

    // Tampilkan Hasil
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="status">${result}</span>`;
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