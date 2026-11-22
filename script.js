// ==========================================
// COUNTRIES DATABASE
// ==========================================

const countries = [
    // EUROPE
    {n:"Albania",c:"Tirana",f:"🇦🇱",r:"Europe",code:"al"},
    {n:"Andorra",c:"Andorra la Vella",f:"🇦🇩",r:"Europe",code:"ad"},
    {n:"Austria",c:"Vienna",f:"🇦🇹",r:"Europe",code:"at"},
    {n:"Belarus",c:"Minsk",f:"🇧🇾",r:"Europe",code:"by"},
    {n:"Belgium",c:"Brussels",f:"🇧🇪",r:"Europe",code:"be"},
    {n:"Bosnia and Herzegovina",c:"Sarajevo",f:"🇧🇦",r:"Europe",code:"ba"},
    {n:"Bulgaria",c:"Sofia",f:"🇧🇬",r:"Europe",code:"bg"},
    {n:"Croatia",c:"Zagreb",f:"🇭🇷",r:"Europe",code:"hr"},
    {n:"Cyprus",c:"Nicosia",f:"🇨🇾",r:"Europe",code:"cy"},
    {n:"Czechia",c:"Prague",f:"🇨🇿",r:"Europe",code:"cz"},
    {n:"Denmark",c:"Copenhagen",f:"🇩🇰",r:"Europe",code:"dk"},
    {n:"Estonia",c:"Tallinn",f:"🇪🇪",r:"Europe",code:"ee"},
    {n:"Finland",c:"Helsinki",f:"🇫🇮",r:"Europe",code:"fi"},
    {n:"France",c:"Paris",f:"🇫🇷",r:"Europe",code:"fr"},
    {n:"Germany",c:"Berlin",f:"🇩🇪",r:"Europe",code:"de"},
    {n:"Greece",c:"Athens",f:"🇬🇷",r:"Europe",code:"gr"},
    {n:"Hungary",c:"Budapest",f:"🇭🇺",r:"Europe",code:"hu"},
    {n:"Iceland",c:"Reykjavik",f:"🇮🇸",r:"Europe",code:"is"},
    {n:"Ireland",c:"Dublin",f:"🇮🇪",r:"Europe",code:"ie"},
    {n:"Italy",c:"Rome",f:"🇮🇹",r:"Europe",code:"it"},
    {n:"Kosovo",c:"Pristina",f:"🇽🇰",r:"Europe",code:"xk"},
    {n:"Latvia",c:"Riga",f:"🇱🇻",r:"Europe",code:"lv"},
    {n:"Liechtenstein",c:"Vaduz",f:"🇱🇮",r:"Europe",code:"li"},
    {n:"Lithuania",c:"Vilnius",f:"🇱🇹",r:"Europe",code:"lt"},
    {n:"Luxembourg",c:"Luxembourg",f:"🇱🇺",r:"Europe",code:"lu"},
    {n:"Malta",c:"Valletta",f:"🇲🇹",r:"Europe",code:"mt"},
    {n:"Moldova",c:"Chisinau",f:"🇲🇩",r:"Europe",code:"md"},
    {n:"Monaco",c:"Monaco",f:"🇲🇨",r:"Europe",code:"mc"},
    {n:"Montenegro",c:"Podgorica",f:"🇲🇪",r:"Europe",code:"me"},
    {n:"Netherlands",c:"Amsterdam",f:"🇳🇱",r:"Europe",code:"nl"},
    {n:"North Macedonia",c:"Skopje",f:"🇲🇰",r:"Europe",code:"mk"},
    {n:"Norway",c:"Oslo",f:"🇳🇴",r:"Europe",code:"no"},
    {n:"Poland",c:"Warsaw",f:"🇵🇱",r:"Europe",code:"pl"},
    {n:"Portugal",c:"Lisbon",f:"🇵🇹",r:"Europe",code:"pt"},
    {n:"Romania",c:"Bucharest",f:"🇷🇴",r:"Europe",code:"ro"},
    {n:"Russia",c:"Moscow",f:"🇷🇺",r:"Europe",code:"ru"},
    {n:"San Marino",c:"San Marino",f:"🇸🇲",r:"Europe",code:"sm"},
    {n:"Serbia",c:"Belgrade",f:"🇷🇸",r:"Europe",code:"rs"},
    {n:"Slovakia",c:"Bratislava",f:"🇸🇰",r:"Europe",code:"sk"},
    {n:"Slovenia",c:"Ljubljana",f:"🇸🇮",r:"Europe",code:"si"},
    {n:"Spain",c:"Madrid",f:"🇪🇸",r:"Europe",code:"es"},
    {n:"Sweden",c:"Stockholm",f:"🇸🇪",r:"Europe",code:"se"},
    {n:"Switzerland",c:"Bern",f:"🇨🇭",r:"Europe",code:"ch"},
    {n:"Ukraine",c:"Kyiv",f:"🇺🇦",r:"Europe",code:"ua"},
    {n:"United Kingdom",c:"London",f:"🇬🇧",r:"Europe",code:"gb"},
    {n:"Vatican City",c:"Vatican City",f:"🇻🇦",r:"Europe",code:"va"},

    // ASIA
    {n:"Afghanistan",c:"Kabul",f:"🇦🇫",r:"Asia",code:"af"},
    {n:"Armenia",c:"Yerevan",f:"🇦🇲",r:"Asia",code:"am"},
    {n:"Azerbaijan",c:"Baku",f:"🇦🇿",r:"Asia",code:"az"},
    {n:"Bahrain",c:"Manama",f:"🇧🇭",r:"Asia",code:"bh"},
    {n:"Bangladesh",c:"Dhaka",f:"🇧🇩",r:"Asia",code:"bd"},
    {n:"Bhutan",c:"Thimphu",f:"🇧🇹",r:"Asia",code:"bt"},
    {n:"Brunei",c:"Bandar Seri Begawan",f:"🇧🇳",r:"Asia",code:"bn"},
    {n:"Cambodia",c:"Phnom Penh",f:"🇰🇭",r:"Asia",code:"kh"},
    {n:"China",c:"Beijing",f:"🇨🇳",r:"Asia",code:"cn"},
    {n:"Georgia",c:"Tbilisi",f:"🇬🇪",r:"Asia",code:"ge"},
    {n:"India",c:"New Delhi",f:"🇮🇳",r:"Asia",code:"in"},
    {n:"Indonesia",c:"Jakarta",f:"🇮🇩",r:"Asia",code:"id"},
    {n:"Iran",c:"Tehran",f:"🇮🇷",r:"Asia",code:"ir"},
    {n:"Iraq",c:"Baghdad",f:"🇮🇶",r:"Asia",code:"iq"},
    {n:"Israel",c:"Jerusalem",f:"🇮🇱",r:"Asia",code:"il"},
    {n:"Japan",c:"Tokyo",f:"🇯🇵",r:"Asia",code:"jp"},
    {n:"Jordan",c:"Amman",f:"🇯🇴",r:"Asia",code:"jo"},
    {n:"Kazakhstan",c:"Astana",f:"🇰🇿",r:"Asia",code:"kz"},
    {n:"Kuwait",c:"Kuwait City",f:"🇰🇼",r:"Asia",code:"kw"},
    {n:"Kyrgyzstan",c:"Bishkek",f:"🇰🇬",r:"Asia",code:"kg"},
    {n:"Laos",c:"Vientiane",f:"🇱🇦",r:"Asia",code:"la"},
    {n:"Lebanon",c:"Beirut",f:"🇱🇧",r:"Asia",code:"lb"},
    {n:"Malaysia",c:"Kuala Lumpur",f:"🇲🇾",r:"Asia",code:"my"},
    {n:"Maldives",c:"Male",f:"🇲🇻",r:"Asia",code:"mv"},
    {n:"Mongolia",c:"Ulaanbaatar",f:"🇲🇳",r:"Asia",code:"mn"},
    {n:"Myanmar",c:"Naypyidaw",f:"🇲🇲",r:"Asia",code:"mm"},
    {n:"Nepal",c:"Kathmandu",f:"🇳🇵",r:"Asia",code:"np"},
    {n:"North Korea",c:"Pyongyang",f:"🇰🇵",r:"Asia",code:"kp"},
    {n:"Oman",c:"Muscat",f:"🇴🇲",r:"Asia",code:"om"},
    {n:"Pakistan",c:"Islamabad",f:"🇵🇰",r:"Asia",code:"pk"},
    {n:"Philippines",c:"Manila",f:"🇵🇭",r:"Asia",code:"ph"},
    {n:"Qatar",c:"Doha",f:"🇶🇦",r:"Asia",code:"qa"},
    {n:"Saudi Arabia",c:"Riyadh",f:"🇸🇦",r:"Asia",code:"sa"},
    {n:"Singapore",c:"Singapore",f:"🇸🇬",r:"Asia",code:"sg"},
    {n:"South Korea",c:"Seoul",f:"🇰🇷",r:"Asia",code:"kr"},
    {n:"Sri Lanka",c:"Sri Jayawardenepura Kotte",f:"🇱🇰",r:"Asia",code:"lk"},
    {n:"Syria",c:"Damascus",f:"🇸🇾",r:"Asia",code:"sy"},
    {n:"Tajikistan",c:"Dushanbe",f:"🇹🇯",r:"Asia",code:"tj"},
    {n:"Thailand",c:"Bangkok",f:"🇹🇭",r:"Asia",code:"th"},
    {n:"Timor-Leste",c:"Dili",f:"🇹🇱",r:"Asia",code:"tl"},
    {n:"Turkey",c:"Ankara",f:"🇹🇷",r:"Asia",code:"tr"},
    {n:"Turkmenistan",c:"Ashgabat",f:"🇹🇲",r:"Asia",code:"tm"},
    {n:"United Arab Emirates",c:"Abu Dhabi",f:"🇦🇪",r:"Asia",code:"ae"},
    {n:"Uzbekistan",c:"Tashkent",f:"🇺🇿",r:"Asia",code:"uz"},
    {n:"Vietnam",c:"Hanoi",f:"🇻🇳",r:"Asia",code:"vn"},
    {n:"Yemen",c:"Sanaa",f:"🇾🇪",r:"Asia",code:"ye"},

    // NORTH AMERICA
    {n:"Antigua and Barbuda",c:"Saint John's",f:"🇦🇬",r:"North America",code:"ag"},
    {n:"Bahamas",c:"Nassau",f:"🇧🇸",r:"North America",code:"bs"},
    {n:"Barbados",c:"Bridgetown",f:"🇧🇧",r:"North America",code:"bb"},
    {n:"Belize",c:"Belmopan",f:"🇧🇿",r:"North America",code:"bz"},
    {n:"Canada",c:"Ottawa",f:"🇨🇦",r:"North America",code:"ca"},
    {n:"Costa Rica",c:"San Jose",f:"🇨🇷",r:"North America",code:"cr"},
    {n:"Cuba",c:"Havana",f:"🇨🇺",r:"North America",code:"cu"},
    {n:"Dominica",c:"Roseau",f:"🇩🇲",r:"North America",code:"dm"},
    {n:"Dominican Republic",c:"Santo Domingo",f:"🇩🇴",r:"North America",code:"do"},
    {n:"El Salvador",c:"San Salvador",f:"🇸🇻",r:"North America",code:"sv"},
    {n:"Grenada",c:"Saint George's",f:"🇬🇩",r:"North America",code:"gd"},
    {n:"Guatemala",c:"Guatemala City",f:"🇬🇹",r:"North America",code:"gt"},
    {n:"Haiti",c:"Port-au-Prince",f:"🇭🇹",r:"North America",code:"ht"},
    {n:"Honduras",c:"Tegucigalpa",f:"🇭🇳",r:"North America",code:"hn"},
    {n:"Jamaica",c:"Kingston",f:"🇯🇲",r:"North America",code:"jm"},
    {n:"Mexico",c:"Mexico City",f:"🇲🇽",r:"North America",code:"mx"},
    {n:"Nicaragua",c:"Managua",f:"🇳🇮",r:"North America",code:"ni"},
    {n:"Panama",c:"Panama City",f:"🇵🇦",r:"North America",code:"pa"},
    {n:"Saint Kitts and Nevis",c:"Basseterre",f:"🇰🇳",r:"North America",code:"kn"},
    {n:"Saint Lucia",c:"Castries",f:"🇱🇨",r:"North America",code:"lc"},
    {n:"Saint Vincent and the Grenadines",c:"Kingstown",f:"🇻🇨",r:"North America",code:"vc"},
    {n:"Trinidad and Tobago",c:"Port of Spain",f:"🇹🇹",r:"North America",code:"tt"},
    {n:"United States",c:"Washington, D.C.",f:"🇺🇸",r:"North America",code:"us"},

    // SOUTH AMERICA
    {n:"Argentina",c:"Buenos Aires",f:"🇦🇷",r:"South America",code:"ar"},
    {n:"Bolivia",c:"Sucre",f:"🇧🇴",r:"South America",code:"bo"},
    {n:"Brazil",c:"Brasilia",f:"🇧🇷",r:"South America",code:"br"},
    {n:"Chile",c:"Santiago",f:"🇨🇱",r:"South America",code:"cl"},
    {n:"Colombia",c:"Bogota",f:"🇨🇴",r:"South America",code:"co"},
    {n:"Ecuador",c:"Quito",f:"🇪🇨",r:"South America",code:"ec"},
    {n:"Guyana",c:"Georgetown",f:"🇬🇾",r:"South America",code:"gy"},
    {n:"Paraguay",c:"Asuncion",f:"🇵🇾",r:"South America",code:"py"},
    {n:"Peru",c:"Lima",f:"🇵🇪",r:"South America",code:"pe"},
    {n:"Suriname",c:"Paramaribo",f:"🇸🇷",r:"South America",code:"sr"},
    {n:"Uruguay",c:"Montevideo",f:"🇺🇾",r:"South America",code:"uy"},
    {n:"Venezuela",c:"Caracas",f:"🇻🇪",r:"South America",code:"ve"},

    // AFRICA
    {n:"Algeria",c:"Algiers",f:"🇩🇿",r:"Africa",code:"dz"},
    {n:"Angola",c:"Luanda",f:"🇦🇴",r:"Africa",code:"ao"},
    {n:"Benin",c:"Porto-Novo",f:"🇧🇯",r:"Africa",code:"bj"},
    {n:"Botswana",c:"Gaborone",f:"🇧🇼",r:"Africa",code:"bw"},
    {n:"Burkina Faso",c:"Ouagadougou",f:"🇧🇫",r:"Africa",code:"bf"},
    {n:"Burundi",c:"Gitega",f:"🇧🇮",r:"Africa",code:"bi"},
    {n:"Cabo Verde",c:"Praia",f:"🇨🇻",r:"Africa",code:"cv"},
    {n:"Cameroon",c:"Yaounde",f:"🇨🇲",r:"Africa",code:"cm"},
    {n:"Central African Republic",c:"Bangui",f:"🇨🇫",r:"Africa",code:"cf"},
    {n:"Chad",c:"N'Djamena",f:"🇹🇩",r:"Africa",code:"td"},
    {n:"Comoros",c:"Moroni",f:"🇰🇲",r:"Africa",code:"km"},
    {n:"Democratic Republic of the Congo",c:"Kinshasa",f:"🇨🇩",r:"Africa",code:"cd"},
    {n:"Republic of the Congo",c:"Brazzaville",f:"🇨🇬",r:"Africa",code:"cg"},
    {n:"Djibouti",c:"Djibouti",f:"🇩🇯",r:"Africa",code:"dj"},
    {n:"Egypt",c:"Cairo",f:"🇪🇬",r:"Africa",code:"eg"},
    {n:"Equatorial Guinea",c:"Malabo",f:"🇬🇶",r:"Africa",code:"gq"},
    {n:"Eritrea",c:"Asmara",f:"🇪🇷",r:"Africa",code:"er"},
    {n:"Eswatini",c:"Mbabane",f:"🇸🇿",r:"Africa",code:"sz"},
    {n:"Ethiopia",c:"Addis Ababa",f:"🇪🇹",r:"Africa",code:"et"},
    {n:"Gabon",c:"Libreville",f:"🇬🇦",r:"Africa",code:"ga"},
    {n:"Gambia",c:"Banjul",f:"🇬🇲",r:"Africa",code:"gm"},
    {n:"Ghana",c:"Accra",f:"🇬🇭",r:"Africa",code:"gh"},
    {n:"Guinea",c:"Conakry",f:"🇬🇳",r:"Africa",code:"gn"},
    {n:"Guinea-Bissau",c:"Bissau",f:"🇬🇼",r:"Africa",code:"gw"},
    {n:"Ivory Coast",c:"Yamoussoukro",f:"🇨🇮",r:"Africa",code:"ci"},
    {n:"Kenya",c:"Nairobi",f:"🇰🇪",r:"Africa",code:"ke"},
    {n:"Lesotho",c:"Maseru",f:"🇱🇸",r:"Africa",code:"ls"},
    {n:"Liberia",c:"Monrovia",f:"🇱🇷",r:"Africa",code:"lr"},
    {n:"Libya",c:"Tripoli",f:"🇱🇾",r:"Africa",code:"ly"},
    {n:"Madagascar",c:"Antananarivo",f:"🇲🇬",r:"Africa",code:"mg"},
    {n:"Malawi",c:"Lilongwe",f:"🇲🇼",r:"Africa",code:"mw"},
    {n:"Mali",c:"Bamako",f:"🇲🇱",r:"Africa",code:"ml"},
    {n:"Mauritania",c:"Nouakchott",f:"🇲🇷",r:"Africa",code:"mr"},
    {n:"Mauritius",c:"Port Louis",f:"🇲🇺",r:"Africa",code:"mu"},
    {n:"Morocco",c:"Rabat",f:"🇲🇦",r:"Africa",code:"ma"},
    {n:"Mozambique",c:"Maputo",f:"🇲🇿",r:"Africa",code:"mz"},
    {n:"Namibia",c:"Windhoek",f:"🇳🇦",r:"Africa",code:"na"},
    {n:"Niger",c:"Niamey",f:"🇳🇪",r:"Africa",code:"ne"},
    {n:"Nigeria",c:"Abuja",f:"🇳🇬",r:"Africa",code:"ng"},
    {n:"Rwanda",c:"Kigali",f:"🇷🇼",r:"Africa",code:"rw"},
    {n:"Sao Tome and Principe",c:"Sao Tome",f:"🇸🇹",r:"Africa",code:"st"},
    {n:"Senegal",c:"Dakar",f:"🇸🇳",r:"Africa",code:"sn"},
    {n:"Seychelles",c:"Victoria",f:"🇸🇨",r:"Africa",code:"sc"},
    {n:"Sierra Leone",c:"Freetown",f:"🇸🇱",r:"Africa",code:"sl"},
    {n:"Somalia",c:"Mogadishu",f:"🇸🇴",r:"Africa",code:"so"},
    {n:"South Africa",c:"Pretoria",f:"🇿🇦",r:"Africa",code:"za"},
    {n:"South Sudan",c:"Juba",f:"🇸🇸",r:"Africa",code:"ss"},
    {n:"Sudan",c:"Khartoum",f:"🇸🇩",r:"Africa",code:"sd"},
    {n:"Tanzania",c:"Dodoma",f:"🇹🇿",r:"Africa",code:"tz"},
    {n:"Togo",c:"Lome",f:"🇹🇬",r:"Africa",code:"tg"},
    {n:"Tunisia",c:"Tunis",f:"🇹🇳",r:"Africa",code:"tn"},
    {n:"Uganda",c:"Kampala",f:"🇺🇬",r:"Africa",code:"ug"},
    {n:"Zambia",c:"Lusaka",f:"🇿🇲",r:"Africa",code:"zm"},
    {n:"Zimbabwe",c:"Harare",f:"🇿🇼",r:"Africa",code:"zw"}
];

