console.log('test');

let menu = document.querySelectorAll('.menu');
console.log(menu)



for(let x = 0; x < menu.length; x++){
    menu[x].addEventListener('mouseover', showBottomBorder)
    
}

function showBottomBorder(){

    let styleRule = "5px solid #fff"

    if (this.style.borderBottom == styleRule){
        console.log(12344);
    }

    else {
    // console.log('You have rolled over the menu button')
    this.style.borderBottom = '5px solid #fff';
    // console.log(123);
    // this.style.backgroundColor= '#fff';

    }
}