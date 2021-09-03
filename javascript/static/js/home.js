// Challenge 1: Your Age in Days





function yourageindays(){

    var birthyear = prompt('What year were you born');
    var ageinDayss = (2021-birthyear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageinDayss + " days old");
    h1.setAttribute('id','ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    

}


function reset(){ 
    document.getElementById('ageinDays').remove();
}



function generatecat(){

    var image = document.createElement("img");
    image.src = "data:image/jpeg;base64,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";
    image.width= 200;
    image.height= 200;
   // var div = document.getElementById('asd');
    //div.appendChild(image);


    document.getElementById('asd').appendChild(image);
 //   document.getElementsByClassName('flex-box-container-2').appendChild("elem")
}



function rpsGame(yourchoice){
    var botchoice = Math.floor(Math.random()*3);
    var dict = {
        "0":"rock",
        "1":"paper",
        "2":"scissors"

    };
    botchoice = dict[botchoice];
    console.log("bot selection "+botchoice);
    console.log("Your selection "+yourchoice.id);


    if (botchoice == yourchoice.id){
        console.log('draw');
    }
    else{
        
        if (botchoice=="rock" & yourchoice.id=='scissors'){
            console.log('you lose');
        }
        else if(botchoice=='scissors' & yourchoice.id=='paper'){
            console.log('you lose');
        }
        else if(botchoice=='paper' & yourchoice.id=='rock'){
            console.log('you lose');
        }
        else{
            console.log('you win');
            var selection = document.getElementById(yourchoice.id);
            

            
            
            

            


            x = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = (parseInt(x)+1).toString();
        }

        
    }
    

    


    


}