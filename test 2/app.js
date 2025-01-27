// Task 1

function extractNumbers (str) {
    return str.match(/\d/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]

// Task 2

function fibonacciRecursive(a = 0, b = 1) {
    if (a > 144) return;
    console.log(a);
    setTimeout(() => {
        fibonacciRecursive(b, a + b);
    }, 1000);
}

fibonacciRecursive();

// Task 3

async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products'); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); 
        }
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProductTitles();

// Task 4

const colorfulButtonsContainer = document.getElementById('colorful-buttons');

colorfulButtonsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent;
        document.body.style.backgroundColor = color;
    }
});

// Task 5

const square = document.getElementById('square');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block';
        toggleButton.textContent = 'Hide Block';
    } else {
        square.style.display = 'none';
        toggleButton.textContent = 'Show Block';
    }
});

// Task 6

let counter = 0;
const counterElement = document.getElementById('counter');

const interval = setInterval(() => {
    counter++; 
    counterElement.textContent = counter; 

    if (counter >= 100) {
        clearInterval(interval);
    }
}, 10); 

// Task 7

const mockApiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; 
const fetchButton = document.getElementById('fetchButton');

fetchButton.addEventListener('click', async () => {
    try {
        const response = await fetch(mockApiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('Error fetching data:', error); 
    }
});