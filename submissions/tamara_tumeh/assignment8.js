// T1
const editor = {
    title: 'my first blog',
    getUpperTitle() {
        return this.title.toUpperCase();
    }
};
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());
///////////////////////////////////////////////////////////////
// T2
// const formHandler = {
//     value: 'initial',
//     onChange(newValue) {
//         this.value = newValue;
//     }
// };
// function simulateInputChange(callback) {
//     callback('updated');
// }
// simulateInputChange(formHandler.onChange.bind(formHandler));
// console.log(formHandler.value);
//updated 
// I used .bind() because I needed to retain the correct reference to the formHandler method. When passing formHandler.onChange as a callback to the simulateInputChange function, the reference to the original object (formHandler) is lost, so this no longer points to the expected context. Using .bind(formHandler) ensures that the method keeps its proper this binding and works as intended.
// another solution 
const formHandler = {
    value: 'initial',
    onChange: (newValue) => {
       formHandler.value = newValue; 
    }
};
function simulateInputChange(callback) {
    callback('updated');
}
simulateInputChange(formHandler.onChange);
console.log(formHandler.value);
// I used an arrow function to fix the bug in the code because arrow functions do not have their own this context. Therefore, I needed to define the onChange function as an arrow function to ensure that the reference inside it does not point to a different context. In arrow functions, this is lexically bound, meaning it refers to the original object or scope from which it was defined, rather than creating its own context
///////////////////////////////////////////////////////////////
// T3
const translator = {
    language: 'Arabic',
    getLanguage() {
        return `Current language: ${this.language}`;
    }
};
function logLanguageInfo(getter) {
    console.log(getter.call(translator));
}
logLanguageInfo(translator.getLanguage);
///////////////////////////////////////////////////////////////