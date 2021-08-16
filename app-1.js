function makeGrid(){
    for(i=0; i<42; i++){
        $('<div class="cell"></div>').appendTo('.grid')
    }
}

makeGrid();

let arr1 = [36,29,22,15,8,1]
let arr2 = [37,30,23,16,9,2]
let arr3 = [38,31,24,17,10,3]
let arr4 = [39,32,25,18,11,4]
let arr5 = [40,33,26,19,12,5]
let arr6 = [41,34,27,20,13,6]
let arr7 = [42,35,28,21,14,7]
let isGameDone = true 
let nameOne = 'Player-1'

$('.name1 button').click(function () {
    // stuff goes here
    let input = $( ".name1 input" ).val() 
    
    if(input.length > 0){
        nameOne = input
        $('p.player-1').text(nameOne + ': ')
        $(".name1 input").val('')
        if($('p:nth-of-type(2)').hasClass("active")){
        $('p.turn oh').text(nameOne + "'s")
        }
    }

  })

  function drop1() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr1[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr1[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr1[0] + ")").css("background-color", 'yellow')
        $("div.cell:nth-of-type(" + arr1[0] + ")").addClass('yellow color')
    }

    arr1.shift()
}
  }

function drop2() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr2[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr2[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
       $("div.cell:nth-of-type(" + arr2[0] + ")").css("background-color", 'yellow')
       $("div.cell:nth-of-type(" + arr2[0] + ")").addClass('yellow color')
}
    arr2.shift()
}
  }

function drop3() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr3[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr3[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr3[0] + ")").css("background-color", 'yellow')
        $("div.cell:nth-of-type(" + arr3[0] + ")").addClass('yellow color')
    }

    arr3.shift()
}
  }

function drop4() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr4[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr4[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr4[0] + ")").css("background-color", 'yellow')
        $("div.cell:nth-of-type(" + arr4[0] + ")").addClass('yellow color')
    }

    arr4.shift()
}
  }

function drop5() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr5[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr5[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr5[0] + ")").css("background-color", 'yellow')
        $("div.cell:nth-of-type(" + arr5[0] + ")").addClass('yellow color')
    }

    arr5.shift()
}
  }

function drop6() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr6[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr6[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr6[0] + ")").css("background-color", 'yellow')
        $("div.cell:nth-of-type(" + arr6[0] + ")").addClass('yellow color')
    }

    arr6.shift()
}
  }

