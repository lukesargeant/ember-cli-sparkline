import Ember from 'ember';
import layout from './template';
/**
 * Component that displays a 2D graph line, and/or its area.
 */
export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  classNames: ['ember-cli-sparkline'],
  attributeBindings: ['viewBox', 'preserveAspectRatio'],

  /**
   * Do not preserve an aspect ratio.
   * @type {String}
   */
  preserveAspectRatio: 'none',

  /**
   * An ordered set of point objects representing a graph line
   * @type {Object[]}
   */
  points: null,

  /**
   * Key for accessing a point's abscissa
   * @type {String}
   */
  xKey: 'x',

  /**
   * Key for accessing a point's ordinate
   * @type {String}
   */
  yKey: 'y',

  /**
   * Whether to draw the data line.
   * @type {Boolean}
   */
  showLine: true,

  /**
   * Whether to fill the area beneath the data line.
   * @type {Boolean}
   */
  showArea: true,

  /**
   * [xZero description]
   * @type {Number}
   */
  xZero: Ember.computed('dataBounds', function() {
    let xZero = this.get('_xZero');
    if (xZero) {
      return xZero;
    }

    let dataBounds = this.get('dataBounds');
    if (!dataBounds) {
      return 0;
    }

    xZero = dataBounds.x.min;
    this.set('_xZero', xZero);
    return xZero;
  }),

  /**
   * Object containing the upper and lower data bounds for each axis
   * @return {Object} Data bounds
   */
  dataBounds: Ember.computed('points.[]', 'xKey', 'yKey', function() {
    let points = this.get('points');
    if (!points || points.length === 0) {
      return null;
    }
    return {
      x: {
        min: points[0][this.get('xKey')],
        max: points[points.length - 1][this.get('xKey')],
      },
      y: {
        min: Math.min.apply(Math.min, points.map(a => a[this.get('yKey')])),
        max: Math.max.apply(Math.max, points.map(a => a[this.get('yKey')]))
      }
    };
  }),

  /**
   * ViewBox attribute of this SVG element.
   * @return {String}
   */
  viewBox: Ember.computed('dataBounds', 'xZero' , function() {
    let b = this.get('dataBounds');
    if (!b) {
      return null;
    }
    let xZero = this.get('xZero');
    let y = b.y;
    let x = b.x;
    return `${x.min - xZero} ${-y.max} ${x.max - x.min} ${y.max - y.min}`;
  }),
  
  /**
   * Path that draws a line for the dataset
   * @return {String}
   */
  linePath: Ember.computed('points.[]', 'xKey', 'yKey', 'xZero', function() {
    let points = this.get('points');
    if (!points || !points.length) {
      return null;
    }
    let xKey = this.get('xKey');
    let yKey = this.get('yKey');
    let xZero = this.get('xZero');
    let lines = [];
    for (let i = 0; i < points.length; i++) {
      let x = points[i][xKey] - xZero;
      let y = -points[i][yKey];
      lines.push(x + ' ' + y);
    }
    return 'M' + lines.join(' L');
  }),

  /**
   * Path that draws an area for the dataset
   * @return {String}
   */
  areaPath: Ember.computed('linePath', 'dataBounds', function() {
    let path = this.get('linePath');
    let b = this.get('dataBounds');
    if (!b) {
      return null;
    }
    return `${path} V0 h${b.x.min - b.x.max}`;
  })

});