// ==========================================
// SEPARATE BORDER LOOKUP TABLE
// ==========================================

const countryBorders = {
    "Albania": ["Montenegro", "Kosovo", "North Macedonia", "Greece"],
    "Andorra": ["France", "Spain"],
    "Austria": ["Czechia", "Germany", "Hungary", "Italy", "Liechtenstein", "Slovakia", "Slovenia", "Switzerland"],
    "Belarus": ["Latvia", "Lithuania", "Poland", "Russia", "Ukraine"],
    "Belgium": ["France", "Germany", "Luxembourg", "Netherlands"],
    "Bosnia and Herzegovina": ["Croatia", "Montenegro", "Serbia"],
    "Bulgaria": ["Greece", "North Macedonia", "Romania", "Serbia", "Turkey"],
    "Croatia": ["Bosnia and Herzegovina", "Hungary", "Montenegro", "Serbia", "Slovenia"],
    "Cyprus": [],
    "Czechia": ["Austria", "Germany", "Poland", "Slovakia"],
    "Denmark": ["Germany"],
    "Estonia": ["Latvia", "Russia"],
    "Finland": ["Norway", "Sweden", "Russia"],
    "France": ["Andorra", "Belgium", "Germany", "Italy", "Luxembourg", "Monaco", "Spain", "Switzerland"],
    "Germany": ["Austria", "Belgium", "Czechia", "Denmark", "France", "Luxembourg", "Netherlands", "Poland", "Switzerland"],
    "Greece": ["Albania", "Bulgaria", "North Macedonia", "Turkey"],
    "Hungary": ["Austria", "Croatia", "Romania", "Serbia", "Slovakia", "Slovenia", "Ukraine"],
    "Iceland": [],
    "Ireland": ["United Kingdom"],
    "Italy": ["Austria", "France", "San Marino", "Slovenia", "Switzerland", "Vatican City"],
    "Kosovo": ["Albania", "Montenegro", "North Macedonia", "Serbia"],
    "Latvia": ["Belarus", "Estonia", "Lithuania", "Russia"],
    "Liechtenstein": ["Austria", "Switzerland"],
    "Lithuania": ["Belarus", "Latvia", "Poland", "Russia"],
    "Luxembourg": ["Belgium", "France", "Germany"],
    "Malta": [],
    "Moldova": ["Romania", "Ukraine"],
    "Monaco": ["France"],
    "Montenegro": ["Albania", "Bosnia and Herzegovina", "Croatia", "Kosovo", "Serbia"],
    "Netherlands": ["Belgium", "Germany"],
    "North Macedonia": ["Albania", "Bulgaria", "Greece", "Kosovo", "Serbia"],
    "Norway": ["Finland", "Sweden", "Russia"],
    "Poland": ["Belarus", "Czechia", "Germany", "Lithuania", "Russia", "Slovakia", "Ukraine"],
    "Portugal": ["Spain"],
    "Romania": ["Bulgaria", "Hungary", "Moldova", "Serbia", "Ukraine"],
    "Russia": ["Azerbaijan", "Belarus", "China", "Estonia", "Finland", "Georgia", "Kazakhstan", "North Korea", "Latvia", "Lithuania", "Mongolia", "Norway", "Poland", "Ukraine"],
    "San Marino": ["Italy"],
    "Serbia": ["Bosnia and Herzegovina", "Bulgaria", "Croatia", "Hungary", "Kosovo", "Montenegro", "North Macedonia", "Romania"],
    "Slovakia": ["Austria", "Czechia", "Poland", "Hungary", "Ukraine"],
    "Slovenia": ["Austria", "Croatia", "Italy", "Hungary"],
    "Spain": ["Andorra", "France", "Portugal"],
    "Sweden": ["Finland", "Norway"],
    "Switzerland": ["Austria", "France", "Italy", "Liechtenstein", "Germany"],
    "Ukraine": ["Belarus", "Hungary", "Moldova", "Poland", "Romania", "Russia", "Slovakia"],
    "United Kingdom": ["Ireland"],
    "Vatican City": ["Italy"],

    // NORTH AMERICA
    "Canada": ["United States"],
    "United States": ["Canada", "Mexico"],
    "Mexico": ["United States", "Guatemala", "Belize"],
    "Guatemala": ["Mexico", "Belize", "Honduras", "El Salvador"],
    "Belize": ["Mexico", "Guatemala"],
    "Honduras": ["Guatemala", "El Salvador", "Nicaragua"],
    "El Salvador": ["Guatemala", "Honduras"],
    "Nicaragua": ["Honduras", "Costa Rica"],
    "Costa Rica": ["Nicaragua", "Panama"],
    "Panama": ["Costa Rica", "Colombia"],

    // SOUTH AMERICA
    "Argentina": ["Bolivia", "Brazil", "Chile", "Paraguay", "Uruguay"],
    "Bolivia": ["Argentina", "Brazil", "Chile", "Paraguay", "Peru"],
    "Brazil": ["Argentina", "Bolivia", "Colombia", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
    "Chile": ["Argentina", "Bolivia", "Peru"],
    "Colombia": ["Brazil", "Ecuador", "Panama", "Peru", "Venezuela"],
    "Ecuador": ["Colombia", "Peru"],
    "Guyana": ["Brazil", "Suriname", "Venezuela"],
    "Paraguay": ["Argentina", "Bolivia", "Brazil"],
    "Peru": ["Bolivia", "Brazil", "Chile", "Colombia", "Ecuador"],
    "Suriname": ["Brazil", "Guyana"],
    "Uruguay": ["Argentina", "Brazil"],
    "Venezuela": ["Brazil", "Colombia", "Guyana"],

    // ASIA
    "Afghanistan": ["China", "Iran", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan"],
    "Armenia": ["Azerbaijan", "Georgia", "Iran", "Turkey"],
    "Azerbaijan": ["Armenia", "Georgia", "Iran", "Russia", "Turkey"],
    "China": ["Afghanistan", "Bhutan", "India", "Kazakhstan", "Kyrgyzstan", "Laos", "Mongolia", "Myanmar", "Nepal", "North Korea", "Pakistan", "Russia", "Tajikistan", "Vietnam"],
    "India": ["Bangladesh", "Bhutan", "China", "Myanmar", "Nepal", "Pakistan"],
    "Japan": [],
    "South Korea": ["North Korea"],
    "North Korea": ["China", "Russia", "South Korea"],
    "Pakistan": ["Afghanistan", "China", "India", "Iran"],
    "Turkey": ["Armenia", "Azerbaijan", "Bulgaria", "Georgia", "Greece", "Iran", "Iraq", "Syria"],

    // AFRICA
    "Egypt": ["Israel", "Libya", "Sudan"],
    "South Africa": ["Botswana", "Lesotho", "Mozambique", "Namibia", "Eswatini", "Zimbabwe"],
    "Nigeria": ["Benin", "Cameroon", "Chad", "Niger"]
};

// ==========================================
// GAME STATE & VARIABLES
// ==========================================

let currentMode = "";
let score = 0;
let botScore = 0;
let lives = 3;
let questionNumber = 1;
let correctCountry = null;
let answered = false;
let timeLeft = 30;
let timerInterval = null;
let botTimeout = null;
let selectedCountries = [];
let questionDeck = [];
let gameOver = false;

let speedrunTimerInterval = null;
let speedrunTimeLeft = 300;
let guessedCountries = [];

const questionLimit = 10;
let xp = Number(localStorage.getItem("geoMasterXP")) || 0;
let gamesPlayed = Number(localStorage.getItem("geoMasterGames")) || 0;
let bestScore = Number(localStorage.getItem("geoMasterBest")) || 0;
let matchHistory = JSON.parse(localStorage.getItem("geoMasterHistory")) || [];

let unlockedRegions = JSON.parse(localStorage.getItem("geoMasterUnlockedRegions")) || ["Europe"];

const campaignRegions = [
    { name: "Europe", icon: "🌍", desc: "Master the capitals and flags of Europe." },
    { name: "Asia", icon: "🌏", desc: "Journey across Asia." },
    { name: "North America", icon: "🌎", desc: "Conquer North America." },
    { name: "South America", icon: "🌍", desc: "Explore South America." },
    { name: "Africa", icon: "🌍", desc: "Test your knowledge of African nations." }
];

const ranks = [
    {name:"Beginner",xp:0,icon:"🌱"},
    {name:"Explorer",xp:100,icon:"🧭"},
    {name:"Traveler",xp:300,icon:"🎒"},
    {name:"Adventurer",xp:600,icon:"🏕️"},
    {name:"Geographer",xp:1000,icon:"🌍"},
    {name:"Expert",xp:1600,icon:"🎓"},
    {name:"Master",xp:2500,icon:"🏆"},
    {name:"Grandmaster",xp:4000,icon:"👑"},
    {name:"Legend",xp:6000,icon:"⭐"},
    {name:"GeoMaster",xp:10000,icon:"💎"}
];

const achievements = [
    { id: "first_game", title: "First Steps", desc: "Complete your first game", icon: "🎮", check: () => gamesPlayed >= 1 },
    { id: "gamer_5", title: "Dedicated Explorer", desc: "Play 5 games", icon: "🕹️", check: () => gamesPlayed >= 5 },
    { id: "score_5", title: "Top Scorer", desc: "Score 5 or more in a game", icon: "⭐", check: () => bestScore >= 5 },
    { id: "perfect", title: "Perfectionist", desc: "Get a perfect score of 10/10", icon: "🏆", check: () => bestScore >= 10 },
    { id: "xp_500", title: "XP Collector", desc: "Reach 500 Total XP", icon: "💎", check: () => xp >= 500 },
    { id: "veteran", title: "Global Veteran", desc: "Play 10 games", icon: "🌐", check: () => gamesPlayed >= 10 },
    { id: "high_roller", title: "Geography Legend", desc: "Score 10 in Time Attack or Bot Match", icon: "👑", check: () => bestScore >= 10 },
    { id: "xp_1000", title: "Master Scholar", desc: "Reach 1,000 Total XP", icon: "⭐", check: () => xp >= 1000 }
];

const shopItems = [
    { id: "theme_emerald", name: "Emerald Matrix Theme", desc: "Changes accent and background to green.", cost: 100, type: "theme", color: "#10b981", className: "theme-emerald", icon: "🟢" },
    { id: "theme_cyber", name: "Cyberpunk Neon Theme", desc: "Changes accent and background to neon gold.", cost: 250, type: "theme", color: "#f59e0b", className: "theme-cyber", icon: "⚡" },
    { id: "theme_crimson", name: "Crimson Red Theme", desc: "Changes accent and background to dark red.", cost: 350, type: "theme", color: "#ef4444", className: "theme-crimson", icon: "🔴" },
    { id: "theme_midnight", name: "Midnight Cyber Theme", desc: "Sleek dark blue and purple neon aesthetic.", cost: 400, type: "theme", color: "#a855f7", className: "theme-midnight", icon: "🌌" },
    { id: "theme_sunset", name: "Sunset Orange Theme", desc: "Warm orange and gold Steam gradient.", cost: 450, type: "theme", color: "#f97316", className: "theme-sunset", icon: "🌅" },
    { id: "title_master", name: "Title: 'Cartographer'", desc: "Unlocks an exclusive profile title.", cost: 500, type: "title", value: "Cartographer", icon: "📜" },
    { id: "title_globetrotter", name: "Title: 'Globetrotter'", desc: "Shows off your elite world traveler status.", cost: 600, type: "title", value: "Globetrotter", icon: "✈️" },
    { id: "title_speedrunner", name: "Title: 'Speed Demon'", desc: "For masters of the Country Typewriter mode.", cost: 750, type: "title", value: "Speed Demon", icon: "⚡" },
    { id: "avatar_frame_gold", name: "Gold Avatar Border", desc: "Adds a shiny glowing gold border around your avatar.", cost: 1000, type: "frame", value: "gold-frame", icon: "👑" }
];

let ownedItems = JSON.parse(localStorage.getItem("geoMasterOwned")) || [];
let equippedTheme = localStorage.getItem("geoMasterTheme") || "#66c0f4";
let equippedClass = localStorage.getItem("geoMasterThemeClass") || "";
let equippedTitle = localStorage.getItem("geoMasterTitle") || "Beginner Geographer";
let equippedFrame = localStorage.getItem("geoMasterFrame") || "";
let currentUsername = localStorage.getItem("geoMasterUsername") || "GeoMaster User";
let customAvatar = localStorage.getItem("geoMasterAvatar") || "";

// ==========================================
// AUDIO SYSTEM & SETTINGS
// ==========================================

let soundEnabled = localStorage.getItem("geoMasterSound") !== "false";
let bgmEnabled = localStorage.getItem("geoMasterBGM") === "true";
let masterVolume = Number(localStorage.getItem("geoMasterVolume")) || 0.5;

let bgmAudioCtx = null;
let bgmInterval = null;

function updateVolume(val) {
    masterVolume = Number(val);
    localStorage.setItem("geoMasterVolume", masterVolume);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem("geoMasterSound", soundEnabled);
    const btn = document.getElementById("soundToggleBtn");
    if (btn) {
        btn.textContent = soundEnabled ? "🔊 Sound: ON" : "🔇 Sound: OFF";
    }
}

function toggleBGM() {
    bgmEnabled = !bgmEnabled;
    localStorage.setItem("geoMasterBGM", bgmEnabled);
    const btn = document.getElementById("bgmToggleBtn");
    if (btn) {
        btn.textContent = bgmEnabled ? "🎵 BGM: ON" : "🎵 BGM: OFF";
    }

    if (bgmEnabled) {
        startAmbientBGM();
    } else {
        stopAmbientBGM();
    }
}

function startAmbientBGM() {
    stopAmbientBGM();
    if (!bgmEnabled) return;

    try {
        bgmAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        const chordFrequencies = [
            [130.81, 196.00, 261.63],
            [110.00, 164.81, 220.00],
            [146.83, 220.00, 293.66],
            [98.00, 146.83, 196.00]
        ];

        let chordIndex = 0;

        function playChord() {
            if (!bgmEnabled || !bgmAudioCtx) return;
            const freqs = chordFrequencies[chordIndex];
            chordIndex = (chordIndex + 1) % chordFrequencies.length;

            freqs.forEach(freq => {
                const osc = bgmAudioCtx.createOscillator();
                const gain = bgmAudioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, bgmAudioCtx.currentTime);

                const now = bgmAudioCtx.currentTime;
                const targetVol = masterVolume * 0.03;

                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(targetVol, now + 1.5);
                gain.gain.linearRampToValueAtTime(0.001, now + 5.5);

                osc.connect(gain);
                gain.connect(bgmAudioCtx.destination);

                osc.start(now);
                osc.stop(now + 6.0);
            });
        }

        playChord();
        bgmInterval = setInterval(playChord, 6000);
    } catch (e) {
        console.error("BGM error:", e);
    }
}

function stopAmbientBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
    if (bgmAudioCtx) {
        try {
            bgmAudioCtx.close();
        } catch (e) {}
        bgmAudioCtx = null;
    }
}

