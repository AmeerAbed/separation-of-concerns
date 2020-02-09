{
  const configSchema = {
    container: 'string, element, empty',
    type: 'string, what kind of code-along to render.  javascript/js or document for now',
    title: 'string, to become a main header',
    source: 'undefined -> empty code-along. string -> fetch from relative path. object -> name & path. array of strings or objects -> tabbed the-previous-things'
  }

  const resultSchema = { // future plans
    config: 'the unmodified config object',
    container: "element with input & output containers",
    editor: 'ace editor',
    resultsEl: 'coupler',
    active: "the active step object",
    steps: {
      type: 'array',
      description: 'if no steps, empty editor/results. if 1 step, no tabs. if 2+ steps, tab-it',
      items: {
        path: "relative path to file",
        code: "the code",
        session: "ace session",
        results: "element with name & most recent evaluation",
        button: "the button that goes up top",
        name: "given or default name "
      }
    }
  }
}

// do this with highlight.js? - nope, then extra dependency
const codeAlongGuide = `evaluate code: will run the code in the current editor ---
    ... capture asserts to display pass/fail
    ... try to stop your code after 1000+ loop iterations
    ... generate a search link for your errors
    ... indicate if errors were Creation or Execution phase
    ... remove all debugger statements
step through in debugger: will run the current editor ---
    ... insert a debugger statement before the first line
    ... try to guard against infinite loops
with infinite loop guard: will run the current editor ---
    ... like above, but will format your code
    ... and inject infinite loop guards
Open In Js Tutor: will open the current code in JS Tutor ---
    ... use this button ALL THE TIME!
Open In JSHint: opens your code in an online Linter that will ---
    ... point out syntax errors
    ... warn about some bad practices
    ... warn about possible runtime errors
    ... evaluate the complexity of your code
Format Code: will make code in the current editor prettier ---
    ... make your code easier to read
`;


// a "programming environment" is anywhere you can edit and run code
// this environment is designed to help you take your first steps

// - your code will be colored for easy reading
// - ctr-z will undo changes you made
// - ctr-shift-z will redo the changes
// - ctr-c will copy any highlighted text
// - ctr-v will paste the copied text
// - icons to the left of your code help with errors & syntax
// - changes ARE NOT saved when you refresh the web page
// - changes ARE saved when switching between exercises



async function codeAlong(config) {

  const container = (() => {
    if (!config) {
      return document.createElement('div');

    } if (config instanceof Element) {
      return config;

    } else if (typeof config === 'string') {
      return document.getElementById(config);

    } else if (!config.container) {
      return document.createElement('div');

    } else if (config.container instanceof Element) {
      return config.container;

    } else if (typeof config.container === 'string') {
      return document.getElementById(config.container);

    } else {
      throw new Error('unknown container');
    }
  })();


  const steps = [];

  const iframe = codeAlong.createIframe(config);

  const loadButton = document.createElement('button');
  loadButton.innerHTML = 'click to load code-along';
  loadButton.onclick = async () => {
    iframe.contentDocument.body.style = '';
    iframe.contentDocument.body.innerHTML = '';
    try {
      await new Promise((resolve, reject) => {
        const aceScript = document.createElement('script');
        aceScript.src = config.acePath ? config.acePath : "../embed-scripts/ace/ace.js";
        aceScript.type = "text/javascript";
        aceScript.charset = "utf-8";

        aceScript.addEventListener('load', () => {
          resolve();
          codeAlong.theRest(config, steps, iframe);
        });
        aceScript.addEventListener('error', (e) => reject(e.message))

        iframe.contentDocument.head.appendChild(aceScript);
      });
    } catch (err) { console.log(err) };
  }

  const tempHeader = document.createElement('h1');
  tempHeader.innerHTML = config.title ? config.title : '';
  iframe.onload = () => {
    iframe.contentDocument.body.style = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;';
    iframe.contentDocument.body.appendChild(tempHeader);
    iframe.contentDocument.body.appendChild(loadButton);
  }

  container.appendChild(iframe);

  return { steps, container };

}

