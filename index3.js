// data
let name = 'It-incubator';
let graduatesCount = 2000;
let areYouChampion = true;
// render, program
//document.write('<h1>', name, '</h1>');
document.write('<h1>', name, '</h1>');
//document.write('<input type="number" value="' + graduatesCount + '">');
document.write(`<input type="number" value="${graduatesCount}">`);
//document.write('<input type="checkbox"', areYouChampion ? ' checked ': '', '>');
document.write(`<input type="checkbox"${areYouChampion ? ' checked ' : ''}>`);