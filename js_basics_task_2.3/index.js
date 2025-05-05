
const csvData = `
50.18,28.49,Житомир,284236,,,,,
49.04,28.12,Жмеринка,37349,
47.53,,,,35.23,Запоріжжя,815256,
45.11,33.28,Євпаторія,105915,
48.56,24.53,Івано-Франківськ,218359,
48.43,26.45,Камянець-Подільський,99610,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,

# в цьому файлі три рядки-коментаря :)
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,,,,
#45.40,34.29,Джанкой,43343,
48.28,34.47,Камянське,,,,255841,
48.31,35.08,Дніпро,1065008,
48.03,37.47,Донецьк,1016194,
50.18,28.49,Житомир,284236,,,,,
49.04,28.12,Жмеринка,37349,
47.53,,,,35.23,Запоріжжя,815256,
45.11,33.28,Євпаторія,105915,
48.56,24.53,Івано-Франківськ,218359,
48.43,26.45,Камянець-Подільський,99610,
#45.20,36.38,Керч,157007,
50.27,30.30,Київ,2611327,
49.07,33.35,Кременчук,234073,
47.54,33.33,Кривий Ріг,668980,
48.36,39.22,Луганськ,463097,
50.49,25.26,Луцьк,208816,
49.53,24.16,Львів,732818,
47.07,37.40,Маріуполь,492176,
46.53,35.25,Мелітополь,160657,,,
46.58,32.12,Миколаїв,514136,
48.26,22.45,Мукачеве,82346,
47.37,34.30,Нікополь,136280,
46.29,30.44,Одеса,1029049,
48.33,35.57,Павлоград,118816,
49.27,32.03,Черкаси,269836
50.58,34.52,Суми,256474
49.37,34.37,Полтава,317998
48.31,32.21,Кропивницький,254103
48.75,30.22,Умань,82201
48.67,33.12,Олександрія,82287
49.05,33.24,,,Світловодськ,45000
48.72,32.67,Знам'янка,20000
48.33,29.87,Гайворон,15000
48.32,31.53,Новоукраїнка,16000`

const replacerFunction = createCityReplacer(csvData);
alert("I love Ukraine!")
console.log(replacerFunction(
    `Дніпро - про модерновість та міць.
    Донецьк - це Україна.
    Кривий Ріг - сталеві м'язи.
    Львів - культурна столиця нашої країни`));

function createCityReplacer(csvData) {
    const cityData = csvData
        .split("\n")
        .filter(row => row.trim() && !row.startsWith("#"))
        .map(row => row.split(",").map(part => part.trim()))
        .filter(parts => parts.length >= 4 && parts[2] && !isNaN(parts[3]))
        .map(parts => ({
            x: parts[0],
            y: parts[1],
            name: parts[2],
            population: +parts[3]
        }))
        .sort((less, more) => more.population - less.population)
        .slice(0, 10)
       .reduce((accumulator, city, index) => {
            accumulator[city.name] = {
                population: city.population,
                rating: index+1};
            return accumulator;
        }, {});
       /*  console.log("Рейтинг міст:");
        Object.keys(cityData).forEach(city => {
            console.log(`${city}: Рейтинг - ${cityData[city].rating}, Населення - ${cityData[city].population}`);
        }); */

    return information => { // lambda function
        const regularExpression = new RegExp(
            `(^|\\s)(${Object.keys(cityData).join("|")})(\\s|[.,;?!]|$)`,
            "g"//global search
        );

        return information.replace(regularExpression, (match, before, city, after) => {
            const { population, rating } = cityData[city];
            return `${before}${city} (${rating} місце в ТОП-10 найбільших міст України, населення: ${population} ${correctEnding(population)})${after}`;

        });

    };
}

function correctEnding(population) {
        return (population % 10 === 1 && population % 100 !== 11)
            ? "людина"
            : ([2, 3, 4].includes(population % 10) && ![12, 13, 14].includes(population % 100))
                ? "людини"
                : "людей";
    }

