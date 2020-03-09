
//Opens navigation when hamburger is clicked
const body = document.body;
const btn = document.getElementById('menu-btn');
btn.addEventListener('click', function(e){
  e.preventDefault()
  body.classList.toggle('show')
});

//Changes hamburger icon to X
function myFunction(x) {
    x.classList.toggle("change");
  }