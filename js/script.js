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