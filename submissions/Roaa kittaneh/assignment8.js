const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};



// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());



//task 2


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

console.log(formHandler.value); 


//1-predict what formHandler.value will be.

//القيمة المتوقعة هي initial 
// لانو ذس هون ما بتشير ل الفورم هاندلر ف ضلت زي ما هي 
//الوجهة تاعت الذس بتكون body




//2-fix the bug using either .bind() or an arrow function (your choice).

simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value); 

//3-explain which fix you used and why.
// استخدمت bind
//لأنه بخلي this يضل مربوط بالكائن formHandler
//حتى لما أبعث الدالة لحالها


//   task3
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
}

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

//using bind again
function logLanguageInfo(getter) {
  const get = getter.bind(translator);
  console.log(get());
}


logLanguageInfo(translator.getLanguage);