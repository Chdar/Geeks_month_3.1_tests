// TASK #1

const regExp = /^\d+$/;
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/; 
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

// TASK #2

const logEverySecond = () => {
    let counter = 0;
    setInterval(() => {
        counter++;
        console.log(`Прошла секунда // ${counter}`);
    }, 1000);
};

logEverySecond();

// TASK #3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++; 
    }, 1000); 
};

count();

// TASK #4

const box = document.querySelector('.box');

box.addEventListener('click', () => {
  box.classList.toggle('highlight');
});


// TASK #5

const request = new XMLHttpRequest();

request.open('GET', 'data.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();
request.onload = () => {
    if (request.status === 200) {
        const data = JSON.parse(request.response); 
        console.log('Полученные данные:', data);
    } else {
        console.error(`Ошибка: ${request.status} - ${request.statusText}`);
    }
};