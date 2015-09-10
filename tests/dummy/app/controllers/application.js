import Ember from 'ember';

export default Ember.Controller.extend({
  
  mocks: Ember.A([
    Ember.Object.create({
      name: 'EUR/USD',
      data: Ember.A([])
    }),
    Ember.Object.create({
      name: 'USD/JPY',
      data: Ember.A([])
    }),
    Ember.Object.create({
      name: 'GBP/USD',
      data: Ember.A([])
    }),
    Ember.Object.create({
      name: 'USD/CHF',
      data: Ember.A([])
    })
  ]),
  init() {
    this._super();
    let now = Date.now();
    for (let i = 0; i < 100; i++) {
      this.addPoints(now - ((99 - i) * 2000));
    }
    window.setInterval(this.addPoints.bind(this), 2000);
  },
  addPoints(x) {
    let mocks = this.get('mocks');
    mocks.forEach(function(mock) {
      let data = mock.get('data');
      data.pushObject({x: x || Date.now(), y: Math.round(Math.random() * 50)});
      if (!x) {
        data.shiftObject();
      }
    });
  }
});