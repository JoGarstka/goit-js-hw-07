const justCategories = document.querySelector('#categories');

const justItem = justCategories.querySelectorAll('.item');

console.log(`Number of categories: ${justItem.length}\n`);

justItem.forEach(category => {
    const name = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;

console.log(`Category: ${name}\nElements: ${elements}\n`);
});