codeAlong.createIframe = () => {

  const iframe = document.createElement('iframe');
  iframe.style = 'height:93vh;width:100%;overflow:hidden;background-color:white;';
  iframe.setAttribute('scrolling', 'no');
  return iframe;

}

codeAlong.theRest = async (config, steps, iframe) => {
  const builtSteps = await (async () => {
    if (!config || !config.source) return [];

    const fetchSource = async path => {
      try {
        const res = await fetch(path);
        const code = res.text();
        return code;
      } catch (err) {
        return err.name + ": " + err.message;
      }
    }

    if (typeof config.source === 'string') {
      const code = await fetchSource(config.source);
      return [{
        code,
        path: config.source,
        name: config.name || 'code-along'
      }];
    } else if (Array.isArray(config.source)) {
      const fetched = config.source
        .map((path, ind) => {
          if (typeof path === 'string') {
            return {
              path,
              code: fetchSource(path),
              name: 'step ' + ind
            }
          } else if (path.constructor.name === "Object") {
            return {
              path,
              code: fetchSource(path.path),
              name: path.name || 'step ' + ind
            }
          } else {
            throw new Error('invalid step');
          }
        })
      for (let step of fetched) {
        step.code = await step.code;
      }
      return fetched;
    }
  })();

  builtSteps.forEach(step => steps.push(step));


  // async total side-effect
  if (config.type === 'document') {
    codeAlong.document(iframe, steps, config);
  } else if (config.type === 'js' || config.type === 'javascript') {
    codeAlong.js(iframe, steps, config);
  } else {
    codeAlong.js(iframe, steps, config);
  }

  // const setup = await codeAlong.setup(steps, config);
  // container.appendChild(setup);
}


