async function checkCode() {
    const input = document.getElementById("code-input").value;
    const message = document.getElementById("result-message");

    try {
        const response = await fetch('/.netlify/functions/checkCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: input }),
        });

        const data = await response.json();

        if (data.success) {
            message.textContent = data.message;
            message.style.color = "green";
        } else {
            message.textContent = data.message;
            message.style.color = "red";
        }
    } catch (error) {
        console.error('Error checking the code:', error);
        message.textContent = "An error occurred.";
        message.style.color = "red";
    }
}
