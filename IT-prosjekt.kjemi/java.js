
let form = document.getElementById("form");
let atomnummerEl = document.getElementById("atomnummer");
let atomEl = document.getElementById("atom");
buttonEl = document.querySelector("button");


let oversetter = {
  1: "Hydrogen",
  2: "Helium",
  3: "Litium",
  4: "Beryllium",
  5: "Bor",
  6: "Karbon",
  7: "Nitrogen",
  8: "Oksygen",
  9: "fluor",
  10: "Neon",
  11: "Natrium",
  12: "Magnesium",
  13: "Aluminium",
  14: "Silisium",
  15: "fosfor",
  16: "Svovel",
  17: "Klor",
  18: "Argon",
  19: "Kalium",
  20: "Kalsium",
  21: "Scandium",
  22: "Titan",
  23: "Vanadium",
  24: "Krom",
  25: "Mangan",
  26: "Jern",
  27: "Kobolt",
  28: "Nikkel",
  29: "Kobber",
  30: "Sink",
  31: "Gallium",
  32: "Germanium",
  33: "Arsen",
  34: "Selen",
  35: "Brom",
  36: "Krypton",
  37: "Rubidium",
  38: "Strontium",
  39: "Yttrium",
  40: "Zirkonium",
  41: "Niob",
  42: "Mylobden",
  43: "Technetium",
  44: "Ruthenium",
  45: "Rhodium",
  46: "Palladium",
  47: "Sølv",
  48: "Kadmium",
  49: "Inium",
  50: "Tinn",
  51: "Antimon",
  52: "Tellur",
  53: "Jod",
  54: "Xenon",
  55: "Celsium",
  56: "Barium",
  57: "Lantan",
  58: "Cerium",
  59: "Praseodym",
  60: "Neodym",
  61: "Promethium",
  62: "samarium",
  63: "Europium",
  64: "Gadalonium",
  65: "Terbium",
  66: "Dysprosium",
  67: "Holmium",
  68: "Erbium",
  69: "Thulium",
  70: "Ytterbium",
  71: "Lutetium",
  72: "hafnium",
  73: "Tantal",
  74: "Wolfram",
  75: "Rhenium",
  76: "Osmium",
  77: "Iridium",
  78: "Platina",
  79: "Gull",
  80: "Kvikksølv",
  81: "Thallium",
  82: "Bly",
  83: "Vismut",
  84: "Polonium",
  85: "Astat",
  86: "Radon",
  87: "Francium",
  88: "Radium",
  89: "Actinium",
  90: "Thorium",
  91: "Protactinium",
  92: "Uran",
  93: "Neptinium",
  94: "Plutonium",
  95: "Americum",
  96: "Curium",
  97: "Berkelium",
  98: "Californium",
  99: "Einsteinium",
  100: "Fermium",
  101: "Menelevium",
  102: "Nobelium",
  103: "Lawrencium",
  104: "Rutherfordium",
  105: "Dubnium",
  106: "Seaborgium",
  107: "Bohrium",
  108: "Hassium",
  109: "Meitnerium",
  110: "Darmstadtium",
  111: "Røntgenium",
  112: "Copernicum",
  113: "Nihonium",
  114: "Flerovium",
  115: "Moscovium",
  116: "Livermorium",
  117: "Tenness",
  118: "Organeson",
};

buttonEl.addEventListener('click', finnGrunnstoff)

function finnGrunnstoff(e){
    e.preventDefault()
    if (+atomnummerEl.value in oversetter) {
        atomEl.innerHTML = oversetter [+atomnummerEl.value];
    }
    else{
        atomEl.innerHTML = "Ikke et atom;)"

    }

}

//kilde til hjelp med JavaScript
//https://www.youtube.com/watch?v=rfvl5v89LaI&t=305s

let burgerEL = document.querySelector('.fa-bars')

let navEL = document.querySelector ('.nav')

burgerEL.addEventListener('click', showNav)

function showNav(){
    navEL.classList.toggle('show')
}



