import * as identity from "@azure/communication-identity";

if (window.communications) {
    window.communications.identity = identity;
}
else {
    window.communications = {
        identity: identity
    }
}