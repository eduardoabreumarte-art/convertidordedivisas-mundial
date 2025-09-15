const apiKey = "a151f817463b6994854f7d0e"; // Tu API key de https://www.exchangerate-api.com/
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("currencyResult");

// Diccionario de monedas con nombres completos
const currencyNames = {
  AED: "Dirham de los Emiratos Árabes Unidos",
  AFN: "Afghani afgano",
  ALL: "Lek albanés",
  AMD: "Dram armenio",
  ANG: "Florín de las Antillas Neerlandesas",
  AOA: "Kwanza angoleño",
  ARS: "Peso argentino",
  AUD: "Dólar australiano",
  AWG: "Florín arubeño",
  AZN: "Manat azerí",
  BAM: "Marco convertible bosnio",
  BBD: "Dólar de Barbados",
  BDT: "Taka bangladeshí",
  BGN: "Lev búlgaro",
  BHD: "Dinar bahreiní",
  BIF: "Franco burundés",
  BMD: "Dólar bermudeño",
  BND: "Dólar de Brunéi",
  BOB: "Boliviano",
  BRL: "Real brasileño",
  BSD: "Dólar de Bahamas",
  BTN: "Ngultrum butanés",
  BWP: "Pula botsuana",
  BYN: "Rublo bielorruso",
  BZD: "Dólar beliceño",
  CAD: "Dólar canadiense",
  CDF: "Franco congoleño",
  CHF: "Franco suizo",
  CLP: "Peso chileno",
  CNY: "Yuan chino",
  COP: "Peso colombiano",
  CRC: "Colón costarricense",
  CUP: "Peso cubano",
  CVE: "Escudo caboverdiano",
  CZK: "Corona checa",
  DJF: "Franco yibutiano",
  DKK: "Corona danesa",
  DOP: "Peso dominicano",
  DZD: "Dinar argelino",
  EGP: "Libra egipcia",
  ERN: "Nakfa eritreo",
  ETB: "Birr etíope",
  EUR: "Euro",
  FJD: "Dólar fiyiano",
  FKP: "Libra de las Islas Malvinas",
  GBP: "Libra esterlina británica",
  GEL: "Lari georgiano",
  GHS: "Cedi ghanés",
  GIP: "Libra de Gibraltar",
  GMD: "Dalasi gambiano",
  GNF: "Franco guineano",
  GTQ: "Quetzal guatemalteco",
  GYD: "Dólar guyanés",
  HKD: "Dólar de Hong Kong",
  HNL: "Lempira hondureño",
  HRK: "Kuna croata",
  HTG: "Gourde haitiano",
  HUF: "Forint húngaro",
  IDR: "Rupia indonesia",
  ILS: "Nuevo shekel israelí",
  INR: "Rupia india",
  IQD: "Dinar iraquí",
  IRR: "Rial iraní",
  ISK: "Corona islandesa",
  JMD: "Dólar jamaiquino",
  JOD: "Dinar jordano",
  JPY: "Yen japonés",
  KES: "Chelín keniano",
  KGS: "Som kirguís",
  KHR: "Riel camboyano",
  KMF: "Franco comorense",
  KRW: "Won surcoreano",
  KWD: "Dinar kuwaití",
  KYD: "Dólar de las Islas Caimán",
  KZT: "Tenge kazajo",
  LAK: "Kip laosiano",
  LBP: "Libra libanesa",
  LKR: "Rupia de Sri Lanka",
  LRD: "Dólar liberiano",
  LSL: "Loti del Lesoto",
  LYD: "Dinar libio",
  MAD: "Dírham marroquí",
  MDL: "Leu moldavo",
  MGA: "Ariary malgache",
  MKD: "Denar macedonio",
  MMK: "Kyat birmano",
  MNT: "Tugrik mongol",
  MOP: "Pataca de Macao",
  MRU: "Ouguiya mauritana",
  MUR: "Rupia mauriciana",
  MVR: "Rufiyaa de Maldivas",
  MWK: "Kwacha malauí",
  MXN: "Peso mexicano",
  MYR: "Ringgit malasio",
  MZN: "Metical mozambiqueño",
  NAD: "Dólar namibio",
  NGN: "Naira nigeriana",
  NIO: "Córdoba nicaragüense",
  NOK: "Corona noruega",
  NPR: "Rupia nepalí",
  NZD: "Dólar neozelandés",
  OMR: "Rial omaní",
  PAB: "Balboa panameño",
  PEN: "Sol peruano",
  PGK: "Kina de Papúa Nueva Guinea",
  PHP: "Peso filipino",
  PKR: "Rupia pakistaní",
  PLN: "Zloty polaco",
  PYG: "Guaraní paraguayo",
  QAR: "Rial catarí",
  RON: "Leu rumano",
  RSD: "Dinar serbio",
  RUB: "Rublo ruso",
  RWF: "Franco ruandés",
  SAR: "Riyal saudí",
  SBD: "Dólar de las Islas Salomón",
  SCR: "Rupia seicheliana",
  SDG: "Libra sudanesa",
  SEK: "Corona sueca",
  SGD: "Dólar de Singapur",
  SHP: "Libra de Santa Elena",
  SLL: "Leone de Sierra Leona",
  SOS: "Chelín somalí",
  SRD: "Dólar surinamés",
  SSP: "Libra de Sudán del Sur",
  STN: "Dobra de Santo Tomé y Príncipe",
  SVC: "Colón salvadoreño",
  SYP: "Libra siria",
  SZL: "Lilangeni de Suazilandia",
  THB: "Baht tailandés",
  TJS: "Somoni tayiko",
  TMT: "Manat turcomano",
  TND: "Dinar tunecino",
  TOP: "Pa’anga tongano",
  TRY: "Lira turca",
  TTD: "Dólar de Trinidad y Tobago",
  TWD: "Dólar de Taiwán",
  UAH: "Hryvnia ucraniana",
  UGX: "Chelín ugandés",
  USD: "Dólar estadounidense",
  UYU: "Peso uruguayo",
  UZS: "Sum uzbeko",
  VES: "Bolívar venezolano",
  VND: "Dong vietnamita",
  VUV: "Vatu de Vanuatu",
  WST: "Tala samoana",
  XAF: "Franco CFA BEAC",
  XCD: "Dólar del Caribe Oriental",
  XOF: "Franco CFA BCEAO",
  XPF: "Franco CFP",
  YER: "Rial yemení",
  ZAR: "Rand sudafricano",
  ZMW: "Kwacha zambiano",
  ZWL: "Dólar zimbabuense"
};

