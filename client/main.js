

Template.theaterSeatTemp.helpers({
  'seatList': function(){
    return Seats.find(); // call all seats from the db
  }

});

Template.ReservedByTemp.helpers ({
  'seatReservedBy': function () {
    var selctedSeatVar = Session.get('seatId');
    return Seats.findOne({_id : selctedSeatVar} );

  }

});



Template.seatTemp.helpers({
  'reserved' : function() {
    var isReservedVar = this.reserved;
    //return console.log(isReservedVar)
    if (isReservedVar){
      return "reserved";
    } else {
      return "";
    }

  },
  // this to check wichOne is selected and to be use in the html

  'selectedClass' : function () {

    var seatId = this._id;
    var selctedSeat = Session.get('seatId');
    if (seatId == selctedSeat){
      return "selected";
    }

  },




});


Template.resCountTemp.helpers({

  // this template to show how many seats are avaiable and reserved
  'totalSeats' : function () {
    return Seats.find().count();

  },
  'reservedSeats' : function () {
    return Seats.find({reserved: true}).count();
  }
})



/////// Events ///////


///////////

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
    var reservedPhoneVar = event.target.phoneText.value;
    var selectedSeatIdOutVar = Session.get('seatId'); // from the session get whatever value is saved there
    Seats.update({_id: selectedSeatIdOutVar}, {$set: {reserverdBy: reservedByVar, lock: false, reserved: true, Phone :reservedPhoneVar}}); // submit db action
  }
  });


