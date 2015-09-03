import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('spark-line', 'Unit | Component | spark line', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it computes a correct dataBounds for a given set of points', function(assert) {
  var component = this.subject();
  component.set('points', [{x: 0, y: 10},{x: 1, y: 20},{x: 2, y: 5}]);
  let b = component.get('dataBounds');
  assert.equal(b.x.min, 0);
  assert.equal(b.x.max, 2);
  assert.equal(b.y.min, 5);
  assert.equal(b.y.max, 20);
  component.set('points', null);
  assert.equal(component.get('dataBounds'), null);
  component.set('points', []);
  assert.equal(component.get('dataBounds'), null);
});

test('it computes a correct viewbox for a given set of points', function(assert) {
  var component = this.subject();
  component.set('points', [{x: 0, y: 10},{x: 1, y: 20},{x: 2, y: 5}]);
  assert.equal(component.get('viewBox'), '0 -20 2 15');
  component.set('points', null);
  assert.equal(component.get('viewBox'), null);
  component.set('points', []);
  assert.equal(component.get('viewBox'), null);
});

test('it computes a correct line path for a given set of points', function(assert) {
  var component = this.subject();
  component.set('points', [{x: 0, y: 10},{x: 1, y: 20},{x: 2, y: 5}]);
  assert.equal(component.get('linePath'), 'M0 -10 L1 -20 L2 -5');
  component.set('points', null);
  assert.equal(component.get('linePath'), null);
  component.set('points', []);
  assert.equal(component.get('linePath'), null);
});

test('it computes a correct line area for a given set of points', function(assert) {
  var component = this.subject();
  
  component.set('points', [{x: 0, y: 10},{x: 1, y: 20},{x: 2, y: 5}]);
  assert.equal(component.get('areaPath'), 'M0 -10 L1 -20 L2 -5 V0 h-2');
  component.set('points', null);
  assert.equal(component.get('areaPath'), null);
  component.set('points', []);
  assert.equal(component.get('areaPath'), null);
});