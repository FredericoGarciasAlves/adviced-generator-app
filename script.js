const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const boxDice = document.querySelector(".box-dice");

boxDice.addEventListener("click", function () {
    const adviceRadomAPI = "https://api.adviceslip.com/advice";
    fetch(adviceRadomAPI)
        .then((response) => response.json())
        .then((data) => {
            const slipData = data.slip;
            adviceId.textContent = slipData.id;
            adviceText.textContent = slipData.advice;
        })
        .catch((error) => {
            console.error("Erro capturado:", error);
            alert("Erro ao buscar a mensagem: " + error.message);
        });
});
