$(document).ready(function(){
    $('.ct_toggle_menu').click(function(){
        $('.ct_toggle_menu').toggleClass('ct_close');
        $('.ct_navlinks').toggleClass('ct_active');
    })

    $('.ct_search_input input').focus(function () {
      $('.ct_search_input input').attr('placeholder', 'Type here...');

      $(this).parent().addClass('ct_full_search');
  })

  $('.ct_search_close').click(function(){
      $('.ct_search_input').removeClass('ct_full_search')
  })

    // Dropdown js S 


    $( '#single-select-clear-field' ).select2( {
      theme: "bootstrap-5",
      width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
      placeholder: $( this ).data( 'placeholder' ),
      allowClear: true
    } );

    $( '#single-select-field' ).select2( {
      theme: "bootstrap-5",
      width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
      placeholder: $( this ).data( 'placeholder' ),
  } );

  $( '#single-select-field2' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
} );
$( '#single-select-field3' ).select2( {
  theme: "bootstrap-5",
  width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
  placeholder: $( this ).data( 'placeholder' ),
} );

$( '#single-select-field4' ).select2( {
  theme: "bootstrap-5",
  width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
  placeholder: $( this ).data( 'placeholder' ),
} );
$( '#single-select-field5' ).select2( {
  theme: "bootstrap-5",
  width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
  placeholder: $( this ).data( 'placeholder' ),
} );


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


const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next' };
 
 
const removeClasses = (elemSet, className) => {
 
  elemSet.forEach(elem => {
 
    elem.classList.remove(className);
 
  });
 
};
 
const findParent = (elem, parentClass) => {
 
  let currentNode = elem;
 
  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }
 
  return currentNode;
 
};
 
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};
 
const setActiveStep = activeStepNum => {
 
  removeClasses(DOMstrings.stepsBtns, 'js-active');
 
  DOMstrings.stepsBtns.forEach((elem, index) => {
 
    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }
 
  });
};
 
const getActivePanel = () => {
 
  let activePanel;
 
  DOMstrings.stepFormPanels.forEach(elem => {
 
    if (elem.classList.contains('js-active')) {
 
      activePanel = elem;
 
    }
 
  });
 
  return activePanel;
 
};
 
const setActivePanel = activePanelNum => {
 
  removeClasses(DOMstrings.stepFormPanels, 'js-active');
 
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {
 
      elem.classList.add('js-active', 'fadeInRight');
 
      setFormHeight(elem);
 
    }
  });
 
};
 
const formHeight = activePanel => {
 
  const activePanelHeight = activePanel.offsetHeight;
 
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
 
};
 
const setFormHeight = () => {
  const activePanel = getActivePanel();
 
  formHeight(activePanel);
};
 
DOMstrings.stepsBar.addEventListener('click', e => {
 
  const eventTarget = e.target;
 
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
 
  const activeStep = getActiveStep(eventTarget);
 
  setActiveStep(activeStep);
 
  setActivePanel(activeStep);
});
 
DOMstrings.stepsForm.addEventListener('click', e => {
 
  const eventTarget = e.target;
 
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
  {
    return;
  }
 
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
 
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
 
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;
 
  } else {
 
    activePanelNum++;
 
  }
 
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
 
});
 
window.addEventListener('load', setFormHeight, false);
 
window.addEventListener('resize', setFormHeight, false);
 
 
const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};
 
//changing animation
const animationSelect = document.querySelector('.pick-animation__select');
 
animationSelect.addEventListener('change', () => {
  const newAnimationType = animationSelect.value;
 
  setAnimationType(newAnimationType);
});




