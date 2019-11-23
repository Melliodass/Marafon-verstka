$(function() {
  /* реализация с табами tabs */
  $('.list__inner .tab').on('click', function(event) { //при наведении тоже самое,только вместо "on" пишем "hover" и убираем "click"
  var id = $(this).attr('data-id');// записываем в переменную id аттрибут элемента ,на которого кликнули
  $('.list__inner').find('.tab-item').removeClass('active-tab').hide()//у родителя... находим элемент с классом... и удаляем у него класс active и скрываем элемент
  $('.list__inner .tabs').find('.tab').removeClass('active');//...удаляем класс active ... 
  $(this).addClass('active');// добавляем класс active у кликнутого элемента
  $('#'+id).addClass('active-tab').fadeIn();//находим элемент с id(#+id), добавляем ему класс... и показываем его
  return false;
});

});


