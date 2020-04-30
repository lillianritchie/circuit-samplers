//event listener for the DOM being loaded
window.addEventListener("DOMContentLoaded", () => {

    //look for the form where we set the astrological sign
    const signForm = document.getElementById("sign-form");

    //create an event parameter
    signForm.onsubmit = (event) => {
        //look up the value that was submitted and save it to a const
        const signInput = event.target.value;
        console.log(signInput);
    }


});
