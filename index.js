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

    if ((await response.text()) === "Invalid key.") {
        alert("Invalid key.");
        return;
    }

    document.getElementById("message").value = "";

    if (!response.ok) {
        alert(
            "An error has occured. Code " +
                response.status +
                "\n\n" +
                response.statusText
        );
    }
}
