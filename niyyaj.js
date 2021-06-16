(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("nav").addClass("nav-scrolled");
    } else {
      $("nav").removeClass("nav-scrolled");
    }
  });
  
  /*  display: inline-block;
    border-radius: 5px;
    padding: 8px 20px;
    margin: 3px;*/
  $(".menu-btn").on("click", function() {
    $("nav").fadeToggle("fast", function() {});
    // Pushes content down when nav is opened
    $(".home-content").toggleClass("push-content");
  });
  
  /*  display: inline-block;
    border-radius: 5px;
    padding: 8px 20px;
    margin: 3px;*/
  $("a").on("click", function(event) {
     
    if (this.hash !== "") {
    
      event.preventDefault();
   
      var hash = this.hash;
  
        $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          /*  display: inline-block;
    border-radius: 5px;
    padding: 8px 20px;
    margin: 3px;*/
          window.location.hash = hash;
        }
      );
    }  
  });