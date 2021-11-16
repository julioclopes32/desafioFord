$('.botao').click(function() {
    var selected = $('#my-dropdown option:selected');
    alert(" If you want text ==>"  + selected.html()); 
});​


var select = document.getElementById('tipos');
var value = select.options[select.selectedIndex].value;
console.log(value); // pt

var select = document.getElementById('tamanho');
var value = select.options[select.selectedIndex].value;
console.log(value); // pt