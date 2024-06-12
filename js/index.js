function cargar(){
    fetch("http://www.raydelto.org/agenda.php").then(function (datos){
        return datos.json();
    }).then(function(contactos){
        var contacto = contactos[0];
        console.log(contacto);
    })
}