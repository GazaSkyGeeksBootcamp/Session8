// task1
const editor = {
    title: "my first blog",
    getUpperTitle() {
        return this.title.toUpperCase();
    },
};
// the edit is
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

//-----------------------------------------------------------

// task2
const formHandler = {
    value: "initial",
    onChange(newValue) {
        this.value = newValue;
    },
};
function simulateInputChange(callback) {
    callback("updated");
}
// the edit is
const boundOnChange = formHandler.onChange.bind(formHandler);
simulateInputChange(boundOnChange);
console.log(formHandler.value);

//-----------------------------------------------------------

// task3
const translator = {
    language: "Arabic",
    getLanguage() {
        return `Current language: ${this.language}`;
    },
};
// the edit is
function logLanguageInfo(getter) {
    console.log(getter());
}
logLanguageInfo(translator.getLanguage.bind(translator));