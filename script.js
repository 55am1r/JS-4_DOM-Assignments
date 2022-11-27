window.onload = () => {
    window.scrollTo(0, 0);
}

//ASSIGNMENT-1

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById('nav').style.backgroundColor = "white";
        document.getElementById('hamburger-i').style.color = 'black';
        document.getElementById('title-text').style.color = "black";
    } else {
        document.getElementById('nav').style.backgroundColor = "#20bbfe";
        document.getElementById('hamburger-i').style.color = 'white';
        document.getElementById('title-text').style.color = "white";
    }
};

//ASSIGNMENT-2

document.getElementById('hamburger').addEventListener('click', () => {
    const transform_style = document.getElementById('nav-side-bar');
    transform_style.classList.toggle('display_block');
})


//ASSIGNMENT-3
let a = 0;
//WITHOUT LOOPS

// document.getElementById('back-slide').addEventListener('click', () => {
//     document.getElementById('image-' + a).style.display = "none";
//     document.getElementById('slide-' + a).style.backgroundColor = "white";
//     a--;
//     if (a < 1) {
//         a = 5;
//         document.getElementById('image-' + a).style.display = "block";
//         document.getElementById('slide-' + a).style.backgroundColor = "lightgrey";
//     } else {
//         document.getElementById('image-' + a).style.display = "block";
//         document.getElementById('slide-' + a).style.backgroundColor = "lightgrey";
//     }
// }
// )
// document.getElementById('front-slide').addEventListener('click', () => {
//     console.log(a);
//     document.getElementById('image-' + a).style.display = "none";
//     document.getElementById('slide-' + a).style.backgroundColor = "white";
//     a++;
//     if (a > 5) {
//         a = 1;
//         document.getElementById('image-' + a).style.display = "block";
//         document.getElementById('slide-' + a).style.backgroundColor = "lightgrey";
//     } else {
//         document.getElementById('image-' + a).style.display = "block";
//         document.getElementById('slide-' + a).style.backgroundColor = "lightgrey";
//     }
// })

//AUTOMATIC SLIDER

const img_collection = document.getElementsByClassName("image");
const slide_indicator = document.getElementsByClassName("span");

// AUTOMATIC TRIGGERS

// console.log(img_collection.length);
// loop_image_slider();
// function loop_image_slider() {
//     for (let i = 0; i < img_collection.length; i++) {
//         document.getElementById(img_collection[i].id).style.display = "none";
//     }
//     a++;
//     if (a == img_collection.length) {
//         a = 0;
//     }
//     document.getElementById(img_collection[a].id).style.display = "block";
//     setTimeout(loop_image_slider, 2000);
// }

//WITH LOOP TRIGGERS

document.getElementById('back-slide').addEventListener('click', () => {
    for (let i = 0; i < img_collection.length; i++) {
        document.getElementById(img_collection[i].id).style.transform = "translateX(-1400px)";
        document.getElementById(slide_indicator[i].id).style.backgroundColor = "white";
        document.getElementById(slide_indicator[a].id).style.color = "black";
    }
    a--;
    if (a < 0) {
        a = img_collection.length - 1;
    }
    document.getElementById(img_collection[a].id).style.transform = "translateZ(-1400px)";
    document.getElementById(slide_indicator[a].id).style.backgroundColor = "black";
    document.getElementById(slide_indicator[a].id).style.color = "white";
})
document.getElementById('front-slide').addEventListener('click', () => {
    for (let i = 0; i < img_collection.length; i++) {
        document.getElementById(img_collection[i].id).style.transform = "translateX(-1400px)";
        document.getElementById(slide_indicator[i].id).style.backgroundColor = "white";
        document.getElementById(slide_indicator[a].id).style.color = "black";
    }
    a++;
    if (a == img_collection.length) {
        a = 0;
    }
    document.getElementById(img_collection[a].id).style.transform = "translateZ(1400px)";
    document.getElementById(slide_indicator[a].id).style.backgroundColor = "black";
    document.getElementById(slide_indicator[a].id).style.color = "white";

})

//ASSIGNMENT-4


//CALCULATOR

let operator;
let num1 = 0;
let num2 = 0;
function remove_start_zero() {
    if (document.getElementById('output-text').innerText === '0') {
        document.getElementById('output-text').innerText = '';
    }
}
document.getElementById('no-1').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '1';
})
document.getElementById('no-2').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '2';
})
document.getElementById('no-3').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '3';
})
document.getElementById('no-4').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '4';
})
document.getElementById('no-5').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '5';
})
document.getElementById('no-6').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '6';
})
document.getElementById('no-7').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '7';
})
document.getElementById('no-8').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '8';
})
document.getElementById('no-9').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '9';
})
document.getElementById('no-0').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '0';
})
document.getElementById('point').addEventListener('click', () => {
    remove_start_zero();
    document.getElementById('output-text').innerText += '.';
})
document.getElementById('output-screen').addEventListener('click', (event) => {
    document.getElementById('output-screen').scrollTo(document.getElementById('output-screen').scrollWidth, 0);
})

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('output-text').innerText =
        document.getElementById('output-text').innerText.slice(0, -1);
})

