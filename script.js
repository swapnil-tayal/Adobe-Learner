// buttons = document.getElementsByClassName('btn')
// heading = document.getElementsByClassId('headingC')



// for (var i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', function(){
//         var value = document.getAttribute('data-value');
//         if (value == "AP"){
//             heading.innerText('ADOBE PHOTOSHOP')

//         }else if (value == "APP"){
//             heading.innerText('ADOBE PREMIERE PRO')

//         }else if (value == "AAE"){
//             heading.innerText('ADOBE AFTER EFFECTS')

//         }else if (value == "AA"){
//             heading.innerText('ADOBE AUDITION')

//         }else if (value == 'AXD'){
//             heading.innerText('ADOBE XD')

//         }else{
//             heading.innerText('ADOBE ILLUSTRATOR')}
//     });
// }


var email = document.getElementById('email').value;


function send(){
    var x = document.getElementById("email").value;
    var y = document.getElementById("name").value;
    console.log(x)
    console.log(y)
    if ( (y == 'Swapnil Tayal' || y == 'Tanish')  &&  (x == 'swapniltayal422@gmail.com' || x == 'aggarwaltanish58@gmail.com') ){
        window.location.href = 'Courses.html'
    }else{
        window.location.href = 'D Pricing.html'
    }
}

function Dsend(){
    var x = document.getElementById("email").value;
    var y = document.getElementById("name").value;
    console.log(x)
    console.log(y)
    if ( (y == 'Swapnil Tayal' || y == 'Tanish')  &&  (x == 'swapniltayal422@gmail.com' || x == 'aggarwaltanish58@gmail.com') ){
        window.location.href = 'D Courses.html'
    }else{
        window.location.href = 'D Pricing.html'
    }
}


function login(){
    alert('PLEASE LOG IN');
}



function myFunction() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}