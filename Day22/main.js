
anime({
    targets: 'div.box.red',             /*css selectors is target*/
    translateY: [                       /*dealing with Y axis*/
  { value: 200, duration: 500 },         /*start from 200 500mili sec then back to 0 position with 800 milisec*/
      { value: 0, duration: 800 }
    ],
     rotate:{                       /*1 choti rotate garxa*/
      value: '2turn',                /*movement as ease in out*/       
      easing: 'easeInOutSine'
     },
    
 });


 anime({
    targets: 'div.box.blue',             
    translateY: [                       
  { value: 200, duration: 500, delay:500 },        /*delay le kei time ma Y axis ma translate garxa*/
      { value: 0, duration: 800 }
    ],
     rotate:{
      value: '1turn',
      easing: 'easeInOutSine',
      delay: 500                                          /*rotate 1000 milisec le delay garxa-*/
     },
 });


 anime({
    targets: 'div.box.green',             
    translateY: [                       
  { value: 200, duration: 500, delay:1000 },      
      { value: 0, duration: 800 }
    ],
     rotate:{
      value: '1turn',
      easing: 'easeInOutSine',
      delay: 1000,
     }
 });


 anime({
    targets: 'div.box.yellow',             
    translateY: [                       
  { value: 200, duration: 500, delay:1500 },        
      { value: 0, duration: 800 }
    ],
     rotate:{
      value: '1turn',
      easing: 'easeInOutSine',
      delay:1500,
     }
 });





 