function playSteamClick() {
    if (!soundEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.04);
        
        const vol = masterVolume * 0.08;
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {}
}

document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
        playSteamClick();
    }
});

function playCorrectSound() {
    if (!soundEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [523.25, 659.25, 783.99].forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + (index * 0.08));
            
            const vol = masterVolume * 0.08;
            gain.gain.setValueAtTime(vol, audioCtx.currentTime + (index * 0.08));
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (index * 0.08) + 0.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + (index * 0.08));
            osc.stop(audioCtx.currentTime + (index * 0.08) + 0.2);
        });
    } catch (e) {}
}

function playWrongSound() {
    if (!soundEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [220, 207.65, 196, 174.61].forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + (index * 0.22));
            const duration = index === 3 ? 0.5 : 0.18;
            
            const vol = masterVolume * 0.1;
            gain.gain.setValueAtTime(vol, audioCtx.currentTime + (index * 0.22));
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (index * 0.22) + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + (index * 0.22));
            osc.stop(audioCtx.currentTime + (index * 0.22) + duration);
        });
    } catch (e) {}
}

// ==========================================
// DAILY LOGIN & XP
// ==========================================

function checkDailyLogin() {
    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem("geoMasterLastLogin");
    let streak = Number(localStorage.getItem("geoMasterStreak")) || 0;

    if (lastLogin !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        streak = (lastLogin === yesterday.toDateString()) ? streak + 1 : 1;
        localStorage.setItem("geoMasterLastLogin", today);
        localStorage.setItem("geoMasterStreak", streak);
        const bonusXP = streak * 15;
        addXP(bonusXP);
        setTimeout(() => alert(`🔥 Daily Login Streak!\nDay ${streak} Streak Bonus!\nReward: +${bonusXP} XP!`), 400);
    }
}

