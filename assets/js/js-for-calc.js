/*
 *   ~  * Developed by - mGunawardhana
 *   ~  * Contact email - mrgunawardhana27368@gmail.com
 *   ~  * what's app - 071 - 9043372
 */

(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === ''){
            screen.value = "";
        }else{
            screen.value = eval(screen.value);
        }
    })

    clear.addEventListener('click', function (e){
        screen.value ="";
    })

})();
