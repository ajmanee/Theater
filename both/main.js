/**
 * Created by ali on 8/8/16.
 */
Seats = new Mongo.Collection ('seats'); // Create seats db

Router.configure({
    layoutTemplate: 'main'
});


Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/register', {
  name: 'register',
template: 'registerTemp'
});

Router.route('/login', {
    name: 'login',
    template: 'loginTemp'
});



Router.route('/adminPage', {
    name: 'adminPage',
    template: 'adminPage'
});

Router.route('/seats', {
  name: 'seats',
  template: 'seatsTemp'
})
