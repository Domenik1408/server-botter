// Usernames
let max = 4914149; // Max number of the username
let min = 49142; // Min number of the username

// Server stuff
let ip = "localhost"; // Server's IP address (Must be Cracked, No Anti-VPN (unless your not on one), and no captcha)
let botsMax = 100; // Number of accounts that will join
let kickRelog = true; // If the account should relog when it is kicked

const mineflayer = require("mineflayer");
let epi = "";
run();
async function run() {

    let name = Math.floor(Math.random() * (max - min)) + min;

    while(epi.includes(name + " ")) {
        name = Math.floor(Math.random() * (max - min)) + min;
    };

    console.log("Created task");

    const bot = mineflayer.createBot({
        host: ip,
        username: name + ""
    });

    let ms = Date.now();

    epi+=name + " ";

    bot.once("login", () => {

        
        let time = (Date.now() - ms);
        console.log("The task has been completed");

        setTimeout(() => {

            run();
        }, 0);
    });

    bot.on("kicked", (reason) => {
        if (kickRelog) run();
    });

};

// Reworked version of a github release. fixed all bugs here