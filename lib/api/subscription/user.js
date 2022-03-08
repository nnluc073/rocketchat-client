const Room = require("./room");

class User {
    constructor(client) {
        this.client = client;
    }

    onNotification(userId, onEventPublished) {
        this.client.subscribe({ userId, stream : "stream-notify-user", event : "notification" }, onEventPublished);
    }

    onSubscriptionsChanged(userId, onEventPublished) {
        this.client.subscribe({ userId, stream : "stream-notify-user", event : "subscriptions-changed" }, onEventPublished);
    }

    onStatusChanged(onEventPublished) {
        this.client.subscribe({ stream : "stream-notify-logged", event : "user-status" }, onEventPublished);
    }

    onRoomChanged(userId, onEventPublished) {
        this.client.subscribe({ userId, stream : "stream-notify-user", event : "rooms-changed" }, onEventPublished);
    }
}
module.exports = User;