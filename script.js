var scrollToDiv = document.getElementById('fill');
var distanceToTop = scrollToDiv.getBoundingClientRect().top;
var hero = document.getElementById('pzHero');

console.log(distanceToTop);

window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 0) {
      var poop = document.getElementById('pzHero').style.opacity = -currScrollPos2 / 600 + 1;
      hero.style.webkitTransform = "scale(" + (-currScrollPos2 / 6000 + 1) + ")";
      console.log(test);
      
    }
  }
);