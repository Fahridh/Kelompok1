// PSUDOCODE BEGIN
// Deklarasikan jumlah jawaban benar dan salah
let correct_answer = 0;
let wrong_answer = 0;

// Deklarasikan user
let user = {
  name: "Dummy",
  answers: [],
};

// Deklarasikan pertanyaan kuis
let questions = [
  {
    soal: "Siapakah Presiden Pertama Indonesia ?",
    choice: {
      a: "Soekarno",
      b: "Soeharto",
      c: "Megawati",
      d: "BJ Habibie",
    },
    correct_answer: "a",
  },
  {
    soal: "Apakah Ibukota Indonesia ?",
    choice: {
      a: "Surabaya",
      b: "Jakarta",
      c: "Jogja",
      d: "Depok",
    },
    correct_answer: "b",
  },
  {
    soal: "Siapa presiden indonesia saat ini ?",
    choice: {
      a: "Jokowidodo",
      b: "Soekarno",
      c: "Susilo Bambang Yudhoyono",
      d: "Soeharto",
    },
    correct_answer: "a",
  },
  {
    soal: "Siapa Mentri Pertanian Indonesia saat ini",
    choice: {
      a: "Prabowo",
      b: "Megawati",
      c: "Amran Sulaiman",
      d: "Mahfud MD",
    },
    correct_answer: "c",
  },
  {
    soal: "Berapa jumlah provinsi di Indonesia ?",
    choice: {
      a: "34",
      b: "33",
      c: "37",
      d: "31",
    },
    correct_answer: "d",
  },
  {
    soal: "Wisata apa yang terkenal di Indonesia ?",
    choice: {
      a: "Bali",
      b: "Jakarta",
      c: "Bogor",
      d: "Surabaya",
    },
    correct_answer: "b",
  },
  {
    soal: "Apa warna bendera Indonesia ?",
    choice: {
      a: "Merah Putih",
      b: "Putih Merah",
      c: "Hitam Merah",
      d: "Merah Hitams",
    },
    correct_answer: "a",
  },
  {
    soal: "Siapa Presiden Perempuan Pertama Indonesia?",
    choice: {
      a: "Kartini",
      b: "Megawati",
      c: "Cut Nyak Dien",
      d: "Dewi Sartika",
    },
    correct_answer: "b",
  },
  {
    soal: "Berapa lama indonesia dijajah Belanda?",
    choice: {
      a: "350 Tahun",
      b: "200 Tahun",
      c: "250 Tahun",
      d: "300 Tahun",
    },
    correct_answer: "d",
  },
  {
    soal: "Berapa lama BJ Habibie menjabat sebagai presiden ?",
    choice: {
      a: "1 Tahun 8 Bulan",
      b: "2 Tahun 3 Bulan",
      c: "1 Tahun 5 Bulan",
      d: "3 Tahun 5 Bulan",
    },
    correct_answer: "c",
  },
];

//  Penjelasan ada didalam fungsi
mulaiKuis();

// Penjelasan ada didalam fungsi
getHasilKuis();
// PSEUDOCODE END

function mulaiKuis() {
  // Siapkan jawaban user secara random
  for (let i = 0; i < 10; i++) {
    user.answers.push(RandomAnswer());
  }

  // Looping setiap pertanyaan kuis
  questions.forEach((question, index) => {
    // Tampilkan nomor soal dan pertanyaan
    console.log(`${index + 1}.${question.soal}`);

    // Tampilkan seluruh pilihan
    for (const key in question.choice) {
      console.log(`  ${key}.${question.choice[key]}`);
    }

    // Tampilkan jawaban user
    console.log(
      `Jawaban User : ${
        user.answers[index] === undefined ? "-" : user.answers[index]
      } \n`
    );

    // Jika jawaban user sama dengan jawaban benar soal
    if (user.answers[index] === question.correct_answer) {
      // Tambah jawaban benar
      correct_answer++;
    }

    // Jika salah
    else {
      // Tambah jawaban salah
      wrong_answer++;
    }
  });
}

function getHasilKuis() {
  console.log("Quiz Selesai !");

  // Looping Pertanyaan
  questions.forEach((question, index) => {
    // Tampilkan soal, jawaban benar dan jawaban user
    console.log(`${index + 1}.${question.soal}`);
    console.log(`Jawaban benar : ${question.correct_answer}`);
    console.log(`Jawaban user : ${user.answers[index]} \n`);
  });

  // Tampilkan jumlah jawaban benar dan salah user
  console.log("Hasil Quiz");
  console.log("Nama  : " + user.name)
  console.log(`Jawaban Benar : ${correct_answer}`);
  console.log(`Jawaban Salah : ${wrong_answer}`);
}

function RandomAnswer() {
  // Deklarasikan pilihan
  const answer = ["a", "b", "c", "d"];

  // Random diantaran pilihan yang dideklarasikan
  const random = Math.floor(Math.random() * answer.length);

  // Kembalikan hasil random
  return answer[random];
}
