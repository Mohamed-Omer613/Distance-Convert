(function(){
    'use strict'
    let convertType = "miles"
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){

        var key = event.code;

        if (key === 'keyk'){
            convertType = 'kilometers';
            heading.innerHTML = "kilometers to miles Converter";
            intro.innerHTML = "Type in a number of kilomerters and click the button to convert the distance to miles.";
        }
        else if (key === 'keym') {
            convertType = 'miles';
            heading.innerHTML = "miles to kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        }
    });

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            //convert M to K 1.609344
            //convert K to M 0.621371192
            if (convertType == 'miles') {
                var converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilomiters`;
            }
            else  {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilomerters converts to ${converted} miles`;
            }
        }
        else  {
                answerDiv.innerHTML = "<h2>Place provide a number!</h2>"
            }
    });
})();