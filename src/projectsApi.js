const express = require("express");
const app = express();

export const getProjects = () => {
    return [
        {
            name: "CRM Tool",
            imgSrc: "Crm",
            githubLink: "https://github.com/MA5TERMIND2020/CRM-Tool",
            liveDemoLink: "http://github.com",
        },
        {
            name: "Tours",
            imgSrc: "tours",
            githubLink: "https://github.com/SherifAckles/tours",
            liveDemoLink: "Coming soon",
        },
        {
            name: "Chatly",
            imgSrc: "Chatly",
            githubLink: "https://github.com/nabesteron/chatly",
            liveDemoLink: "https://chatly101.netlify.app",
        },
        {
            name: "PIG GAME",
            imgSrc: "Pig",
            githubLink: "https://github.com/nabesteron/pig-game",
            liveDemoLink: "https://pig-game-sherif-moustafa.netlify.app/",
        },
        {
            name: "FIZZ BUZZ",
            imgSrc: "Fizz",
            githubLink: "https://github.com/nabesteron/fizz-buzz-app",
            liveDemoLink: "https://fizz-buzz-app-sherif.netlify.app/",
        },
        {
            name: "DRAGON FIRE",
            imgSrc: "Dragon",
            githubLink: "https://github.com/nabesteron/dragon-fire",
            liveDemoLink: "https://dragon-fire-sherif-moustafa.netlify.app/",
        },
    ];
}