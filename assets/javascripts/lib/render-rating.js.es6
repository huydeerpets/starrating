var renderUnboundRating = function(topic) {
  var stars = ''
  for (var i = 0; i < 5; i++) {
    var value = i + 1,
        checked = value <= topic.average_rating ? 'checked' : '',
        disabled = disabled ? 'disabled' : '',
        star = '<input type="radio" value="' + value + '" ' + checked + ' disabled><i></i>';
    stars = stars.concat(star)
  }
  //return '<span id="'+ topic.id + '" class="rating">' + stars + '</span>';
  return '<script type="text/javascript">$("#jRate' + topic.id + '").jRate({rating: '+ topic.average_rating + ',width: 80,height: 80,precision: 0.1,minSelected: 1});</script><div id="' + 'jRate' + topic.id + '" style="height:50px;width: 200px;"></div>';
};

export default renderUnboundRating;