function drop7() {
    // stuff goes here
    if(isGameDone){
    if($('p:nth-of-type(2)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr7[0] + ")").css("background-color", 'red')
        $("div.cell:nth-of-type(" + arr7[0] + ")").addClass('red color')
}    

    if($('p:nth-of-type(3)').hasClass("active")){
        $("div.cell:nth-of-type(" + arr7[0] + ")").css("background-color", 'yellow')
        $("div.cell:nth-of-type(" + arr7[0] + ")").addClass('yellow color')
    }

    arr7.shift()
}
  }

$('section.drop button:nth-of-type(1)').click(drop1)

  $('section.drop button:nth-of-type(2)').click(drop2)

  $('section.drop button:nth-of-type(3)').click(drop3)

  $('section.drop button:nth-of-type(4)').click(drop4)

  $('section.drop button:nth-of-type(5)').click(drop5)

  $('section.drop button:nth-of-type(6)').click(drop6)

  $('section.drop button:nth-of-type(7)').click(drop7)
  

  let turn = 1 
  let win1 = 0 
  let win2 = 0
  let draw = 0 
  let funcArr = [drop1,drop2,drop3,drop4,drop5,drop6,drop7]
  let arrArr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7]

  $('button.clear').click(function () {
    $('div.cell').css("background-color", '#eee')
    $('div.cell').removeClass('red color')
    $('div.cell').removeClass('yellow color')
    turn = 1
    arr1 = [36,29,22,15,8,1]
    arr2 = [37,30,23,16,9,2]
    arr3 = [38,31,24,17,10,3]
    arr4 = [39,32,25,18,11,4]
    arr5 = [40,33,26,19,12,5]
    arr6 = [41,34,27,20,13,6]
    arr7 = [42,35,28,21,14,7]
    funcArr = [drop1,drop2,drop3,drop4,drop5,drop6,drop7]
    isGameDone = true
    updateTurn();
    cpu();
})

  function updateTurn() {
    if($('p:nth-of-type(2)').hasClass("active")){
        $('p:nth-of-type(2)').removeClass('active')
        $('p:nth-of-type(3)').addClass('active')
        $('p.turn oh').text("Computer's")
    }else{
        $('p:nth-of-type(3)').removeClass('active')
        $('p:nth-of-type(2)').addClass('active')
        $('p.turn oh').text(nameOne + "'s")
    }
    $('p.turn wow').text(turn)
    
  }

  updateTurn(); 

  function didIWin() {
      if(isGameDone){
    for(i=1; i<43; i++){
        if($("div.cell:nth-of-type(" + i + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+7) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+14) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+21) + ")").hasClass("red color") === true ){
            win1 = win1 + 1
            $('p.player-1 wow').text(win1)
            alert("Player-1 has won!!! Please clear the game to start again. ")
            isGameDone = false
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+6) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+12) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+18) + ")").hasClass("red color") === true ){
            if((3 < i && i < 8) || (10 < i && i < 15) || (17 < i && i < 22) || (24 < i && i < 29) || (31 < i && i < 36) || (38 < i && i < 43)){
            win1 = win1 + 1
            $('p.player-1 wow').text(win1)
            alert("Player-1 has won!!! Please clear the game to start again. ")
            isGameDone = false
            }
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+8) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+16) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+24) + ")").hasClass("red color") === true ){
            if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
            win1 = win1 + 1
            $('p.player-1 wow').text(win1)
            alert("Player-1 has won!!! Please clear the game to start again. ")
            isGameDone = false
            }
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+1) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+2) + ")").hasClass("red color") === true && $("div.cell:nth-of-type(" + (i+3) + ")").hasClass("red color") === true ){
            if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
            win1 = win1 + 1
            $('p.player-1 wow').text(win1)
            alert("Player-1 has won!!! Please clear the game to start again. ")
            isGameDone = false
            }
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+7) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+14) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+21) + ")").hasClass("yellow color") === true ){
            win2 = win2 + 1
            $('p.computer wow').text(win2)
            alert("Computer has won!!! Please clear the game to start again. ")
            isGameDone = false
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+6) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+12) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+18) + ")").hasClass("yellow color") === true ){
            if((3 < i && i < 8) || (10 < i && i < 15) || (17 < i && i < 22) || (24 < i && i < 29) || (31 < i && i < 36) || (38 < i && i < 43)){
            win2 = win2 + 1
            $('p.computer wow').text(win2)
            alert("Computer has won!!! Please clear the game to start again. ")
            isGameDone = false
            }
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+8) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+16) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+24) + ")").hasClass("yellow color") === true ){
            if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
            win2 = win2 + 1
            $('p.computer wow').text(win2)
            alert("Computer has won!!! Please clear the game to start again. ")
            isGameDone = false
            }
        }
        if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+1) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+2) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+3) + ")").hasClass("yellow color") === true ){
            if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
            win2 = win2 + 1
            $('p.computer wow').text(win2)
            alert("Computer has won!!! Please clear the game to start again. ")
            isGameDone = false
            }
        }
    }
}
  }

  function isItADraw() {
      if(turn === 43){
        $('p.draw wow').text(draw)
          alert("It's a Draw!!! Please clear the game to start a new game. ")
          isGameDone = false
      }
  }

  function updateSome() {
    turn = turn + 1
    didIWin();
    isItADraw();
    updateTurn();
  }

    function cpu() {
        if($('p:nth-of-type(3)').hasClass("active")){
            function removeFunc() {
                if (arr1.length === 0 && funcArr.indexOf(drop1) !== -1){
                    let a = funcArr.indexOf(drop1)
                    funcArr.splice(a, 1);
                }
                if (arr2.length === 0 && funcArr.indexOf(drop2) !== -1){
                    let a = funcArr.indexOf(drop2)
                    funcArr.splice(a, 1);
                }
                if (arr3.length === 0 && funcArr.indexOf(drop3) !== -1){
                    let a = funcArr.indexOf(drop3)
                    funcArr.splice(a, 1);
                }
                if (arr4.length === 0 && funcArr.indexOf(drop4) !== -1){
                    let a = funcArr.indexOf(drop4)
                    funcArr.splice(a, 1);
                }
                if (arr5.length === 0 && funcArr.indexOf(drop5) !== -1){
                    let a = funcArr.indexOf(drop5)
                    funcArr.splice(a, 1);
                }
                if (arr6.length === 0 && funcArr.indexOf(drop6) !== -1){
                    let a = funcArr.indexOf(drop6)
                    funcArr.splice(a, 1);
                }
                if (arr7.length === 0 && funcArr.indexOf(drop7) !== -1){
                    let a = funcArr.indexOf(drop7)
                    funcArr.splice(a, 1);
                }
            }
            removeFunc();
            function canIWin() {
                for(i=1; i<43; i++){
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i-7) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i-14) + ")").hasClass("yellow color") === true){
                        if((i-21) === arr1[0]){
                            drop1();
                        }
                        if((i-21) === arr2[0]){
                            drop2();
                        }
                        if((i-21) === arr3[0]){
                            drop3();
                        }
                        if((i-21) === arr4[0]){
                            drop4();
                        }
                        if((i-21) === arr5[0]){
                            drop5();
                        }
                        if((i-21) === arr6[0]){
                            drop6();
                        }
                        if((i-21) === arr7[0]){
                            drop7();
                        }
                    }
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+6) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+12) + ")").hasClass("yellow color") === true ){
                        if((3 < i && i < 8) || (10 < i && i < 15) || (17 < i && i < 22) || (24 < i && i < 29) || (31 < i && i < 36) || (38 < i && i < 43)){
                            if((i+18) === arr1[0]){
                                drop1();
                            }
                            if((i+18) === arr2[0]){
                                drop2();
                            }
                            if((i+18) === arr3[0]){
                                drop3();
                            }
                            if((i+18) === arr4[0]){
                                drop4();
                            }
                            if((i+18) === arr5[0]){
                                drop5();
                            }
                            if((i+18) === arr6[0]){
                                drop6();
                            }
                            if((i+18) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+6) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+18) + ")").hasClass("yellow color") === true ){
                        if((3 < i && i < 8) || (10 < i && i < 15) || (17 < i && i < 22) || (24 < i && i < 29) || (31 < i && i < 36) || (38 < i && i < 43)){
                            if((i+12) === arr1[0]){
                                drop1();
                            }
                            if((i+12) === arr2[0]){
                                drop2();
                            }
                            if((i+12) === arr3[0]){
                                drop3();
                            }
                            if((i+12) === arr4[0]){
                                drop4();
                            }
                            if((i+12) === arr5[0]){
                                drop5();
                            }
                            if((i+12) === arr6[0]){
                                drop6();
                            }
                            if((i+12) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+12) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+18) + ")").hasClass("yellow color") === true ){
                        if((3 < i && i < 8) || (10 < i && i < 15) || (17 < i && i < 22) || (24 < i && i < 29) || (31 < i && i < 36) || (38 < i && i < 43)){
                            if((i+6) === arr1[0]){
                                drop1();
                            }
                            if((i+6) === arr2[0]){
                                drop2();
                            }
                            if((i+6) === arr3[0]){
                                drop3();
                            }
                            if((i+6) === arr4[0]){
                                drop4();
                            }
                            if((i+6) === arr5[0]){
                                drop5();
                            }
                            if((i+6) === arr6[0]){
                                drop6();
                            }
                            if((i+6) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + (i+18) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+6) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+12) + ")").hasClass("yellow color") === true ){
                        if((3 < i && i < 8) || (10 < i && i < 15) || (17 < i && i < 22) || (24 < i && i < 29) || (31 < i && i < 36) || (38 < i && i < 43)){
                            if(i === arr1[0]){
                                drop1();
                            }
                            if(i === arr2[0]){
                                drop2();
                            }
                            if(i === arr3[0]){
                                drop3();
                            }
                            if(i === arr4[0]){
                                drop4();
                            }
                            if(i === arr5[0]){
                                drop5();
                            }
                            if(i === arr6[0]){
                                drop6();
                            }
                            if(i === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+8) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+16) + ")").hasClass("yellow color") === true ){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if((i+24) === arr1[0]){
                                drop1();
                            }
                            if((i+24) === arr2[0]){
                                drop2();
                            }
                            if((i+24) === arr3[0]){
                                drop3();
                            }
                            if((i+24) === arr4[0]){
                                drop4();
                            }
                            if((i+24) === arr5[0]){
                                drop5();
                            }
                            if((i+24) === arr6[0]){
                                drop6();
                            }
                            if((i+24) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+8) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+24) + ")").hasClass("yellow color") === true ){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if((i+16) === arr1[0]){
                                drop1();
                            }
                            if((i+16) === arr2[0]){
                                drop2();
                            }
                            if((i+16) === arr3[0]){
                                drop3();
                            }
                            if((i+16) === arr4[0]){
                                drop4();
                            }
                            if((i+16) === arr5[0]){
                                drop5();
                            }
                            if((i+16) === arr6[0]){
                                drop6();
                            }
                            if((i+16) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+16) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+24) + ")").hasClass("yellow color") === true ){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if((i+8) === arr1[0]){
                                drop1();
                            }
                            if((i+8) === arr2[0]){
                                drop2();
                            }
                            if((i+8) === arr3[0]){
                                drop3();
                            }
                            if((i+8) === arr4[0]){
                                drop4();
                            }
                            if((i+8) === arr5[0]){
                                drop5();
                            }
                            if((i+8) === arr6[0]){
                                drop6();
                            }
                            if((i+8) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    if($("div.cell:nth-of-type(" + (i+24) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+8) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+16) + ")").hasClass("yellow color") === true ){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if(i === arr1[0]){
                                drop1();
                            }
                            if(i === arr2[0]){
                                drop2();
                            }
                            if(i === arr3[0]){
                                drop3();
                            }
                            if(i === arr4[0]){
                                drop4();
                            }
                            if(i === arr5[0]){
                                drop5();
                            }
                            if(i === arr6[0]){
                                drop6();
                            }
                            if(i === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    else if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+1) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+2) + ")").hasClass("yellow color") === true){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if((i+3) === arr1[0]){
                                drop1();
                            }
                            if((i+3) === arr2[0]){
                                drop2();
                            }
                            if((i+3) === arr3[0]){
                                drop3();
                            }
                            if((i+3) === arr4[0]){
                                drop4();
                            }
                            if((i+3) === arr5[0]){
                                drop5();
                            }
                            if((i+3) === arr6[0]){
                                drop6();
                            }
                            if((i+3) === arr7[0]){
                                drop7();
                            }
                        }
                    }
                    else if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+2) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+3) + ")").hasClass("yellow color") === true){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if((i+1) === arr1[0]){
                                drop1();
                            }
                            if((i+1) === arr2[0]){
                                drop2();
                            }
                            if((i+1) === arr3[0]){
                                drop3();
                            }
                            if((i+1) === arr4[0]){
                                drop4();
                            }
                            if((i+1) === arr5[0]){
                                drop5();
                            }
                            if((i+1) === arr6[0]){
                                drop6();
                            }
                            if((i+1) === arr7[0]){
                                drop7();
                            }
                        }
                        
                    }
                    else if($("div.cell:nth-of-type(" + i + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+1) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+3) + ")").hasClass("yellow color") === true){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if((i+2) === arr1[0]){
                                drop1();
                            }
                            if((i+2) === arr2[0]){
                                drop2();
                            }
                            if((i+2) === arr3[0]){
                                drop3();
                            }
                            if((i+2) === arr4[0]){
                                drop4();
                            }
                            if((i+2) === arr5[0]){
                                drop5();
                            }
                            if((i+2) === arr6[0]){
                                drop6();
                            }
                            if((i+2) === arr7[0]){
                                drop7();
                            }
                        }
                        
                    }
                    else if($("div.cell:nth-of-type(" + (i+1) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+2) + ")").hasClass("yellow color") === true && $("div.cell:nth-of-type(" + (i+3) + ")").hasClass("yellow color") === true){
                        if((0 < i && i < 5) || (7 < i && i < 12) || (14 < i && i < 19) || (21 < i && i < 26) || (28 < i && i < 33) || (35 < i && i < 40)){
                            if(i === arr1[0]){
                                drop1();
                            }
                            if(i === arr2[0]){
                                drop2();
                            }
                            if(i === arr3[0]){
                                drop3();
                            }
                            if(i === arr4[0]){
                                drop4();
                            }
                            if(i === arr5[0]){
                                drop5();
                            }
                            if(i === arr6[0]){
                                drop6();
                            }
                            if(i === arr7[0]){
                                drop7();
                            }
                        }
                        
                    }
                }
                }
            
            canIWin();
            funcArr[Math.floor(Math.random() * funcArr.length)]();
            updateSome();
        }
        }
      


  $('section.drop button').click(function () {
    // stuff goes here
    if(isGameDone){
    updateSome();
    cpu();
    }
  })