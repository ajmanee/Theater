

Template.theaterSeatTemp.helpers({
  'seatList': function(){
    return Seats.find();
  },


});


Template.seatTemp.helpers({

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
    Session.set("visible",true);
    var selectedSeatIdOutVar = Session.get('seatId');
    Seats.update({_id : seatIdVar}, {$set: {lock: true}} );
  }

});

Template.formTemp.events({

  'submit form': function() {
    event.preventDefault();
    var reservedByVar = event.target.nameText.value;
    var selectedSeatIdOutVar = Session.get('seatId');
    console.log(selectedSeatIdOutVar)
    Seats.update({_id: selectedSeatIdOutVar}, {$set: {reserverdBy: reservedByVar, lock: false}});
  }
  });