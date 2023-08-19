ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.758482801989724,37.621703414169744],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
      controls: [],
  },
  {
    suppressMapOpenBlock: true,
  });

  var myPlacemark = new ymaps.Placemark([55.769664161131324,37.639341525739596], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/map-icon.svg",
    iconImageSize: [12, 12],
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();

  myPlacemark.events.add(['click'],  function () {
    document.querySelector('.js-menu-info').classList.toggle('js-open');
  });
};

document.querySelector('.js-contacts-close').addEventListener('click', function() {
  document.querySelector('.js-menu-info').classList.remove('js-open');
})