codeAlong.document = (iframe, steps, config) => {
  const title = config.title;

  const stepsContainer = document.createElement('div');

  const editorContainer = document.createElement('div');
  editorContainer.style = 'height:98vh;width:55vw;';

  const ace = iframe.contentWindow.ace;
  // ace.require("ace/ext/language_tools");
  const editor = ace.edit(editorContainer);
  // editor.setTheme('ace/theme/iplastic'); // lack of color outweighs yellow open/close
  // editor.setTheme('ace/theme/dawn');
  // editor.setTheme('ace/theme/eclipse');
  editor.setTheme('ace/theme/chrome');
  editor.setFontSize(12);
  editor.getSession().setMode('ace/mode/html');
  editor.getSession().setTabSize(2);
  // editor.setOptions({
  //   enableBasicAutocompletion: true,
  //   enableSnippets: true,
  //   enableLiveAutocompletion: true
  // });

  if (steps.length === 0) {
    const defaultCode = "// https://developer.mozilla.org/en-US/docs/Web/API/Console/assert\n" +
      "console.assert(true, 'passing assert');\n" +
      "console.assert(false, 'failing assert');\n" +
      "\n// psst. Open your console for logging!";
    steps.push({
      code: defaultCode,
      name: 'default'
    })
  };

  steps.forEach(step => {
    step.session = ace.createEditSession(step.code, 'html');
    step.session.setMode('ace/mode/html');
  });

  if (steps.length > 1) {
    editorContainer.style = 'height:92vh;width:55vw;';
    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      button.style.height = '5%'; // provisoire
      button.style.background = '';
      const name = step.name ? step.name : 'step ' + index;
      button.innerHTML = name;
      // clear the results when tabs are switched
      //  avoid students changing code but not evaluating, switching tabs, then back and not remembering the results are out of date, then being confused by the wrong results.
      // step.results = document.createElement('div');
      button.onclick = () => {

        active = step;
        // console.clear();
        stepButtons.forEach(stepButton => {
          // stepButton.innerHTML = stepButton.innerHTML
          //   .replace('===&gt; ', '')
          //   .replace(' &lt;===', '');
          stepButton.style.background = '';
        })
        // button.innerHTML = '===> ' + button.innerHTML + ' <===';
        button.style.background = 'darkgrey';

        editor.setSession(step.session);
        outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());

      }
      step.button = button;
      return button;
    });

    const buttonsContainer = steps
      .reduce((div, step) => {
        div.appendChild(step.button);
        return div;
      }, document.createElement('div'));
    stepsContainer.appendChild(buttonsContainer);

    // steps[0].button.innerHTML = '===> ' + steps[0].name + ' <===';
    steps[0].button.style.background = 'darkgrey';
  }

  stepsContainer.appendChild(editorContainer);

  editor.setSession(steps[0].session);
  editor.setValue(steps[0].code);

  const hixieButton = document.createElement('button');
  hixieButton.innerHTML = 'study in Live DOM Viewer';
  hixieButton.onclick = () => {
    const encodedHTML = encodeURIComponent(editor.getValue());
    const url = "https://software.hixie.ch/utilities/js/live-dom-viewer/?" + encodedHTML;
    window.open(url, "_blank");
  };

  const newTabButton = document.createElement('button');
  newTabButton.innerHTML = 'inspect/debug in new tab';
  newTabButton.onclick = () => {
    const x = window.open();
    x.document.open();
    x.document.write(editor.getValue());
    x.document.close();
  }


  const buttonDiv = document.createElement('div');
  buttonDiv.style = 'margin-top:2%;margin-bottom:2%;text-align:center;';
  buttonDiv.appendChild(newTabButton);
  buttonDiv.appendChild(hixieButton);


  const outputEl = document.createElement('iframe');
  // can do better than this
  config.title
    ? outputEl.style = "width:100%;height:85%;"
    : outputEl.style = "width:100%;height:90%;";
  outputEl.id = '\n-- study: rendered DOM --\n';
  outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(steps[0].code);

  const outputContainer = document.createElement('div');
  outputContainer.style = 'height: 98vh; width: 40vw; border:solid 1px; padding-left:1%; padding-right:1%;';
  if (typeof title === 'string') {
    const titleEl = document.createElement('h1');
    titleEl.innerHTML = title;
    titleEl.style = 'text-align: center; margin-bottom:0%; margin-top:1%;';
    outputContainer.appendChild(titleEl);
  }
  outputContainer.appendChild(buttonDiv);
  outputContainer.appendChild(outputEl);

  editor.on("change", (e) => {
    outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());
  });


  iframe.contentDocument.body.style = 'display:flex; flex-direction:row;';
  iframe.contentDocument.body.appendChild(stepsContainer);
  iframe.contentDocument.body.appendChild(outputContainer);

}

