

// =======================   Q1  =======================  
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// =======================   Q2  =======================  
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange);
console.log(formHandler.value)

// 1) Predict what formHandler.value will be. ===> initial

// 2) Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value)


// with arrow func 
simulateInputChange((newVal) => formHandler.onChange(newVal));
console.log(formHandler.value)
console.log("===============================")
// 3)Explain which fix you used and why.
// bind Because bind() binds this to the specified object (formHandler)
//  and returns a new instance of the function always bound to it.


// =======================   Q3  =======================  

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};
 function logLanguageInfo(getter){
    console.log(getter.call(translator))
 }
 logLanguageInfo(translator.getLanguage);