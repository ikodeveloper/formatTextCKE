CKEDITOR.plugins.add('formatText',{
  init: function(editor){
    var cmd = editor.addCommand('formatText', {
      exec:function(editor){
        // Выделяем весь контент на странице
        editor.focus();
        editor.document.$.execCommand( 'SelectAll', false, null );
        // Получаем целиком содержимое контейнера редактора
        var text = editor.getData();
        // Заменяем ё на е
        var res1 = text.replace(/ё/ig, "е");
        // Убираем лишние пробелы
        var res2 = res1.replace(/&nbsp;/ig, "");
        // Заменяем кавычки "галачки" на "елочки"
        // var res3 = res2.replace(/"/ig, "«");
        // var res4 = res3.replace(/«\s/ig, "» ");
        // Заменяем дефис на тире, при этом дефис в нужных местах не трогая
        var res3 = res2.replace(/\s-\s/ig, " — ");
        // Вставляем готовый тескт в заранее выделенную область (выделено все)
        editor.insertHtml(res3);
      }
    });
    editor.ui.addButton('formatText',{
      label: 'Единое форматирование типографики для новостей',
      icon: this.path + 'images/icon.png',
      command: 'formatText'
    });
  }
});