const countries = [
     // EUROPE
    {n:"Albania",c:"Tirana",f:"🇦🇱",r:"Europe"},
    {n:"Andorra",c:"Andorra la Vella",f:"🇦🇩",r:"Europe"},
    {n:"Austria",c:"Vienna",f:"🇦🇹",r:"Europe"},
    {n:"Belarus",c:"Minsk",f:"🇧🇾",r:"Europe"},
    {n:"Belgium",c:"Brussels",f:"🇧🇪",r:"Europe"},
    {n:"Bosnia and Herzegovina",c:"Sarajevo",f:"🇧🇦",r:"Europe"},
    {n:"Bulgaria",c:"Sofia",f:"🇧🇬",r:"Europe"},
    {n:"Croatia",c:"Zagreb",f:"🇭🇷",r:"Europe"},
    {n:"Cyprus",c:"Nicosia",f:"🇨🇾",r:"Europe"},
    {n:"Czechia",c:"Prague",f:"🇨🇿",r:"Europe"},
    {n:"Denmark",c:"Copenhagen",f:"🇩🇰",r:"Europe"},
    {n:"Estonia",c:"Tallinn",f:"🇪🇪",r:"Europe"},
    {n:"Finland",c:"Helsinki",f:"🇫🇮",r:"Europe"},
    {n:"France",c:"Paris",f:"🇫🇷",r:"Europe"},
    {n:"Germany",c:"Berlin",f:"🇩🇪",r:"Europe"},
    {n:"Greece",c:"Athens",f:"🇬🇷",r:"Europe"},
    {n:"Hungary",c:"Budapest",f:"🇭🇺",r:"Europe"},
    {n:"Iceland",c:"Reykjavik",f:"🇮🇸",r:"Europe"},
    {n:"Ireland",c:"Dublin",f:"🇮🇪",r:"Europe"},
    {n:"Italy",c:"Rome",f:"🇮🇹",r:"Europe"},
    {n:"Kosovo",c:"Pristina",f:"🇽🇰",r:"Europe"},
    {n:"Latvia",c:"Riga",f:"🇱🇻",r:"Europe"},
    {n:"Liechtenstein",c:"Vaduz",f:"🇱🇮",r:"Europe"},
    {n:"Lithuania",c:"Vilnius",f:"🇱🇹",r:"Europe"},
    {n:"Luxembourg",c:"Luxembourg",f:"🇱🇺",r:"Europe"},
    {n:"Malta",c:"Valletta",f:"🇲🇹",r:"Europe"},
    {n:"Moldova",c:"Chisinau",f:"🇲🇩",r:"Europe"},
    {n:"Monaco",c:"Monaco",f:"🇲🇨",r:"Europe"},
    {n:"Montenegro",c:"Podgorica",f:"🇲🇪",r:"Europe"},
    {n:"Netherlands",c:"Amsterdam",f:"🇳🇱",r:"Europe"},
    {n:"North Macedonia",c:"Skopje",f:"🇲🇰",r:"Europe"},
    {n:"Norway",c:"Oslo",f:"🇳🇴",r:"Europe"},
    {n:"Poland",c:"Warsaw",f:"🇵🇱",r:"Europe"},
    {n:"Portugal",c:"Lisbon",f:"🇵🇹",r:"Europe"},
    {n:"Romania",c:"Bucharest",f:"🇷🇴",r:"Europe"},
    {n:"Russia",c:"Moscow",f:"🇷🇺",r:"Europe"},
    {n:"San Marino",c:"San Marino",f:"🇸🇲",r:"Europe"},
    {n:"Serbia",c:"Belgrade",f:"🇷🇸",r:"Europe"},
    {n:"Slovakia",c:"Bratislava",f:"🇸🇰",r:"Europe"},
    {n:"Slovenia",c:"Ljubljana",f:"🇸🇮",r:"Europe"},
    {n:"Spain",c:"Madrid",f:"🇪🇸",r:"Europe"},
    {n:"Sweden",c:"Stockholm",f:"🇸🇪",r:"Europe"},
    {n:"Switzerland",c:"Bern",f:"🇨🇭",r:"Europe"},
    {n:"Ukraine",c:"Kyiv",f:"🇺🇦",r:"Europe"},
    {n:"United Kingdom",c:"London",f:"🇬🇧",r:"Europe"},
    {n:"Vatican City",c:"Vatican City",f:"🇻🇦",r:"Europe"},

    // ASIA
    {n:"Afghanistan",c:"Kabul",f:"🇦🇫",r:"Asia"},
    {n:"Armenia",c:"Yerevan",f:"🇦🇲",r:"Asia"},
    {n:"Azerbaijan",c:"Baku",f:"🇦🇿",r:"Asia"},
    {n:"Bahrain",c:"Manama",f:"🇧🇭",r:"Asia"},
    {n:"Bangladesh",c:"Dhaka",f:"🇧🇩",r:"Asia"},
    {n:"Bhutan",c:"Thimphu",f:"🇧🇹",r:"Asia"},
    {n:"Brunei",c:"Bandar Seri Begawan",f:"🇧🇳",r:"Asia"},
    {n:"Cambodia",c:"Phnom Penh",f:"🇰🇭",r:"Asia"},
    {n:"China",c:"Beijing",f:"🇨🇳",r:"Asia"},
    {n:"Georgia",c:"Tbilisi",f:"🇬🇪",r:"Asia"},
    {n:"India",c:"New Delhi",f:"🇮🇳",r:"Asia"},
    {n:"Indonesia",c:"Jakarta",f:"🇮🇩",r:"Asia"},
    {n:"Iran",c:"Tehran",f:"🇮🇷",r:"Asia"},
    {n:"Iraq",c:"Baghdad",f:"🇮🇶",r:"Asia"},
    {n:"Israel",c:"Jerusalem",f:"🇮🇱",r:"Asia"},
    {n:"Japan",c:"Tokyo",f:"🇯🇵",r:"Asia"},
    {n:"Jordan",c:"Amman",f:"🇯🇴",r:"Asia"},
    {n:"Kazakhstan",c:"Astana",f:"🇰🇿",r:"Asia"},
    {n:"Kuwait",c:"Kuwait City",f:"🇰🇼",r:"Asia"},
    {n:"Kyrgyzstan",c:"Bishkek",f:"🇰🇬",r:"Asia"},
    {n:"Laos",c:"Vientiane",f:"🇱🇦",r:"Asia"},
    {n:"Lebanon",c:"Beirut",f:"🇱🇧",r:"Asia"},
    {n:"Malaysia",c:"Kuala Lumpur",f:"🇲🇾",r:"Asia"},
    {n:"Maldives",c:"Male",f:"🇲🇻",r:"Asia"},
    {n:"Mongolia",c:"Ulaanbaatar",f:"🇲🇳",r:"Asia"},
    {n:"Myanmar",c:"Naypyidaw",f:"🇲🇲",r:"Asia"},
    {n:"Nepal",c:"Kathmandu",f:"🇳🇵",r:"Asia"},
    {n:"North Korea",c:"Pyongyang",f:"🇰🇵",r:"Asia"},
    {n:"Oman",c:"Muscat",f:"🇴🇲",r:"Asia"},
    {n:"Pakistan",c:"Islamabad",f:"🇵🇰",r:"Asia"},
    {n:"Philippines",c:"Manila",f:"🇵🇭",r:"Asia"},
    {n:"Qatar",c:"Doha",f:"🇶🇦",r:"Asia"},
    {n:"Saudi Arabia",c:"Riyadh",f:"🇸🇦",r:"Asia"},
    {n:"Singapore",c:"Singapore",f:"🇸🇬",r:"Asia"},
    {n:"South Korea",c:"Seoul",f:"🇰🇷",r:"Asia"},
    {n:"Sri Lanka",c:"Sri Jayawardenepura Kotte",f:"🇱🇰",r:"Asia"},
    {n:"Syria",c:"Damascus",f:"🇸🇾",r:"Asia"},
    {n:"Tajikistan",c:"Dushanbe",f:"🇹🇯",r:"Asia"},
    {n:"Thailand",c:"Bangkok",f:"🇹🇭",r:"Asia"},
    {n:"Timor-Leste",c:"Dili",f:"🇹🇱",r:"Asia"},
    {n:"Turkey",c:"Ankara",f:"🇹🇷",r:"Asia"},
    {n:"Turkmenistan",c:"Ashgabat",f:"🇹🇲",r:"Asia"},
    {n:"United Arab Emirates",c:"Abu Dhabi",f:"🇦🇪",r:"Asia"},
    {n:"Uzbekistan",c:"Tashkent",f:"🇺🇿",r:"Asia"},
    {n:"Vietnam",c:"Hanoi",f:"🇻🇳",r:"Asia"},
    {n:"Yemen",c:"Sanaa",f:"🇾🇪",r:"Asia"},

    
    
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
// PART 1 - VARIABLES AND XP SYSTEM
// ==========================================

let currentMode = "";
let score = 0;
let questionNumber = 1;
let correctCountry = null;
let answered = false;
let timeLeft = 30;
let timerInterval = null;


let selectedCountries = [];
let questionDeck = [];

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


let gameOver = false;

function getRank() {
    return [...ranks].reverse().find(r => xp >= r.xp);
}

function addXP(amount) {
    const oldRank = getRank();

    xp += amount;
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

    document.getElementById("totalXP").textContent = xp;
    document.getElementById("currentRank").textContent =
        rank.icon + " " + rank.name;

    document.getElementById("xpProgress").style.width =
        (nextRank
            ? ((xp - rank.xp) / (nextRank.xp - rank.xp)) * 100
            : 100) + "%";

    document.getElementById("nextRank").textContent =
        nextRank
            ? (nextRank.xp - xp) + " XP until " + nextRank.name
            : "MAX RANK REACHED!";
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function getRandomOptions(correct) {
    const wrong = shuffle(
        selectedCountries.filter(c => c.n !== correct.n)
    ).slice(0, 3);

    return shuffle([correct, ...wrong]);
}



// ==========================================
// PART 2 - XP AND HELPER FUNCTIONS
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

    if (currentRank) {
        currentRank.textContent = rank.icon + " " + rank.name;
    }

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


// ==========================================
// PART 3 - START GAME AND TIMER
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

    selectedCountries = countries.filter(c =>
        regions.includes(c.r)
    );

    if (selectedCountries.length < 4) {
        alert("Select more continents!");
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

    timer.textContent = timeLeft;

    box.classList.toggle("danger", timeLeft <= 10);
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

    // Choose question type
    const randomModes = ["flag", "capital", "country", "map"];

    currentMode = mode;

    if (mode === "random" || mode === "timeAttack") {
        currentMode = randomModes[
            Math.floor(Math.random() * randomModes.length)
        ];
    }

    // Generate answers
    const options = getRandomOptions(correctCountry);

    // FLAG QUESTION
    if (currentMode === "flag") {

        flagElement.style.display = "flex";

        flagElement.innerHTML = `
            <img
                src="https://flagcdn.com/w320/${correctCountry.code}.png"
                alt="${correctCountry.n} flag"
                style="width:220px;max-width:100%;border-radius:12px;"
            >
        `;

        questionElement.textContent =
            "Which country does this flag belong to?";
    }

    // CAPITAL QUESTION
    else if (currentMode === "capital") {

        questionElement.textContent =
            "What is the capital of " + correctCountry.n + "?";
    }

    // COUNTRY QUESTION
    else if (currentMode === "country") {

        questionElement.textContent =
            "This country is in " + correctCountry.r +
            ". Its capital is " + correctCountry.c +
            ". Which country is it?";
    }

    // MAP QUESTION
    else if (currentMode === "map") {

        flagElement.style.display = "none";

        questionElement.textContent =
            "Which country is shown on the map?";

        showCountryMap(correctCountry);
    }

    // CREATE ANSWER BUTTONS
    options.forEach(country => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            currentMode === "capital"
                ? country.c
                : country.n;

        button.addEventListener("click", () => {
            checkAnswer(country, button);
        });

        optionsElement.appendChild(button);
    });
}


// ==========================================
// PART 4 - ANSWERS AND RESULTS
// ==========================================


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
    document.getElementById("finalRank").textContent =
        getRank().icon + " " + getRank().name;

    updateXPDisplay();
}

function backToMenu() {
    stopTimer();
    gameOver = true;

    if (typeof mapRequestNumber !== "undefined") {
        mapRequestNumber++;
    }

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

    document.getElementById("next").addEventListener(
        "click",
        nextQuestion
    );

    console.log("🌍 GeoMaster loaded!");
    console.log("Countries:", countries.length);
});
