document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateButton").addEventListener("click", getResponse);
});

async function getResponse() {
    const apiKey = document.getElementById("apiKey").value;
    const promptText = document.getElementById("promptInput").value;
    const responseBox = document.getElementById("response-box");

    if (!apiKey || !promptText) {
        responseBox.innerText = "Please enter both API Key and Prompt.";
        return;
    }

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "google/gemini-2.0-flash-exp:free",
                "messages": [{ "role": "user", "content": promptText }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        var data = await response.json();
        var code = data.choices[0].message.content;

        // Sanitize the received code, we replace some misc text from the LLM model
        var sanitizedCode = code.replace(/```javascript/gi, "").replace(/```/g, "");

        console.log("Received Code:", sanitizedCode);
        responseBox.innerText = sanitizedCode;

        // Execute the code
        eval(sanitizedCode);

    } catch (error) {
        console.error('Error fetching data:', error);
        responseBox.innerText = "Error fetching data. Check the console for details.";
    }
}

