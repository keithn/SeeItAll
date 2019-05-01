let elements = document.getElementsByClassName("premium-content");
 for (var i = 0; i < elements.length; i++) elements[i].classList.remove("premium-content");
 setInterval(function(){ 
 var elements = document.getElementsByClassName("article-offer");
 for (var i = 0; i < elements.length; i++) elements[i].parentNode.removeChild(elements[i]);
 }, 1000);
 