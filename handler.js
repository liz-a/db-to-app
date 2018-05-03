"use strict";
const Pusher = require("pusher");
const config = require("./config");

let pusher = new Pusher(config);

module.exports.pusherhandler = (event, context, callback) => {
  //main function
  callback(
    null,
    pusher.trigger("lucky-sanctuary-417", "my-event", {
      message: event
    })
  );
};
