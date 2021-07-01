console.log('DOM cargado');

const viewClase = () => {
    console.log('entro a cambiar url');
    //location.href('/views/clase.html');
   // history.pushState(null, "", "/views/clase.html");
    //location.reload();
    location.href = "/views/clase.html";

}

const returnIndex = () => {
    location.href = "/index.html";
}