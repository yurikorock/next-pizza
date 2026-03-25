export const categories = [
  { name: "Піци" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейлі" },
  { name: "Напої" },
];

export const ingredients = [
  {
    name: 'Сирний борт',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Вершкова моцарела',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сири чедер та пармезан',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Гострий перец халапеньйо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Ніжне курча',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампіньони',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Шинка',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пікантна пеппероні',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Гостра чорізо',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Мариновані огірки',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свіжі томати',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Червоний перець',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочні ананаси',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Италійські трави',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Солодкий перець',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Шматочки бринзи',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Мітболи',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет з шинкою та грибами',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет з пеппероні',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
    categoryId: 2,
  },
  {
    name: 'Кава Латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 2,
  },
  {
    name: 'Денвіч шинка та сир',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
    categoryId: 3,
  },
  {
    name: 'Курячі наггетси',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
    categoryId: 3,
  },
  {
    name: 'Картопля з печі із соусом 🌱',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
    categoryId: 3,
  },
  {
    name: 'Гострий Додстер 🌶️🌶️',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 3,
  },
  {
    name: 'Банановий молочний коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
    categoryId: 4,
  },
  {
    name: 'Карамелізоване яблуко молочний коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
    categoryId: 4,
  },
  {
    name: 'Молочний коктейль з печивом Орео',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
    categoryId: 4,
  },
  {
    name: 'Класичний молочний коктейль 👶',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландський Капучіно',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Карамельний капучіно',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Кокосовий латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Амерікано',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 5,
  },
];