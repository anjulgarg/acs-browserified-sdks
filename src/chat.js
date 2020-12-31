import * as chat from "@azure/communication-chat";

if (window.communications) {
    window.communications.chat = chat;
}
else {
    window.communications = {
        chat: chat,
    }
}
