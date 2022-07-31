var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var POSITION_X = 100;
var POSITION_Y = 10;

var renderCloud = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderColumn = function(ctx, x, y, width, height, color, name, time) {
  renderCloud(ctx, x, y, width, height, color);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(name, x, y + height + 10);
  ctx.fillText(Math.round(time), x, y - 20);
};

var renderGist = function(ctx, names, times) {

  var maxtime = times[0];
  var cur_x = POSITION_X + 50;
  var cur_y = POSITION_Y + 80;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxtime) {
      maxtime = times[i];
    };
  };

  var sizeSecond = 150 / maxtime; 
  var color = '#ccc';

  for (var i = 0; i < times.length; i++) {

    if (names[i] == 'Вы') color = 'red';
    else color = 'rgb(0, 0,' + Math.floor(Math.random() * 255) + ')';

    var cur_size = Math.round(sizeSecond * times[i]);
    renderColumn(ctx, cur_x, cur_y + 150 - cur_size, 40, cur_size, color, names[i], times[i]);
    cur_x = cur_x + 90;
  };
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, POSITION_X + 10, POSITION_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, POSITION_X, POSITION_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', POSITION_X + 50, 20);
  ctx.fillText('Список результатов:', POSITION_X + 50, 40);

  renderGist(ctx, names, times);
};