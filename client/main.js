


Template.vipTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'vip'});
  }

});
Template.goldTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'gold'});
  }

});
Template.silverTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'silver'});
  }

});
Template.normalTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'normal'});
  }

});


/////// Events ///////


Template.seatsTemp.events({

'click .seatDtls': function(){
  var seatIdVar = this._id;
  alert("Are you Sure!")
  Seats.update({_id : seatIdVar}, {$set: {Booked: true}} );
  console.log("This Seat is booked");

}

});