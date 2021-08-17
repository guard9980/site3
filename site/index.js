let toggled = false;
let toggled2 = false;
const nav = document.getElementsByClassName('nav')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];
const had = document.getElementsByClassName('header')[0];
const adp = document.getElementsByClassName('menu-adap')[0];
const btn2 = document.getElementsByClassName('menu-hd_text2')[0];
const menuxd = document.getElementsByClassName('menu-hd')[0];
const take = document.getElementsByClassName('l1')[0];
const btna1 = document.getElementsByClassName('adp1')[0];
const btna2 = document.getElementsByClassName('adp2')[0];
const btna3 = document.getElementsByClassName('adp3')[0];
const btna4 = document.getElementsByClassName('adp4')[0];
const btnh22 = document.getElementsByClassName('btn0')[0];
const btnh23 = document.getElementsByClassName('btn2')[0];
const h21 = document.getElementsByClassName('ancet')[0];
const ancetclose = document.getElementsByClassName('ancetclose')[0];

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

$(window).resize(function() {
  var window_width = $(window).width();
  if (window_width < 1050) {
    $("#forjs").width(1050);
    $("#forjs2").width(1050);
    $('#forjs2').addClass('visually-hidden');
    $('#forjs').addClass('visually-hidden');
  };
});
    //menuxd.classList.add('visually-hidden');
    //take.classList.add('visually-hidden');
btn.onclick = function(evt) {
  if (!toggled) {
    toggled = true;
    evt.target.classList.add('toggled');
    document.body.style.overflow = 'hidden';
    nav.classList.add('active');
    adp.classList.add('adp');
    h21.classList.remove('h22');
  } else {
    toggled = false;
    document.body.style.overflow = 'visible';
    evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    adp.classList.remove('adp');
  }
}
btna1.onclick = function(evt) {
	toggled = false;
   evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    adp.classList.remove('adp');
}
btna2.onclick = function(evt) {
	toggled = false;
   evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    adp.classList.remove('adp');
}
btna3.onclick = function(evt) {
	toggled = false;
   evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    adp.classList.remove('adp');
}
btna4.onclick = function(evt) {
	toggled = false;
   evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    adp.classList.remove('adp');
}
btnh22.onclick = function(evt){
toggled2 = true;
h21.classList.add('h22');
toggled = false;
evt.target.classList.remove('toggled');
nav.classList.remove('active');
adp.classList.remove('adp');
}
btnh23.onclick = function(evt){
toggled2 = true;
h21.classList.add('h22');
toggled = false;
evt.target.classList.remove('toggled');
nav.classList.remove('active');
adp.classList.remove('adp');
}
ancetclose.onclick = function(evt){
toggled2 = true;
h21.classList.remove('h22');
}

var form = document.forms['inputcont'];
var s = form.elements.user_name.value;

alert('назва користувача: '+s);

