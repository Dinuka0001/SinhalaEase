/* ═══════════════════════════════════════════════════════════
   data.js  –  All vocabulary, phrases & grammar data
   ═══════════════════════════════════════════════════════════ */

const VOCAB_DATA = [

  /* ════════════════════════════════════════════════════════
     CATEGORY 1 – GREETINGS & FAREWELLS
  ════════════════════════════════════════════════════════ */
  {
    id: "greetings",
    title: "Greetings & Farewells",
    icon: "👋",
    color: "#5B4FCF",
    words: [
      { id:"g01", sinhala:"ආයුබෝවන්",    roman:"Āyubōvan",       english:"Hello / Welcome",    image:"greetings/hello.png",       audio:"greetings/hello.mp3",       example:"ආයුබෝවන්! කොහොමද?" },
      { id:"g02", sinhala:"සුභ උදෑසනක්",  roman:"Subha udæsanak", english:"Good morning",        image:"greetings/good-morning.png", audio:"greetings/good-morning.mp3", example:"සුභ උදෑසනක් ගෙදරට!" },
      { id:"g03", sinhala:"සුභ සන්ධ්‍යාවක්",roman:"Subha sandhyāvak",english:"Good evening",      image:"greetings/good-evening.png", audio:"greetings/good-evening.mp3", example:"" },
      { id:"g04", sinhala:"ගිහින් එන්නම්",roman:"Gihin ennam",    english:"Goodbye",             image:"greetings/goodbye.png",      audio:"greetings/goodbye.mp3",      example:"ගිහින් එන්නම්, හොඳෙ?" },
      { id:"g05", sinhala:"ස්තූතියි",     roman:"Stūtiyi",        english:"Thank you",           image:"greetings/thank-you.png",    audio:"greetings/thank-you.mp3",    example:"ගොඩක් ස්තූතියි!" },
      { id:"g06", sinhala:"කමක් නෑ",      roman:"Kamak nǣ",       english:"You're welcome",      image:"greetings/welcome.png",      audio:"greetings/youre-welcome.mp3",example:"" },
      { id:"g07", sinhala:"සමාවෙන්න",     roman:"Samāvenna",      english:"Sorry / Excuse me",   image:"greetings/sorry.png",        audio:"greetings/sorry.mp3",        example:"සමාවෙන්න, මං දැනගෙන නෑ." },
      { id:"g08", sinhala:"කොහොමද?",      roman:"Kohomada?",      english:"How are you?",        image:"greetings/how-are-you.png",  audio:"greetings/how-are-you.mp3",  example:"ඔයාට කොහොමද?" },
      { id:"g09", sinhala:"හොඳින් ඉන්නවා",roman:"Hondin innawā",  english:"I am fine",           image:"greetings/fine.png",         audio:"greetings/im-fine.mp3",      example:"" },
      { id:"g10", sinhala:"හෙට හමුවෙමු",  roman:"Heta hamuwemu", english:"See you tomorrow",    image:"greetings/see-you.png",      audio:"greetings/see-you-tomorrow.mp3",example:"" },
      { id:"g11", sinhala:"සුභ රාත්‍රියක්", roman:"Subha rāthriyak",english:"Good night",          image:"greetings/good-night.png",   audio:"greetings/good-night.mp3",   example:"" },
      { id:"g12", sinhala:"සුභ ගමන්",     roman:"Subha gaman",    english:"Have a safe journey", image:"greetings/safe-journey.png", audio:"greetings/safe-journey.mp3", example:"" },
      { id:"g13", sinhala:"ආයෙත් හම්බවෙමු",roman:"Āyeth hambawemu",english:"See you again",     image:"greetings/see-you-again.png",audio:"greetings/see-you-again.mp3",example:"" },
      { id:"g14", sinhala:"නියමයි",       roman:"Niyamayi",       english:"Great / Awesome",     image:"greetings/great.png",        audio:"greetings/great.mp3",        example:"" },
      { id:"g15", sinhala:"මොකද වෙන්නේ?", roman:"Mokada wennē?",  english:"What's up?",          image:"greetings/whats-up.png",     audio:"greetings/whats-up.mp3",     example:"" },
      { id:"g16", sinhala:"පරෙස්සමෙන්",   roman:"Paressamen",     english:"Take care",           image:"greetings/take-care.png",    audio:"greetings/take-care.mp3",    example:"" },
      { id:"g17", sinhala:"සුභ පැතුම්",     roman:"Subha pæthum",   english:"Congratulations",     image:"greetings/congratulations.png",audio:"greetings/congratulations.mp3",example:"" },
      { id:"g18", sinhala:"පිළිගනිමු",     roman:"Piliganimu",     english:"Welcome (warmly)",    image:"greetings/welcome-warmly.png",audio:"greetings/welcome-warmly.mp3",example:"" },
      { id:"g19", sinhala:"මට සමාවෙන්න",  roman:"Mata samāvenna", english:"Please forgive me",   image:"greetings/forgive-me.png",   audio:"greetings/forgive-me.mp3",   example:"" },
      { id:"g20", sinhala:"ගොඩක් ස්තූතියි", roman:"Godak stūthiyi", english:"Thank you very much", image:"greetings/thank-you-very-much.png",audio:"greetings/thank-you-very-much.mp3",example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 2 – NUMBERS
  ════════════════════════════════════════════════════════ */
  {
    id: "numbers",
    title: "Numbers 1–20",
    icon: "🔢",
    color: "#FF6B35",
    words: [
      { id:"n01", sinhala:"එක",    roman:"Eka",    english:"One",     image:"numbers/one.png",     audio:"numbers/one.mp3",     example:"" },
      { id:"n02", sinhala:"දෙක",   roman:"Deka",   english:"Two",     image:"numbers/two.png",     audio:"numbers/two.mp3",     example:"" },
      { id:"n03", sinhala:"තුන",   roman:"Tuna",   english:"Three",   image:"numbers/three.png",   audio:"numbers/three.mp3",   example:"" },
      { id:"n04", sinhala:"හතර",   roman:"Hatara", english:"Four",    image:"numbers/four.png",    audio:"numbers/four.mp3",    example:"" },
      { id:"n05", sinhala:"පහ",    roman:"Paha",   english:"Five",    image:"numbers/five.png",    audio:"numbers/five.mp3",    example:"" },
      { id:"n06", sinhala:"හය",    roman:"Haya",   english:"Six",     image:"numbers/six.png",     audio:"numbers/six.mp3",     example:"" },
      { id:"n07", sinhala:"හත",    roman:"Hata",   english:"Seven",   image:"numbers/seven.png",   audio:"numbers/seven.mp3",   example:"" },
      { id:"n08", sinhala:"අට",    roman:"Aṭa",    english:"Eight",   image:"numbers/eight.png",   audio:"numbers/eight.mp3",   example:"" },
      { id:"n09", sinhala:"නවය",   roman:"Nawaya", english:"Nine",    image:"numbers/nine.png",    audio:"numbers/nine.mp3",    example:"" },
      { id:"n10", sinhala:"දහය",   roman:"Dahaya", english:"Ten",     image:"numbers/ten.png",     audio:"numbers/ten.mp3",     example:"" },
      { id:"n11", sinhala:"එකොළහ",roman:"Ekolaha",english:"Eleven",  image:"numbers/eleven.png",  audio:"numbers/eleven.mp3",  example:"" },
      { id:"n12", sinhala:"දොළහ", roman:"Dolaha", english:"Twelve",  image:"numbers/twelve.png",  audio:"numbers/twelve.mp3",  example:"" },
      { id:"n13", sinhala:"දහතුන", roman:"Dahatuna",english:"Thirteen",image:"numbers/thirteen.png",audio:"numbers/thirteen.mp3",example:"" },
      { id:"n14", sinhala:"දහහතර",roman:"Dahahatara",english:"Fourteen",image:"numbers/fourteen.png",audio:"numbers/fourteen.mp3",example:"" },
      { id:"n15", sinhala:"පහළොව",roman:"Pahalowa",english:"Fifteen", image:"numbers/fifteen.png", audio:"numbers/fifteen.mp3", example:"" },
      { id:"n16", sinhala:"දහසය", roman:"Dahasaya",english:"Sixteen", image:"numbers/sixteen.png", audio:"numbers/sixteen.mp3", example:"" },
      { id:"n17", sinhala:"දහහත", roman:"Dahahata",english:"Seventeen",image:"numbers/seventeen.png",audio:"numbers/seventeen.mp3",example:"" },
      { id:"n18", sinhala:"දහඅට", roman:"Dahaata", english:"Eighteen",image:"numbers/eighteen.png",audio:"numbers/eighteen.mp3",example:"" },
      { id:"n19", sinhala:"දහනවය",roman:"Dahanawaya",english:"Nineteen",image:"numbers/nineteen.png",audio:"numbers/nineteen.mp3",example:"" },
      { id:"n20", sinhala:"විස්ස", roman:"Vissa",  english:"Twenty",  image:"numbers/twenty.png",  audio:"numbers/twenty.mp3",  example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 3 – DAYS & TIME
  ════════════════════════════════════════════════════════ */
  {
    id: "time",
    title: "Days & Time",
    icon: "🗓️",
    color: "#27AE60",
    words: [
      { id:"t01", sinhala:"අද",         roman:"Ada",         english:"Today",       image:"time/today.png",     audio:"time/today.mp3",     example:"අද සතුරාදා." },
      { id:"t02", sinhala:"ඊයේ",        roman:"Īyē",         english:"Yesterday",   image:"time/yesterday.png", audio:"time/yesterday.mp3", example:"ඊයේ හොඳ දවසක්." },
      { id:"t03", sinhala:"හෙට",        roman:"Heta",        english:"Tomorrow",    image:"time/tomorrow.png",  audio:"time/tomorrow.mp3",  example:"හෙට පාසල." },
      { id:"t04", sinhala:"උදෑසන",      roman:"Udæsana",     english:"Morning",     image:"time/morning.png",   audio:"time/morning.mp3",   example:"" },
      { id:"t05", sinhala:"සවස",        roman:"Sawasa",      english:"Evening",     image:"time/evening.png",   audio:"time/evening.mp3",   example:"" },
      { id:"t06", sinhala:"රාත්‍රිය",  roman:"Rāthriya",   english:"Night",       image:"time/night.png",     audio:"time/night.mp3",     example:"" },
      { id:"t07", sinhala:"ඉරිදා",      roman:"Iridā",       english:"Sunday",      image:"time/sunday.png",    audio:"time/sunday.mp3",    example:"" },
      { id:"t08", sinhala:"සඳුදා",      roman:"Sandudā",     english:"Monday",      image:"time/monday.png",    audio:"time/monday.mp3",    example:"" },
      { id:"t09", sinhala:"අඟහරුවාදා", roman:"Angaharuvādā",english:"Tuesday",     image:"time/tuesday.png",   audio:"time/tuesday.mp3",   example:"" },
      { id:"t10", sinhala:"බදාදා",      roman:"Badādā",      english:"Wednesday",   image:"time/wednesday.png", audio:"time/wednesday.mp3", example:"" },
      { id:"t11", sinhala:"බ්‍රහස්පතින්දා",roman:"Brahaspathindā",english:"Thursday",image:"time/thursday.png", audio:"time/thursday.mp3",  example:"" },
      { id:"t12", sinhala:"සිකුරාදා",   roman:"Sikurādā",    english:"Friday",      image:"time/friday.png",    audio:"time/friday.mp3",    example:"" },
      { id:"t13", sinhala:"සෙනසුරාදා",  roman:"Senasurādā",  english:"Saturday",    image:"time/saturday.png",  audio:"time/saturday.mp3",  example:"" },
      { id:"t14", sinhala:"සතිය",       roman:"Sathiya",     english:"Week",        image:"time/week.png",      audio:"time/week.mp3",      example:"" },
      { id:"t15", sinhala:"මාසය",       roman:"Māsaya",      english:"Month",       image:"time/month.png",     audio:"time/month.mp3",     example:"" },
      { id:"t16", sinhala:"අවුරුද්ද",    roman:"Awurudda",    english:"Year",        image:"time/year.png",      audio:"time/year.mp3",      example:"" },
      { id:"t17", sinhala:"පැය",        roman:"Pæya",        english:"Hour",        image:"time/hour.png",      audio:"time/hour.mp3",      example:"" },
      { id:"t18", sinhala:"විනාඩිය",    roman:"Vinādiya",    english:"Minute",      image:"time/minute.png",    audio:"time/minute.mp3",    example:"" },
      { id:"t19", sinhala:"තත්පරය",     roman:"Thathparaya", english:"Second",      image:"time/second.png",    audio:"time/second.mp3",    example:"" },
      { id:"t20", sinhala:"අද රෑ",      roman:"Ada rǣ",      english:"Tonight",     image:"time/tonight.png",   audio:"time/tonight.mp3",   example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 4 – COLORS
  ════════════════════════════════════════════════════════ */
  {
    id: "colors",
    title: "Colors",
    icon: "🎨",
    color: "#E74C3C",
    words: [
      { id:"c01", sinhala:"රතු",    roman:"Ratu",    english:"Red",         image:"colors/red.png",    audio:"colors/red.mp3",    example:"" },
      { id:"c02", sinhala:"නිල්",   roman:"Nil",     english:"Blue",        image:"colors/blue.png",   audio:"colors/blue.mp3",   example:"" },
      { id:"c03", sinhala:"කොළ",    roman:"Kola",    english:"Green",       image:"colors/green.png",  audio:"colors/green.mp3",  example:"" },
      { id:"c04", sinhala:"කහ",     roman:"Kaha",    english:"Yellow",      image:"colors/yellow.png", audio:"colors/yellow.mp3", example:"" },
      { id:"c05", sinhala:"සුදු",   roman:"Sudu",    english:"White",       image:"colors/white.png",  audio:"colors/white.mp3",  example:"" },
      { id:"c06", sinhala:"කළු",    roman:"Kalu",    english:"Black",       image:"colors/black.png",  audio:"colors/black.mp3",  example:"" },
      { id:"c07", sinhala:"තැඹිලි", roman:"Tambili", english:"Orange",      image:"colors/orange.png", audio:"colors/orange.mp3", example:"" },
      { id:"c08", sinhala:"රෝස",    roman:"Rōsa",    english:"Pink",        image:"colors/pink.png",   audio:"colors/pink.mp3",   example:"" },
      { id:"c09", sinhala:"දම්",    roman:"Dam",     english:"Purple",      image:"colors/purple.png", audio:"colors/purple.mp3", example:"" },
      { id:"c10", sinhala:"දුඹුරු", roman:"Dumburu", english:"Brown",       image:"colors/brown.png",  audio:"colors/brown.mp3",  example:"" },
      { id:"c11", sinhala:"අළු",    roman:"Alu",     english:"Gray",        image:"colors/gray.png",   audio:"colors/gray.mp3",   example:"" },
      { id:"c12", sinhala:"රිදී",   roman:"Ridī",    english:"Silver",      image:"colors/silver.png", audio:"colors/silver.mp3", example:"" },
      { id:"c13", sinhala:"රන්",    roman:"Ran",     english:"Gold",        image:"colors/gold.png",   audio:"colors/gold.mp3",   example:"" },
      { id:"c14", sinhala:"තද නිල්",roman:"Thada nil",english:"Navy Blue",   image:"colors/navy.png",   audio:"colors/navy.mp3",   example:"" },
      { id:"c15", sinhala:"ලා කොළ", roman:"Lā kola", english:"Light Green", image:"colors/light-green.png",audio:"colors/light-green.mp3",example:"" },
      { id:"c16", sinhala:"රෝස පාට",roman:"Rōsa pāta",english:"Rose Color",  image:"colors/rose.png",   audio:"colors/rose.mp3",   example:"" },
      { id:"c17", sinhala:"මෙරූන්", roman:"Merūn",   english:"Maroon",      image:"colors/maroon.png", audio:"colors/maroon.mp3", example:"" },
      { id:"c18", sinhala:"ලෝකඩ",   roman:"Lōkada",  english:"Bronze",      image:"colors/bronze.png", audio:"colors/bronze.mp3", example:"" },
      { id:"c19", sinhala:"පීච්",   roman:"Pīch",    english:"Peach",       image:"colors/peach.png",  audio:"colors/peach.mp3",  example:"" },
      { id:"c20", sinhala:"වර්ණය",  roman:"Warnaya", english:"Color (Noun)",image:"colors/color.png",  audio:"colors/color.mp3",  example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 5 – FAMILY
  ════════════════════════════════════════════════════════ */
  {
    id: "family",
    title: "Family Members",
    icon: "👨‍👩‍👧",
    color: "#9B59B6",
    words: [
      { id:"f01", sinhala:"අම්මා",   roman:"Ammā",    english:"Mother",       image:"family/mother.png",      audio:"family/mother.mp3",      example:"මගේ අම්මා ගුරුවරියකි." },
      { id:"f02", sinhala:"තාත්තා",  roman:"Thāttā",  english:"Father",       image:"family/father.png",      audio:"family/father.mp3",      example:"" },
      { id:"f03", sinhala:"සහෝදරයා",roman:"Sahōdarayā",english:"Brother",    image:"family/brother.png",     audio:"family/brother.mp3",     example:"" },
      { id:"f04", sinhala:"සහෝදරිය",roman:"Sahōdariya",english:"Sister",     image:"family/sister.png",      audio:"family/sister.mp3",      example:"" },
      { id:"f05", sinhala:"සීයා",    roman:"Sīyā",    english:"Grandfather",  image:"family/grandfather.png", audio:"family/grandfather.mp3", example:"" },
      { id:"f06", sinhala:"ආච්චි",   roman:"Ācci",    english:"Grandmother",  image:"family/grandmother.png", audio:"family/grandmother.mp3", example:"" },
      { id:"f07", sinhala:"පුතා",    roman:"Puthā",   english:"Son",          image:"family/son.png",         audio:"family/son.mp3",         example:"" },
      { id:"f08", sinhala:"දුව",     roman:"Duwa",    english:"Daughter",     image:"family/daughter.png",    audio:"family/daughter.mp3",    example:"" },
      { id:"f09", sinhala:"යාළුවා",   roman:"Yāluwā",  english:"Friend",       image:"family/friend.png",      audio:"family/friend.mp3",      example:"" },
      { id:"f10", sinhala:"දරුවා",   roman:"Daruwā",  english:"Child",        image:"family/child.png",       audio:"family/child.mp3",       example:"" },
      { id:"f11", sinhala:"මාමා",    roman:"Māmā",    english:"Uncle",        image:"family/uncle.png",       audio:"family/uncle.mp3",       example:"" },
      { id:"f12", sinhala:"නැන්දා",   roman:"Nændā",   english:"Aunt",         image:"family/aunt.png",        audio:"family/aunt.mp3",        example:"" },
      { id:"f13", sinhala:"බිරිඳ",    roman:"Birinda", english:"Wife",         image:"family/wife.png",        audio:"family/wife.mp3",        example:"" },
      { id:"f14", sinhala:"සැමියා",   roman:"Sæmiyā",  english:"Husband",      image:"family/husband.png",     audio:"family/husband.mp3",     example:"" },
      { id:"f15", sinhala:"අයියා",   roman:"Ayiyā",   english:"Older Brother",image:"family/older-brother.png",audio:"family/older-brother.mp3",example:"" },
      { id:"f16", sinhala:"අක්කා",   roman:"Akkā",    english:"Older Sister", image:"family/older-sister.png",audio:"family/older-sister.mp3",example:"" },
      { id:"f17", sinhala:"මල්ලි",   roman:"Malli",   english:"Younger Brother",image:"family/younger-brother.png",audio:"family/younger-brother.mp3",example:"" },
      { id:"f18", sinhala:"නංගි",    roman:"Nangi",   english:"Younger Sister",image:"family/younger-sister.png",audio:"family/younger-sister.mp3",example:"" },
      { id:"f19", sinhala:"පවුල",    roman:"Pawula",  english:"Family",       image:"family/family.png",      audio:"family/family.mp3",      example:"" },
      { id:"f20", sinhala:"ඥාතියා",  roman:"Gnāthiyā",english:"Relative",     image:"family/relative.png",    audio:"family/relative.mp3",    example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 6 – FOOD & DRINKS
  ════════════════════════════════════════════════════════ */
  {
    id: "food",
    title: "Food & Drinks",
    icon: "🍛",
    color: "#F39C12",
    words: [
      { id:"fd01", sinhala:"බත්",     roman:"Bath",    english:"Rice",        image:"food/rice.png",    audio:"food/rice.mp3",    example:"" },
      { id:"fd02", sinhala:"ඇපල්",   roman:"Æpal",    english:"Apple",       image:"food/apple.png",   audio:"food/apple.mp3",   example:"" },
      { id:"fd03", sinhala:"කෙසෙල්",  roman:"Kesel",   english:"Banana",      image:"food/banana.png",  audio:"food/banana.mp3",  example:"" },
      { id:"fd04", sinhala:"මාළු",    roman:"Mālu",    english:"Fish",        image:"food/fish.png",    audio:"food/fish.mp3",    example:"" },
      { id:"fd05", sinhala:"කිරි",    roman:"Kiri",    english:"Milk",        image:"food/milk.png",    audio:"food/milk.mp3",    example:"" },
      { id:"fd06", sinhala:"පාන්",    roman:"Pān",     english:"Bread",       image:"food/bread.png",   audio:"food/bread.mp3",   example:"" },
      { id:"fd07", sinhala:"වතුර",    roman:"Wathura", english:"Water",       image:"food/water.png",   audio:"food/water.mp3",   example:"" },
      { id:"fd08", sinhala:"තේ",      roman:"Thē",     english:"Tea",         image:"food/tea.png",     audio:"food/tea.mp3",     example:"" },
      { id:"fd09", sinhala:"බිත්තර",  roman:"Biththara",english:"Egg",         image:"food/egg.png",     audio:"food/egg.mp3",     example:"" },
      { id:"fd10", sinhala:"කෝපි",    roman:"Kōpi",    english:"Coffee",      image:"food/coffee.png",  audio:"food/coffee.mp3",  example:"" },
      { id:"fd11", sinhala:"පරිප්පු",  roman:"Parippu", english:"Dhal / Lentils",image:"food/dhal.png",    audio:"food/dhal.mp3",    example:"" },
      { id:"fd12", sinhala:"අඹ",      roman:"Amba",    english:"Mango",       image:"food/mango.png",   audio:"food/mango.mp3",   example:"" },
      { id:"fd13", sinhala:"මස්",     roman:"Mas",     english:"Meat",        image:"food/meat.png",    audio:"food/meat.mp3",    example:"" },
      { id:"fd14", sinhala:"එළවළු",   roman:"Elawalu", english:"Vegetables",  image:"food/vegetables.png",audio:"food/vegetables.mp3",example:"" },
      { id:"fd15", sinhala:"පළතුරු",  roman:"Palathuru",english:"Fruits",     image:"food/fruits.png",  audio:"food/fruits.mp3",  example:"" },
      { id:"fd16", sinhala:"ලුණු",    roman:"Lunu",    english:"Salt",        image:"food/salt.png",    audio:"food/salt.mp3",    example:"" },
      { id:"fd17", sinhala:"සීනි",    roman:"Sīni",    english:"Sugar",       image:"food/sugar.png",   audio:"food/sugar.mp3",   example:"" },
      { id:"fd18", sinhala:"පොල්",    roman:"Pol",     english:"Coconut",     image:"food/coconut.png", audio:"food/coconut.mp3", example:"" },
      { id:"fd19", sinhala:"චීස්",    roman:"Chīs",    english:"Cheese",      image:"food/cheese.png",  audio:"food/cheese.mp3",  example:"" },
      { id:"fd20", sinhala:"යුෂ",     roman:"Yusha",   english:"Juice",       image:"food/juice.png",   audio:"food/juice.mp3",   example:"" },
      { id:"fd21", sinhala:"බිස්කට්",  roman:"Biskat",  english:"Biscuit",     image:"food/biscuit.png", audio:"food/biscuit.mp3", example:"" },
      { id:"fd22", sinhala:"ගස්ලබු",  roman:"Gaslabu", english:"Papaya",      image:"food/papaya.png",  audio:"food/papaya.mp3",  example:"" },
      { id:"fd23", sinhala:"තෙල්",    roman:"Thel",    english:"Oil",         image:"food/oil.png",     audio:"food/oil.mp3",     example:"" },
      { id:"fd24", sinhala:"ගම්මිරිස්",roman:"Gammiris",english:"Pepper",      image:"food/pepper.png",  audio:"food/pepper.mp3",  example:"" },
      { id:"fd25", sinhala:"ළූණු",    roman:"Lūnu",    english:"Onion",       image:"food/onion.png",   audio:"food/onion.mp3",   example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 7 – HOME & FURNITURE
  ════════════════════════════════════════════════════════ */
  {
    id: "home",
    title: "Home & Furniture",
    icon: "🏠",
    color: "#1ABC9C",
    words: [
      { id:"h01", sinhala:"ගෙදර",    roman:"Gedara",  english:"House / Home", image:"home/house.png",   audio:"home/house.mp3",   example:"" },
      { id:"h02", sinhala:"කාමරය",   roman:"Kāmaraya",english:"Room",         image:"home/room.png",    audio:"home/room.mp3",    example:"" },
      { id:"h03", sinhala:"දොර",     roman:"Dora",    english:"Door",         image:"home/door.png",    audio:"home/door.mp3",    example:"" },
      { id:"h04", sinhala:"ජනේලය",   roman:"Janēlaya",english:"Window",       image:"home/window.png",  audio:"home/window.mp3",  example:"" },
      { id:"h05", sinhala:"කෑම කාමරය",roman:"Kæma kāmaraya",english:"Kitchen",image:"home/kitchen.png", audio:"home/kitchen.mp3", example:"" },
      { id:"h06", sinhala:"පුටුව",   roman:"Putuwa",  english:"Chair",        image:"home/chair.png",   audio:"home/chair.mp3",   example:"" },
      { id:"h07", sinhala:"මේසය",    roman:"Mēsaya",  english:"Table",        image:"home/table.png",   audio:"home/table.mp3",   example:"" },
      { id:"h08", sinhala:"ඇඳ",      roman:"Æda",     english:"Bed",          image:"home/bed.png",     audio:"home/bed.mp3",     example:"" },
      { id:"h09", sinhala:"නාන කාමරය",roman:"Nāna kāmaraya",english:"Bathroom",image:"home/bathroom.png",audio:"home/bathroom.mp3",example:"" },
      { id:"h10", sinhala:"ශාලාව",   roman:"Śālāwa",  english:"Hall / Living room",image:"home/hall.png",audio:"home/hall.mp3",  example:"" },
      { id:"h11", sinhala:"වහලය",    roman:"Wahalaya",english:"Roof",         image:"home/roof.png",    audio:"home/roof.mp3",    example:"" },
      { id:"h12", sinhala:"බිත්තිය",   roman:"Biththiya",english:"Wall",         image:"home/wall.png",    audio:"home/wall.mp3",    example:"" },
      { id:"h13", sinhala:"බිම",     roman:"Bima",    english:"Floor",        image:"home/floor.png",   audio:"home/floor.mp3",   example:"" },
      { id:"h14", sinhala:"උයන",     roman:"Uyana",   english:"Garden",       image:"home/garden.png",  audio:"home/garden.mp3",  example:"" },
      { id:"h15", sinhala:"ගේට්ටුව",  roman:"Gēttuwa", english:"Gate",         image:"home/gate.png",    audio:"home/gate.mp3",    example:"" },
      { id:"h16", sinhala:"සෝෆාව",   roman:"Sōfāwa",  english:"Sofa",         image:"home/sofa.png",    audio:"home/sofa.mp3",    example:"" },
      { id:"h17", sinhala:"රූපවාහිනිය",roman:"Rūpawāhiniya",english:"Television",image:"home/television.png",audio:"home/television.mp3",example:"" },
      { id:"h18", sinhala:"විදුලි පංකාව",roman:"Viduli pankāwa",english:"Fan",    image:"home/fan.png",     audio:"home/fan.mp3",     example:"" },
      { id:"h19", sinhala:"පහන",     roman:"Pahana",  english:"Lamp",         image:"home/lamp.png",    audio:"home/lamp.mp3",    example:"" },
      { id:"h20", sinhala:"යතුර",    roman:"Yathura", english:"Key",          image:"home/key.png",     audio:"home/key.mp3",     example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 8 – CITY & TRANSPORT
  ════════════════════════════════════════════════════════ */
  {
    id: "city",
    title: "City & Transport",
    icon: "🚌",
    color: "#2980B9",
    words: [
      { id:"cy01", sinhala:"පාර",        roman:"Pāra",      english:"Road / Street",  image:"city/street.png",  audio:"city/street.mp3",  example:"" },
      { id:"cy02", sinhala:"බස්",         roman:"Bas",       english:"Bus",            image:"city/bus.png",     audio:"city/bus.mp3",     example:"" },
      { id:"cy03", sinhala:"බස් නැවතුම",    roman:"bas nævatuma",	english:"Bus stop",       image:"city/bus-stop.png",audio:"city/bus-stop.mp3",example:"" },
      { id:"cy04", sinhala:"ගුවන් තොටුපල",roman:"Guwan thothupala",english:"Airport", image:"city/airport.png", audio:"city/airport.mp3", example:"" },
      { id:"cy05", sinhala:"දුම්රිය",    roman:"Dumriya",   english:"Train",          image:"city/train.png",   audio:"city/train.mp3",   example:"" },
      { id:"cy06", sinhala:"රෝහල",       roman:"Rōhala",    english:"Hospital",       image:"city/hospital.png",audio:"city/hospital.mp3",example:"" },
      { id:"cy07", sinhala:"පාසල",       roman:"Pāsala",    english:"School",         image:"city/school.png",  audio:"city/school.mp3",  example:"" },
      { id:"cy08", sinhala:"කඩේ",        roman:"Kadē",      english:"Shop / Store",   image:"city/shop.png",    audio:"city/shop.mp3",    example:"" },
      { id:"cy09", sinhala:"බැංකුව",     roman:"Bænkuwa",   english:"Bank",           image:"city/bank.png",    audio:"city/bank.mp3",    example:"" },
      { id:"cy10", sinhala:"කාර්",       roman:"Kār",       english:"Car",            image:"city/car.png",     audio:"city/car.mp3",     example:"" },
      { id:"cy11", sinhala:"නගරය",       roman:"Nagaraya",  english:"City",           image:"city/city.png",    audio:"city/city.mp3",    example:"" },
      { id:"cy12", sinhala:"ගම",         roman:"Gama",      english:"Village",        image:"city/village.png", audio:"city/village.mp3", example:"" },
      { id:"cy13", sinhala:"තැපැල් කන්තෝරුව",roman:"Thæpæl kanthōruwa",english:"Post Office",image:"city/post-office.png",audio:"city/post-office.mp3",example:"" },
      { id:"cy14", sinhala:"පොලිසිය",     roman:"Polisiya",  english:"Police Station", image:"city/police-station.png",audio:"city/police-station.mp3",example:"" },
      { id:"cy15", sinhala:"පාලම",       roman:"Pālama",    english:"Bridge",         image:"city/bridge.png",  audio:"city/bridge.mp3",  example:"" },
      { id:"cy16", sinhala:"උද්‍යානය",    roman:"Udyānaya",  english:"Park",           image:"city/park.png",    audio:"city/park.mp3",    example:"" },
      { id:"cy17", sinhala:"ගොඩනැගිල්ල",  roman:"Godanægilla",english:"Building",      image:"city/building.png",audio:"city/building.mp3",example:"" },
      { id:"cy18", sinhala:"අවන්හල",     roman:"Avanhala",  english:"Restaurant",     image:"city/restaurant.png",audio:"city/restaurant.mp3",example:"" },
      { id:"cy19", sinhala:"සිනමා ශාලාව", roman:"Sinamā śālāwa",english:"Cinema",     image:"city/cinema.png",  audio:"city/cinema.mp3",  example:"" },
      { id:"cy20", sinhala:"ත්‍රිරෝද රථය", roman:"Thrirōda rathaya",english:"Tuk-tuk", image:"city/tuktuk.png",  audio:"city/tuktuk.mp3",  example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 9 – NATURE & WEATHER
  ════════════════════════════════════════════════════════ */
  {
    id: "nature",
    title: "Nature & Weather",
    icon: "🌿",
    color: "#27AE60",
    words: [
      { id:"nw01", sinhala:"වැස්ස",   roman:"Wæssa",   english:"Rain",       image:"nature/rain.png",     audio:"nature/rain.mp3",     example:"" },
      { id:"nw02", sinhala:"හිරු",    roman:"Hiru",    english:"Sun",        image:"nature/sun.png",      audio:"nature/sun.mp3",      example:"" },
      { id:"nw03", sinhala:"කන්ද",    roman:"Kanda",   english:"Mountain",   image:"nature/mountain.png", audio:"nature/mountain.mp3", example:"" },
      { id:"nw04", sinhala:"ගඟ",      roman:"Ganga",   english:"River",      image:"nature/river.png",    audio:"nature/river.mp3",    example:"" },
      { id:"nw05", sinhala:"මුහුද",   roman:"Muhuda",  english:"Sea / Ocean",image:"nature/sea.png",      audio:"nature/sea.mp3",      example:"" },
      { id:"nw06", sinhala:"ගස",      roman:"Gasa",    english:"Tree",       image:"nature/tree.png",     audio:"nature/tree.mp3",     example:"" },
      { id:"nw07", sinhala:"මල",      roman:"Mala",    english:"Flower",     image:"nature/flower.png",   audio:"nature/flower.mp3",   example:"" },
      { id:"nw08", sinhala:"සතුන්",   roman:"Sathun",  english:"Animals",    image:"nature/animals.png",  audio:"nature/animals.mp3",  example:"" },
      { id:"nw09", sinhala:"වලාකුළ",  roman:"Walākula",english:"Cloud",      image:"nature/cloud.png",    audio:"nature/cloud.mp3",    example:"" },
      { id:"nw10", sinhala:"සුළඟ",    roman:"Sulanga", english:"Wind",       image:"nature/wind.png",     audio:"nature/wind.mp3",     example:"" },
      { id:"nw11", sinhala:"ගින්න",   roman:"Ginna",   english:"Fire",       image:"nature/fire.png",     audio:"nature/fire.mp3",     example:"" },
      { id:"nw12", sinhala:"පොළොව",   roman:"Polowa",  english:"Earth / Ground",image:"nature/earth.png",  audio:"nature/earth.mp3",  example:"" },
      { id:"nw13", sinhala:"අහස",     roman:"Ahasa",   english:"Sky",        image:"nature/sky.png",      audio:"nature/sky.mp3",      example:"" },
      { id:"nw14", sinhala:"තරුව",    roman:"Tharuwa", english:"Star",       image:"nature/star.png",     audio:"nature/star.mp3",     example:"" },
      { id:"nw15", sinhala:"හඳ",      roman:"Handa",   english:"Moon",       image:"nature/moon.png",     audio:"nature/moon.mp3",     example:"" },
      { id:"nw16", sinhala:"වනාන්තරය",roman:"Wanāntaraya",english:"Forest",  image:"nature/forest.png",   audio:"nature/forest.mp3",   example:"" },
      { id:"nw17", sinhala:"වැව",     roman:"Wæwa",    english:"Lake",       image:"nature/lake.png",     audio:"nature/lake.mp3",     example:"" },
      { id:"nw18", sinhala:"දියඇල්ල", roman:"Diyaælla",english:"Waterfall",  image:"nature/waterfall.png",audio:"nature/waterfall.mp3",example:"" },
      { id:"nw19", sinhala:"වැලි",    roman:"Wæli",    english:"Sand",       image:"nature/sand.png",     audio:"nature/sand.mp3",     example:"" },
      { id:"nw20", sinhala:"ගල",      roman:"Gala",    english:"Stone / Rock",image:"nature/stone.png",   audio:"nature/stone.mp3",   example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 11 – PERSONAL PRONOUNS
  ════════════════════════════════════════════════════════ */
  {
    id: "pronouns",
    title: "Pronouns & People",
    icon: "🙋",
    color: "#8E44AD",
    words: [
      { id:"pr01", sinhala:"මම",    roman:"Mama",    english:"I / Me",      image:"pronouns/i.png",   audio:"pronouns/i.mp3",   example:"මම ශිෂ්‍යයෙකු." },
      { id:"pr02", sinhala:"ඔයා",   roman:"Oyā",     english:"You",         image:"pronouns/you.png", audio:"pronouns/you.mp3", example:"" },
      { id:"pr03", sinhala:"ඔහු",   roman:"Ohu",     english:"He",          image:"pronouns/he.png",  audio:"pronouns/he.mp3",  example:"" },
      { id:"pr04", sinhala:"ඇය",    roman:"Æya",     english:"She",         image:"pronouns/she.png", audio:"pronouns/she.mp3", example:"" },
      { id:"pr05", sinhala:"අපි",   roman:"Api",     english:"We",          image:"pronouns/we.png",  audio:"pronouns/we.mp3",  example:"" },
      { id:"pr06", sinhala:"ඔවුන්", roman:"Owun",    english:"They",        image:"pronouns/they.png",audio:"pronouns/they.mp3",example:"" },
      { id:"pr07", sinhala:"මේක",   roman:"Mēka",    english:"This (thing)",image:"pronouns/this.png",audio:"pronouns/this.mp3",example:"" },
      { id:"pr08", sinhala:"ඒක",    roman:"Ēka",     english:"That (thing)",image:"pronouns/that.png",audio:"pronouns/that.mp3",example:"" },
      { id:"pr09", sinhala:"ඔබ",    roman:"Oba",     english:"You (Formal)",image:"pronouns/you-formal.png",audio:"pronouns/you-formal.mp3",example:"" },
      { id:"pr10", sinhala:"එයා",   roman:"Eyā",     english:"He/She (Informal)",image:"pronouns/he-she-informal.png",audio:"pronouns/he-she-informal.mp3",example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 13 – BODY PARTS
  ════════════════════════════════════════════════════════ */
  {
    id: "body",
    title: "Body Parts",
    icon: "👁️",
    color: "#F1C40F",
    words: [
      { id:"bp01", sinhala:"ඔළුව",   roman:"Oluwa",   english:"Head",    image:"body/head.png",    audio:"body/head.mp3",    example:"මගේ ඔළුව රිදෙනවා." },
      { id:"bp02", sinhala:"අත",     roman:"Atha",    english:"Hand",    image:"body/hand.png",    audio:"body/hand.mp3",    example:"" },
      { id:"bp03", sinhala:"කකුල",   roman:"Kakula",  english:"Leg",     image:"body/leg.png",     audio:"body/leg.mp3",     example:"" },
      { id:"bp04", sinhala:"ඇස",     roman:"Æsa",     english:"Eye",     image:"body/eye.png",     audio:"body/eye.mp3",     example:"" },
      { id:"bp05", sinhala:"නහය",    roman:"Nahaya",  english:"Nose",    image:"body/nose.png",    audio:"body/nose.mp3",    example:"" },
      { id:"bp06", sinhala:"කට",     roman:"Kata",    english:"Mouth",   image:"body/mouth.png",   audio:"body/mouth.mp3",   example:"" },
      { id:"bp07", sinhala:"කන",     roman:"Kana",    english:"Ear",     image:"body/ear.png",     audio:"body/ear.mp3",     example:"" },
      { id:"bp08", sinhala:"කොණ්ඩය", roman:"Kondaya", english:"Hair",    image:"body/hair.png",    audio:"body/hair.mp3",    example:"" },
      { id:"bp09", sinhala:"දත",     roman:"Datha",   english:"Tooth",   image:"body/tooth.png",   audio:"body/tooth.mp3",   example:"" },
      { id:"bp10", sinhala:"බඩ",     roman:"Bada",    english:"Stomach", image:"body/stomach.png", audio:"body/stomach.mp3", example:"මට බඩගිනියි." },
      { id:"bp11", sinhala:"බෙල්ල",   roman:"Bella",   english:"Neck",    image:"body/neck.png",    audio:"body/neck.mp3",    example:"" },
      { id:"bp12", sinhala:"උරහිස",  roman:"Urahisa", english:"Shoulder",image:"body/shoulder.png",audio:"body/shoulder.mp3",example:"" },
      { id:"bp13", sinhala:"පපුව",   roman:"Papuwa",  english:"Chest",   image:"body/chest.png",   audio:"body/chest.mp3",   example:"" },
      { id:"bp14", sinhala:"පිට",     roman:"Pita",    english:"Back",    image:"body/back.png",    audio:"body/back.mp3",    example:"" },
      { id:"bp15", sinhala:"ඇඟිල්ල",  roman:"Ængilla", english:"Finger",  image:"body/finger.png",  audio:"body/finger.mp3",  example:"" },
      { id:"bp16", sinhala:"නියපොත්ත",roman:"Niyapoththa",english:"Nail", image:"body/nail.png",    audio:"body/nail.mp3",    example:"" },
      { id:"bp17", sinhala:"දණහිස",  roman:"Danahisa",english:"Knee",    image:"body/knee.png",    audio:"body/knee.mp3",    example:"" },
      { id:"bp18", sinhala:"තොල",    roman:"Thola",   english:"Lip",     image:"body/lip.png",     audio:"body/lip.mp3",     example:"" },
      { id:"bp19", sinhala:"දිව",     roman:"Diwa",    english:"Tongue",  image:"body/tongue.png",  audio:"body/tongue.mp3",  example:"" },
      { id:"bp20", sinhala:"රුධිරය",  roman:"Rudhiraya",english:"Blood",  image:"body/blood.png",   audio:"body/blood.mp3",   example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 14 – ANIMALS
  ════════════════════════════════════════════════════════ */
  {
    id: "animals",
    title: "Animals",
    icon: "🐕",
    color: "#E67E22",
    words: [
      { id:"an01", sinhala:"බල්ලා",   roman:"Ballā",   english:"Dog",      image:"animals/dog.png",      audio:"animals/dog.mp3",      example:"" },
      { id:"an02", sinhala:"පූසා",    roman:"Pūsā",    english:"Cat",      image:"animals/cat.png",      audio:"animals/cat.mp3",      example:"" },
      { id:"an03", sinhala:"අලියා",   roman:"Aliyā",   english:"Elephant", image:"animals/elephant.png", audio:"animals/elephant.mp3", example:"" },
      { id:"an04", sinhala:"කුරුල්ලා", roman:"Kurullā", english:"Bird",     image:"animals/bird.png",     audio:"animals/bird.mp3",     example:"" },
      { id:"an05", sinhala:"හරකා",    roman:"Harakā",  english:"Cow / Bull",image:"animals/cow.png",     audio:"animals/cow.mp3",      example:"" },
      { id:"an06", sinhala:"වඳුරා",   roman:"Vandurā", english:"Monkey",   image:"animals/monkey.png",   audio:"animals/monkey.mp3",   example:"" },
      { id:"an07", sinhala:"සර්පයා",  roman:"Sarpayā", english:"Snake",    image:"animals/snake.png",    audio:"animals/snake.mp3",    example:"" },
      { id:"an08", sinhala:"කොටියා",  roman:"Kotiyā",  english:"Tiger",    image:"animals/tiger.png",    audio:"animals/tiger.mp3",    example:"" },
      { id:"an09", sinhala:"සිංහයා",  roman:"Sinhayā", english:"Lion",     image:"animals/lion.png",     audio:"animals/lion.mp3",     example:"" },
      { id:"an10", sinhala:"ඌරා",     roman:"Ūrā",     english:"Pig",      image:"animals/pig.png",      audio:"animals/pig.mp3",      example:"" },
      { id:"an11", sinhala:"අශ්වයා",  roman:"Ashwayā", english:"Horse",    image:"animals/horse.png",    audio:"animals/horse.mp3",    example:"" },
      { id:"an12", sinhala:"මුවා",    roman:"Muwā",    english:"Deer",     image:"animals/deer.png",     audio:"animals/deer.mp3",     example:"" },
      { id:"an13", sinhala:"වලහා",   roman:"Walahā",  english:"Bear",     image:"animals/bear.png",     audio:"animals/bear.mp3",     example:"" },
      { id:"an14", sinhala:"හාවා",    roman:"Hāwā",    english:"Rabbit",   image:"animals/rabbit.png",   audio:"animals/rabbit.mp3",   example:"" },
      { id:"an15", sinhala:"මීයා",    roman:"Mīyā",    english:"Mouse / Rat",image:"animals/mouse.png",   audio:"animals/mouse.mp3",   example:"" },
      { id:"an16", sinhala:"කිඹුලා",  roman:"Kimbulā", english:"Crocodile",image:"animals/crocodile.png",audio:"animals/crocodile.mp3",example:"" },
      { id:"an17", sinhala:"කැස්බෑවා", roman:"Kæsbǣwā", english:"Turtle",   image:"animals/turtle.png",   audio:"animals/turtle.mp3",   example:"" },
      { id:"an18", sinhala:"ගෙම්බා",  roman:"Gembā",   english:"Frog",     image:"animals/frog.png",     audio:"animals/frog.mp3",     example:"" },
      { id:"an19", sinhala:"මකුළුවා",  roman:"Makuluwā",english:"Spider",   image:"animals/spider.png",   audio:"animals/spider.mp3",   example:"" },
      { id:"an20", sinhala:"සමනලයා", roman:"Samanalayā",english:"Butterfly",image:"animals/butterfly.png",audio:"animals/butterfly.mp3",example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 15 – OCCUPATIONS
  ════════════════════════════════════════════════════════ */
  {
    id: "jobs",
    title: "Occupations",
    icon: "🧑‍⚕️",
    color: "#34495E",
    words: [
      { id:"jb01", sinhala:"දොස්තර",      roman:"Dosthara",         english:"Doctor",         image:"jobs/doctor.png",     audio:"jobs/doctor.mp3",     example:"" },
      { id:"jb02", sinhala:"ගුරුවරයා",     roman:"Guruvarayā",       english:"Teacher",        image:"jobs/teacher.png",    audio:"jobs/teacher.mp3",    example:"" },
      { id:"jb03", sinhala:"ගොවියා",       roman:"Goviyā",           english:"Farmer",         image:"jobs/farmer.png",     audio:"jobs/farmer.mp3",     example:"" },
      { id:"jb04", sinhala:"පොලිස් නිලධාරියා",roman:"Polis niladhāriyā",english:"Police Officer", image:"jobs/police.png",     audio:"jobs/police.mp3",     example:"" },
      { id:"jb05", sinhala:"රියදුරා",      roman:"Riyadurā",         english:"Driver",         image:"jobs/driver.png",     audio:"jobs/driver.mp3",     example:"" },
      { id:"jb06", sinhala:"මුදලාලි",      roman:"Mudalāli",         english:"Shopkeeper",     image:"jobs/shopkeeper.png", audio:"jobs/shopkeeper.mp3", example:"" },
      { id:"jb07", sinhala:"ගායකයා",      roman:"Gāyakayā",         english:"Singer",         image:"jobs/singer.png",     audio:"jobs/singer.mp3",     example:"" },
      { id:"jb08", sinhala:"නළුවා",       roman:"Naluvā",           english:"Actor",          image:"jobs/actor.png",      audio:"jobs/actor.mp3",      example:"" },
      { id:"jb09", sinhala:"ඉංජිනේරුවා",   roman:"Injinēruvā",       english:"Engineer",       image:"jobs/engineer.png",   audio:"jobs/engineer.mp3",   example:"" },
      { id:"jb10", sinhala:"හෙදිය",       roman:"Hediya",           english:"Nurse",          image:"jobs/nurse.png",      audio:"jobs/nurse.mp3",      example:"" },
      { id:"jb11", sinhala:"ලේඛකයා",      roman:"Lēkhakayā",        english:"Writer",         image:"jobs/writer.png",     audio:"jobs/writer.mp3",     example:"" },
      { id:"jb12", sinhala:"නීතිඥයා",     roman:"Nīthignayā",       english:"Lawyer",         image:"jobs/lawyer.png",     audio:"jobs/lawyer.mp3",     example:"" },
      { id:"jb13", sinhala:"ගණකාධිකාරී",  roman:"Ganakādhikārī",    english:"Accountant",     image:"jobs/accountant.png", audio:"jobs/accountant.mp3", example:"" },
      { id:"jb14", sinhala:"වඩුබාස්",      roman:"Wadubās",          english:"Carpenter",      image:"jobs/carpenter.png",  audio:"jobs/carpenter.mp3",  example:"" },
      { id:"jb15", sinhala:"බාබර්",       roman:"Bābar",            english:"Barber",         image:"jobs/barber.png",     audio:"jobs/barber.mp3",     example:"" },
      { id:"jb16", sinhala:"පූජකයා",      roman:"Pūjakayā",         english:"Priest",         image:"jobs/priest.png",     audio:"jobs/priest.mp3",     example:"" },
      { id:"jb17", sinhala:"ආරක්ෂකයා",    roman:"Arakshakayā",      english:"Security Guard", image:"jobs/security.png",   audio:"jobs/security.mp3",   example:"" },
      { id:"jb18", sinhala:"සූපවේදියා",    roman:"Sūpawēdiyā",       english:"Chef",           image:"jobs/chef.png",       audio:"jobs/chef.mp3",       example:"" },
      { id:"jb19", sinhala:"ධීවරයා",      roman:"Dhīvarayā",        english:"Fisherman",      image:"jobs/fisherman.png",  audio:"jobs/fisherman.mp3",  example:"" },
      { id:"jb20", sinhala:"විදුලි කාර්මිකයා",roman:"Viduli kārmikayā",english:"Electrician",  image:"jobs/electrician.png",audio:"jobs/electrician.mp3",example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 17 – CLOTHES
  ════════════════════════════════════════════════════════ */
  {
    id: "clothes",
    title: "Clothes",
    icon: "👕",
    color: "#D35400",
    words: [
      { id:"cl01", sinhala:"කමිසය",   roman:"Kamisaya",  english:"Shirt",    image:"clothes/shirt.png",    audio:"clothes/shirt.mp3",    example:"" },
      { id:"cl02", sinhala:"කලිසම",   roman:"Kalisama",  english:"Pants",    image:"clothes/pants.png",    audio:"clothes/pants.mp3",    example:"" },
      { id:"cl03", sinhala:"ගවුම",    roman:"Gawuma",    english:"Dress",    image:"clothes/dress.png",    audio:"clothes/dress.mp3",    example:"" },
      { id:"cl04", sinhala:"සපත්තු",  roman:"Sapaththu", english:"Shoes",    image:"clothes/shoes.png",    audio:"clothes/shoes.mp3",    example:"" },
      { id:"cl05", sinhala:"තොප්පිය", roman:"Thoppiya",  english:"Hat",      image:"clothes/hat.png",      audio:"clothes/hat.mp3",      example:"" },
      { id:"cl06", sinhala:"සරම",    roman:"Sarama",    english:"Sarong",   image:"clothes/sarong.png",   audio:"clothes/sarong.mp3",   example:"" },
      { id:"cl07", sinhala:"සාරිය",   roman:"Sāriya",    english:"Saree",    image:"clothes/saree.png",    audio:"clothes/saree.mp3",    example:"" },
      { id:"cl08", sinhala:"මේස්",    roman:"Mēs",       english:"Socks",    image:"clothes/socks.png",    audio:"clothes/socks.mp3",    example:"" },
      { id:"cl09", sinhala:"සාය",     roman:"Sāya",      english:"Skirt",    image:"clothes/skirt.png",    audio:"clothes/skirt.mp3",    example:"" },
      { id:"cl10", sinhala:"කුඩය",    roman:"Kudaya",    english:"Umbrella", image:"clothes/umbrella.png", audio:"clothes/umbrella.mp3", example:"" },
      { id:"cl11", sinhala:"කබාය",    roman:"Kabāya",    english:"Coat",     image:"clothes/coat.png",     audio:"clothes/coat.mp3",     example:"" },
      { id:"cl12", sinhala:"ජැකට්ටුව", roman:"Jækattuwa", english:"Jacket",   image:"clothes/jacket.png",   audio:"clothes/jacket.mp3",   example:"" },
      { id:"cl13", sinhala:"ටයි පටිය", roman:"Tayi patiya",english:"Tie",      image:"clothes/tie.png",      audio:"clothes/tie.mp3",      example:"" },
      { id:"cl14", sinhala:"පටිය",     roman:"Patiya",    english:"Belt",     image:"clothes/belt.png",     audio:"clothes/belt.mp3",     example:"" },
      { id:"cl15", sinhala:"අත්වැසුම්", roman:"Athwæsum",  english:"Gloves",   image:"clothes/gloves.png",   audio:"clothes/gloves.mp3",   example:"" },
      { id:"cl16", sinhala:"මුදුව",    roman:"Muduwa",    english:"Ring",     image:"clothes/ring.png",     audio:"clothes/ring.mp3",     example:"" },
      { id:"cl17", sinhala:"මාලය",    roman:"Mālaya",    english:"Necklace", image:"clothes/necklace.png", audio:"clothes/necklace.mp3", example:"" },
      { id:"cl18", sinhala:"කණ්ණාඩිය", roman:"Kannādiya", english:"Glasses",  image:"clothes/glasses.png",  audio:"clothes/glasses.mp3",  example:"" },
      { id:"cl19", sinhala:"ඔරලෝසුව", roman:"Oralōsuwa", english:"Watch",    image:"clothes/watch.png",    audio:"clothes/watch.mp3",    example:"" },
      { id:"cl20", sinhala:"සාක්කුව",  roman:"Sākkuwa",   english:"Pocket",   image:"clothes/pocket.png",   audio:"clothes/pocket.mp3",   example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 18 – HEALTH
  ════════════════════════════════════════════════════════ */
  {
    id: "health",
    title: "Health & Illnesses",
    icon: "🩺",
    color: "#C0392B",
    words: [
      { id:"he01", sinhala:"රෝගය",      roman:"Rōgaya",       english:"Disease / Illness",image:"health/disease.png",   audio:"health/disease.mp3",   example:"" },
      { id:"he02", sinhala:"උණ",        roman:"Una",          english:"Fever",        image:"health/fever.png",     audio:"health/fever.mp3",     example:"" },
      { id:"he03", sinhala:"කැස්ස",     roman:"Kæssa",        english:"Cough",        image:"health/cough.png",     audio:"health/cough.mp3",     example:"" },
      { id:"he04", sinhala:"හෙම්බිරිස්සාව",roman:"Hembirissāwa",english:"Cold / Catarrh",image:"health/cold.png",      audio:"health/cold.mp3",      example:"" },
      { id:"he05", sinhala:"හිසරදය",    roman:"Hisaradaya",   english:"Headache",     image:"health/headache.png",  audio:"health/headache.mp3",  example:"" },
      { id:"he06", sinhala:"බඩේ අමාරුව", roman:"Badē amāruwa", english:"Stomachache",  image:"health/stomachache.png",audio:"health/stomachache.mp3",example:"" },
      { id:"he07", sinhala:"දත් කැක්කුම", roman:"Dath kækkuma", english:"Toothache",    image:"health/toothache.png", audio:"health/toothache.mp3", example:"" },
      { id:"he08", sinhala:"කැක්කුම",   roman:"Kækkuma",      english:"Pain / Ache",  image:"health/pain.png",      audio:"health/pain.mp3",      example:"" },
      { id:"he09", sinhala:"තුවාලය",    roman:"Thuwālaya",    english:"Wound",        image:"health/wound.png",     audio:"health/wound.mp3",     example:"" },
      { id:"he10", sinhala:"බෙහෙත්",    roman:"Beheth",       english:"Medicine",     image:"health/medicine.png",  audio:"health/medicine.mp3",  example:"" },
      { id:"he11", sinhala:"පෙත්ත",     roman:"Peththa",      english:"Pill / Tablet",image:"health/pill.png",      audio:"health/pill.mp3",      example:"" },
      { id:"he12", sinhala:"එන්නත",     roman:"Ennatha",      english:"Injection",    image:"health/injection.png", audio:"health/injection.mp3", example:"" },
      { id:"he13", sinhala:"ලේ",        roman:"Lē",           english:"Blood",        image:"health/blood.png",     audio:"health/blood.mp3",     example:"" },
      { id:"he14", sinhala:"වමනය",      roman:"Wamanaya",     english:"Vomiting",     image:"health/vomiting.png",  audio:"health/vomiting.mp3",  example:"" },
      { id:"he15", sinhala:"ඇදුම",      roman:"Æduma",        english:"Asthma",       image:"health/asthma.png",    audio:"health/asthma.mp3",    example:"" },
      { id:"he16", sinhala:"දියවැඩියාව", roman:"Diyawædiyāwa", english:"Diabetes",     image:"health/diabetes.png",  audio:"health/diabetes.mp3",  example:"" },
      { id:"he17", sinhala:"ෆාමසිය",    roman:"Fāmasiya",     english:"Pharmacy",     image:"health/pharmacy.png",  audio:"health/pharmacy.mp3",  example:"" },
      { id:"he18", sinhala:"රෝගියා",    roman:"Rōgiyā",       english:"Patient",      image:"health/patient.png",   audio:"health/patient.mp3",   example:"" },
      { id:"he19", sinhala:"සනීප",      roman:"Sanīpa",       english:"Healthy / Well",image:"health/healthy.png",   audio:"health/healthy.mp3",   example:"" },
      { id:"he20", sinhala:"අසනීප",     roman:"Asanīpa",      english:"Sick / Unwell",image:"health/sick.png",      audio:"health/sick.mp3",      example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 10 – COMMON VERBS
  ════════════════════════════════════════════════════════ */
  {
    id: "verbs",
    title: "Common Verbs",
    icon: "⚡",
    color: "#FF6B35",
    words: [
      { id:"v01", sinhala:"ඉන්නවා",   roman:"Innawā",   english:"To be / stay", image:"verbs/be.png",    audio:"verbs/be.mp3",    example:"මම ගෙදර ඉන්නවා." },
      { id:"v02", sinhala:"යනවා",     roman:"Yanawā",   english:"To go",        image:"verbs/go.png",    audio:"verbs/go.mp3",    example:"මම පාසලට යනවා." },
      { id:"v03", sinhala:"එනවා",     roman:"Enawā",    english:"To come",      image:"verbs/come.png",  audio:"verbs/come.mp3",  example:"" },
      { id:"v04", sinhala:"කනවා",     roman:"Kanawā",   english:"To eat",       image:"verbs/eat.png",   audio:"verbs/eat.mp3",   example:"" },
      { id:"v05", sinhala:"බොනවා",    roman:"Bonawā",   english:"To drink",     image:"verbs/drink.png", audio:"verbs/drink.mp3", example:"" },
      { id:"v06", sinhala:"කරනවා",    roman:"Karanawā", english:"To do",        image:"verbs/do.png",    audio:"verbs/do.mp3",    example:"" },
      { id:"v07", sinhala:"දකිනවා",   roman:"Dakinawā", english:"To see",       image:"verbs/see.png",   audio:"verbs/see.mp3",   example:"" },
      { id:"v08", sinhala:"දන්නවා",   roman:"Dannawā",  english:"To know",      image:"verbs/know.png",  audio:"verbs/know.mp3",  example:"" },
      { id:"v09", sinhala:"ඕනා",      roman:"Ōnā",      english:"To want/need", image:"verbs/want.png",  audio:"verbs/want.mp3",  example:"" },
      { id:"v10", sinhala:"කැමැතියි", roman:"Kæmæthiyi",english:"To like",      image:"verbs/like.png",  audio:"verbs/like.mp3",  example:"" },
      { id:"v11", sinhala:"නිදාගන්නවා",roman:"Nidāgannawā",english:"To sleep",  image:"verbs/sleep.png", audio:"verbs/sleep.mp3", example:"" },
      { id:"v12", sinhala:"ගන්නවා",   roman:"Gannawā",  english:"To buy/take",  image:"verbs/buy.png",   audio:"verbs/buy.mp3",   example:"" },
      { id:"v13", sinhala:"කියනවා",   roman:"Kiyanawā", english:"To say/read",  image:"verbs/say.png",   audio:"verbs/say.mp3",   example:"" },
      { id:"v14", sinhala:"ඇවිදිනවා", roman:"Ævidinawā",english:"To walk",    image:"verbs/walk.png",  audio:"verbs/walk.mp3",  example:"" },
      { id:"v15", sinhala:"වැඩ කරනවා",roman:"Wæda karanawā",english:"To work",  image:"verbs/work.png",  audio:"verbs/work.mp3",  example:"" },
      { id:"v16", sinhala:"ලියනවා",   roman:"Liyanawā", english:"To write",     image:"verbs/write.png", audio:"verbs/write.mp3", example:"" },
      { id:"v17", sinhala:"කියවනවා",  roman:"Kiyawanawā",english:"To read",     image:"verbs/read.png",  audio:"verbs/read.mp3",  example:"" },
      { id:"v18", sinhala:"දුවනවා",   roman:"Duwanawā", english:"To run",       image:"verbs/run.png",   audio:"verbs/run.mp3",   example:"" },
      { id:"v19", sinhala:"අහනවා",    roman:"Ahanawā",  english:"To ask/listen",image:"verbs/listen.png",audio:"verbs/listen.mp3",example:"" },
      { id:"v20", sinhala:"කතා කරනවා",roman:"Kathā karanawā",english:"To speak / talk",image:"verbs/speak.png",audio:"verbs/speak.mp3",example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 16 – ADJECTIVES
  ════════════════════════════════════════════════════════ */
  {
    id: "adjectives",
    title: "Adjectives",
    icon: "✨",
    color: "#16A085",
    words: [
      { id:"adj01", sinhala:"ලොකු",    roman:"Loku",     english:"Big",        image:"adjectives/big.png",       audio:"adjectives/big.mp3",       example:"ලොකු ගෙයක්." },
      { id:"adj02", sinhala:"පොඩි",    roman:"Podi",     english:"Small",      image:"adjectives/small.png",     audio:"adjectives/small.mp3",     example:"" },
      { id:"adj03", sinhala:"හොඳ",     roman:"Honda",    english:"Good",       image:"adjectives/good.png",      audio:"adjectives/good.mp3",      example:"හොඳ ළමයෙක්." },
      { id:"adj04", sinhala:"නරක",     roman:"Naraka",   english:"Bad",        image:"adjectives/bad.png",       audio:"adjectives/bad.mp3",       example:"" },
      { id:"adj05", sinhala:"රස්නේ",   roman:"Rasnē",    english:"Hot",        image:"adjectives/hot.png",       audio:"adjectives/hot.mp3",       example:"" },
      { id:"adj06", sinhala:"සීතල",    roman:"Sīthala",  english:"Cold",       image:"adjectives/cold.png",      audio:"adjectives/cold.mp3",      example:"" },
      { id:"adj07", sinhala:"ලස්සන",   roman:"Lassana",  english:"Beautiful",  image:"adjectives/beautiful.png", audio:"adjectives/beautiful.mp3", example:"" },
      { id:"adj08", sinhala:"වේගවත්",  roman:"Wēgawath", english:"Fast",       image:"adjectives/fast.png",      audio:"adjectives/fast.mp3",      example:"" },
      { id:"adj09", sinhala:"හෙමින්",  roman:"Hemin",    english:"Slow",       image:"adjectives/slow.png",      audio:"adjectives/slow.mp3",      example:"" },
      { id:"adj10", sinhala:"සතුටු",   roman:"Sathutu",  english:"Happy",      image:"adjectives/happy.png",     audio:"adjectives/happy.mp3",     example:"" },
      { id:"adj11", sinhala:"අලුත්",   roman:"Aluth",    english:"New",        image:"adjectives/new.png",       audio:"adjectives/new.mp3",       example:"" },
      { id:"adj12", sinhala:"පරණ",     roman:"Parana",   english:"Old",        image:"adjectives/old.png",       audio:"adjectives/old.mp3",       example:"" },
      { id:"adj13", sinhala:"ලාබ",     roman:"Lāba",     english:"Cheap",      image:"adjectives/cheap.png",     audio:"adjectives/cheap.mp3",     example:"" },
      { id:"adj14", sinhala:"ගණන්",    roman:"Ganan",    english:"Expensive",  image:"adjectives/expensive.png", audio:"adjectives/expensive.mp3", example:"" },
      { id:"adj15", sinhala:"ලේසි",    roman:"Lēsi",     english:"Easy",       image:"adjectives/easy.png",      audio:"adjectives/easy.mp3",      example:"" },
      { id:"adj16", sinhala:"අමාරු",   roman:"Amāru",    english:"Difficult",  image:"adjectives/difficult.png", audio:"adjectives/difficult.mp3", example:"" },
      { id:"adj17", sinhala:"පිරිසිදු", roman:"Pirisidu", english:"Clean",      image:"adjectives/clean.png",     audio:"adjectives/clean.mp3",     example:"" },
      { id:"adj18", sinhala:"අපිරිසිදු",roman:"Apirisidu",english:"Dirty",      image:"adjectives/dirty.png",     audio:"adjectives/dirty.mp3",     example:"" },
      { id:"adj19", sinhala:"උස",      roman:"Usa",      english:"Tall",       image:"adjectives/tall.png",      audio:"adjectives/tall.mp3",      example:"" },
      { id:"adj20", sinhala:"මිටි",    roman:"Miti",     english:"Short",      image:"adjectives/short.png",     audio:"adjectives/short.mp3",     example:"" }
    ]
  },

  /* ════════════════════════════════════════════════════════
     CATEGORY 12 – QUESTION WORDS
  ════════════════════════════════════════════════════════ */
  {
    id: "questions",
    title: "Question Words",
    icon: "❓",
    color: "#E74C3C",
    words: [
      { id:"q01", sinhala:"මොකක්ද",  roman:"Mokakda",   english:"What",   image:"questions/what.png",  audio:"questions/what.mp3",  example:"ඒ මොකක්ද?" },
      { id:"q02", sinhala:"කොහේද",   roman:"Kohēda",    english:"Where",  image:"questions/where.png", audio:"questions/where.mp3", example:"" },
      { id:"q03", sinhala:"කවදාද",   roman:"Kawadāda",  english:"When",   image:"questions/when.png",  audio:"questions/when.mp3",  example:"" },
      { id:"q04", sinhala:"කවුද",    roman:"Kawuda",    english:"Who",    image:"questions/who.png",   audio:"questions/who.mp3",   example:"" },
      { id:"q05", sinhala:"කොහොමද",  roman:"Kohomada",  english:"How",    image:"questions/how.png",   audio:"questions/how.mp3",   example:"" },
      { id:"q06", sinhala:"ඇයි",      roman:"Æyi",       english:"Why",    image:"questions/why.png",   audio:"questions/why.mp3",   example:"" },
      { id:"q07", sinhala:"කීයද",    roman:"Kīyada",    english:"How much/many", image:"questions/how-much.png",audio:"questions/how-much.mp3",example:"" },
      { id:"q08", sinhala:"කොයි",    roman:"Koyi",      english:"Which",  image:"questions/which.png", audio:"questions/which.mp3", example:"" },
      { id:"q09", sinhala:"කාගේද",   roman:"Kāgēda",    english:"Whose",  image:"questions/whose.png", audio:"questions/whose.mp3", example:"" },
      { id:"q10", sinhala:"කොතැනද",  roman:"Kothænada", english:"Where exactly",image:"questions/where-exactly.png",audio:"questions/where-exactly.mp3",example:"" }
    ]
  }
];

/* ════════════════════════════════════════════════════════
   PHRASEBOOK DATA
════════════════════════════════════════════════════════ */
const PHRASEBOOK = [
  {
    category: "Survival Phrases",
    icon: "🆘",
    phrases: [
      { sinhala:"මට සිංහල නොතේරෙනවා",  roman:"Mata sinhala nothērenawā",  english:"I don't understand Sinhala" },
      { sinhala:"නැවත කියන්නකො",        roman:"Næwata kiyannanko",         english:"Please repeat that" },
      { sinhala:"සෙමෙන් කතා කරන්නකො",  roman:"Semen kathā karananko",     english:"Please speak slowly" },
      { sinhala:"ඒක සිංහලෙන් කොහොමද?",  roman:"Ēka sinhalēn kohomada?",   english:"How do you say that in Sinhala?" },
      { sinhala:"මට උදව් කරන්නකො",      roman:"Mata udaw karannanko",      english:"Please help me" },
      { sinhala:"ඔව්",                   roman:"Ow",                        english:"Yes" },
      { sinhala:"නෑ",                    roman:"Næ",                        english:"No" },
      { sinhala:"හරි",                   roman:"Hari",                      english:"OK / Alright" },
    ]
  },
  {
    category: "At a Restaurant",
    icon: "🍽️",
    phrases: [
      { sinhala:"මෙනු ලැයිස්තුව ගෙනත් දෙන්නකො", roman:"Menu læyisthuwa genath dennanko", english:"Please bring the menu" },
      { sinhala:"මට ... ඕනා",               roman:"Mata ... ōnā",                english:"I want ..." },
      { sinhala:"ගිණුම ගෙනත් දෙන්නකො",     roman:"Ginuma genath dennanko",      english:"Please bring the bill" },
      { sinhala:"ඒ රසයිද?",                 roman:"Ē rasayida?",                 english:"Is it tasty?" },
      { sinhala:"ඒ කෑම රස නෑ",             roman:"Ē kæma rasa næ",              english:"This food is not tasty" },
      { sinhala:"ජලය ගෙනත් දෙන්නකො",       roman:"Jalaya genath dennanko",      english:"Please bring water" },
    ]
  },
  {
    category: "Directions",
    icon: "🗺️",
    phrases: [
      { sinhala:"... කොහේද?",             roman:"... kohēda?",                 english:"Where is ...?" },
      { sinhala:"ගුවන් තොටුපල කොහේද?",  roman:"Guwan thothupala kohēda?",    english:"Where is the airport?" },
      { sinhala:"වම්පස",                  roman:"Wampasa",                     english:"Left" },
      { sinhala:"දකුණු පස",              roman:"Dakunu pasa",                 english:"Right" },
      { sinhala:"කෙළින්ම යන්න",          roman:"Kelinna yanna",               english:"Go straight" },
      { sinhala:"ළඟ",                     roman:"Laga",                        english:"Near / Close" },
      { sinhala:"ඈතේ",                    roman:"Æthē",                        english:"Far" },
    ]
  },
  {
    category: "Shopping",
    icon: "🛍️",
    phrases: [
      { sinhala:"ඒකේ මිල කීයද?",         roman:"Ēkē mila kīyada?",           english:"What is the price of this?" },
      { sinhala:"ඒක ගොඩක් මිලයි",        roman:"Ēka godak milayi",            english:"That is very expensive" },
      { sinhala:"ඒක ලාබයි",              roman:"Ēka lābayi",                  english:"That is cheap" },
      { sinhala:"මට ඒක ගන්නවා",          roman:"Mata ēka gannawā",            english:"I will take that" },
      { sinhala:"දිවෙනවාද?",              roman:"Diwenawāda?",                 english:"Can you give a discount?" },
    ]
  },
  {
    category: "Connectors & Grammar",
    icon: "🔗",
    phrases: [
      { sinhala:"හා / සහ",               roman:"Hā / Saha",                   english:"And" },
      { sinhala:"හෝ",                     roman:"Hō",                          english:"Or" },
      { sinhala:"නමුත්",                  roman:"Namuth",                      english:"But" },
      { sinhala:"නිසා / නිසාවෙන්",       roman:"Nisā / Nisāwen",              english:"Because" },
      { sinhala:"ඒ නිසා",                roman:"Ē nisā",                      english:"Therefore / So" },
      { sinhala:"සෑම විටම",              roman:"Sæma witama",                 english:"Always" },
      { sinhala:"සමහර විට",              roman:"Samahara wita",               english:"Sometimes" },
      { sinhala:"කිසිකලත්",              roman:"Kisikelath",                  english:"Never" },
    ]
  },
  {
    category: "Emergencies",
    icon: "🚨",
    phrases: [
      { sinhala:"උදව් කරන්න!",             roman:"Udaw karanna!",               english:"Help!" },
      { sinhala:"පොලිසියට කතා කරන්න",      roman:"Polisiyata kathā karanna",    english:"Call the police" },
      { sinhala:"මම අතරමං වෙලා",          roman:"Mama atharaman welā",         english:"I am lost" },
      { sinhala:"මට දොස්තර කෙනෙක් ඕනේ",    roman:"Mata dosthara kenek ōnē",     english:"I need a doctor" },
      { sinhala:"රෝහල කොහේද?",            roman:"Rōhala kohēda?",              english:"Where is the hospital?" },
    ]
  },
  {
    category: "Romance & Feelings",
    icon: "❤️",
    phrases: [
      { sinhala:"මම ඔයාට ආදරෙයි",          roman:"Mama oyāta ādareyi",          english:"I love you" },
      { sinhala:"මට ඔයාව මතක් වෙනවා",      roman:"Mata oyāwa mathak wenawā",    english:"I miss you" },
      { sinhala:"ඔයා ලස්සනයි",             roman:"Oyā lassanayi",               english:"You are beautiful" },
      { sinhala:"මට ඔයාව හම්බවෙන්න ඕනේ",    roman:"Mata oyāwa hambawenna ōnē",   english:"I want to meet you" },
      { sinhala:"ඔයා මගේ යාළුවා",          roman:"Oyā magē yāluwā",             english:"You are my friend" },
    ]
  }
];

/* ════════════════════════════════════════════════════════
   GRAMMAR TIPS  (shown in lesson detail)
════════════════════════════════════════════════════════ */
const GRAMMAR_TIPS = {
  sentence_structure: "Sinhala follows Subject–Object–Verb (SOV) order: 'I rice eat' = 'මම බත් කනවා'",
  negation: "Add 'නෑ' (næ) at the end to negate: 'මම යනවා' → 'මම යන්නෑ'",
  question: "Add 'ද' (da) at the end to form a yes/no question: 'ඔයා කනවාද?'",
  tense_future: "Use 'ඇති' or context to indicate future tense",
  possession: "Add 'ගේ' (gē) after the owner: 'මගේ' = my, 'ඔයාගේ' = your"
};

/* ════════════════════════════════════════════════════════
   SINHALA ALPHABET DATA
════════════════════════════════════════════════════════ */
const SINHALA_ALPHABET = {
  vowels: [
    { char:"අ",  roman:"a",   name:"Ayanna" },
    { char:"ආ",  roman:"ā",   name:"Āyanna" },
    { char:"ඇ",  roman:"æ",   name:"Æyanna" },
    { char:"ඈ",  roman:"ǣ",   name:"Ǣyanna" },
    { char:"ඉ",  roman:"i",   name:"Iyanna" },
    { char:"ඊ",  roman:"ī",   name:"Īyanna" },
    { char:"උ",  roman:"u",   name:"Uyanna" },
    { char:"ඌ",  roman:"ū",   name:"Ūyanna" },
    { char:"ඍ",  roman:"ru",  name:"Iruyanna" },
    { char:"ඎ",  roman:"rū",  name:"Irūyanna" },
    { char:"එ",  roman:"e",   name:"Eyanna" },
    { char:"ඒ",  roman:"ē",   name:"Ēyanna" },
    { char:"ඓ",  roman:"ai",  name:"Aiyanna" },
    { char:"ඔ",  roman:"o",   name:"Oyanna" },
    { char:"ඕ",  roman:"ō",   name:"Ōyanna" },
    { char:"ඖ",  roman:"au",  name:"Auyanna" }
  ],
  consonants: [
    { char:"ක",  roman:"ka",    name:"Kayanna" },
    { char:"ඛ",  roman:"kha",   name:"Khayanna" },
    { char:"ග",  roman:"ga",    name:"Gayanna" },
    { char:"ඝ",  roman:"gha",   name:"Ghayanna" },
    { char:"ඞ",  roman:"ṅa",    name:"Ṅayanna" },
    { char:"ඟ",  roman:"n̆ga",   name:"N̆gayanna" },
    { char:"ච",  roman:"ca",    name:"Cayanna" },
    { char:"ඡ",  roman:"cha",   name:"Chayanna" },
    { char:"ජ",  roman:"ja",    name:"Jayanna" },
    { char:"ඣ",  roman:"jha",   name:"Jhayanna" },
    { char:"ඤ",  roman:"ña",    name:"Ñayanna" },
    { char:"ඥ",  roman:"n̆ja",   name:"N̆jayanna" },
    { char:"ට",  roman:"ṭa",    name:"Ṭayanna" },
    { char:"ඨ",  roman:"ṭha",   name:"Ṭhayanna" },
    { char:"ඩ",  roman:"ḍa",    name:"Ḍayanna" },
    { char:"ඪ",  roman:"ḍha",   name:"Ḍhayanna" },
    { char:"ණ",  roman:"ṇa",    name:"Ṇayanna" },
    { char:"ඬ",  roman:"n̆ḍa",   name:"N̆ḍayanna" },
    { char:"ත",  roman:"ta",    name:"Tayanna" },
    { char:"ථ",  roman:"tha",   name:"Thayanna" },
    { char:"ද",  roman:"da",    name:"Dayanna" },
    { char:"ධ",  roman:"dha",   name:"Dhayanna" },
    { char:"න",  roman:"na",    name:"Nayanna" },
    { char:"ඳ",  roman:"n̆da",   name:"N̆dayanna" },
    { char:"ප",  roman:"pa",    name:"Payanna" },
    { char:"ඵ",  roman:"pha",   name:"Phayanna" },
    { char:"බ",  roman:"ba",    name:"Bayanna" },
    { char:"භ",  roman:"bha",   name:"Bhayanna" },
    { char:"ම",  roman:"ma",    name:"Mayanna" },
    { char:"ඹ",  roman:"m̆ba",   name:"M̆bayanna" },
    { char:"ය",  roman:"ya",    name:"Yayanna" },
    { char:"ර",  roman:"ra",    name:"Rayanna" },
    { char:"ල",  roman:"la",    name:"Layanna" },
    { char:"ව",  roman:"wa",    name:"Wayanna" },
    { char:"ශ",  roman:"śa",    name:"Śayanna" },
    { char:"ෂ",  roman:"ṣa",    name:"Ṣayanna" },
    { char:"ස",  roman:"sa",    name:"Sayanna" },
    { char:"හ",  roman:"ha",    name:"Hayanna" },
    { char:"ළ",  roman:"ḷa",    name:"Ḷayanna" },
    { char:"ෆ",  roman:"fa",    name:"Fayanna" }
  ],
  numerals: [
    { char:"෦",  roman:"0",  name:"Zero (Bindūwa)" },
    { char:"෧",  roman:"1",  name:"One (Eka)" },
    { char:"෨",  roman:"2",  name:"Two (Deka)" },
    { char:"෩",  roman:"3",  name:"Three (Tuna)" },
    { char:"෪",  roman:"4",  name:"Four (Hatara)" },
    { char:"෫",  roman:"5",  name:"Five (Paha)" },
    { char:"෬",  roman:"6",  name:"Six (Haya)" },
    { char:"෭",  roman:"7",  name:"Seven (Hata)" },
    { char:"෮",  roman:"8",  name:"Eight (Aṭa)" },
    { char:"෯",  roman:"9",  name:"Nine (Nawaya)" }
  ]
};