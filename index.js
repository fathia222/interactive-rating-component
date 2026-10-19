const submitButton = 
document.querySelector("#submit-btn");

const ratingButtons =
document.querySelectorAll(".rating");

const ratingScreen =
document.querySelector("#rating-screen");
console.log("Rating screen:" , ratingScreen)

const thankYouScreen =
document.querySelector("#thank-you-screen");
console.log("Thank you screen:" , thankYouScreen)





const selectedMessage =
document.querySelector("#selected-message");


submitButton.addEventListener("click", function () {

   if (selectedRating === null) {
    alert("Please select a rating first!");
    return;
   }

   selectedMessage.textContent = `You selected ${selectedRating} out of 5`;

   ratingScreen.hidden = true;
   thankYouScreen.hidden = false;


});




//ratingg.....
let selectedRating = null;


ratingButtons.forEach(function (button) {
    button.addEventListener("click", function() {
        selectedRating=button.textContent.trim();


        ratingButtons.forEach(function(ratingButton) {
            ratingButton.classList.remove("selected");
        });
        button.classList.add("selected");

        console.log(selectedRating)

    });
});





