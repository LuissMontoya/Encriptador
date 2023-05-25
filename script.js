const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');

//console.table(matrix);
function copiar(){
    const textArea = document.querySelector('.text-area');
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    .then(() => {
      const copyButton = document.getElementById("copiar");
      copyButton.innerHTML = "¡Copiado!";
    })
    .catch((error) => {
      console.error("Error al intentar copiar el texto", error);
    });

  // Deselecciona el texto para evitar resaltado no deseado
  mensaje.blur();

}

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    mensaje.value = textEncriptado
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
 }

 function btnDesencriptar(){
    const textEncriptado = dencriptar(textArea.value);
    mensaje.value = textEncriptado
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
 }

function encriptar(StringEncriptado){
    let matrix = [["a","ai"],["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase();

    for (let i = 0; i < matrix.length; i++) {
       if(StringEncriptado.includes(matrix[i][0])){
        StringEncriptado = StringEncriptado.replaceAll(matrix[i][0],matrix[i][1]);
       }   
    }
    return StringEncriptado;
}

function dencriptar(StringDesencriptado){
    let matrix = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    StringDesencriptado = StringDesencriptado.toLowerCase();

    for (let i = 0; i < matrix.length; i++) {
       if(StringDesencriptado.includes(matrix[i][1])){
        StringDesencriptado = StringDesencriptado.replaceAll(matrix[i][1],matrix[i][0]);
       }   
    }
    return StringDesencriptado;
}