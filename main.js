// import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from './emailjs-config.js';
// const EMAILJS_SERVICE_ID = '${{ secrets.EMAILJS_SERVICE_ID }}';
// const EMAILJS_TEMPLATE_ID = '${{ secrets.EMAILJS_TEMPLATE_ID }}';
// const EMAILJS_USER_ID = '${{ secrets.EMAILJS_USER_ID }}';
emailjs.init("hpAa2pGmynJXhLPFa");

function sendEmail(event) {
	event.preventDefault();
  
	emailjs.send("service_49c1rkq", "template_a6r8h0n", {
	  "from_name": document.getElementById("name").value,
	  "from_email": document.getElementById("email").value,
	  "message_html": document.getElementById("message").value
	}, "hpAa2pGmynJXhLPFa")
	.then(function(response) {
	  console.log("SUCCESS", response);
	  alert("Your message was sent successfully!");
	  document.getElementById("contact-form").reset();
	}, function(error) {
	  console.log("FAILED", error);
	  alert("Sorry, there was an error sending your message.");
	});
  }

//Portfolio Click
$(".portfolio-link").click(function(){
	if (($("#main-page").css("padding-top") == "300px") || ($("#about").css("display") == "block") || ($("#contact").css("display") == "block")) {
		$("#main-page").css("padding-top", "10px");
		$(".portfolio-link").addClass("selected");
		$(".contact-link").removeClass("selected");
		$(".about-link").removeClass("selected");
		$("#about").css("display", "none");
		$("#contact").css("display", "none");
		$("#portfolio").css("display", "block");
		//Carousel
		$("#carousel").slick({
		centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 3,
		  variableWidth: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	} else {
		$("#portfolio").css("display", "none");
		$("#main-page").css("padding-top", "300px");
		$(".portfolio-link").removeClass("selected");
	}
});
//About Click
$(".about-link").click(function(){
	if (($("#main-page").css("padding-top") == "300px") || ($("#portfolio").css("display") == "block") || ($("#contact").css("display") == "block")) {
		$("#main-page").css("padding-top", "10px");
		$(".about-link").addClass("selected");
		$(".portfolio-link").removeClass("selected");
		$(".contact-link").removeClass("selected");
		$("#portfolio").css("display", "none");
		$("#contact").css("display", "none");
		$("#about").css("display", "block");
	} else {
		$("#about").css("display", "none");
		$("#main-page").css("padding-top", "300px");
		$(".about-link").removeClass("selected");
	}
});
//Contact Click
$(".contact-link").click(function(){
	if (($("#main-page").css("padding-top") == "300px") || ($("#about").css("display") == "block") || ($("#portfolio").css("display") == "block")) {
		$("#main-page").css("padding-top", "10px");
		$(".contact-link").addClass("selected");
		$(".portfolio-link").removeClass("selected");
		$(".about-link").removeClass("selected");
		$("#about").css("display", "none");
		$("#portfolio").css("display", "none");
		$("#contact").css("display", "block");
	} else {
		$("#contact").css("display", "none");
		$("#main-page").css("padding-top", "300px");
		$(".contact-link").removeClass("selected");
	}
});

document.getElementById('contact-form').addEventListener('submit', sendEmail);
