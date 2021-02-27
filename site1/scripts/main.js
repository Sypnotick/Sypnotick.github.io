let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/myimage.png') {
        myImage.setAttribute('src', 'images/cattongue.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/myimage.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 'Im fucking depressed';
}


myButton.onclick = function () {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent =  myName + ' has become a memer'; 
    }
   
}