

const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

//const getTitle = editor.getUpperTitle;

// this lost bining because of the way it is called 
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());
//------------------------------------------------------------------------------------
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

// ❓ Now log formHandler.value
console.log(formHandler.value);//initial :O  Because this was lost (binding) when the method was called as a callback

simulateInputChange(formHandler.onChange.bind(formHandler))//fix by bind formHandler, so this has the correct referance
console.log(formHandler.value);//updated

//by arrow function
simulateInputChange((newValue) => formHandler.onChange(newValue))

// by arrow function this is not lost
console.log(formHandler.value)// updated  

//------------------------------------------------------------------------------------------------
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter)
{
console.log(getter.call(translator))//call will invoke the function
}


logLanguageInfo(translator.getLanguage);



