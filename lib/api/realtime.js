module.exports = Realtime;

function Realtime(client) {
    this.client = client;
}

Realtime.prototype.login = function (user, password, callback) {
    this.client.request("method", "login", [{
        user: { "username": user },
        password: password
    }], callback);
};

Realtime.prototype.loginByToken = function (token, callback) {
    this.client.request("method", "login", [{
        resume: token
    }], callback);
};

Realtime.prototype.joinChannel = function (roomId, callback) {
    this.client.request("method", "joinRoom", [roomId], callback);
};

Realtime.prototype.leaveChannel = function (roomId, callback) {
    this.client.request("method", "leaveRoom", [roomId], callback);
};

Realtime.prototype.callMethod = function (method, params, callback) {
    this.client.request("method", method, params, callback);
};