// Cargar monedas desde API
async function loadCurrencies() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data.result !== "success") throw new Error("Error en API");

    const currencies = Object.keys(data.conversion_rates);

    currencies.forEach(cur => {
      const name = currencyNames[cur] || cur;
      fromCurrency.add(new Option(`${cur} - ${name}`, cur));
      toCurrency.add(new Option(`${cur} - ${name}`, cur));
    });

    fromCurrency.value = "USD";
    toCurrency.value = "EUR";

    const last = JSON.parse(localStorage.getItem("lastConversion"));
    if (last) {
      amount.value = last.amount;
      fromCurrency.value = last.from;
      toCurrency.value = last.to;
    }
  } catch (error) {
    console.error("Error cargando monedas:", error);

    ["USD", "EUR", "DOP"].forEach(cur => {
      const name = currencyNames[cur] || cur;
      fromCurrency.add(new Option(`${cur} - ${name}`, cur));
      toCurrency.add(new Option(`${cur} - ${name}`, cur));
    });
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
  }
}

// Conversión de divisas
document.getElementById("convertCurrency").addEventListener("click", async () => {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amt = parseFloat(amount.value);

  if (isNaN(amt)) {
    result.textContent = "⚠️ Ingresa un número válido.";
    return;
  }

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
    const data = await res.json();

    if (data.result !== "success") throw new Error("Error en API");

    const rate = data.conversion_rates[to];
    const converted = (amt * rate).toFixed(2);

    result.textContent = `${amt} ${currencyNames[from] || from} = ${converted} ${currencyNames[to] || to}`;

    localStorage.setItem("lastConversion", JSON.stringify({ amount: amt, from, to }));
  } catch (error) {
    console.error("Error en conversión:", error);
    result.textContent = "⚠️ Error en la conversión (verifica tu API Key).";
  }
});

loadCurrencies();
// Conversor de unidades mejorado
document.getElementById("convertUnit").addEventListener("click", () => {
  const value = parseFloat(document.getElementById("unitValue").value);
  const type = document.getElementById("unitType").value;
  const unitResult = document.getElementById("unitResult");

  if (isNaN(value)) {
    unitResult.textContent = "⚠️ Ingresa un número válido.";
    return;
  }

  let resultText = "";

  switch (type) {
    case "mToKm":
      resultText = `${value} metros = ${(value / 1000).toFixed(3)} kilómetros`;
      break;

    case "kmToM":
      resultText = `${value} kilómetros = ${(value * 1000).toFixed(0)} metros`;
      break;

    case "kgToLb":
      resultText = `${value} kilogramos = ${(value * 2.20462).toFixed(2)} libras`;
      break;

    case "lbToKg":
      resultText = `${value} libras = ${(value / 2.20462).toFixed(2)} kilogramos`;
      break;

    case "cToF":
      resultText = `${value} °C = ${((value * 9/5) + 32).toFixed(2)} °F`;
      break;

    case "fToC":
      resultText = `${value} °F = ${((value - 32) * 5/9).toFixed(2)} °C`;
      break;

    case "cmToIn":
      resultText = `${value} centímetros = ${(value / 2.54).toFixed(2)} pulgadas`;
      break;

    case "inToCm":
      resultText = `${value} pulgadas = ${(value * 2.54).toFixed(2)} centímetros`;
      break;

    case "lToGal":
      resultText = `${value} litros = ${(value * 0.264172).toFixed(2)} galones (US)`;
      break;

    case "galToL":
      resultText = `${value} galones (US) = ${(value / 0.264172).toFixed(2)} litros`;
      break;
  }

  unitResult.textContent = resultText;
});
