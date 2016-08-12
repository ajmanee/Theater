

Template.theaterSeatTemp.helpers({
  'seatList': function(){
    return Seats.find(); // call all seats from the db
  },


});


Template.seatTemp.helpers({

  // this to check wichOne is selected and to be use in the html
  'selectedClass' : function () {

    var seatId = this._id;
    var selctedSeat = Session.get('seatId')
    if (seatId == selctedSeat){
      return "selected";
    }

  }
});





/////// Events ///////



Template.seatsTemp.events({

  'click .seatDtls': function(){
    var seatIdVar = this._id;
    Session.set('seatId',seatIdVar); // this will save seat id var in the session to be saved other place
    var selectedSeatIdOutVar = Session.get('seatId'); // this will get whatever value in the sesion
    Seats.update({_id : seatIdVar}, {$set: {lock: true}} ); // on click action on the db
  }

});

Template.formTemp.events({

  'submit form': function() {
    event.preventDefault();
    var reservedByVar = event.target.nameText.value; // get the name from the form
    var selectedSeatIdOutVar = Session.get('seatId'); // from the session get whatever value is saved there
    Seats.update({_id: selectedSeatIdOutVar}, {$set: {reserverdBy: reservedByVar, lock: false}}); // submit db action
  }
  });