function getRank() {
    return [...ranks].reverse().find(rank => xp >= rank.xp);
}

function addXP(amount) {
    const oldRank = getRank();
    xp = Math.max(0, xp + amount);
    localStorage.setItem("geoMasterXP", xp);
    const newRank = getRank();
    updateDashboardStats();
    if (oldRank.name !== newRank.name) {
        alert("🎉 RANK UP!\n\n" + newRank.icon + " " + newRank.name);
    }
}

function renderBadges() {
    const grid = document.getElementById("badgesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    achievements.forEach(ach => {
        const unlocked = ach.check();
        const div = document.createElement("div");
        div.className = `badge-item ${unlocked ? "unlocked" : ""}`;
        div.innerHTML = `
            <div class="badge-icon">${ach.icon}</div>
            <div class="badge-info">
                <h4>${ach.title} ${unlocked ? "✅" : "🔒"}</h4>
                <p>${ach.desc}</p>
            </div>
        `;
        grid.appendChild(div);
    });
}

function updateDashboardStats() {
    document.getElementById("gamesPlayed").textContent = gamesPlayed;
    document.getElementById("bestScore").textContent = bestScore;
    document.getElementById("dashboardXP").textContent = xp;
    document.getElementById("totalXP").textContent = xp;
    
    const rank = getRank();
    document.getElementById("sidebarRank").textContent = rank.icon + " " + rank.name;
    document.getElementById("currentRankTitle").textContent = rank.icon + " " + rank.name;
    
    const nextRank = ranks.find(r => r.xp > xp);
    const progress = document.getElementById("xpProgress");
    
    if (nextRank) {
        const percentage = ((xp - rank.xp) / (nextRank.xp - rank.xp)) * 100;
        progress.style.width = Math.min(100, Math.max(0, percentage)) + "%";
        document.getElementById("nextRankText").textContent = (nextRank.xp - xp) + " XP until " + nextRank.name;
    } else {
        progress.style.width = "100%";
        document.getElementById("nextRankText").textContent = "MAX RANK REACHED!";
    }
    renderBadges();
}

