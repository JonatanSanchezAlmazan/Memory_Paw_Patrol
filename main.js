const arrayCartas = [{
        id: 1,
        img: "/assets/Rubble_PAW_Patrol_PNG_Cartoon_Image.png"

    },
    {
        id: 2,
        img: "/assets/Chase_PAW_Patrol_PNG_Cartoon_Image.png"
    },
    {
        id: 3,
        img: "/assets/Marshall_PAW_Patrol_PNG_Cartoon_Image.png"
    },
    {
        id: 4,
        img: "/assets/dfs8zje-80bcd182-de65-47db-89c4-71835d1ab581.png"
    },
    {
        id: 5,
        img: "/assets/Rocky_PAW_Patrol_PNG_Cartoon_Image.png"
    },
    {
        id: 6,
        img: "/assets/Rubble_PAW_Patrol_PNG_Cartoon_Image.png"
    },
    {
        id: 7,
        img: "/assets/Chase_PAW_Patrol_PNG_Cartoon_Image.png"
    },
    {
        id: 8,
        img: "/assets/Marshall_PAW_Patrol_PNG_Cartoon_Image.png"
    },
    {
        id: 9,
        img: "/assets/dfs8zje-80bcd182-de65-47db-89c4-71835d1ab581.png"
    },
    {
        id: 10,
        img: "/assets/Rocky_PAW_Patrol_PNG_Cartoon_Image.png"
    },

];

arrayCartas.sort(() => Math.random() - 0.5)

let count = 0;
let card1;
let card2;



const divApp = document.querySelector("#app");


const resetCard = (card) => {
    card.nodoHTML.style.transition = "";
    card.nodoHTML.style.transform = "";
    card.nodoHTML.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/PAW_Patrol_Logo.png/220px-PAW_Patrol_Logo.png)";
    card.nodoHTML.style.backgroundColor = "#c83030";

}
const resetValue = () => {
    count = 0;
}

const checkCard = () => {
    if (card1.dataCard.img === card2.dataCard.img) {
        resetValue();
    } else {
        setTimeout(() => {
            resetCard(card1);
            resetCard(card2);
            resetValue();

        }, 2000)
    }
}



const selectCard = (divCardNodoHTML, dataCard) => {

    if (count < 2) {
        count++
        divCardNodoHTML.style.transition = "transform 1s";
        divCardNodoHTML.style.transform = "rotateY(180deg)";
        divCardNodoHTML.style.backgroundColor = "#fff";
        divCardNodoHTML.style.backgroundImage = `url(${dataCard.img})`;
    }

    if (count === 1) {
        card1 = {
            nodoHTML: divCardNodoHTML,
            dataCard: dataCard
        };
    }

    if (count === 2) {
        card2 = {
            nodoHTML: divCardNodoHTML,
            dataCard: dataCard
        };
        checkCard();
    }
}
const resetGame = () => {
    const button = document.createElement("button");
    button.textContent = "Jugar";
    button.classList.add("button");
    document.body.appendChild(button);
    button.addEventListener("click", () => {
        printCards(arrayCartas)
    });
}

const printCards = (arrayCartas) => {
    divApp.innerHTML = "";
    arrayCartas.forEach(dataCard => {
        const divCardNodoHTML = document.createElement("div");
        divCardNodoHTML.classList.add("card");
        //* elijo el nombre de la función y su funcionalidad -> necesitamos saber que carta ha seleccionado el usuario, por lo tanto necesito enviarle a mi función la carta seleccionada y el color para desvelarlo.
        divCardNodoHTML.addEventListener("click", () => selectCard(divCardNodoHTML, dataCard));
        divApp.appendChild(divCardNodoHTML);
    });
}

resetGame();
printCards(arrayCartas);