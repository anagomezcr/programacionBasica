function startup() {
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchleave", handleLeave, false);
    el.addEventListener("touchmove", handleMove, false);
  }

  function handleStart(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
  
    for (var i=0; i<touches.length; i++) {
      ongoingTouches.push(touches[i]);
      var color = colorForTouch(touches[i]);
      ctx.fillStyle = color;
      ctx.fillRect(touches[i].pageX-2, touches[i].pageY-2, 4, 4);
    }
  }

  function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  ctx.lineWidth = 4;

  for (var i=0; i<touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ctx.closePath();
    ctx.stroke();
    ongoingTouches.splice(idx, 1, touches[i]);  // swap in the new touch record
  }
}

function handleEnd(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  ctx.lineWidth = 4;

  for (var i=0; i<touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[i].pageX, ongoingTouches[i].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ongoingTouches.splice(i, 1);  // remove it; we're done
  }
}


function handleCancel(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;

  for (var i=0; i<touches.length; i++) {
    ongoingTouches.splice(i, 1);  // remove it; we're done
  }
}