//event listener for the DOM being loaded
window.addEventListener("DOMContentLoaded", () => {
    console.log('dom is loaded!')
    //look for the form where we set the astrological sign
    const $signForm = document.getElementById("sign-form");

    //console.log(signForm.class);

    //create an event parameter
    $signForm.addEventListener('change', async evt => {
        //prevent the default reload

        console.log('changed');
        event.preventDefault();
        console.log(evt.target.value);
        await createPattern(evt.target.value);

    })

});

function createPattern(input) {
    console.log("creating a pattern for " + input);

    let $patternContainer1 = document.getElementById("pattern-1");
    let $patternContainer2 = document.getElementById("pattern-2");



    $patternContainer1.innerHTML = `<img class="pattern-image" src="../../assets/${input}-layer-01.png" width="500px"></img>`;
    $patternContainer2.innerHTML = `<img class="pattern-image" src="../../assets/${input}-layer-02.png" width="500px"></img>`;

}