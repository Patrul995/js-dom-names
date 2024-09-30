let names = ["Ali", "Javid", "Kamran", "undefind", "Emin", "Emil", "undefind", "Rafael"]
        
let ul = document.getElementById('names-list')

const showNames = (arr) => { 
    arr.forEach((name) => {
        let li = document.createElement('li')
        li.innerHTML = `${name}`
        ul.appendChild(li)
    });
};

showNames(names)

li.addEventListener('click', () => {
    
})

document.getElementById('check-btn').addEventListener('click', () => {
    const listItems = document.querySelectorAll('#names-list li')
    
    listItems.forEach((li) => {
        
        if (li.innerHTML === 'undefind') {
            li.innerHTML = 'Будет заменено в будущем' 
        }
    })
})



