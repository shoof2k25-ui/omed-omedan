/* ──────────────────────────────────────────────────────────
   QUIZ DATA — Bilingual (ID & EN), 30 soal per bahasa
   Struktur: QUIZ_DATA.id[...] dan QUIZ_DATA.en[...]
   Setiap soal: { level, question, options[4], answer(0-3) }
   Level: "mudah" | "menengah" | "sulit"
   ────────────────────────────────────────────────────────── */
const QUIZ_DATA = {
  /* ════════════════════════════════════════════════════════
     BAHASA INDONESIA
  ════════════════════════════════════════════════════════ */
  id: [
    /* ── MUDAH ─────────────────────────────────────────── */
    {
      level: "mudah",
      question: "Di mana tradisi Omed-Omedan berlangsung?",
      options: [
        "Gianyar, Bali",
        "Banjar Kaja Sesetan, Denpasar, Bali",
        "Ubud, Bali",
        "Kuta, Badung, Bali",
      ],
      answer: 1,
    },
    {
      level: "mudah",
      question: 'Apa arti kata "Omed-Omedan" dalam bahasa Bali?',
      options: [
        "Saling lempar air",
        "Saling menyanyi bersama",
        "Saling tarik-menarik",
        "Saling berlomba lari",
      ],
      answer: 2,
    },
    {
      level: "mudah",
      question: "Kapan tradisi Omed-Omedan biasanya diselenggarakan?",
      options: [
        "Sehari setelah Nyepi (Ngembak Geni)",
        "Pada hari raya Galungan",
        "Saat perayaan Kuningan",
        "Pada malam Tahun Baru Masehi",
      ],
      answer: 0,
    },
    {
      level: "mudah",
      question: "Siapa yang biasanya menjadi peserta utama Omed-Omedan?",
      options: [
        "Para lansia dan tetua banjar",
        "Anak-anak usia 7–12 tahun",
        "Pemuda-pemudi banjar yang belum menikah",
        "Para pendeta dan pemimpin adat",
      ],
      answer: 2,
    },
    {
      level: "mudah",
      question: "Berapa kelompok yang saling berhadapan dalam Omed-Omedan?",
      options: [
        "Dua kelompok — putra dan putri",
        "Empat kelompok bergiliran",
        "Satu kelompok besar tanpa lawan",
        "Tiga kelompok dari banjar berbeda",
      ],
      answer: 0,
    },
    {
      level: "mudah",
      question: "Omed-Omedan biasanya dilaksanakan di depan bangunan apa?",
      options: [
        "Istana Raja Bali di Klungkung",
        "Pura Besakih di Karangasem",
        "Pura Banjar Kaja Sesetan",
        "Pasar Tradisional Sesetan",
      ],
      answer: 2,
    },
    {
      level: "mudah",
      question:
        "Apa yang dipercikkan kepada para peserta Omed-Omedan selama prosesi?",
      options: [
        "Air suci (tirtha)",
        "Bunga warna-warni",
        "Bubuk warna (holi)",
        "Air dari laut Bali",
      ],
      answer: 0,
    },
    {
      level: "mudah",
      question: "Omed-Omedan merupakan warisan budaya dari pulau mana?",
      options: ["Lombok", "Bali", "Jawa", "Sumbawa"],
      answer: 1,
    },
    {
      level: "mudah",
      question: "Omed-Omedan berkaitan erat dengan hari raya Hindu apa?",
      options: ["Nyepi", "Idul Fitri", "Waisak", "Natal"],
      answer: 0,
    },
    {
      level: "mudah",
      question:
        "Secara umum, Omed-Omedan melambangkan nilai apa dalam kehidupan masyarakat Bali?",
      options: [
        "Persaingan antar kampung agar menjadi yang terkuat",
        "Ritual pemujaan kepada dewa-dewa laut",
        "Kebersamaan dan harmoni warga banjar",
        "Kemenangan dalam peperangan zaman dahulu",
      ],
      answer: 2,
    },

    /* ── MENENGAH ──────────────────────────────────────── */
    {
      level: "menengah",
      question:
        "Konsep keseimbangan dua kekuatan berlawanan yang melandasi Omed-Omedan dikenal sebagai?",
      options: [
        "Tri Hita Karana",
        "Rwabhineda",
        "Dharma Pemecutan",
        "Panca Srada",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question:
        "Ngembak Geni — hari dilaksanakannya Omed-Omedan — secara harfiah berarti?",
      options: [
        "Hari keselamatan abadi",
        "Hari menyalakan api kembali",
        "Hari tanpa suara dan kebisingan",
        "Hari purnama suci",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question:
        "Apa makna spiritual air suci (tirtha) yang dipercikkan dalam prosesi Omed-Omedan?",
      options: [
        "Mendinginkan peserta yang kelelahan",
        "Simbol air laut Bali yang keramat",
        "Pembersihan jiwa dan perlindungan spiritual setahun penuh",
        "Tradisi yang diwarisi dari kerajaan kuno",
      ],
      answer: 2,
    },
    {
      level: "menengah",
      question:
        "Konon, apa yang diyakini terjadi jika Omed-Omedan tidak diselenggarakan?",
      options: [
        "Panen gagal total sepanjang tahun",
        "Malapetaka akan menimpa Banjar Kaja",
        "Festival akan dipindah ke kota lain",
        "Pemerintah akan menjatuhkan sanksi kepada banjar",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question: "Siapa yang biasanya memimpin dan memandu prosesi Omed-Omedan?",
      options: [
        "Pemuka adat (bendesa adat)",
        "Gubernur Bali secara langsung",
        "Pendeta dari Pura Besakih",
        "Kepala kepolisian daerah",
      ],
      answer: 0,
    },
    {
      level: "menengah",
      question:
        "Rwabhineda dalam konteks Omed-Omedan merepresentasikan keseimbangan antara?",
      options: [
        "Dewa dan manusia",
        "Siang dan malam",
        "Kaya dan miskin",
        "Purusa (maskulin) dan Pradhana (feminin)",
      ],
      answer: 3,
    },
    {
      level: "menengah",
      question:
        "Nilai budaya utama yang paling menonjol dalam tradisi Omed-Omedan adalah?",
      options: [
        "Kompetisi dan keunggulan individu",
        "Kemewahan dan status sosial",
        "Gotong royong dan kebersamaan warga",
        "Kehebatan para pemimpin adat",
      ],
      answer: 2,
    },
    {
      level: "menengah",
      question:
        "Peserta Omed-Omedan umumnya berasal dari organisasi pemuda banjar yang disebut?",
      options: [
        "Awig-Awig Banjar",
        "Seke Teruna-Teruni",
        "Komunitas Seniman Bali",
        "Sekaa Gong Kebyar",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question:
        "Dalam konteks Hindu-Bali, Omed-Omedan berkaitan dengan konsep keseimbangan manakah?",
      options: [
        "Keseimbangan alam semesta (kosmos)",
        "Pemujaan khusus kepada dewa perang",
        "Ritual tolak bala dari bencana alam",
        "Upacara pernikahan massal warga banjar",
      ],
      answer: 0,
    },
    {
      level: "menengah",
      question:
        "Omed-Omedan diyakini membawa manfaat apa bagi para peserta yang mengikutinya?",
      options: [
        "Mendapat hadiah uang dari kas banjar",
        "Dijamin mendapatkan jodoh ideal",
        "Berkah spiritual dan perlindungan sepanjang tahun",
        "Diakui sebagai warga banjar kehormatan",
      ],
      answer: 2,
    },

    /* ── SULIT ─────────────────────────────────────────── */
    {
      level: "sulit",
      question:
        "Banjar Kaja Sesetan, tempat berlangsungnya Omed-Omedan, terletak di kecamatan apa?",
      options: [
        "Kecamatan Denpasar Utara",
        "Kecamatan Denpasar Selatan",
        "Kecamatan Denpasar Barat",
        "Kecamatan Denpasar Timur",
      ],
      answer: 1,
    },
    {
      level: "sulit",
      question:
        "Pada masa penjajahan, tradisi Omed-Omedan sempat dilarang oleh siapa?",
      options: [
        "Pemerintah kolonial Belanda",
        "Kerajaan Majapahit dari Jawa",
        "Penjajah Jepang (1942–1945)",
        "Pemerintah RI pasca kemerdekaan",
      ],
      answer: 0,
    },
    {
      level: "sulit",
      question:
        "Konsep Rwabhineda yang melandasi Omed-Omedan paling tepat dianalogikan dengan?",
      options: [
        "Api dan angin yang tak bisa bersatu",
        "Langit dan bumi yang terpisah selamanya",
        "Yin dan Yang — dua kekuatan berlawanan yang saling melengkapi",
        "Matahari dan bulan purnama yang bergantian",
      ],
      answer: 2,
    },
    {
      level: "sulit",
      question:
        "Dalam konteks ritual Hindu Bali, Omed-Omedan tergolong jenis upacara apa?",
      options: [
        "Bhuta Yadnya — ritual menyucikan alam dan lingkungan",
        "Dewa Yadnya — persembahan langsung kepada dewa",
        "Pitra Yadnya — penghormatan kepada arwah leluhur",
        "Manusa Yadnya — upacara siklus hidup manusia",
      ],
      answer: 0,
    },
    {
      level: "sulit",
      question:
        "Tradisi Omed-Omedan diyakini sudah berlangsung sejak sekitar abad ke berapa?",
      options: ["Abad ke-12", "Abad ke-15", "Abad ke-17", "Abad ke-19"],
      answer: 2,
    },
    {
      level: "sulit",
      question:
        'Konsep "Menyama Braya" yang terkandung dalam filosofi Omed-Omedan berarti?',
      options: [
        "Persaudaraan dan rasa kekeluargaan yang erat",
        "Kewajiban membayar pajak dan iuran desa",
        "Aturan ketat berpakaian dalam upacara adat",
        "Hukum adat yang mengikat bagi pelanggar norma",
      ],
      answer: 0,
    },
    {
      level: "sulit",
      question:
        "Selain sebagai ritual keagamaan, fungsi sosial utama Omed-Omedan adalah?",
      options: [
        "Sarana mencari pasangan hidup",
        "Ajang perlombaan fisik antar banjar sekota",
        "Media hiburan komersial untuk wisatawan asing",
        "Penguatan solidaritas dan ikatan sosial seluruh warga banjar",
      ],
      answer: 3,
    },
    {
      level: "sulit",
      question:
        "Dari tiga aspek Tri Hita Karana, aspek mana yang paling menonjol dalam Omed-Omedan?",
      options: [
        "Parahyangan — hubungan manusia dengan Tuhan",
        "Palemahan — hubungan manusia dengan alam",
        "Pawongan — hubungan harmonis antar sesama manusia",
        "Ketiga aspek sama bobotnya tanpa perbedaan",
      ],
      answer: 2,
    },
    {
      level: "sulit",
      question:
        "Omed-Omedan diakui sebagai Warisan Budaya Takbenda Indonesia pada tahun?",
      options: ["2014", "2016", "2018", "2020"],
      answer: 1,
    },
    {
      level: "sulit",
      question:
        "Apa yang membedakan Omed-Omedan dari tradisi tarik-menarik biasa dari sudut pandang filosofis?",
      options: [
        "Menggunakan tali khusus sebagai simbol persatuan",
        "Hanya diselenggarakan pada saat bulan purnama penuh",
        "Diikuti kelompok berbeda gender sebagai simbol keseimbangan kosmis",
        "Selalu dipimpin langsung oleh pendeta dan raja banjar",
      ],
      answer: 2,
    },
  ],

  /* ════════════════════════════════════════════════════════
     ENGLISH
  ════════════════════════════════════════════════════════ */
  en: [
    /* ── EASY ──────────────────────────────────────────── */
    {
      level: "mudah",
      question: "Where does the Omed-Omedan tradition take place?",
      options: [
        "Gianyar, Bali",
        "Banjar Kaja Sesetan, Denpasar, Bali",
        "Ubud, Bali",
        "Kuta, Badung, Bali",
      ],
      answer: 1,
    },
    {
      level: "mudah",
      question: 'What does the word "Omed-Omedan" mean in Balinese?',
      options: [
        "To splash water at each other",
        "To sing together",
        "To pull each other",
        "To race against each other",
      ],
      answer: 2,
    },
    {
      level: "mudah",
      question: "When is the Omed-Omedan tradition traditionally held?",
      options: [
        "The day after Nyepi (Ngembak Geni)",
        "On Galungan Day",
        "During the Kuningan celebration",
        "On New Year's Eve",
      ],
      answer: 0,
    },
    {
      level: "mudah",
      question: "Who are the main participants of Omed-Omedan?",
      options: [
        "Elders and community leaders",
        "Children aged 7–12",
        "Unmarried youth of the banjar",
        "Priests and customary leaders",
      ],
      answer: 2,
    },
    {
      level: "mudah",
      question: "How many groups face each other in Omed-Omedan?",
      options: [
        "Two groups — male and female",
        "Four groups taking turns",
        "One large group with no opponents",
        "Three groups from different banjars",
      ],
      answer: 0,
    },
    {
      level: "mudah",
      question: "In front of what building is Omed-Omedan usually held?",
      options: [
        "The Balinese Royal Palace in Klungkung",
        "Pura Besakih in Karangasem",
        "Pura Banjar Kaja Sesetan",
        "Sesetan Traditional Market",
      ],
      answer: 2,
    },
    {
      level: "mudah",
      question:
        "What is sprinkled on participants during the Omed-Omedan procession?",
      options: [
        "Holy water (tirtha)",
        "Colorful flowers",
        "Colored powder (holi)",
        "Water from the Balinese sea",
      ],
      answer: 0,
    },
    {
      level: "mudah",
      question: "Omed-Omedan is a cultural heritage from which island?",
      options: ["Lombok", "Bali", "Java", "Sumbawa"],
      answer: 1,
    },
    {
      level: "mudah",
      question: "Omed-Omedan is closely related to which Hindu holy day?",
      options: ["Nyepi", "Eid al-Fitr", "Vesak", "Christmas"],
      answer: 0,
    },
    {
      level: "mudah",
      question:
        "In general, Omed-Omedan symbolizes which value in Balinese community life?",
      options: [
        "Village competition to become the strongest",
        "A ritual worship of sea gods",
        "Unity and harmony of banjar members",
        "Victory in ancient warfare",
      ],
      answer: 2,
    },

    /* ── MEDIUM ────────────────────────────────────────── */
    {
      level: "menengah",
      question:
        "The concept of balance between two opposing forces underlying Omed-Omedan is known as?",
      options: [
        "Tri Hita Karana",
        "Rwabhineda",
        "Dharma Pemecutan",
        "Panca Srada",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question: "Ngembak Geni — the day Omed-Omedan is held — literally means?",
      options: [
        "Day of eternal salvation",
        "Day of relighting fire",
        "Day without sound and noise",
        "Day of the sacred full moon",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question:
        "What is the spiritual meaning of the holy water (tirtha) sprinkled in the Omed-Omedan procession?",
      options: [
        "To cool down exhausted participants",
        "Symbol of sacred Balinese seawater",
        "Spiritual cleansing and protection for a full year",
        "A tradition inherited from ancient kingdoms",
      ],
      answer: 2,
    },
    {
      level: "menengah",
      question: "What is believed to happen if Omed-Omedan is not held?",
      options: [
        "Crops will fail completely all year",
        "Disaster will befall Banjar Kaja",
        "The festival will be moved to another city",
        "The government will sanction the banjar",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question: "Who usually leads and guides the Omed-Omedan procession?",
      options: [
        "Customary leader (bendesa adat)",
        "Bali's Governor personally",
        "A priest from Pura Besakih",
        "Chief of the regional police",
      ],
      answer: 0,
    },
    {
      level: "menengah",
      question:
        "Rwabhineda in the context of Omed-Omedan represents the balance between?",
      options: [
        "God and humanity",
        "Day and night",
        "Rich and poor",
        "Purusa (masculine) and Pradhana (feminine)",
      ],
      answer: 3,
    },
    {
      level: "menengah",
      question:
        "The main cultural value most prominent in the Omed-Omedan tradition is?",
      options: [
        "Individual competition and excellence",
        "Luxury and social status",
        "Mutual cooperation and community togetherness",
        "The greatness of customary leaders",
      ],
      answer: 2,
    },
    {
      level: "menengah",
      question:
        "Omed-Omedan participants generally come from the banjar youth organization called?",
      options: [
        "Awig-Awig Banjar",
        "Seke Teruna-Teruni",
        "Komunitas Seniman Bali",
        "Sekaa Gong Kebyar",
      ],
      answer: 1,
    },
    {
      level: "menengah",
      question:
        "In Hindu-Balinese context, Omed-Omedan relates to which concept of balance?",
      options: [
        "Cosmic balance of the universe",
        "Special worship of the god of war",
        "Ritual to ward off natural disasters",
        "Mass wedding ceremony of banjar members",
      ],
      answer: 0,
    },
    {
      level: "menengah",
      question:
        "What benefit is Omed-Omedan believed to bring to its participants?",
      options: [
        "Cash prizes from the banjar fund",
        "A guaranteed ideal life partner",
        "Spiritual blessings and protection throughout the year",
        "Recognition as an honorary banjar member",
      ],
      answer: 2,
    },

    /* ── HARD ──────────────────────────────────────────── */
    {
      level: "sulit",
      question:
        "Banjar Kaja Sesetan, where Omed-Omedan takes place, is located in which sub-district?",
      options: [
        "North Denpasar Sub-district",
        "South Denpasar Sub-district",
        "West Denpasar Sub-district",
        "East Denpasar Sub-district",
      ],
      answer: 1,
    },
    {
      level: "sulit",
      question:
        "During the colonial period, the Omed-Omedan tradition was temporarily banned by whom?",
      options: [
        "The Dutch colonial government",
        "The Majapahit Kingdom from Java",
        "Japanese occupiers (1942–1945)",
        "The Indonesian government post-independence",
      ],
      answer: 0,
    },
    {
      level: "sulit",
      question:
        "The concept of Rwabhineda underlying Omed-Omedan is most aptly compared to?",
      options: [
        "Fire and wind that cannot unite",
        "Heaven and earth permanently separated",
        "Yin and Yang — two opposing forces that complement each other",
        "The sun and the full moon that alternate",
      ],
      answer: 2,
    },
    {
      level: "sulit",
      question:
        "In the context of Hindu-Balinese ritual, what type of ceremony does Omed-Omedan belong to?",
      options: [
        "Bhuta Yadnya — ritual to purify nature and the environment",
        "Dewa Yadnya — offerings directly to the gods",
        "Pitra Yadnya — honoring ancestral spirits",
        "Manusa Yadnya — ceremonies of the human life cycle",
      ],
      answer: 0,
    },
    {
      level: "sulit",
      question:
        "The Omed-Omedan tradition is believed to have been going on since approximately which century?",
      options: ["12th century", "15th century", "17th century", "19th century"],
      answer: 2,
    },
    {
      level: "sulit",
      question:
        'The concept of "Menyama Braya" in the philosophy of Omed-Omedan means?',
      options: [
        "Brotherhood and a strong sense of kinship",
        "The obligation to pay village taxes and dues",
        "Strict rules about dress codes in customary ceremonies",
        "Customary law binding to violators of social norms",
      ],
      answer: 0,
    },
    {
      level: "sulit",
      question:
        "Beyond its religious function, the main social function of Omed-Omedan is?",
      options: [
        "An official means of finding a life partner",
        "A physical competition between banjars across the city",
        "A commercial entertainment medium for foreign tourists",
        "Strengthening solidarity and social bonds among all banjar members",
      ],
      answer: 3,
    },
    {
      level: "sulit",
      question:
        "Of the three aspects of Tri Hita Karana, which is most prominent in Omed-Omedan?",
      options: [
        "Parahyangan — relationship between humans and God",
        "Palemahan — relationship between humans and nature",
        "Pawongan — harmonious relationships among fellow humans",
        "All three aspects carry equal weight without distinction",
      ],
      answer: 2,
    },
    {
      level: "sulit",
      question:
        "Omed-Omedan was officially recognized as Indonesian Intangible Cultural Heritage in what year?",
      options: ["2014", "2016", "2018", "2020"],
      answer: 1,
    },
    {
      level: "sulit",
      question:
        "What distinguishes Omed-Omedan from an ordinary tug-of-war from a philosophical standpoint?",
      options: [
        "It uses a special rope as a symbol of unity",
        "It is only held during the full moon",
        "It involves different-gender groups as a symbol of cosmic balance",
        "It is always led directly by a priest and the banjar king",
      ],
      answer: 2,
    },
  ],
};