codeAlong.js = (iframe, steps, config) => {

  const title = config.title;

  const stepsContainer = document.createElement('div');

  const editorContainer = document.createElement('div');
  editorContainer.style = 'height:98vh;width:55vw;';

  const ace = iframe.contentWindow.ace;
  const editor = ace.edit(editorContainer);
  editor.setTheme('ace/theme/chrome');
  // editor.setTheme('ace/theme/dawn');
  // editor.setTheme('ace/theme/eclipse');
  // editor.setTheme('ace/theme/iplastic'); // weaker coloring, but open/close are highlighted bright yellow
  // editor.setTheme('ace/theme/kuroir');
  // editor.setTheme('ace/theme/tomorrow');
  // editor.setTheme('ace/theme/xcode');
  editor.setFontSize(12);
  editor.getSession().setMode('ace/mode/javascript');
  editor.getSession().setTabSize(2);
  // editor.setShowInvisibles(true);
  // editor.useSoftTabs(true);
  // editor.session.setOptions({
  //   // mode: "ace/mode/javascript",
  //   // tabSize: 2,
  //   useSoftTabs: true,
  //   showInvisibles: true,
  // });


  if (steps.length === 0) {
    const defaultCode = "// https://developer.mozilla.org/en-US/docs/Web/API/Console/assert\n" +
      "console.assert(true, 'passing assert');\n" +
      "console.assert(false, 'failing assert');\n"; // +
    // "\n// psst. Open your console for logging!";
    steps.push({
      code: defaultCode,
      name: 'default'
    })
  };

  steps.forEach(step => {
    step.session = ace.createEditSession(step.code, 'javascript');
    step.session.setMode('ace/mode/javascript');
  });

  const resultsContainer = document.createElement('div');


  if (steps.length > 1) {
    editorContainer.style = 'height:92vh;width:55vw;';
    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      button.style = 'height:5%;';
      const name = step.name ? step.name : 'step ' + index;
      // to preserve formatting in step title
      const code = document.createElement('code');
      code.innerHTML = name;
      button.appendChild(code);
      // clear the results when tabs are switched
      //  avoid students changing code but not evaluating, switching tabs, then back and not remembering the results are out of date, then being confused by the wrong results.
      // step.results = document.createElement('div');
      button.onclick = () => {

        active = step;
        // console.clear();
        stepButtons.forEach(stepButton => {
          // stepButton.firstChild.innerHTML = stepButton.firstChild.innerHTML
          //   .replace('==&gt; ', '')
          //   .replace(' &lt;==', '');
          stepButton.style.background = '';
        })
        // button.firstChild.innerHTML = '==> ' + button.firstChild.innerHTML + ' <==';
        button.style.background = 'darkgrey';

        editor.setSession(step.session);

        resultsContainer.innerHTML = '';
        // resultsContainer.appendChild(active.results)

      }
      step.button = button;
      return button;
    });

    const buttonsContainer = steps
      .reduce((div, step) => {
        div.appendChild(step.button);
        return div;
      }, document.createElement('div'));
    buttonsContainer.style = 'padding-bottom:1%';
    stepsContainer.appendChild(buttonsContainer);

    // steps[0].button.firstChild.innerHTML = '==> ' + steps[0].name + ' <==';
    steps[0].button.style.background = 'darkgrey';
  }

  stepsContainer.appendChild(editorContainer);

  editor.setSession(steps[0].session);

  editor.setValue(steps[0].code);

  const evaluateInCodeAlong = document.createElement('button');
  evaluateInCodeAlong.innerHTML = 'evaluate code';
  evaluateInCodeAlong.addEventListener('click', function evaluateCode() {
    resultsContainer.innerHTML = '';
    const results = codeAlong.preparing_your_code(editor.getValue());
    resultsContainer.appendChild(results);
  });

  const evaluateInDebugger = document.createElement('button');
  evaluateInDebugger.innerHTML = 'step through in debugger';
  evaluateInDebugger.addEventListener('click', function step_through_in_debugger() {
    resultsContainer.innerHTML = '';
    const allDone = codeAlong.step_through_in_debugger(editor.getValue());
    const debuggeredEl = document.createElement('pre');
    debuggeredEl.innerHTML = allDone;
    resultsContainer.appendChild(debuggeredEl);
  });

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

