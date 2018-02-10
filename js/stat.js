'use strict';

(function () {
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
  var TEXT_LINE_HEIGHT = Math.round(TEXT_FONT_SIZE * 1.3);
  // константы для колонок статистики
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var BAR_HEIGHT = CLOUD_HEIGHT - PADDING * 3 - TEXT_LINE_HEIGHT * 4;
  // PADDING * 3, а не на 2, потому что нам нужен дополнительный отступ после заголовка

  var renderCloud = function (ctx, x, y, width, height, color, shadowColor) {
    // рисуем тень
    ctx.fillStyle = shadowColor;
    ctx.fillRect(x + CLOUD_GAP, y + CLOUD_GAP, width, height);

    // рисуем popup
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var renderText = function (ctx, text, x, y) {
    ctx.textBaseline = 'hanging';
    ctx.font = TEXT_FONT_SIZE + 'px ' + TEXT_FONT_FAMILY;
    ctx.fillStyle = TEXT_FONT_COLOR;
    ctx.fillText(text, x, y);
  };

  var getChartColumnColor = function (name) {
    if (name === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    }
    return 'rgba(42, 0, 254, ' + Math.ceil(Math.random() * 10) / 10 + ')';
  };

  var renderChartColumn = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  window.renderStatistics = function (ctx, names, times) {
    var nameTextYcoordinate = CLOUD_HEIGHT - PADDING;
    // округляем до целых результаты игроков
    var playersTimeResults = times.map(window.util.getRounded);
    // находим максимальное значение из результатов игроков
    var maxTime = window.util.getMaxOfArray(playersTimeResults);

    // рисуем popup с результатами
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff', 'rgba(0, 0, 0, 0.3)');

    // рисуем заголовок для popup с результатами
    renderText(ctx, 'Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
    renderText(ctx, 'Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING + TEXT_LINE_HEIGHT);

    for (var i = 0; i < names.length; i++) {
      var columnLeftMargin = (BAR_WIDTH + BAR_GAP) * i;
      var columnXcoordinate = CLOUD_X + PADDING + columnLeftMargin;
      var columnHeight = playersTimeResults[i] * BAR_HEIGHT / maxTime;
      var columnYCoordinate = CLOUD_HEIGHT - columnHeight - (PADDING + TEXT_FONT_SIZE);
      var chartColor = getChartColumnColor(names[i]);

      // выводим имена игроков
      renderText(ctx, names[i], columnXcoordinate, nameTextYcoordinate);

      // рисуем колонки
      renderChartColumn(ctx, columnXcoordinate, columnYCoordinate, BAR_WIDTH, columnHeight, chartColor);

      // выводим результат над колонками
      renderText(ctx, playersTimeResults[i], columnXcoordinate, columnYCoordinate - TEXT_LINE_HEIGHT);
    }
  };
})();
