import api from "./api-key.js";

const buttons = document.querySelectorAll(".button");
const chat = document.querySelector("#chat-response");

function disabled(boolean) {
    if (boolean) {
        buttons.forEach(function (button) {
            button.setAttribute("disabled", "disabled");
        });
    } else {
        buttons.forEach(function (button) {
            button.removeAttribute("disabled", "disabled");
        });
    }
}

function addContent(content) {
    chat.textContent = content;
}

async function query(query) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${api}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            max_tokens: 250,
            temperature: 0.7,
            messages: [
                {
                    role: "assistant",
                    content: `Расскажи шутку ${query}, напиши только шутку`,
                },
            ],
        }),
    });
    if (response.ok) {
        const responseData = await response.json();
        const chatResponse = responseData.choices[0].message.content;
        document.getElementById("chat-response").innerText = chatResponse;
        disabled(false);
    } else {
        console.error("Error:", response.status, response.statusText);
        const errorData = await response.json();
        console.error("Error Details:", errorData);
        disabled(false);
    }
}

buttons.forEach(function (button) {
    button.onclick = function () {
        disabled(true);
        query(button.dataset.joke);
    };
});


// async function getChatGPTResponse(content) {
//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${api}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       max_tokens: 150,
//       temperature: 0.7,
//       messages: [{ role: "user", content: content }],
//     }),
//   });

//   if (response.ok) {
//     const responseData = await response.json();
//     console.log(responseData);
//     const chatResponse = responseData.choices[0].message.content;
//     document.getElementById("chat-response").innerText = chatResponse;
//   } else {
//     console.error("Error:", response.status, response.statusText);
//     const errorData = await response.json();
//     console.error("Error Details:", errorData);
//   }
// }
