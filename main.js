$(document).ready(function(){


    $('form').on('submit', function(e){
        e.preventDefault();
        const inputTarefa = $('#tarefa').val();
        const novaTarefa = $(`<li>${inputTarefa}</li>`);

        novaTarefa.appendTo('ul');

        novaTarefa.on('click', function(){
            $(this).toggleClass('completa');
        })

        $('#tarefa').val('')
    })



})
