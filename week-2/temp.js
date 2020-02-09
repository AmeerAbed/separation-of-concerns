
const withLoopGuard = document.createElement('input');
withLoopGuard.setAttribute('type', 'button');
withLoopGuard.value = '.. with max iterations = ';
withLoopGuard.addEventListener('click', function with_infinite_loop_guard(event) {
  resultsContainer.innerHTML = '';
  const max = Number(event.target.form.max.value);
  let allDone;
  try {
    // does it exist?
    js_beautify('', {
      indent_size: '  ',
      "brace_style": "collapse,preserve-inline",
    });
    allDone = codeAlong.format_and_loop_guard(
      js_beautify(editor.getValue(), {
        indent_size: '  ',
        "brace_style": "collapse,preserve-inline",
      })
      , max);
  } catch (err) {
    allDone = codeAlong.with_infinite_loop_guard(editor.getValue(), max);
  }
  const debuggeredEl = document.createElement('pre');
  debuggeredEl.innerHTML = allDone;
  resultsContainer.appendChild(debuggeredEl);
});
const maxIterationsInput = document.createElement('input');
maxIterationsInput.value = 50;
maxIterationsInput.name = 'max';
maxIterationsInput.style = 'width:3em';

const maxIterationsForm = document.createElement('form');
maxIterationsForm.style = 'display:inline;';
maxIterationsForm.appendChild(withLoopGuard);
maxIterationsForm.appendChild(maxIterationsInput);

const jsTutorButton = document.createElement('button');
jsTutorButton.innerHTML = 'open in JS Tutor';
jsTutorButton.onclick = () => {
  const encodedJST = encodeURIComponent(editor.getValue());
  const sanitizedJST = encodedJST
    .replace(/\(/g, '%28').replace(/\)/g, '%29')
    .replace(/%09/g, '%20%20');
  // const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
  const jsTutorURL = "http://www.pythontutor.com/javascript.html#code=" + sanitizedJST + "&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";
  window.open(jsTutorURL, '_blank');
};

const linterButton = document.createElement('button');
linterButton.innerHTML = 'open in JSHint';
linterButton.onclick = () => {
  const encodedLintee = encodeURIComponent(editor.getValue());
  const sanitizedLintee = encodedLintee
    .replace(/\(/g, '%28').replace(/\)/g, '%29')
    .replace(/%09/g, '%20%20');
  // const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
  const linterURL = "http://janke-learning.org/linter/?snippet=" + sanitizedLintee;
  window.open(linterURL, '_blank');
};

const buttonsButton = document.createElement('button');
buttonsButton.innerHTML = 'so many buttons?';
buttonsButton.onclick = () => alert(codeAlongGuide);

const buttonDiv = document.createElement('div');
buttonDiv.style = 'margin-top:2%;margin-bottom:2%;text-align:center;';
buttonDiv.appendChild(evaluateInCodeAlong);
buttonDiv.appendChild(evaluateInDebugger);
buttonDiv.appendChild(maxIterationsForm);
buttonDiv.appendChild(document.createElement('br'));
buttonDiv.appendChild(jsTutorButton);
try {
  // does it exist?
  js_beautify('', {
    indent_size: '  ',
    "brace_style": "collapse,preserve-inline",
  })

  const formatCode = document.createElement('button');
  formatCode.innerHTML = 'format code';
  formatCode.addEventListener('click', () => {
    const beautified = js_beautify(editor.getValue(), {
      indent_size: 2,
      "brace_style": "collapse,preserve-inline",
    })
    editor.setValue(beautified);
  });
  buttonDiv.appendChild(formatCode);
} catch (e) { }

buttonDiv.appendChild(linterButton);
buttonDiv.appendChild(buttonsButton);


resultsContainer.id = '\n-- assertions --\n';


const initialResult = document.createElement('pre');
//     initialResult.innerHTML = `
// Psst. open your console for logs and errors
//     `;
resultsContainer.appendChild(initialResult);

const outputContainer = document.createElement('div');
outputContainer.style = 'height: 98vh; width: 55vw; border:solid 1px;';
if (typeof title === 'string') {
  const titleEl = document.createElement('h1');
  titleEl.innerHTML = title;
  titleEl.style = 'text-align: center;';
  outputContainer.appendChild(titleEl);
}
outputContainer.appendChild(buttonDiv);
outputContainer.appendChild(document.createElement('hr'));
outputContainer.appendChild(resultsContainer);


iframe.contentDocument.body.style = 'display:flex; flex-direction:row;';
iframe.contentDocument.body.appendChild(stepsContainer);
iframe.contentDocument.body.appendChild(outputContainer);

}

codeAlong.step_through_in_debugger = function in_debugger(your_source_code) {
  try {
    eval(
      'debugger; // injected by codeAlong ->  error messages will be off by 2 lines\n'
      + '\n'
      + your_source_code
    );
  } catch (err) {
    console.log(err);
  };
  return "     All done! \n\n     (psst. try again with devtools open if they aren't already)";
}

codeAlong.format_and_loop_guard = function with_infinite_loop_guard(your_source_code, max) {
  let loopNumber = 0;
  try {
    eval(
      'debugger; // injected by codeAlong ->  error messages will be off by 2 lines\n'
      + '\n'
      + js_beautify(
        your_source_code.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
          loopNumber++;
          return `let _loop${loopNumber} = 0; ${loopHead} if (++_loop${loopNumber} > ${max}) throw new Error('Loop exceeded ${max} iterations');`
        }),
        {
          indent_size: '  ',
          "brace_style": "collapse,preserve-inline",
        }
      )
    );
  } catch (err) {
    console.log(err);
  };
  return "     All done! \n\n     (psst. try again with devtools open if they aren't already)";
}
