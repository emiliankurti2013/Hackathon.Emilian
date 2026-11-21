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
// GAME STATE & VARIABLES
// ==========================================

let currentMode = "";
let score = 0;
let questionNumber = 1;
let correctCountry = null;
let answered = false;
let timeLeft = 30;
let timerInterval = null;
let mapRequestNumber = 0;
let selectedCountries = [];
let questionDeck = [];
let gameOver = false;

const questionLimit = 10;
let xp = Number(localStorage.getItem("geoMasterXP")) || 0;

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

// ==========================================
// XP & RANK SYSTEM
// ==========================================

function getRank() {
    return [...ranks].reverse().find(rank => xp >= rank.xp);
}

function addXP(amount) {
    const oldRank = getRank();
    xp = Math.max(0, xp + amount);
    localStorage.setItem("geoMasterXP", xp);
    const newRank = getRank();

    updateXPDisplay();

    if (oldRank.name !== newRank.name) {
        alert("🎉 RANK UP!\n\n" + newRank.icon + " " + newRank.name);
    }
}

function updateXPDisplay() {
    const rank = getRank();
    const nextRank = ranks.find(r => r.xp > xp);

    const totalXP = document.getElementById("totalXP");
    const currentRank = document.getElementById("currentRank");
    const progress = document.getElementById("xpProgress");
    const next = document.getElementById("nextRank");

    if (totalXP) totalXP.textContent = xp;
    if (currentRank) currentRank.textContent = rank.icon + " " + rank.name;

    if (progress) {
        const percentage = nextRank
            ? ((xp - rank.xp) / (nextRank.xp - rank.xp)) * 100
            : 100;
        progress.style.width = percentage + "%";
    }

    if (next) {
        next.textContent = nextRank
            ? (nextRank.xp - xp) + " XP until " + nextRank.name
            : "MAX RANK REACHED!";
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function getRandomOptions(correct) {
    const wrongAnswers = shuffle(
        selectedCountries.filter(c => c.n !== correct.n)
    ).slice(0, 3);
    return shuffle([correct, ...wrongAnswers]);
}

function showCountryMap(country) {
    const mapContainer = document.getElementById("countryMap");
    mapContainer.style.display = "flex";
    
    // Primary source using your current implementation
    const primaryUrl = `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${country.code}/vector.svg`;
    
    mapContainer.innerHTML = `
        <img 
            id="dynamicMapImg"
            src="${primaryUrl}" 
            alt="Outline of ${country.n}"
            style="max-width: 160px; max-height: 140px; width: auto; height: auto; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"
            onerror="handleMapError(this, '${country.code}', '${country.n}')"
        >
    `;
}

// Fallback handler if a specific vector file fails to load
function showCountryMap(country) {
    const mapContainer = document.getElementById("countryMap");
    mapContainer.style.display = "flex";
    
    
    let mapUrl = `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${country.code}/vector.svg`;
    
    if (country.code === 'xk') {
        mapUrl = `https://upload.wikimedia.org/wikipedia/commons/e/e0/Kosovo_in_Europe_%28zoomed%29.svg`;
    }
    
    mapContainer.innerHTML = `
        <img 
            src="${mapUrl}" 
            alt="Outline of ${country.n}"
            style="max-width: 160px; max-height: 140px; width: auto; height: auto; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"
            onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'font-size:14px; color:#cbd5e1; text-align:center; padding:10px;\\'>🗺️ ${country.n} Outline Map</div>';"
        >
    `;

    if (country.code === 'xk') {
    mapUrl = `https://upload.wikimedia.org/wikipedia/commons/e/e0/Kosovo_in_Europe_%28zoomed%29.svg`;
}
}

function showTextFallback(imgElement, countryName) {
    imgElement.parentElement.innerHTML = `
        <div style="font-size: 14px; color: #cbd5e1; text-align: center; padding: 20px;">
            🗺️ Map outline for <strong>${countryName}</strong>
        </div>
    `;
}
// ==========================================
// GAME ENGINE & TIMERS
// ==========================================

function startGame(gameMode) {
    mode = gameMode;
    score = 0;
    questionNumber = 1;
    answered = false;
    gameOver = false;

    stopTimer();

    const regions = [
        ...document.querySelectorAll(".regions input:checked")
    ].map(input => input.value);

    if (regions.length === 0) {
        alert("Select at least one continent!");
        return;
    }

    selectedCountries = countries.filter(c => regions.includes(c.r));

    if (selectedCountries.length < 4) {
        alert("Select more continents or ensure at least 4 countries are available!");
        return;
    }

    questionDeck = shuffle(selectedCountries).slice(
        0,
        mode === "timeAttack" ? selectedCountries.length : Math.min(questionLimit, selectedCountries.length)
    );

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    const timerBox = document.getElementById("timerBox");

    if (mode === "timeAttack") {
        timerBox.classList.remove("hidden");
        timeLeft = 30;
        updateTimer();
        startTimer();
    } else {
        timerBox.classList.add("hidden");
    }

    updateXPDisplay();
    nextQuestion();
}

function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
        if (gameOver) {
            stopTimer();
            return;
        }

        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishGame();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimer() {
    const timer = document.getElementById("timer");
    const box = document.getElementById("timerBox");
    if (timer) timer.textContent = timeLeft;
    if (box) box.classList.toggle("danger", timeLeft <= 10);
}

function nextQuestion() {
    if (questionNumber > questionDeck.length) {
        finishGame();
        return;
    }

    answered = false;
    correctCountry = questionDeck[questionNumber - 1];

    document.getElementById("score").textContent = score;
    document.getElementById("number").textContent = questionNumber;
    document.getElementById("feedback").textContent = "";

    const flagElement = document.getElementById("flag");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const mapContainer = document.getElementById("countryMap");

    flagElement.style.display = "flex";
    flagElement.innerHTML = "";
    mapContainer.style.display = "none";
    mapContainer.innerHTML = "";

    mapRequestNumber++;

    questionElement.textContent = "";
    optionsElement.innerHTML = "";

    document.getElementById("next").style.display = "none";

    const randomModes = ["flag", "capital", "country", "map"];
    currentMode = mode;

    if (mode === "random" || mode === "timeAttack") {
        currentMode = randomModes[Math.floor(Math.random() * randomModes.length)];
    }

    const options = getRandomOptions(correctCountry);

    if (currentMode === "flag") {
        flagElement.style.display = "flex";
        flagElement.innerHTML = `
            <img
                src="https://flagcdn.com/w320/${correctCountry.code}.png"
                alt="${correctCountry.n} flag"
            >
        `;
        questionElement.textContent = "Which country does this flag belong to?";
    } else if (currentMode === "capital") {
        flagElement.style.display = "none";
        questionElement.textContent = "What is the capital of " + correctCountry.n + "?";
    } else if (currentMode === "country") {
        flagElement.style.display = "none";
        questionElement.textContent = "This country is in " + correctCountry.r + ". Its capital is " + correctCountry.c + ". Which country is it?";
    } else if (currentMode === "map") {
        flagElement.style.display = "none";
        questionElement.textContent = "Which country is shown on the map?";
        showCountryMap(correctCountry);
    }

    options.forEach(country => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = (currentMode === "capital") ? country.c : country.n;
        button.addEventListener("click", () => {
            checkAnswer(country, button);
        });
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedCountry, buttonElement) {
    if (answered) return;
    answered = true;

    const allButtons = document.querySelectorAll(".options button");
    allButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedCountry.n === correctCountry.n;
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        buttonElement.classList.add("correct");
        score++;
        feedback.textContent = "✅ Correct! +10 XP";
        feedback.style.color = "#34d399";
        addXP(10);
        if (mode === "timeAttack") {
            timeLeft += 5; // Bonus time
        }
    } else {
        buttonElement.classList.add("incorrect");
        feedback.textContent = `❌ Wrong! The correct answer was ${currentMode === "capital" ? correctCountry.c : correctCountry.n}.`;
        feedback.style.color = "#f87171";
        addXP(-5);

        // Highlight correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === (currentMode === "capital" ? correctCountry.c : correctCountry.n)) {
                btn.classList.add("correct");
            }
        });
    }

    document.getElementById("score").textContent = score;

    if (mode === "timeAttack") {
        questionNumber++;
        setTimeout(() => {
            if (!gameOver) nextQuestion();
        }, 1200);
    } else {
        document.getElementById("next").style.display = "block";
        questionNumber++;
    }
}

