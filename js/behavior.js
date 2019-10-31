document.addEventListener ("DOMContentLoaded", function(event) {

    /*Funcion para 'Sticky-menu'*/
    var menu = document.getElementById('navbar-bar');
    var height = menu.offsetTop;

    window.addEventListener('scroll', function () {

	if (window.pageYOffset > height) {
	    menu.classList.add('fixed');
	} else {
	    menu.classList.remove('fixed');
	}
    });

    /*Funcion para el menu adaptable en versiones mobiles*/
    var button_menu = document.getElementById("open-menu").addEventListener('click', function (e) {
	
	e.preventDefault();
	
	if (button_menu == 'open_menu') {
	    document.getElementById('menu-resp-open').classList.toggle('active');
	    document.getElementById('navbar-bar').classList.toggle('active');
	} else {
	    document.getElementById('menu-resp-open').classList.toggle('active');
	    document.getElementById('navbar-bar').classList.toggle('active');
	}
    });

    /*Funcion para llamar la API de 'Whatsapp'*/
    (function() {
	var options = {
	    whatsapp: "+573052272289", // WhatsApp number
	    button_color: "#03a9f4", // Color of button
	    position: "left", // Position may be 'right' or 'left'
	    order: "whatsapp", // Order of buttons
	};
	var proto = document.location.protocol,
	    host = "whatshelp.io",
	    url = proto + "//static." + host;
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = url + '/widget-send-button/js/init.js';
	s.onload = function() {
	    WhWidgetSendButton.init(host, proto, options);
	};
	var x = document.getElementsByTagName('script')[0];
	x.parentNode.insertBefore(s, x);
    })();

    /*Funcion para agregar el 'Disqus' a la pagina*/
    var disqus_config = function () {
	this.page.url = holberton-school-vc.disqus.com;  // Url de tu sitio web
	this.page.identifier = holberton-school-vc.disqus.com; // Url de tu sitio web
    };

    /*Llamando la API de 'Disqus'*/
    (function() { // TENGA CUIDADO AL REALIZAR SUS CAMBIOS
	var $d = document,
	    $s = $d.createElement('script'),
	    $shortName = 'disqus-tutorial-01luisrene'; //Importante: cambialo por tu Shorname

	$s.src = '//'+ $shortName +'.disqus.com/embed.js';
	$s.setAttribute('data-timestamp', +new Date());
	($d.head || $d.body).appendChild($s);
    })();

    /*Funcion para cambiar las propiedades de la imagen - Requerimiento Holberton*/
    var thumbnailElement = document.getElementById("smart_thumbnail").addEventListener('click', function(e) {
	e.preventDefault();
	if (thumbnailElement == 'smart_thumbnail') {
	    document.getElementById('smart_thumbnail').classList.toggle('small');
	    alert('Estable');
	} else {
	    document.getElementById('smart_thumbnail').classList.toggle('small');
	}
    });
    
});
