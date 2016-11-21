javascript:(function() {
  function getUserIDs() {
    function getMembersById(id) {
      return RL.rooms[id].member_dat;
    }
    return Object.keys(getMembersById(RL.focused_room_id));
  }
  let ids = getUserIDs();
  let result = "";
  ids.forEach(function(e) {
      result += "[To:" + e + "]";
  });
  document.getElementById("_chatText").value = result + "\n";
})();

