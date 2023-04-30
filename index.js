const body = document.querySelector('body');

function creatVirtualKeyboard() {
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    body.appendChild(wrapper);
    let display = document.createElement('textarea');
    let keyboard = document.createElement('div');
    display.className = 'display';
    keyboard.className = 'keyboard';
    wrapper.appendChild(display);
    wrapper.appendChild(keyboard);
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
    let symbolRowTwo = 'QWERTYUIOP{}'
    for (let i = 0; i < symbolRowTwo.length; i++) {
        key.textContent = `${symbolRowTwo[i]}`;
        keyboard.appendChild(key);
    }
}
creatVirtualKeyboard()