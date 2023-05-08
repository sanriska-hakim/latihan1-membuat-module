// note : demi keamanan data saya mengggunakan fake data
const biodata = {
  name: "Sanriska Hakim",
  placeOfBirth: "paris",
  dateOfBirth: "25 januari 2000",
  address: "jl. melati no.39",
};

// Fungsi untuk menampilkan nama
function getName() {
  return biodata.name;
}

// Fungsi untuk menampilkan tempat lahir
function getPlaceOfBirth() {
  return biodata.placeOfBirth;
}

// Fungsi untuk menampilkan tanggal lahir
function getDateOfBirth() {
  return biodata.dateOfBirth;
}

// Fungsi untuk menampilkan alamat
function getAddress() {
  return biodata.address;
}

module.exports = {
  getName,
  getPlaceOfBirth,
  getDateOfBirth,
  getAddress,
};
