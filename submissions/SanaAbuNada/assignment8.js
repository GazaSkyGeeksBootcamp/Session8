
// Task1

const editor = {
    title: 'my first blog',
    getUpperTitle() {
    return this.title.toUpperCase();
}
};
// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// Task2

const formHandler = {
    value: 'initial',
    onChange :(newValue)  => {
    formHandler.value = newValue;
}
};

function simulateInputChange(callback) {
    callback('updated');
}

simulateInputChange(formHandler.onChange.bind());

// ❓ Now log formHandler.value
console.log(formHandler.value);

/*
1.Predict what formHandler.value will be.
    it will log initial not updated 
    because When a method is called without its object, this becomes undefined (loose binding), 
    so this.value = newValue doesn't update formHandler.value.

    To fix the bug, I used an arrow function.
    I did not use this inside the method, because in arrow functions this doesn't refer to the object itself.
    So instead, I directly updated the object using formHandler.value = newValue.
    This way, I avoid any issues with 'this' becoming undefined or return any error

*/





// Task3
const translator = {
    language: 'Arabic',
    getLanguage() {
    return `Current language: ${this.language}`;
    }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if
//  getLanguage is passed as an argument.

function logLanguageInfo(getter) {
    const result = getter.bind(translator)
    console.log(result());
}

logLanguageInfo(translator.getLanguage);