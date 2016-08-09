



Template.vipTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'vip'});
  },
  'selectedClass' : function () {

    var seatId = this._id;
    var selctedSeat = Session.get('seatId')
    if (seatId == selctedSeat){
      return "selected";
    }

  }

});
Template.goldTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'gold'});
  },

    'selectedClass' : function () {

  var seatId = this._id;
  var selctedSeat = Session.get('seatId')
  if (seatId == selctedSeat){
    return "selected";
  }

}

});
Template.silverTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'silver'});
  },
  'selectedClass' : function () {

    var seatId = this._id;
    var selctedSeat = Session.get('seatId')
    if (seatId == selctedSeat){
      return "selected";
    }

  }

});
Template.normalTemp.helpers({
  'seatList': function(){
    return Seats.find({type: 'normal'});
  },
  'selectedClass' : function () {

    var seatId = this._id;
    var selctedSeat = Session.get('seatId')
    if (seatId == selctedSeat){
      return "selected";
    }

  }

});
 Template.seatsTemp.helpers({
  'seatList': function () {
    var selectedSeatVar = Session.get('seatId');
  }
 });


/////// Events ///////



Template.seatsTemp.events({

'click .seatDtls': function(){
  var seatIdVar = this._id;
   Session.set('seatId',seatIdVar);
  var selectedSeatIdOutVar = Session.get('seatId');
  Seats.update({_id : seatIdVar}, {$set: {lock: true}} );
  console.log(selectedSeatIdOutVar);

},
  'submit form': function(){
     event.preventDefault();
    var reservedByVar = event.target.nameText.value;
    var selectedSeatIdOutVar = Session.get('seatId');
    Seats.update({_id : selectedSeatIdOutVar}, {$set: {reserverdBy: reservedByVar,lock: false}});
  }

});