function finishGame() {
    if (gameOver) return;
    gameOver = true;
    stopTimer();

    document.getElementById("game").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("finalScore").textContent =
        mode === "timeAttack"
            ? score + " points"
            : score + " / " + questionDeck.length;

    let message;
    if (mode === "timeAttack") {
        message = "⏱️ Time is up! You scored " + score + " points!";
    } else if (score === questionDeck.length) {
        message = "🏆 PERFECT SCORE!";
    } else if (score >= 8) {
        message = "🌍 Amazing geography knowledge!";
    } else if (score >= 6) {
        message = "👏 Great job!";
    } else {
        message = "📚 Keep practicing!";
    }

    document.getElementById("finalMessage").textContent = message;
    document.getElementById("finalXP").textContent = xp;
    document.getElementById("finalRank").textContent = getRank().icon + " " + getRank().name;

    updateXPDisplay();
}

function backToMenu() {
    stopTimer();
    gameOver = true;
    mapRequestNumber++;

    document.getElementById("game").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");

    updateXPDisplay();
}

function restartGame() {
    startGame(mode);
}

document.addEventListener("DOMContentLoaded", () => {
    updateXPDisplay();

    const nextBtn = document.getElementById("next");
    if (nextBtn) {
        nextBtn.addEventListener("click", nextQuestion);
    }

    console.log("🌍 GeoMaster loaded successfully!");
    console.log("Total Countries Available:", countries.length);
});