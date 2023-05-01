const body = document.querySelector('body');

function creatVirtualKeyboard() {
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    body.appendChild(wrapper);
    let title = document.createElement('h1');
    let display = document.createElement('textarea');
    let keyboard = document.createElement('div');
    let span = document.createElement('span');
    title.className = 'title';
    display.className = 'display';
    keyboard.className = 'keyboard';
    span.className = 'span';
    title.textContent = 'Virtual Keyboard';
    span.textContent = 'The keyboard was created on the macOS operating system. For to switch a language you have to press left command + space.';
    wrapper.appendChild(title);
    wrapper.appendChild(display);
    wrapper.appendChild(keyboard);
    wrapper.appendChild(span);
    let symbolRowOne = '§1234567890-=';
    for (let i = 0; i < symbolRowOne.length; i++) {
        let key = document.createElement('button');
        key.className = 'key';
        key.textContent = `${symbolRowOne[i]}`;
        keyboard.appendChild(key);
    }
    let keyBackspace = document.createElement('button');
    keyBackspace.className = 'key backspace';
    keyBackspace.textContent = '⟵';
    keyboard.appendChild(keyBackspace)
    let tab = document.createElement('button');
    tab.className = 'key tab';
    tab.textContent = '⇥ Tab';
    keyboard.appendChild(tab);
    let symbolRowTwo = 'qwertyuiop[]';
    for (let i = 0; i < symbolRowTwo.length; i++) {
        let key = document.createElement('button');
        key.className = 'key';
        key.textContent = `${symbolRowTwo[i]}`;
        keyboard.appendChild(key);
    }
    let enter = document.createElement('button');
    enter.className = 'key enter';
    enter.textContent = 'enter';
    keyboard.appendChild(enter);
    let capslock = document.createElement('button');
    capslock.className = 'key capslock';
    capslock.textContent = 'Caps Lock ⇪';
    keyboard.appendChild(capslock);
    let symbolRowThree = "asdfghjkl;'\\";
    for (let i = 0; i < symbolRowThree.length; i++) {
        let key = document.createElement('button');
        key.className = 'key';
        key.textContent = `${symbolRowThree[i]}`;
        keyboard.appendChild(key);
    }
    let shiftLeft = document.createElement('button');
    shiftLeft.className = 'key shiftleft';
    shiftLeft.textContent = 'Shift ⇧';
    keyboard.appendChild(shiftLeft);
    let symbolRowThour = '`zxcvbnm,.?/';
    for (let i = 0; i < symbolRowThour.length; i++) {
        let key = document.createElement('button');
        key.className = 'key';
        key.textContent = `${symbolRowThour[i]}`;
        keyboard.appendChild(key);
    }
    let shiftRight = document.createElement('button');
    shiftRight.className = 'key shiftright';
    shiftRight.textContent = '⇧';
    keyboard.appendChild(shiftRight);
    let control = document.createElement('button');
    control.className = 'key control';
    control.textContent = 'control';
    keyboard.appendChild(control);
    let option = document.createElement('button');
    option.className = 'key option';
    option.textContent = 'option alt';
    keyboard.appendChild(option);
    let command = document.createElement('button');
    command.className = 'key command';
    command.textContent = 'command ⌘';
    keyboard.appendChild(command);
    let space = document.createElement('button');
    space.className = 'key space';
    space.textContent = '';
    keyboard.appendChild(space);
    let commandRight = document.createElement('button');
    commandRight.className = 'key commandright';
    commandRight.textContent = 'command ⌘';
    keyboard.appendChild(commandRight);
    let optionRight = document.createElement('button');
    optionRight.className = 'key optionright';
    optionRight.textContent = 'option alt';
    keyboard.appendChild(optionRight);
    let leftArrow = document.createElement('button');
    leftArrow.className = 'key left-arrow';
    leftArrow.textContent = '◄';
    keyboard.appendChild(leftArrow);
    let boxArrow = document.createElement('div');
    boxArrow.className = 'box-arrow';
    keyboard.appendChild(boxArrow)
    let upArrow = document.createElement('button');
    upArrow.className = 'key up-arrow';
    upArrow.textContent = '▲';
    let downArrow = document.createElement('button');
    downArrow.className = 'key down-arrow';
    downArrow.textContent = '▼';
    boxArrow.appendChild(upArrow);
    boxArrow.appendChild(downArrow);
    let rightArrow = document.createElement('button');
    rightArrow.className = 'key right-arrow';
    rightArrow.textContent = '►';
    keyboard.appendChild(rightArrow);
}
creatVirtualKeyboard()

let key = document.querySelectorAll('.key');
let display = document.querySelector('.display');


document.body.addEventListener('keydown', (index) => {
    for (let i = 0; i < key.length; i++) {
        if (key[i].innerHTML === index.key.toLowerCase()) {
            key[i].classList.add('active')
        }
    }
})

document.body.addEventListener('keyup', (index) => {
    for(let i = 0; i < key.length; i++) {
        if (key[i].innerHTML === index.key.toLowerCase()) {
            key[i].classList.remove('active')
        }
    }
})

key.forEach(element => {
   element.addEventListener('mousedown', () => {
    element.className = 'key active';
    display.innerHTML += element.innerHTML
   }) 
});

for (let i = 0; i < key.length; i++) {
    key[i].setAttribute('keyname', key[i].innerText);
    key[i].setAttribute('upperCaseName', key[i].innerText.toUpperCase());
}

document.body.addEventListener('keydown', (e) => {
    for (let i = 0; i < key.length; i++) {
        if (e.code == 'CapsLock' && key[i].getAttribute('upperCaseName').length === 1) {
            key[i].innerHTML = key[i].getAttribute('upperCaseName')
        }
    }
})

document.body.addEventListener('keyup', (e) => {
    for (let i = 0; i < key.length; i++) {
        if (e.code == 'CapsLock' && key[i].getAttribute('upperCaseName').length === 1) {
            key[i].innerHTML = key[i].getAttribute('upperCaseName').toLowerCase()
        }
    }
})


document.body.addEventListener('mousedown', (e) => {
    console.log(e.code == 'CapsLock')
})        






