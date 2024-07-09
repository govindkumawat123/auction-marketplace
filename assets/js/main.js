$(document).ready(function(){
    $('.ct_toggle_menu').click(function(){
        $('.ct_toggle_menu').toggleClass('ct_close');
        $('.ct_navlinks').toggleClass('ct_active');
    })

    // Dropdown js S 


    // Sticky Menu js

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 300) {
            //clearHeader, not clearheader - caps H
            $("header").addClass("ct_sticky_menu");
        }else{
            $("header").removeClass("ct_sticky_menu");
        }
    }); //missing );


    // Search bar js S

    $('.ct_search_input input').focus(function () {
        $('.ct_search_input input').attr('placeholder', 'Type here...');

        $(this).parent().addClass('ct_full_search');
    })

    $('.ct_search_close').click(function(){
        $('.ct_search_input').removeClass('ct_full_search')
    })


    $(".ct_all_cateogries_main12 ul > li > a").hover(function () {
  
        $('.ct_all_cateogries_main12 ul > li > a').removeClass("ct_sub_categories_dropdown_show");
        $(this).addClass("ct_sub_categories_dropdown_show");


     });


     $('.ct_custom_price_select_dropdown').click(function(){
        $('.ct_custom_price_select_dropdown').removeClass('ct_drop_show');
        $(this).toggleClass('ct_drop_show');
        
     })
     $('.ct_drop_close_12').click(function(){
        $('.ct_custom_price_select_dropdown').removeClass('ct_drop_show');
     })


     $('.ct_show_form_click').click(function(){
      $('.ct_show_form_cnt').addClass('ct_show_12');
   
     })
     $('.ct_cancel_form').click(function(){
      $('.ct_show_form_cnt').removeClass('ct_show_12')
   
     })
})



// Price Range slider js S


const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});




$(document).ready(function(){
  $('.ct_product_category_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

})




