// JavaScript Document
 window.setTimeout(function(){
	"use strict";
	var contenedor = document.getElementById('contenedor_carga');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
},3000);
//carga//
$(document).ready(function(){
	//agragando clase active al primer enlace
	"use strict";
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');
	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);
		//agregando clase active selectionado
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.product-imte').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-imte').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-imte[category="'+catProduct+'"]').show();
			$('.product-imte[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});
	 // MOSTRANDO TODOS LOS PRODUCTOS =======================
	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-imte').show();
			$('.product-imte').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

//buscador
var consulta = $("#searchTable").DataTable();
$("#inputBusqueda").keyup(function(){
	"use strict";
	consulta.search($(this).val()).draw();
	$("header").css({
		"height": "100vh",
		"background": "rgba(0,0,0,0.5)"
	});
	if ($("#inputBusqueda").val() === ""){
		$("header").css({
			"height": "auto",
			"background": "none"
		});
		$("#search").hide();
	} else {
		$("#search").fadeIn("fast");
	}
});

//boton arriba
$(document).ready(function(){
	"use strict";
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop:'0px'
		});
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else{
			$('.ir-arriba').slideUp(300);
		}
	});
	
});

$('#in1').on('click', function(){
	"use strict";
    $('html, body').animate( {scrollTop: 0}, 1000);
	});
$('#in2').on('click', function(){
	"use strict";
    $('html, body').animate( {scrollTop: 300}, 1000);
	});
$('#in3').on('click', function(){
	"use strict";
    $('html, body').animate( {scrollTop: 600}, 1000);
	});
$('#in4').on('click', function(){
	"use strict";
    $('html, body').animate( {scrollTop: 1100}, 1000);
	});
$('#in5').on('click', function(){
	"use strict";
    $('html, body').animate( {scrollTop: 1600}, 1000);
	});
