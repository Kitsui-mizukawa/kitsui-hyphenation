const Hypher = require('hypher');
const englishPatterns = require('hyphenation.en-us');

const h = new Hypher(englishPatterns);

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('word-input');
    const output = document.getElementById('word-output');

    input.addEventListener('input', () => {
        const word = input.value.trim();
        if (word === '') {
            output.innerHTML = '';
            return;
        }

        const syllables = h.hyphenate(word);
        const dotHtml = "<span class='dot'>•</span>";
        output.innerHTML = syllables.join(dotHtml);
    });
});
