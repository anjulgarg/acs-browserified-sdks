import * as common from "@azure/communication-common";

if (window.communications) {
    window.communications.common = common;
}
else {
    window.communications = {
        common: common
    }
}
