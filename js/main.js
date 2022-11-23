function sumar(){
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);
    var result = numero1 + numero2;
    document.getElementById('result').value=result;

}
function restar(){
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);
    var result = numero1 - numero2;
    document.getElementById('result').value=result;
}
function multiplicar(){
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);
    var result = numero1 * numero2;
    document.getElementById('result').value=result;
}
function dividir(){
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);
    var result = numero1 / numero2;
    document.getElementById('result').value=result;
}
function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("result").value = "";
}
function limpiar1() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("mail").value = "";
}
function datos(){
    var nombre = document.getElementById('nombre').value;   
    var apellido = document.getElementById('apellido').value;   
    var tel = document.getElementById('tel').value;   
    var mail = document.getElementById('mail').value; 
    var mostrar = nombre +(" ")+ apellido +(" Telefono: ")+ tel +(" Correo: ")+ mail;  
    
   const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

   const alert = (message, type) => {
     const wrapper = document.createElement('div')
     wrapper.innerHTML = [
       `<div class="alert alert-${type} alert-dismissible" role="alert">`,
       `   <div>${message}</div>`,
       '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
       '</div>'
     ].join('')
   
     alertPlaceholder.append(wrapper)
   }
   
   const alertTrigger = document.getElementById('liveAlertBtn')
   if (alertTrigger) {
     alertTrigger.addEventListener('click', () => {
       alert(("Su Nombre: ")+ mostrar , 'success')
     })
     
   }

}
