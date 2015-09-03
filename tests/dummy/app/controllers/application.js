import Ember from 'ember';

export default Ember.Controller.extend({
  
  mocks: Ember.A([
    Ember.Object.create({
      name: 'Data 1',
      data: Ember.A([
        {
          x: Date.now(),
          y: 10
        }
      ])
    }),
    Ember.Object.create({
      name: 'Data 2',
      data: Ember.A([
        {
          x: Date.now(),
          y: 10
        }
      ])
    }),
    Ember.Object.create({
      name: 'Data 3',
      data: Ember.A([
        {
          x: Date.now(),
          y: 10
        }
      ])
    }),
    Ember.Object.create({
      name: 'Data 4',
      data: Ember.A([
        {
          x: Date.now(),
          y: 10
        }
      ])
    }),
    Ember.Object.create({
      name: 'Data 5',
      data: Ember.A([
        {
          x: Date.now(),
          y: 10
        }
      ])
    })
  ]),
  init() {
    this._super();
    window.setInterval(this.addPoints.bind(this), 2000);
  },
  addPoints() {
    let mocks = this.get('mocks');
    mocks.forEach(function(mock) {
      let data = mock.get('data');
      data.pushObject({x: Date.now(), y: Math.round(Math.random() * 50)});
    });
  }
});