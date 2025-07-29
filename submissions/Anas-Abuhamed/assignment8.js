// Task 1
const editor = {
    title: "my first blog",
     getUpperTitle() {
        return this.title.toUpperCase();
     }
}
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());
// Task 2 
const formHandler = {
    value: "initial",
    onChange(newValue) {
        this.value = newValue;
    },
};
function simulateInputChange(callback) { 
    callback("updated")
}
simulateInputChange(formHandler.onChange.bind(formHandler)) // for this solution, bind create a new copy of the function and replace this with formhandler
console.log(formHandler.value) // It will print initial because of bind lose (this lose it's reference)

// Task 3
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter) {
    console.log(getter.call(translator));
}
logLanguageInfo(translator.getLanguage);
