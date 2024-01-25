const projects = [
  {
    id: 1,
    image: "projects_main_image.png",
    cardImage: "project_1.png",
    // tags: ["icon_fire.png", "Ігри", "Frogwares"],
    tags: [
      {
        id: 1,
        tag: "icon_fire.png",
      },
      {
        id: 2,
        tag: "Ігри",
      },
      {
        id: 3,
        tag: "Frogwares",
      },
    ],
    title: "The Sinking City",
    desc: "The Sinking City — це детективна гра з відкритим світом з видом від третьої особи. Вона має відкриту систему розслідування, в якій результат виконання квестів гравцем часто визначається тим, наскільки він спостережливий при дослідженні різних доказів і на скільки логічно поєднує їх.",
    cardDesc: "Комп'ютерна гра в жанрі action-adventure",
    stats: {
      views: "20.000+",
      likes: "12.341",
      coverage: "19.801",
    },
    link: "https://store.steampowered.com/app/750130/The_Sinking_City/",
  },
  {
    id: 2,
    image: "projects_main_image_2.jpg",
    cardImage: "project_2.png",
    // tags: ["Азарт", "Реп", "Реклама"],
    tags: [
      {
        id: 1,
        tag: "Азарт",
      },
      {
        id: 2,
        tag: "Реп",
      },
      {
        id: 3,
        tag: "Реклама",
      },
    ],
    title: "Stake x Drake",
    desc: "Співпраця Stake та Дрейк спрямована на те, щоб подарувати абсолютно нові ігрові враження користувачам нашої платформи. Однією з його форм є інтерактивний ефір, на якому фанати виконавця та й просто гравці отримають шанс виграти по-крупному з Дрейком.",
    cardDesc: "Відчуйте неперевершене криптоказино та спорт",
    stats: {
      views: "15.345",
      likes: "9.781",
      coverage: "18.920",
    },
    link: "https://stake.com/ru/drake",
  },
  {
    id: 3,
    image: "projects_main_image_3.jpg",
    cardImage: "project_3.png",
    // tags: ["Кіберспорт", "Трансляції"],
    tags: [
      {
        id: 1,
        tag: "Кіберспорт",
      },
      {
        id: 2,
        tag: "Трансляції",
      },
    ],
    title: "Maincast",
    desc: "Професійна команда студії гарантує кожному партнеру унікальний підхід до трансляції в режимі LIVE. Трендові дизайн-рішення, використання 3D та технології захоплення рухів, високоякісна картинка, найкращі коментатори.",
    cardDesc: "Одна з провідних кіберспортивних компаній Європи",
    stats: {
      views: "17.989",
      likes: "11.203",
      coverage: "16.546",
    },
    link: "https://maincast.com/",
  },
  {
    id: 4,
    image: "projects_main_image_4.png",
    cardImage: "project_4.png",
    // tags: ["Ігровий бренд", "True gaming"],
    tags: [
      {
        id: 1,
        tag: "Ігровий бренд",
      },
      {
        id: 2,
        tag: "True gaming",
      },
    ],
    title: "MSI True Gaming",
    desc: "Сьогодні MSI є передовим та найбільш визнаним брендом серед геймерів та кіберспортсменів. Ми тісно співпрацюємо з професійними геймерами та прислуховуємось до бажань звичайних гравців. Наш ціль – нести дух True Gaming скрізь індустрію та закріпитись назавжди як бренд №1 серед виробників комп'ютерів та комплектуючих!",
    cardDesc: "Експерт у створенні потужних ігрових пристроїв",
    stats: {
      views: "11.402",
      likes: "7.300",
      coverage: "11.213",
    },
    link: "https://ua.msi.com/",
  },
];

export default projects;
