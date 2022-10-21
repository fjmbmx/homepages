
$(document).ready(function () {


    // $("#form_saved_data_contact").click(function () {
    // 	var username = $("#username").val();

    // 	$.ajax({
    // 		url: "php/index.php/login",
    // 		contentType: "application/x-www-form-urlencoded",
    // 		type: "POST",
    // 		dataType: 'json',
    // 		data: { "username": username, "password": username },

    // 		success: function (responseText) {
    // 			if (responseText.code != null) {
    // 				window.location.href = "index.php";
    // 				localStorage.setItem('username', JSON.stringify(responseText));
    // 				document.cookie = "client= " + JSON.stringify(responseText);

    // 			}
    // 			if ( responseText.hasOwnProperty('status') ) {
    // 				$("#error_message").text("Clave incorrecta");
    // 			}

    // 		},
    // 		error: function (jqXHR, textStatus, errorThrown) {
    // 			console.log(errorThrown + ': ' + textStatus);
    // 			$("#username").val("");

    // 		}
    // 	});
    // });



    $("#form_saved_data_contact").submit(function () { // -----------------------------Guardar sucursal---------------------------

        var prospect_name = $("#prospect_name").val();
        var prospect_contact = $("#prospect_contact").val();
        var prospect_subject = $("#prospect_subject").val();
        var prospect_message = $("#prospect_message").val();

        $.ajax({
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify({
                "prospect_name": prospect_name, "prospect_contact": prospect_contact,
                "prospect_subject": prospect_subject, "prospect_message": prospect_message
            }),
            type: "POST",
            dataType: 'json',
            url: "http://localhost/email/enviocorreo.php",

            success: function (response) {
                console.log(response)
                $('#form_saved_data_contact').each(function () {
                    this.reset();
                });
                 swal("!    Muy bien ! ", "En breve nos pondremos en contacto con usted !", "success");
 
                if (responseText.hasOwnProperty('status')) {
                    $("#error_message").text("Clave incorrecta");
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown + ': ' + textStatus);
                swal("Intentelo más tarde!", "","warning")

            }
        });
        // $.ajax({
        //     contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        //     data: JSON.stringify({ "nombrePunto": "" + NombreSucursal + "", "ubicacion": "" + Ubicacion + "", "idFabrica": "" + idfab + "" }),
        //     type: "POST",
        //     dataType: 'json',
        //     url: "" + ruta + "Create_Sucursal.php",
        // })
        //     .done(function (data) {
        //         $("#nombreSuc").val("");
        //         $("#ubicacionSuc").val("");
        //         MostrarSucursales();
        //         $.notify("Sucursal guardada", "success");
        //     })
        //     .fail(function (jqXHR, textStatus, errorThrown) {
        //         console.log("jqxhr: " + jqXHR + ", Text Status: " + textStatus + ", errorThrown: " + errorThrown + "", "error");
        //     });
        return false;
    }); //---------------------------------------fin guardar sucursal------------------------------------
});