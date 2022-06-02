var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password1').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

/* validacion login*/
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  /* email */
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en el mail');
    return;
  }
/* contraserña 1 */
  var password1 = document.getElementById('password1').value;
  if (password1.length < 6) {
    alert('La clave no es válida');
    return;
  }
  /* contraserña 2*/
  var password2 = document.getElementById('password2').value;
  if (password2 != password1) {
    alert('Las claves no son identicas');
    return;
  }

/* rut */
class RutValidador{
    constructor(rut){
     this.rut = rut;
     this.dv = this.rut.substring(this.rut.length - 1);    
     this.rut = this.rut.substring(0,this.rut.length - 1).replace(/\D/g, ''); 
     this.esValido = validar();
     }
    
     validar() {
      let numerosArray = this.rut.split('').reverse()
      let acumulador = 0;
      let multiplicador = 2;
      for (let numero of numerosArray){
           acumulador += parseInt(numero) * multiplicador;
           multiplicador++;

           if(multiplicador == 8){
             multiplicador =2;
           }

      }

      let dv = 11 -(acumulador % 11);

      if (dv == 11)
      dv = '0'

      if(dv == 10)
      dv = 'k';


      return dv == this.dv.toLowerCase();
    }
    
    formato() {
      if (!this.esValido) return '';
      return (this.rut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) + '-' + this.dv;
    }
  }
    
   










/* nombre*/
var nombre = document.getElementById('nombre').value;
if (nombre.length < 2) {
  alert('El nombre no es válido');
  return;
}
/* apellido */
var apellido = document.getElementById('apellido').value;
if (apellido.length < 2 ) {
  alert('El apellido no es válido');
  return;
}
/* telefono */
var telefono = document.getElementById('telefono').value;
if (telefono.length < 9 ) {
  alert('El telefono no es válido');
  return;
}
var telefono = document.getElementById('telefono').value;
if (telefono.length > 9 ) {
  alert('El telefono no es válido');
  return;
}

this.submit();
}

/* MENSAJE */

UIkit.notification({
  message: 'my-message!',
  status: 'primary',
  pos: 'top-right',
  timeout: 5000
});

// Shortcuts
UIkit.notification('My message');

/* boton*/ 


$(document).on('click', '#submit',()=>{

  let rut= $('#txt-rut').val();
  let rutValidador = new RutValidador(rut)

  if(rutValidador.esValido){
    $('#resultado').text('rut valido')
    return
  }
  alert('Rut no valido');
})
