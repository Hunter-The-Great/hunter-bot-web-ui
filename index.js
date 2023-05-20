async function execute() {
    const key = document.getElementById("key").value;
    const channel = document.getElementById("channel-id").value;
    const message = document.getElementById("message").value;

    const response = await fetch(
        "https://hunter-bot-production.up.railway.app/message",
        {
            body: JSON.stringify({
                channelID: channel,
                message,
                key,
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    document.getElementById("message").value = "";

    if (!response.ok) {
        alert("THERE WAS AN ERROR");
    }
}
