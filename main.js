const elInputName = document.querySelector("#name-input");
const elInputRelationship = document.querySelector("#relationship-input");
const elInputPhone = document.querySelector("#phone-input");
const elForm = document.querySelector("#form");
const elWrapper = document.querySelector("#results");

const contacts = [];
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newContact = {
        name: elInputName.value,
        relationship: elInputRelationship.value,
        phone: elInputPhone.value,
    };

    contacts.push(newContact);
    createContactCard();
});

function createContactCard() {
    const newDiv = document.createElement("div");

    newDiv.className = "card px-5 py-3 mt-3";

    // html element
    newDiv.innerHTML = `
                <strong> Salom </strong>
                <h3>${elInputName.value}</h3>
                <p>${elInputRelationship.value}</p>
                <a href="">${elInputPhone.value}</a>
    `;

    elWrapper.appendChild(newDiv);
}
