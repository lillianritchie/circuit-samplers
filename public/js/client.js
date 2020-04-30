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

    if (input == "null") {
        patternContainer1.innerHTML = `<h3 class="content-heading__sub">Don't Forget to select your constellation pattern!</h3>`;
        $patternContainer2.innerHTML = `<h3 class="content-heading__sub">Don't Forget to select your constellation pattern!</h3>`;
    } else {

    $patternContainer1.innerHTML = `<img class="pattern-image" src="../../assets/${input}-layer-01.png"></img>`;
    $patternContainer2.innerHTML = `<img class="pattern-image" src="../../assets/${input}-layer-02.png"></img>`;
    }





}