/*Navbar script - responsive*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*Fade-in transition from 2nd section - the timeline*/
ScrollReveal({reset: true});

ScrollReveal().reveal(".container", {
  duration: 500,
  origin: "bottom",
  distance: "50px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