function hideAllViews() {
    document.querySelectorAll(".view-panel").forEach(panel => panel.classList.add("hidden"));
}

function showHub() {
    stopTimer();
    gameOver = true;
    hideAllViews();
    document.getElementById("hubView").classList.remove("hidden");
    updateDashboardStats();
}

function showProfile() {
    stopTimer();
    gameOver = true;
    hideAllViews();
    document.getElementById("profileView").classList.remove("hidden");
    renderProfile();
}

function renderProfile() {
    const rank = getRank();
    const streakDays = localStorage.getItem("geoMasterStreak") || 1;
    document.getElementById("profileUsernameDisplay").textContent = currentUsername;
    document.getElementById("profileRankName").textContent = rank.icon + " " + rank.name + ` (🔥 ${streakDays}d Streak)`;
    document.getElementById("profileTitleTag").textContent = equippedTitle;
    document.getElementById("profileXP").textContent = xp;
    document.getElementById("profileGames").textContent = gamesPlayed;
    document.getElementById("profileBest").textContent = bestScore;

    const imgElement = document.getElementById("profileAvatarImg");
    const iconElement = document.getElementById("profileAvatarIcon");

    if (customAvatar) {
        imgElement.src = customAvatar;
        imgElement.style.display = "block";
        iconElement.style.display = "none";
    } else {
        imgElement.style.display = "none";
        iconElement.style.display = "block";
        iconElement.textContent = "🌍";
    }

    applyFrame(equippedFrame);

    document.getElementById("profileBadgesCount").textContent = `${achievements.filter(ach => ach.check()).length} / ${achievements.length}`;

    const historyList = document.getElementById("matchHistoryList");
    if (historyList) {
        if (matchHistory.length === 0) {
            historyList.innerHTML = `<p style="font-size: 11px; color: #8f98a0;">No matches played yet. Jump into a game!</p>`;
        } else {
            historyList.innerHTML = "";
            matchHistory.slice(-5).reverse().forEach(match => {
                const item = document.createElement("div");
                item.style.background = "#111419";
                item.style.padding = "6px 10px";
                item.style.borderRadius = "4px";
                item.style.display = "flex";
                item.style.justifyContent = "space-between";
                item.style.fontSize = "12px";
                item.innerHTML = `
                    <span style="color: var(--accent-color);">${match.mode}</span>
                    <span style="color: #ffffff;">Score: <strong>${match.score}</strong></span>
                    <span style="color: #8f98a0; font-size: 10px;">${match.date}</span>
                `;
                historyList.appendChild(item);
            });
        }
    }
}