document.getElementById('clear-all').addEventListener('click', clearall);

function clearall() {
    document.getElementById('output-text').innerText = ' ';
    document.getElementById('num-1').innerText = '';
    document.getElementById('operator').innerText = ' ';
    num1 = 0;
    num2 = 0;
    operator = '';
}
document.getElementById('add').addEventListener('click', () => {
    if (num1 == 0) {
        num1 = Number(document.getElementById('output-text').innerText);
        document.getElementById('num-1').innerText += document.getElementById('output-text').innerText;
        document.getElementById('output-text').innerText = '0';
        document.getElementById('operator').innerText = '+';
        operator = '+';
    }
    else {
        document.getElementById('operator').innerText = '+';
        operator = '+';
    }

})
document.getElementById('sub').addEventListener('click', () => {
    if (num1 == 0) {
        num1 = Number(document.getElementById('output-text').innerText);
        document.getElementById('num-1').innerText += document.getElementById('output-text').innerText;
        document.getElementById('output-text').innerText = '0';
        document.getElementById('operator').innerText = '-';
        operator = '-';
    } else {
        document.getElementById('operator').innerText = '-';
        operator = '-';
    }
})
document.getElementById('divi').addEventListener('click', () => {
    if (num1 == 0) {
        num1 = Number(document.getElementById('output-text').innerText);
        document.getElementById('num-1').innerText += document.getElementById('output-text').innerText;
        document.getElementById('output-text').innerText = '0';
        document.getElementById('operator').innerText = '/';
        operator = '/';
    } else {
        document.getElementById('operator').innerText = '/';
        operator = '/';
    }
})
document.getElementById('mul').addEventListener('click', () => {
    if (num1 == 0) {
        num1 = Number(document.getElementById('output-text').innerText);
        document.getElementById('num-1').innerText += document.getElementById('output-text').innerText;
        document.getElementById('output-text').innerText = '0';
        document.getElementById('operator').innerText = '*';
        operator = '*';
    } else {
        document.getElementById('operator').innerText = '*';
        operator = '*';
    }
})

document.getElementById('sum-up').addEventListener('click', () => {
    num2 = Number(document.getElementById('output-text').innerText);
    let result;
    let timer_sec = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            clearall();
            document.getElementById('output-text').innerText = '= ' + result;
            const timer_1 = setInterval(() => {
                timer_sec++;
                document.getElementById('num-1').style.fontSize = '2rem';
                document.getElementById('num-1').innerText = "Auto-Clearing after 5s : " + timer_sec;
                if (timer_sec == 5) {
                    document.getElementById('num-1').style.fontSize = '4rem';
                    timer_sec = 0;
                    clearall();
                    clearInterval(timer_1);
                }
            }, 1000);
            break;
        case '-':
            result = num1 - num2;
            clearall();
            document.getElementById('output-text').innerText = '=' + result;
            const timer_2 = setInterval(() => {
                timer_sec++;
                document.getElementById('num-1').style.fontSize = '2rem';
                document.getElementById('num-1').innerText = "Auto-Clearing after 5s :" + timer_sec;
                if (timer_sec == 5) {
                    document.getElementById('num-1').style.fontSize = '4rem';
                    timer_sec = 0;
                    clearall();
                    clearInterval(timer_2);
                }
            }, 1000);
            break;
        case '/':
            result = num1 / num2;
            clearall();
            document.getElementById('output-text').innerText = '=' + result;
            const timer_3 = setInterval(() => {
                timer_sec++;
                document.getElementById('num-1').style.fontSize = '2rem';
                document.getElementById('num-1').innerText = "Auto-Clearing after 5s :" + timer_sec;
                if (timer_sec == 5) {
                    document.getElementById('num-1').style.fontSize = '4rem';
                    timer_sec = 0;
                    clearall();
                    clearInterval(timer_3);
                }
            }, 1000);
            break;
        case '*':
            result = num1 * num2;
            clearall();
            document.getElementById('output-text').innerText = '=' + result;
            const timer_4 = setInterval(() => {
                timer_sec++;
                document.getElementById('num-1').style.fontSize = '2rem';
                document.getElementById('num-1').innerText = "Auto-Clearing after 5s :" + timer_sec;
                if (timer_sec == 5) {
                    document.getElementById('num-1').style.fontSize = '4rem';
                    timer_sec = 0;
                    clearall();
                    clearInterval(timer_4);
                }
            }, 1000);
            break;
    }
})