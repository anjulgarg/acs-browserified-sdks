import * as calling from "@azure/communication-calling";

if (window.communications) {
    window.communications.calling = calling;
}
else {
    window.communications = {
        calling: calling
    }
}