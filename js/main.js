$(function () {
$("#register-form").validate();
});

$(function () {
    $("#accordion").accordion();

});

$(function () {
    $("#datepicker").datepicker();
});

$(function () {
    $("#mariage").click(function () {
        $("#gateau1").attr('src', 'img/mariage1.jpg');
        $("#gateau2").attr('src', 'img/mariage2.jpg');
        $("#gateau3").attr('src', 'img/mariage3.jpg');
    });
});

$(function () {
    $("#annif").click(function () {
        $("#gateau1").attr('src', 'img/annif1.jpg');
        $("#gateau2").attr('src', 'img/annif2.jpg');
        $("#gateau3").attr('src', 'img/annif3.jpg');
    });
});

$(function () {
    $("#bapteme").click(function () {
        $("#gateau1").attr('src', 'img/bapteme1.jpg');
        $("#gateau2").attr('src', 'img/bapteme2.jpg');
        $("#gateau3").attr('src', 'img/bapteme3.jpg');
    });
});

$(function () {
    $("#entreprise").click(function () {
        $("#gateau1").attr('src', 'img/entreprise1.jpg');
        $("#gateau2").attr('src', 'img/entreprise2.jpg');
        $("#gateau3").attr('src', 'img/entreprise3.jpg');
    });
});

$('#event').on('change', function () {
    var eventTypeName = $("#event option:selected").val();

    if (eventTypeName == "mariage") {
        $('#choix-model').show();

        $('#choix-model option').eq(0).text("piece montee");
        $('#choix-model option').eq(1).text("charlotte");
        $('#choix-model option').eq(2).text("nougatine");
    }

    if (eventTypeName == "bapteme") {
        $('#choix-model').show();

        $('#choix-model option').eq(0).text("arche");
        $('#choix-model option').eq(1).text("cherubin");
        $('#choix-model option').eq(2).text("ange");
    }

    if (eventTypeName == "anniversaire") {
        $('#choix-model').show();

        $('#choix-model option').eq(0).text("pourquoi");
        $('#choix-model option').eq(1).text("voila");
        $('#choix-model option').eq(2).text("merci");
    }

    if (eventTypeName == "entreprise") {
        $('#choix-model').show();

        $('#choix-model option').eq(0).text("google");
        $('#choix-model option').eq(1).text("atom");
        $('#choix-model option').eq(2).text("edena");
    }


    if (eventTypeName == "special") {
        $('#choix-model').hide();
        $('#choix-model option').eq(0).text("");
        $('#choix-model option').eq(1).text("");
        $('#choix-model option').eq(2).text("");
    }
});

$(function () {
    $("#choix-model").change(function () {
        var name = this.options[this.selectedIndex].text;
        $("#miniature").attr('src', 'img/' + name + '.jpg');
        alert(name);
    });
});