var client;
init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}
$(document).on("click", "#generate", function () {
  $("#errorMsg,.regenrate,#loading").hide();
  //To resize the app to fit with data.
  client.instance.resize({
    height: "100px",
  });
  $("#loading").show();
  $("#displayDetails").hide();
  client.data.get("ticket").then(function (ticketData) {
    var meetingAgenda =
      ticketData.ticket.subject.length >= 300
        ? ticketData.ticket.subject.substring(0, 255) + "..."
        : ticketData.ticket.subject;
    generateMeeting(meetingAgenda);
  }, function (error) {
    handleError(error);
  });

  //generate meeting
  let generateMeeting = async (meetingAgenda) => {
    try {
      let data = await client.request.invokeTemplate("generateMeeting", { body: JSON.stringify({ topic: meetingAgenda }) });
      if (data) {
        $("#errorMsg,.generate,#loading").hide();
        $("#displayDetails,.regenrate").show();
        var sessionData = JSON.parse(data.response);
        $("#meetingUrl").show().html("").append('<div class="pt12"><p><a target="_blank" href="' + sessionData.join_url + '">' +
          sessionData.join_url + "</a></p></div>");
        var replyData = "";
        replyData += "<p>Click the link below to start your Zoom session </p><p><a href='" + sessionData.join_url + "'";
        replyData += " target='_blank'>" + sessionData.join_url + "</p>";
        //Auto populate Link to reply redactor
        client.interface.trigger("click", {
          id: "reply",
          text: replyData
        });
        client.interface.trigger("click", {
          id: "openReply",
          text: replyData,
          replace: true
        });
      }
    } catch (error) {
      handleError(error);
    }
  }
  //Error Handling block
  function handleError(e) {
    if (e.status == 400) {
      notifyMsg(
        "<span>Invalid Input entered, please verify the fields and try again.</span>"
      );
    } else if (e.status == 401 || e.status == 403 || e.status == 502) {
      notifyMsg(
        "<span>Invalid Credentials were given or Subscription to the service expired, please check with your zoom.</span>"
      );
    } else if (e.status == 429) {
      notifyMsg(
        "<span>Too many requests were made, Please try after sometime.</span>"
      );
    } else if (e.status == 500) {
      notifyMsg(
        "<span>Unexpected error occurred, Please try after sometime.</span>"
      );
    } else
      handleOtherErrors(e);
  }
  //handle other errors
  let handleOtherErrors = (e) => {
    if (e.status == 503) {
      notifyMsg("<span>Service Unavailable, Please try after sometime.</span>");
    }
    else if (e.status == 404) {
      notifyMsg("<span>Page Not Found.</span>");
    } else {
      notifyMsg("<span>" + e.message + "</span>");
    }
  }
  //Notify Agent about the issue
  function notifyMsg(msg) {
    // Error message will append to the screen
    $("#displayDetails,#loading").hide();
    $("#errorMsg").show().html("").append(msg);
  }
});
async function renderText() {
  client.instance.resize({
    height: "40px",
  });
  $("#displayDetails,.generate").show();
  $("#meetingUrl").show().html("");
  $("#errorMsg,.regenrate,#loading").hide();
}
