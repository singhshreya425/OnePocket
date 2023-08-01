
//Task 3
const fs = require('fs');
const path = require('./data.txt')

const filePath = path.join(__dirname, 'data.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
  }
});

function countWords(text) {

  const cleanedText = text.replace(/\s+/g, ' ');
  const words = cleanedText.split(' ');
  const nonEmptyWords = words.filter(word => word.trim() !== '');
  return nonEmptyWords.length;
}
module.exports = {
    countWords,
  };