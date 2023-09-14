async function execute() {
    const key = document.getElementById("key").value;
    const channel = document.getElementById("channel-id").value;
    const message = document.getElementById("message").value;

    const response = await fetch("https://hunter-bot.drewh.net/message", {
        body: JSON.stringify({
            channelID: channel,
            message,
            key,
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        alert(
            `Error code ${response.status}\n\n${
                (await response.json()).statusText
            }`
        );
        return;
    }

    document.getElementById("message").value = "";
}
