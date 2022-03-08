var RocketChatClient = require("../lib/rocketChat").RocketChatClient;
var should = require("should");

var config = {
    host: "chat.betgame.one",
    port: "443",
    token: "Bp0ggrNPaFxXN3TYZ3uCj_Gp4k2T9-QPB8nZzgDrep-"
};

describe("notifyUser", function () { 
    
    let rocketChatClient = null;

    before(function (done) {
        rocketChatClient = new RocketChatClient("https", config.host, config.port, config.token,done);
    });

    describe("of a new message", function () {

        it("On Message", function (done) {
            // rocketChatClient.notify.room.onChanged("GENERAL", function (err, body) {
            //     should(err).be.null();
            //     should(body).not.be.null();
            //     should(body.msg).be.equal("changed");
            //     should(body.fields.eventName).be.equal("GENERAL");
            //     done();
            // });

            rocketChatClient.chat.sendMessage({ rid: "GENERAL", msg: "message" }, function (err, body) {
                should(err).be.null();
                should(body).not.be.null();
                console.log(err,body)
                done();
            });
        });
        
    });

    // describe("Test login by token", function () {
    //     var rocketChatClient = new CbvRocketChatClient("https", config.host, config.port, config.token);
    //     it("Load History", function (done) {
    //         this.timeout(15000);
    //         rocketChatClient.realtime.callMethod("loadHistory",["GENERAL", null, 50, { "$date": "1646718981986" }],(response) => {
    //             console.log(response)
    //             done()
    //         })
    //     });
    // });
});