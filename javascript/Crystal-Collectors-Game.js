        var gameState = {
            wins : 0,
            losses : 0,
            totalScore : 0,

      // function adder(gem[]) {

      //   // The function should add the gemNums together, and log the result to the console.
      //   console.log(gem[]);
      // }

  
        scoreTotal: function(gemNum){
        this.totalScore += gemNum;
        // console.log("result number: " + this.resultNumber);
        // display resultNum in page
        $("#btnTotal").html("Button Total is: " + this.totalScore);
        console.log(gemNum);
      },
        //functions:     

        // randomly generate number between 19 and 120
          random : function(min, max){
          var randomNumVal = randomNumberGenerate(19, 120);
          console.log(randomNumVal);
          $("#numberToMatch").html(randomNumVal);
        },
 

        //generate random number values between 1 and 12 to each button

  };
         gameState.random();

        function randomNumberGenerate(min, max){
       return Math.floor(Math.random()*(max-min+1)+ min);
     }


        var gemsValue = {
           gems : [],

   
          //generate random number values between 1 and 12 to each button
            assignNumber : function (min, max){
             

              while(this.gems.length < 4){
              var gemNum = randomNumberGenerate(2,12);
              console.log(gemNum)
            
              if(!this.gems.includes(gemNum)){
                this.gems.push(gemNum);
                // console.log(gemNum);
                    }
                }  
            },

               // assign each button a value from gems array
          assignButtonToHtml : function(){
        // each  gem item === a button there are 4 buttons and 4 array items.
          // all buttons have btn call and a unique class of btn1-4
          $('.btn1').val(this.gems[0]);
          $('.btn2').val(this.gems[1]);
          $('.btn3').val(this.gems[2]);
          $('.btn4').val(this.gems[3]);
            },
        };
gemsValue.assignNumber();
gemsValue.assignButtonToHtml();
gameState.scoreTotal();

 $(".btn").on("click", function(){ 
        var gemNumInt = parseInt($(this).val());
        gameState.scoreTotal(gemNumInt);
        console.log(gemNumInt)
      });
      // console.log("button value: " + gemNumInt.gems);