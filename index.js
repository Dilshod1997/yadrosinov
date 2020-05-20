const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, { polling: true });



bot.on('message', (msg) => {

    bot.sendMessage(msg.chat.id, jsonview(msg));

    console.log(jsonview(msg));


});


function jsonview(obj = {}) {
    return JSON.stringify(obj, null, 4)
}




// bot.on('message', (msg) => {

//     infoinput(msg.chat.id, msg.from.first_name + msg.from.last_name);
//     console.log(jsonview(msg));


//     var nishon = "Javoblar varaqasi";

//     var location = "Bizning manzil";
//     if (msg.text.indexOf(location) === 0) {
//         bot.sendMessage(msg.chat.id, "👇👇👇 Bizning manzil 👇👇👇");
//         bot.sendVenue(msg.chat.id, 77, 77, 'title', 'Manzil nomi');
//     }

//     bot.sendMessage(msg.chat.id, jsonview(msg));

// });
// bot.onText(/\/start/, (msg) => {

//     // bot.setChatDescription(msg.chat.id,'Assalomu alaykum hurmatli tinlovchilar');
//     console.log(msg);
//     const opst = {
//         "reply_markup": {
//             "keyboard": [
//                 ["Sample text", "Second sample"],
//                 ["Bizning manzil ", "Javoblar varaqasi"]
//             ],
//             "resize_keyboard": true
//         }
//     }
//     bot.sendMessage(msg.chat.id, "Welcome", opst);
// });

// bot.onText(/\/pul/, (msg) => {
//     // bot.sendInvoice(msg.chat.id, 'Tulov', 'Sinov uchun', '120');
// });

