
var results;
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox',
  init: function() {
    $('.username').click(function() {
      app.addFriend();
    });
    $('#send').submit(app.handleSubmit);
  },
  send: function(message) {
    $.ajax( {
      url: app.server,
      data: JSON.stringify(message),
      type: 'POST'
      // dataType: 'json'
    });
  },
  fetch: function() {
    $.ajax( {
      url: app.server,
      type: 'GET',
      dataType: 'json',
      success: success
    });
  },
  clearMessages: function() {
    $('#chats').remove();
    $('#main').append($('<div id="chats"></div>'));
  },
  addMessage: function(message) {
    var chat = $('<div class="chat"></div>');
    chat.append($('<div class="username">' + message.username + '</div>'));
    chat.append($('<div class="message-text">' + message.text + '</div>'));
    $('#chats').append(chat);
  },
  addRoom: function(roomname) {
    $('#roomSelect').append($('<option value="' + roomname + '">' + roomname + '</option>'));
  },
  addFriend: function() {
  },
  handleSubmit: function() {
    console.log('handleSubmit was called');
  }
};

var success = function(json){
  console.log(json);
  results = json;
  // var $testnode = $('<p>' + JSON.stringify(json) + '</p>');
  // $('#main').append($testnode);
};


// $(document).ready(function(){


// };




// YOUR CODE HERE:
// create app
// initialize method
// send method
  // needs POST request
// fetch method
  // needs GET request



// need to initialize our app (document.ready)
// load messages on to page
  // start with default chatroom
  // using fetch method
    // display username / message properly
    // friends will be in bold
    // allow usernames/icon to be clickable for friending
      // pop up to allow user to confirm or cancel
    // make sure proper escaping
  // make dom elements for each message
  // append dom elements to page
// make refresh button for subsequent messages to load
  // onclick to activate
// ***** make input box with send button
  // onclick for button, on keyenter as well
    // either action will call send method for message
    // will also attach username and roomname
    // then fetch message automatically
// rooms
  // make dropdown box for selecting rooms
  // allow creating new rooms
  // will fetch messages from the right room
  // must take away current messages displayed when new room selected
