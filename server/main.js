// This will run on the startup and it will run only if the seats collection is empty
Meteor.startup(function () {
    // Insert sample data if the seat collection is empty
    if (Seats.find().count() === 0) {
        JSON.parse(Assets.getText("seats.json")).seats.forEach(function (doc) {
            Seats.insert(doc);
        });
    }
});

