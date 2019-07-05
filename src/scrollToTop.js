const btn = document.querySelector("#btn-scrollToTop");
btn.addEventListener('click', function () {
     $("html, body").animate({ scrollTop: 0 }, "slow"); 

});