function changeUsername() {
    const newName = prompt("Enter your new Steam gamer tag / username:", currentUsername);
    if (newName && newName.trim() !== "") {
        currentUsername = newName.trim();
        localStorage.setItem("geoMasterUsername", currentUsername);
        renderProfile();
    }
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        customAvatar = e.target.result;
        localStorage.setItem("geoMasterAvatar", customAvatar);
        renderProfile();
    };
    reader.readAsDataURL(file);
}

function handleUrlUpload() {
    const url = prompt("Enter the direct image URL from the internet:");
    if (url && url.trim() !== "") {
        customAvatar = url.trim();
        localStorage.setItem("geoMasterAvatar", customAvatar);
        renderProfile();
    }
}

function resetDefaultAvatar() {
    customAvatar = "";
    localStorage.removeItem("geoMasterAvatar");
    renderProfile();
}

function showShop() {
    stopTimer();
    gameOver = true;
    hideAllViews();
    document.getElementById("shopView").classList.remove("hidden");
    renderShop();
}

function showInventory() {
    stopTimer();
    gameOver = true;
    hideAllViews();
    document.getElementById("inventoryView").classList.remove("hidden");
    renderInventory();
}

function renderShop() {
    const grid = document.getElementById("shopGrid");
    const shopXP = document.getElementById("shopXP");
    if (!grid) return;
    shopXP.textContent = xp;
    grid.innerHTML = "";

    shopItems.forEach(item => {
        const isOwned = ownedItems.includes(item.id);
        const isEquipped = (item.type === "theme" && equippedTheme === item.color) || 
                           (item.type === "title" && equippedTitle === item.value) ||
                           (item.type === "frame" && equippedFrame === item.value);

        let btnText = isOwned ? (isEquipped ? "Equipped ✓" : "Equip") : `Buy (${item.cost} XP)`;
        let btnClass = isOwned ? (isEquipped ? "shop-btn equipped" : "shop-btn owned") : "shop-btn";

        const div = document.createElement("div");
        div.className = "shop-item";
        div.innerHTML = `
            <div class="shop-item-header">
                <div class="shop-item-icon">${item.icon}</div>
                <div class="shop-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>
            <button class="${btnClass}" onclick="handleShopAction('${item.id}', ${item.cost}, '${item.type}', '${item.color || item.value || ""}', '${item.className || ""}')">
                ${btnText}
            </button>
        `;
        grid.appendChild(div);
    });
}

function renderInventory() {
    const grid = document.getElementById("inventoryGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const defaultDiv = document.createElement("div");
    defaultDiv.className = "shop-item";
    defaultDiv.innerHTML = `
        <div class="shop-item-header">
            <div class="shop-item-icon">🏠</div>
            <div class="shop-item-info">
                <h4>Default Steam Background</h4>
                <p>Revert back to the default CSS styling and background.</p>
            </div>
        </div>
        <button class="shop-btn ${equippedClass === "" ? "equipped" : ""}" onclick="resetToDefaultTheme()">
            ${equippedClass === "" ? "Equipped ✓" : "Revert"}
        </button>
    `;
    grid.appendChild(defaultDiv);

    shopItems.filter(item => ownedItems.includes(item.id)).forEach(item => {
        const isEquipped = (item.type === "theme" && equippedTheme === item.color) || 
                           (item.type === "title" && equippedTitle === item.value) ||
                           (item.type === "frame" && equippedFrame === item.value);
                           
        const div = document.createElement("div");
        div.className = "shop-item";
        div.innerHTML = `
            <div class="shop-item-header">
                <div class="shop-item-icon">${item.icon}</div>
                <div class="shop-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>
            <button class="shop-btn ${isEquipped ? "equipped" : ""}" onclick="handleShopAction('${item.id}', 0, '${item.type}', '${item.color || item.value || ""}', '${item.className || ""}')">
                ${isEquipped ? "Equipped ✓" : "Equip"}
            </button>
        `;
        grid.appendChild(div);
    });
}

function handleShopAction(id, cost, type, value, className = "") {
    if (!ownedItems.includes(id)) {
        if (xp < cost) {
            alert("❌ Not enough XP! Play more games to earn XP.");
            return;
        }
        xp -= cost; 
        localStorage.setItem("geoMasterXP", xp);
        ownedItems.push(id);
        localStorage.setItem("geoMasterOwned", JSON.stringify(ownedItems));
        alert("🎉 Purchase successful! Equip your item from the Inventory tab.");
    } else {
        if (type === "theme") {
            equippedTheme = value;
            equippedClass = className;
            localStorage.setItem("geoMasterTheme", equippedTheme);
            localStorage.setItem("geoMasterThemeClass", equippedClass);
            applyTheme();
        } else if (type === "title") {
            equippedTitle = value;
            localStorage.setItem("geoMasterTitle", equippedTitle);
        } else if (type === "frame") {
            equippedFrame = value;
            localStorage.setItem("geoMasterFrame", equippedFrame);
            applyFrame(equippedFrame);
        }
    }
    renderShop();
    renderInventory();
    updateDashboardStats();
}

function applyFrame(frameClass) {
    const avatarContainer = document.getElementById("profileAvatarContainer");
    if (avatarContainer) {
        avatarContainer.className = "profile-big-avatar " + (frameClass || "");
    }
}

function resetToDefaultTheme() {
    equippedTheme = "#66c0f4";
    equippedClass = "";
    localStorage.removeItem("geoMasterTheme");
    localStorage.removeItem("geoMasterThemeClass");
    applyTheme();
    renderInventory();
}

function applyTheme() {
    document.body.className = "";
    if (equippedClass) document.body.classList.add(equippedClass);
    document.documentElement.style.setProperty("--accent-color", equippedTheme);
}

// ==========================================
// GAME CORE & ADVANCED RANDOMIZATION
// ==========================================

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame(mode) {
    stopTimer();
    currentMode = mode;
    score = 0;
    botScore = 0;
    lives = 3;
    questionNumber = 1;
    gameOver = false;

    const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
    const activeRegions = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);

    selectedCountries = countries.filter(c => activeRegions.includes(c.r));
    if (selectedCountries.length < 4) {
        alert("⚠️ Please select at least one region with enough countries in the Hub dashboard!");
        return;
    }

    questionDeck = fisherYatesShuffle([...selectedCountries]).slice(0, questionLimit);

    hideAllViews();
    document.getElementById("gameView").classList.remove("hidden");

    document.getElementById("livesBox").classList.toggle("hidden", mode !== "survival");
    document.getElementById("botScoreBox").classList.toggle("hidden", mode !== "vsComputer");
    document.getElementById("timerBox").classList.toggle("hidden", mode !== "timeAttack");

    nextQuestion();
}

