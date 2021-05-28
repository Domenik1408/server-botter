// Usernames
let max = 4914149; // Max number of the username
let min = 49142; // Min number of the username

// Server stuff
let ip = "random ip"; // Server's IP address (Must be Cracked, No Anti-VPN (unless your not on one), and no captcha)
let botsMax = 100; // Number of accounts that will join
let kickRelog = true; // If the account should relog when it is kicked

























// Code (prob shouldnt touch o_O)



const mineflayer = require("mineflayer");
let bots = 0;
let epi = "";
run();
async function run() {

    bots++;

    if(bots > botsMax) return;

    let name = Math.floor(Math.random() * (max - min)) + min;

    while(epi.includes(name + " ")) {
        name = Math.floor(Math.random() * (max - min)) + min;
    };

    console.log("REGISTERING BOT: " + name);

    const bot = mineflayer.createBot({
        host: ip,
        username: name + ""
    });

    let ms = Date.now();

    epi+=name + " ";

    bot.once("login", () => {

        
        let time = (Date.now() - ms);
        console.log("REGISTERED BOT \"" + bot.username + "\" AFTER " + time + "ms - Currently have " + bots + "/" + botsMax + " bots logged in!");

        setTimeout(() => {

            bot.chat("/register MyCoolPassword69 MyCoolPassword69");
            bot.chat("/login MyCoolPassword69");
            run();
        }, 100);
    });

    bot.on("kicked", (reason) => {
        console.log("BOT \"" + bot.username + "\" KICKED: " + reason);
        bots--;
        if (kickRelog) run();
    });

};
