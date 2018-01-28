'use strict';

// значения для всплывающего окна
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var PADDING = 20;
// значения для текста
var TEXT_FONT_SIZE = 16;
var TEXT_FONT_FAMILY = 'PT Mono';
var TEXT_FONT_COLOR = '#000';
var textLineHeight = Math.round(TEXT_FONT_SIZE * 1.3);
// значения для колонок статистики
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = CLOUD_HEIGHT - PADDING * 3 - textLineHeight * 4;
// PADDING * 3, а не на 2, потому что нам нужен дополнительный отступ после заголовка

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.textBaseline = 'hanging';
  ctx.font = TEXT_FONT_SIZE + 'px ' + TEXT_FONT_FAMILY;
  ctx.fillStyle = TEXT_FONT_COLOR;
  ctx.fillText(text, x, y);
};

var gettingMaxOfArray = function (listOfNumbers) {
  return Math.max.apply(null, listOfNumbers);
};

var returnRound = function (element) {
  return Math.round(element);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, 'Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  renderText(ctx, 'Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING + textLineHeight);

  // округляем до целых результаты игроков
  var playersTimeResults = times.map(returnRound);

  // находим максимальное значение из результатов игроков
  var maxTime = gettingMaxOfArray(playersTimeResults);

  for (var i = 0; i < names.length; i++) {
    var columnLeftMargin = (BAR_WIDTH + BAR_GAP) * i;
    var nameTextYcoordinate = CLOUD_HEIGHT - PADDING;
    var columnXcoordinate = CLOUD_X + PADDING + columnLeftMargin;
    var columnHeight = playersTimeResults[i] * barHeight / maxTime;
    var columnYCoordinate = CLOUD_HEIGHT - columnHeight - (PADDING + TEXT_FONT_SIZE);
    var chartColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(42, 0, 254, ' + Math.random() + ')';

    // выводим имена игроков
    renderText(ctx, names[i], columnXcoordinate, nameTextYcoordinate);

    // рисуем колонки
    ctx.fillStyle = chartColor;
    ctx.fillRect(columnXcoordinate, columnYCoordinate, BAR_WIDTH, columnHeight);

    // выводим результат над колонками
    renderText(ctx, playersTimeResults[i], columnXcoordinate, columnYCoordinate - textLineHeight);
  }
};
