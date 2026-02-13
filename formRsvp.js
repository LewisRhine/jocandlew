const name = document.getElementById('name');
const inParty = document.getElementById('inParty');
const movieGuess = document.getElementById('movieGuess');
const email = document.getElementById('email');
const updates = document.getElementById('updates');
const reminder = document.getElementById('reminder');
const fieldset = document.getElementById('fieldset');
const submit = document.getElementById('submit');


email.oninput = event => {
    updates.disabled = !event.target.value;
    reminder.disabled = !event.target.value;
}

async function submitRsvp() {
    try {
        fieldset.disabled = true
        submit.value = "Submitting..."
        const response = await fetch("https://rsvparty.jocandlew.com/Rsvp", {
            method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                "Name": name.value,
                "NumberInParty": inParty.value,
                "MoveGuess": movieGuess.value ?? null,
                "Email": email.value ?? null,
                "getUpdates": updates.disabled ? false : updates.checked,
                "getReminder": reminder.disabled ? false : reminder.checked,

            })
        })

        if (response.ok) {
            window.location.href = 'rsvpcomplete.html';
        } else {
            window.alert("Something went wrong!");
        }
    } catch (error) {
    } finally {
        fieldset.disabled = false
        submit.value = "Submit"
    }
}
