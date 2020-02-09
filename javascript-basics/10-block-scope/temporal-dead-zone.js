// in JS Tutor and the debugger you will see something strange
//  when your program enters a new block
//  'let' and 'const' variables will exist in memory ...
//  before the line where they are declared
// but you still can't use them before that line!
// this is called the 'temporal dead zone' and is a feature in JS

// if you follow good practices and never use variables
//   before declaring them, this will not be a problem for you

// step through this in JS Tutor or the debugger!
{
  a = 'yes!';
  let a = 'huh?';
}