function nextQuestion() {
    if (gameOver) return;
    if (questionNumber > questionLimit || (currentMode === "survival" && lives <= 0)) {
        endGame();
        return;
    }

    answered = false;
    document.getElementById("number").textContent = questionNumber;
    document.getElementById("feedback").textContent = "";
    document.getElementById("botThinking").classList.add("hidden");

    const flagDiv = document.getElementById("flag");
    flagDiv.innerHTML = "";
    const mapDiv = document.getElementById("countryMap");
    mapDiv.innerHTML = "";

    const pool = questionDeck.length > 0 ? questionDeck : selectedCountries;
    
    do {
        correctCountry = pool[Math.floor(Math.random() * pool.length)];
    } while (pool.length > 1 && correctCountry === window.lastCorrectCountry);
    window.lastCorrectCountry = correctCountry;

    let questionText = "";
    let effectiveMode = currentMode.startsWith("campaign_") ? "country" : currentMode;

    let chosenMode = effectiveMode;
    if (effectiveMode === "random") {
        const modes = ["flag", "map", "country", "capital"];
        chosenMode = modes[Math.floor(Math.random() * modes.length)];
    }

    let isFlagQ = false;
    let isMapQ = false;
    let isCountryQ = false; 

    if (chosenMode === "flag") {
        isFlagQ = true;
        questionText = "Which country does this flag belong to?";
        flagDiv.innerHTML = `<img src="https://flagcdn.com/w320/${correctCountry.code}.png" alt="Flag" style="max-height: 120px; border-radius: 4px;">`;
    } else if (chosenMode === "map") {
        isMapQ = true;
        questionText = "Which country does this map outline belong to?";
        mapDiv.innerHTML = `<img src="https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${correctCountry.code}/vector.svg" alt="Country Map" style="max-height: 160px; filter: drop-shadow(0 0 2px #fff);">`;
    } else if (chosenMode === "country") {
        isCountryQ = true;
        questionText = `Which country has <strong>${correctCountry.c}</strong> as its capital city?`;
    } else {
        questionText = `What is the capital city of <strong>${correctCountry.n}</strong> ${correctCountry.f}?`;
    }

    document.getElementById("question").innerHTML = questionText;

    let options = [correctCountry];
    while (options.length < 4) {
        const randomC = selectedCountries[Math.floor(Math.random() * selectedCountries.length)];
        if (!options.includes(randomC)) options.push(randomC);
    }
    options = fisherYatesShuffle(options);

    const optionsGrid = document.getElementById("options");
    optionsGrid.innerHTML = "";

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option";
        
        let showCountryName = isFlagQ || isMapQ || isCountryQ;
        btn.textContent = showCountryName ? opt.n : opt.c;
        btn.onclick = () => selectOption(btn, opt, showCountryName);
        optionsGrid.appendChild(btn);
    });

    if (currentMode === "timeAttack") startTimer();
    if (currentMode === "vsComputer") startBotSimulation();
}

function selectOption(button, chosenOpt, isNameQ) {
    if (answered || gameOver) return;
    answered = true;
    stopTimer();

    const correctVal = isNameQ ? correctCountry.n : correctCountry.c;
    const chosenVal = isNameQ ? chosenOpt.n : chosenOpt.c;
    const feedback = document.getElementById("feedback");

    document.querySelectorAll(".option").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctVal) btn.classList.add("correct");
    });

    if (chosenVal === correctVal) {
        score++;
        document.getElementById("score").textContent = score;
        feedback.style.color = "#10b981";
        feedback.textContent = "✅ Correct! Great job.";
        playCorrectSound();
    } else {
        button.classList.add("incorrect");
        feedback.style.color = "#ef4444";
        feedback.textContent = `❌ Incorrect! The correct answer was ${correctVal}.`;
        playWrongSound();
        if (currentMode === "survival") {
            lives--;
            document.getElementById("lives").textContent = lives;
        }
    }

    questionNumber++;
    setTimeout(() => nextQuestion(), 1500);
}

function startTimer() {
    stopTimer();
    timeLeft = 15;
    document.getElementById("timer").textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            stopTimer();
            handleTimeout();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    if (botTimeout) { clearTimeout(botTimeout); botTimeout = null; }
}

function handleTimeout() {
    if (answered || gameOver) return;
    answered = true;
    playWrongSound();

    const feedback = document.getElementById("feedback");
    feedback.style.color = "#ef4444";
    feedback.textContent = "⏰ Time's up!";

    if (currentMode === "survival") {
        lives--;
        document.getElementById("lives").textContent = lives;
    }

    questionNumber++;
    setTimeout(() => nextQuestion(), 1500);
}

function startBotSimulation() {
    document.getElementById("botThinking").classList.remove("hidden");
    botTimeout = setTimeout(() => {
        if (answered || gameOver) return;
        document.getElementById("botThinking").classList.add("hidden");
        if (Math.random() < 0.75) {
            botScore++;
            document.getElementById("botScore").textContent = botScore;
        }
    }, Math.random() * 2000 + 1000);
}

