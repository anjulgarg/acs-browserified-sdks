import * as admin from "@azure/communication-administration";

if (window.communications) {
    window.communications.admin = admin;
}
else {
    window.communications = {
        admin: admin
    }
}