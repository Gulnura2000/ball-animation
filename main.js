
// function F(){
// function f1(){
//     $('.ball').css({"margin-top": "100px" , "margin-left":"100px", "transition" : "1s"})
// }
//  setTimeout(f1  , 500)
// function f2(){
//     $('.ball').css({"margin-top": "200px" , "margin-left":"200px", "transition" : "1s"})
// }
// setTimeout(f2 , 1000)


// function f3(){
//     $('.ball').css({"margin-top": "100px" , "margin-left":"300px", "transition" : "1s"})
// }
//  setTimeout(f3  , 1500)
// function f4(){
//     $('.ball').css({"margin-top": "200px" , "margin-left":"400px", "transition" : "1s"})
// }
// setTimeout(f4 , 2000)
// function f5(){
//     $('.ball').css({"margin-top": "100px" , "margin-left":"500px", "transition" : "1s"})
// }
//  setTimeout(f5  , 2500)
// function f6(){
//     $('.ball').css({"margin-top": "200px" , "margin-left":"600px", "transition" : "1s"})
// }
// setTimeout(f6 , 3000)

// }

// F()
// setInterval(F , 5500)







// function F(){
//     function f1(){
//         $('.block1').css({'background-color':"red"})
//         $('.block3').css({'background-color':"black"})
//     }
    
//     setTimeout(f1 , 1000)
//     function f2(){
//         $('.block2').css({'background-color':"yellow"})
//         $('.block1').css({'background-color':"black"})
//     }
//     setTimeout(f2 , 2000) 
    
//     function f3(){
//         $('.block3').css({'background-color':"green"})
//         $('.block2').css({'background-color':"black"})
//     }
    
//      setTimeout(f3 , 3000) 
// }
// F()
// setInterval(F , 4000)


// let func = ()=>{
//   console.log("hello");  
// }


// setTimeout(func  , 4000 )


function F(){
function f1(){
  $('img').css({ "margin-top" : "100px" , "transition" : "1s" , "margin-left":"100px"  })  
}
f1()


function f2(){
    $('img').css({ "margin-top" : "200px" , "transition" : "1s" , "margin-left":"200px"  }) 
}
setTimeout(f2 , 700 )


function f3(){
    $('img').css({ "margin-top" : "100px" , "transition" : "1s" , "margin-left":"300px"  }) 
}
setTimeout(f3  , 1400 )


function f4(){
    $('img').css({ "margin-top" : "200px" , "transition" : "1s" , "margin-left":"400px"  }) 
}

setTimeout(f4  , 2100 )

function f5(){
    $('img').css({ "margin-top" : "100px" , "transition" : "1s" , "margin-left":"500px"  }) 
}

setTimeout(f5  , 2800 )
function f6(){
    $('img').css({ "margin-top" : "200px" , "transition" : "1s" , "margin-left":"800px"  }) 
}

setTimeout(f6  , 3600 )

}


F()
setInterval(F , 5000)