function endGame() {
    gameOver = true;
    stopTimer();
    gamesPlayed++;
    localStorage.setItem("geoMasterGames", gamesPlayed);

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("geoMasterBest", bestScore);
    }

    if (currentMode.startsWith("campaign_")) {
        const currentRegionName = currentMode.replace("campaign_", "");
        if (score >= 7) {
            const currentIndex = campaignRegions.findIndex(r => r.name === currentRegionName);
            if (currentIndex !== -1 && currentIndex + 1 < campaignRegions.length) {
                const nextRegionName = campaignRegions[currentIndex + 1].name;
                if (!unlockedRegions.includes(nextRegionName)) {
                    unlockedRegions.push(nextRegionName);
                    localStorage.setItem("geoMasterUnlockedRegions", JSON.stringify(unlockedRegions));
                    setTimeout(() => alert(`🎉 Region Conquered! You unlocked ${nextRegionName}!`), 300);
                }
            }
        }
    }

    const earnedXP = score * 25 + (currentMode.startsWith("campaign_") ? 50 : 10);
    addXP(earnedXP);

    matchHistory.push({
        mode: currentMode.replace("campaign_", "Campaign: "),
        score: score,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem("geoMasterHistory", JSON.stringify(matchHistory));

    hideAllViews();
    document.getElementById("resultView").classList.remove("hidden");
    document.getElementById("finalScore").textContent = score;
    document.getElementById("finalMessage").textContent = score >= 7 ? "🏆 Region Conquered!" : "👍 Good effort! Score 7+ to unlock the next region.";
    document.getElementById("finalXP").textContent = `+${earnedXP} XP`;
    document.getElementById("finalRank").textContent = getRank().icon + " " + getRank().name;
}

function restartGame() {
    hideAllViews();
    if (currentMode.startsWith("campaign_")) {
        showCampaignHub();
    } else {
        startGame(currentMode);
    }
}

function startSpeedrunMode() {
    stopTimer();
    gameOver = false;
    currentMode = "speedrun";
    score = 0;
    guessedCountries = [];

    hideAllViews();
    document.getElementById("speedrunView").classList.remove("hidden");
    document.getElementById("speedrunScore").textContent = "0";
    document.getElementById("speedrunTotal").textContent = countries.length;
    document.getElementById("guessedCountriesList").innerHTML = "";

    const input = document.getElementById("countryTypeInput");
    if (input) {
        input.value = "";
        input.focus();
        input.onkeydown = function(e) {
            if (e.key === "Enter") submitSpeedrunCountry(input.value.trim());
        };
    }

    speedrunTimeLeft = 300;
    updateSpeedrunTimerDisplay();

    if (speedrunTimerInterval) clearInterval(speedrunTimerInterval);
    speedrunTimerInterval = setInterval(() => {
        speedrunTimeLeft--;
        updateSpeedrunTimerDisplay();
        if (speedrunTimeLeft <= 0) {
            clearInterval(speedrunTimerInterval);
            endSpeedrun(false);
        }
    }, 1000);
}

function updateSpeedrunTimerDisplay() {
    const mins = Math.floor(speedrunTimeLeft / 60);
    const secs = speedrunTimeLeft % 60;
    document.getElementById("speedrunTimer").textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function submitSpeedrunCountry(guess) {
    if (!guess || gameOver) return;
    const input = document.getElementById("countryTypeInput");
    if (input) input.value = "";

    const matched = countries.find(c => c.n.toLowerCase() === guess.toLowerCase());
    if (matched && !guessedCountries.includes(matched.n)) {
        guessedCountries.push(matched.n);
        score++;
        document.getElementById("speedrunScore").textContent = score;
        playCorrectSound();

        const list = document.getElementById("guessedCountriesList");
        const tag = document.createElement("span");
        tag.className = "guessed-tag";
        tag.innerHTML = `${matched.f} ${matched.n}`;
        list.appendChild(tag);

        if (score === countries.length) {
            clearInterval(speedrunTimerInterval);
            endSpeedrun(true);
        }
    }
}

function endSpeedrun(completed) {
    gameOver = true;
    if (speedrunTimerInterval) clearInterval(speedrunTimerInterval);

    gamesPlayed++;
    localStorage.setItem("geoMasterGames", gamesPlayed);

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("geoMasterBest", bestScore);
    }

    const earnedXP = score * 10;
    addXP(earnedXP);
    matchHistory.push({ mode: "Country Typewriter", score: score, date: new Date().toLocaleDateString() });
    localStorage.setItem("geoMasterHistory", JSON.stringify(matchHistory));

    hideAllViews();
    document.getElementById("resultView").classList.remove("hidden");
    document.getElementById("finalScore").textContent = `${score} / ${countries.length}`;
    document.getElementById("finalMessage").textContent = completed ? "🎉 Incredible! You named every country!" : "⏱️ Time's up!";
    document.getElementById("finalXP").textContent = `+${earnedXP} XP`;
    document.getElementById("finalRank").textContent = getRank().icon + " " + getRank().name;
}

function showCampaignHub() {
    stopTimer();
    gameOver = true;
    hideAllViews();
    document.getElementById("campaignView").classList.remove("hidden");
    renderCampaignGrid();
}

function renderCampaignGrid() {
    const grid = document.getElementById("campaignRegionsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    campaignRegions.forEach(region => {
        const isUnlocked = unlockedRegions.includes(region.name);
        const div = document.createElement("div");
        div.style.background = "#111419";
        div.style.border = "1px solid " + (isUnlocked ? "#2a475e" : "#451a03");
        div.style.padding = "15px";
        div.style.borderRadius = "6px";
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";
        div.style.opacity = isUnlocked ? "1" : "0.6";

        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 30px;">${region.icon}</span>
                <div>
                    <h4 style="color: #ffffff; font-size: 15px; margin-bottom: 3px;">${region.name} ${isUnlocked ? "✅" : "🔒"}</h4>
                    <p style="color: #8f98a0; font-size: 11px;">${region.desc}</p>
                    ${!isUnlocked ? `<span style="color: #f87171; font-size: 10px;">Locked (Score 7+ on previous region)</span>` : ""}
                </div>
            </div>
            <button class="action-btn ${isUnlocked ? "success" : "secondary"}" style="width: auto; padding: 8px 16px; font-size: 12px;" ${isUnlocked ? `onclick="startCampaignRegion('${region.name}')"` : "disabled"}>
                ${isUnlocked ? "Conquer ⚔️" : "Locked"}
            </button>
        `;
        grid.appendChild(div);
    });
}

function startCampaignRegion(regionName) {
    currentMode = "campaign_" + regionName;
    score = 0;
    questionNumber = 1;
    lives = 3;
    gameOver = false;

    selectedCountries = countries.filter(c => c.r === regionName);
    questionDeck = fisherYatesShuffle([...selectedCountries]).slice(0, questionLimit);

    hideAllViews();
    document.getElementById("gameView").classList.remove("hidden");
    document.getElementById("livesBox").classList.add("hidden");
    document.getElementById("botScoreBox").classList.add("hidden");
    document.getElementById("timerBox").classList.add("hidden");
    nextQuestion();
}

let hopChain = [];
let currentHopCountryObj = null;

function startBorderHopperMode() {
    stopTimer();
    gameOver = false;
    currentMode = "borderHopper";
    score = 0;
    hopChain = [];

    currentHopCountryObj = countries[Math.floor(Math.random() * countries.length)];
    hopChain.push(currentHopCountryObj.n);

    hideAllViews();
    document.getElementById("borderHopView").classList.remove("hidden");
    
    document.getElementById("hopScore").textContent = "0";
    document.getElementById("currentHopCountry").textContent = currentHopCountryObj.n;
    document.getElementById("hopFlag").textContent = currentHopCountryObj.f;
    document.getElementById("hopCountryName").textContent = `${currentHopCountryObj.n} (Capital: ${currentHopCountryObj.c})`;

    const historyList = document.getElementById("hopHistoryList");
    if (historyList) {
        historyList.innerHTML = `<span class="guessed-tag">${currentHopCountryObj.f} ${currentHopCountryObj.n}</span>`;
    }

    const input = document.getElementById("borderHopInput");
    if (input) {
        input.value = "";
        input.focus();
        input.onkeydown = function(e) {
            if (e.key === "Enter") submitBorderHop(input.value.trim());
        };
    }
}

function submitBorderHop(guess) {
    if (!guess || gameOver) return;
    const input = document.getElementById("borderHopInput");
    if (input) input.value = "";

    const matchedCountry = countries.find(c => c.n.toLowerCase() === guess.toLowerCase());
    if (!matchedCountry) {
        alert(`❌ "${guess}" is not a recognized country name!`);
        return;
    }

    if (hopChain.map(s => s.toLowerCase()).includes(matchedCountry.n.toLowerCase())) {
        alert(`⚠️ You already visited ${matchedCountry.n} on this run!`);
        return;
    }

    const allowedBorders = (countryBorders[currentHopCountryObj.n] || []).map(b => b.toLowerCase());
    if (!allowedBorders.includes(matchedCountry.n.toLowerCase())) {
        alert(`❌ ${matchedCountry.n} does not border ${currentHopCountryObj.n}!`);
        return;
    }

    score++;
    hopChain.push(matchedCountry.n);
    currentHopCountryObj = matchedCountry;

    document.getElementById("hopScore").textContent = score;
    document.getElementById("currentHopCountry").textContent = currentHopCountryObj.n;
    document.getElementById("hopFlag").textContent = currentHopCountryObj.f;
    document.getElementById("hopCountryName").textContent = `${currentHopCountryObj.n} (Capital: ${currentHopCountryObj.c})`;

    const historyList = document.getElementById("hopHistoryList");
    if (historyList) {
        const tag = document.createElement("span");
        tag.className = "guessed-tag";
        tag.innerHTML = `${matchedCountry.f} ${matchedCountry.n}`;
        historyList.appendChild(tag);
    }
}

function endBorderHopper() {
    gameOver = true;
    gamesPlayed++;
    localStorage.setItem("geoMasterGames", gamesPlayed);

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("geoMasterBest", bestScore);
    }

    const earnedXP = score * 20;
    addXP(earnedXP);
    matchHistory.push({ mode: "Border Hopper", score: score, date: new Date().toLocaleDateString() });
    localStorage.setItem("geoMasterHistory", JSON.stringify(matchHistory));

    hideAllViews();
    document.getElementById("resultView").classList.remove("hidden");
    document.getElementById("finalScore").textContent = score;
    document.getElementById("finalMessage").textContent = `Great border hop run! Chained ${score} countries.`;
    document.getElementById("finalXP").textContent = `+${earnedXP} XP`;
    document.getElementById("finalRank").textContent = getRank().icon + " " + getRank().name;
}

window.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    applyFrame(equippedFrame);
    checkDailyLogin();
    updateDashboardStats();
});