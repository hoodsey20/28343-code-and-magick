'use strict';

// константы для всплывающего окна
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var PADDING = 20;
// константы для текста
var TEXT_FONT_SIZE = 16;
var TEXT_FONT_FAMILY = 'PT Mono';
var TEXT_FONT_COLOR = '#000';
// константы для колонок статистики
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var textLineHeight = Math.round(TEXT_FONT_SIZE * 1.3);
var barHeight = CLOUD_HEIGHT - PADDING * 3 - textLineHeight * 4;
// PADDING * 3, а не на 2, потому что нам нужен дополнительный отступ после заголовка

var renderCloud = function (ctx, props) {
  if (props.isShadowNeeded) {
    ctx.fillStyle = props.shadowColor;
    ctx.fillRect(props.x + CLOUD_GAP, props.y + CLOUD_GAP, props.width, props.height);
  }

  ctx.fillStyle = props.color;
  ctx.fillRect(props.x, props.y, props.width, props.height);
};

var renderText = function (ctx, text, x, y) {
  ctx.textBaseline = 'hanging';
  ctx.font = TEXT_FONT_SIZE + 'px ' + TEXT_FONT_FAMILY;
  ctx.fillStyle = TEXT_FONT_COLOR;
  ctx.fillText(text, x, y);
};

var getMaxOfArray = function (listOfNumbers) {
  return Math.max.apply(null, listOfNumbers);
};

var getRounded = function (element) {
  return Math.round(element);
};

var getRandomOpacity = function () {
  return Math.ceil(Math.random() * 10) / 10;
};

var renderChartColumn = function (ctx, props) {
  ctx.fillStyle = props.color;
  ctx.fillRect(props.x, props.y, props.width, props.height);
};

window.renderStatistics = function (ctx, names, times) {
  // округляем до целых результаты игроков
  var playersTimeResults = times.map(getRounded);
  // находим максимальное значение из результатов игроков
  var maxTime = getMaxOfArray(playersTimeResults);
  var cloudProps = {
    x: CLOUD_X,
    y: CLOUD_Y,
    width: CLOUD_WIDTH,
    height: CLOUD_HEIGHT,
    color: '#fff',
    isShadowNeeded: true,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  };

  // рисуем popup с результатами
  renderCloud(ctx, cloudProps);

  // рисуем заголовок для popup с результатами
  renderText(ctx, 'Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  renderText(ctx, 'Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING + textLineHeight);

  for (var i = 0; i < names.length; i++) {
    var columnLeftMargin = (BAR_WIDTH + BAR_GAP) * i;
    var nameTextYcoordinate = CLOUD_HEIGHT - PADDING;
    var columnXcoordinate = CLOUD_X + PADDING + columnLeftMargin;
    var columnHeight = playersTimeResults[i] * barHeight / maxTime;
    var columnYCoordinate = CLOUD_HEIGHT - columnHeight - (PADDING + TEXT_FONT_SIZE);
    var chartColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(42, 0, 254, ' + getRandomOpacity() + ')';
    var chartColumnProps = {
      color: chartColor,
      x: columnXcoordinate,
      y: columnYCoordinate,
      width: BAR_WIDTH,
      height: columnHeight,
    };
    // выводим имена игроков
    renderText(ctx, names[i], columnXcoordinate, nameTextYcoordinate);

    // рисуем колонки
    renderChartColumn(ctx, chartColumnProps);

    // выводим результат над колонками
    renderText(ctx, playersTimeResults[i], columnXcoordinate, columnYCoordinate - textLineHeight);
  }
};