codeAlong.format_and_loop_guard = function with_infinite_loop_guard(your_source_code, max_iterations) {
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

// // bad because hoisted values are in scope with source code
// codeAlong.inDebugger = function parsing_your_code(your_source_code) {

//   try {
//     eval(
//       'debugger; // injected by codeAlong \n'
//       + '\n'
//       + your_source_code
//     );
//   } catch (err) {
//     console.log(err);
//   };

//   return 'All done!';

// }


// // closure with hoisted values can be a bit confusing
// //  but it's the least of all evils
// //  and that could be thought of as a learning moment
// // no! announces execution even when syntax errors
// codeAlong.inDebugger = function parsing_your_code(your_source_code) {

//   try {
//     (function executing_your_code() {
//       eval(
//         'debugger; // injected by codeAlong -> error messages will be off by 2 lines \n'
//         + '\n'
//         + your_source_code
//       );
//     })(); // injected by codeAlong
//   } catch (err) {
//     console.log(err);
//   };

//   return 'All done!';

// }


// // bad because of temporal dead zone and extra iffe in debugger
// codeAlong.inDebugger = function parsing_your_code(your_source_code) {

//   try {
//     eval(
//       '(function executing_your_code(){\n'
//       + 'debugger; // injected by codeAlong -> error messages will be off by 3 lines\n'
//       + '\n'
//       + your_source_code + '\n'
//       + '\n'
//       + '})(); // injected by codeAlong'
//     );
//   } catch (err) {
//     console.log(err);
//   };

//   return 'All done!';

// }

codeAlong.preparing_your_code = function (your_source_code) {
  const resultsEl = document.createElement('ol');
  // console.clear();

  const nativeAssert = console.assert;
  console.assert = function () {

    nativeAssert(...Array.from(arguments));

    const statusString = arguments[0] ? 'PASS: ' : 'FAIL: ';
    const statusEl = document.createElement('p');
    statusEl.innerHTML = statusString;
    statusEl.style.display = 'inline';
    // revisit color choices
    statusEl.style.color = arguments[0] ? 'green' : 'orange';

    const messages = document.createElement('code');
    messages.innerHTML = '  ' + Array.from(arguments)
      .slice(1, arguments.length)
      .toString()
      .replace(',', ', ');

    const newLi = document.createElement('li');
    newLi.style = 'padding-top:1%;'
    newLi.appendChild(statusEl);
    newLi.appendChild(messages);

    resultsEl.appendChild(newLi);

  }

  const renderError = (err) => {
    const errorEl = document.createElement('pre');
    errorEl.style.color = "red";
    const duckDuckLink = document.createElement('a');
    duckDuckLink.innerHTML = '<strong>' + err.name + '</strong>: ' + err.message + ' (click to search)';
    duckDuckLink.href = `https://duckduckgo.com/?q=javascript+${err.name}+${err.message}&atb=v185-2_d&ia=web`;
    duckDuckLink.target = '_blank';
    duckDuckLink.style.color = 'red';
    const searchButton = document.createElement('button');
    searchButton.appendChild(duckDuckLink)
    errorEl.appendChild(searchButton);
    errorEl.appendChild(document.createTextNode('\n\n   callstack is logged to the console'));
    return errorEl;
  }
  const renderHaltingWarning = (err) => {
    const warningEl = document.createElement('pre');
    warningEl.style.color = "#ff6f3f";
    warningEl.innerHTML = 'Warning: ' + err.message + '\n\n   callstack is logged to the console';
    return warningEl;
  }
  const renderPhase = didExecute => {
    const phaseEl = document.createElement('pre');
    const phase = didExecute.status ? 'Execution Phase' : "Creation Phase"
    phaseEl.innerHTML = '   caught during ' + phase;
    return phaseEl;
  }

  const didExecute = { status: false };
  try {
    const deDebuggered = codeAlong.deDebugger(your_source_code);
    // https://github.com/xieranmaya/infinite-loop-detector
    const loopDetected = deDebuggered.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
      const id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER) // not guaranteed unique, but good enough
      return `let __${id} = 0;${loopHead}if (++__${id} > 1000) throw new Error('Loop exceeded 1000 iterations');`
    });
    (function editor() {
      eval('(function executing_prepared_code() { didExecute.status = true;' + loopDetected + '})();');
    })();
  } catch (err) {
    const errOrWarning = err.message === 'Loop exceeded 1000 iterations'
      ? renderHaltingWarning(err)
      : renderError(err);
    resultsEl.appendChild(errOrWarning);
    resultsEl.appendChild(renderPhase(didExecute));
    console.error(err);
  }

  console.assert = nativeAssert;
  // console.log = nativeLog;

  return resultsEl;

}

codeAlong.deDebugger = code => code
  .replace(';debugger;', ';;')
  .replace(' debugger;', ' ;')
  .replace('\tdebugger;', '\t;')
  .replace('\ndebugger;', '\n;')
  .replace(';debugger ', '; ')
  .replace(' debugger ', '  ')
  .replace('\tdebugger ', '\t ')
  .replace('\ndebugger ', '\n ')
  .replace(';debugger\t', ';\t')
  .replace(' debugger\t', ' \t')
  .replace('\tdebugger\t', '\t\t')
  .replace('\ndebugger\t', '\n\t')
  .replace(';debugger\n', ';\n')
  .replace(' debugger\n', ' \n')
  .replace('\tdebugger\n', '\t\n')
  .replace('\ndebugger\n', '\n\n');
