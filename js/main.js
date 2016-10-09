var base, protien, sauce, toppings, appetizers, quenchers, sweets
base = document.getElementById('base')
protien = document.getElementById('protien')
sauce = document.getElementById('sauce')
toppings = document.getElementById('toppings')
appetizers = document.getElementById('appetizers')
quenchers = document.getElementById('quenchers')
sweets = document.getElementById('sweets')

menuOptions = document.getElementById('menu-options')
var menuList = [base, protien, sauce, toppings, appetizers, quenchers, sweets]
var menuLinks = document.querySelectorAll('#menu-options a')


function changeMenu(e){
  target = e.target
  console.log(target)
  for (var i = 0; i < menuLinks.length; i++){
    if( target === menuLinks[i]){
      for(var j = 0; j < menuList.length; j++){
        menuList[j].className = 'menu-items'
      }
      menuList[i].className = 'menu-items active'
    }
  }
}

menuOptions.addEventListener('click', changeMenu)
