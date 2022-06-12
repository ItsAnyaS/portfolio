window.addEventListener('load', () => {
    const form = document.querySelector("#vowel-form");
    const input = document.querySelector("#vowel-input");
    const main = document.querySelector("#main");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value;
        if (!text) {
            alert('Please Type Something.');
            return;
        }
        const vowels = "aeiou";
        let vowelCount = 0;
        for ( let i = 0; i < text.length; i++) {
             if (vowels.indexOf(text[i].toLowerCase()) > -1){
            vowelCount++;
        } 
    }return alert('Your text had ' + vowelCount + ' vowel(s).'); 
})
})

    
