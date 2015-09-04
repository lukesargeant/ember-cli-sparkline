# Ember-cli-sparkline

An Ember Addon containing components for rendering sparkline charts.

"A sparkline is a very small line chart, drawn without axes or coordinates. It presents the general shape of the variation (typically over time) in a simple and highly condensed way."

## Quick start

* `ember install ember-cli-sparkline`

The only required attribute is 'points'. This should be an array of objects with an 'x' and 'y' property. 'x' and 'y' should be numbers.

Example:

    data: Ember.A([
      {
        x: 1,
        y: 5
      },
      {
        x: 2,
        y: 10
      },
      {
        x: 3,
        y: -20
      }
    ])

You can now use the sparkline component {{ember-cli-sparkline points=data}} in templates.

Warning: You need to give the sparkline a width and height. The dummy app applies width and height styles targetting the .ember-cli-sparkline css class that is present on the root element of the sparkline component.

## Styling

Ember-cli-sparkline adds no styles/CSS to your project by default. The following hooks are available for styling with CSS:

### .ember-cli-sparkline

This is an SVG element. If you want the sparkline to fill its container, you could give the container position: relative; and then apply the following rule:

    .ember-cli-sparkline {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

### .ember-cli-sparkline_line

This is an SVG path element that represents the line drawn by the data points. The following attributes are useful for styling the sparkline's line element:

    .ember-cli-sparkline_line {
      stroke: red;
      stroke-width: 1px;
      stroke-linejoin: round;
    }

### .ember-cli-sparkline_area

This is an SVG path element representing the area beneath the data points. The following attributes are useful for styling the sparline's area element:

    .ember-cli-sparkline_area {
      fill: #444;
    }

## API

### points (Object[]: null)

This should be an array of objects with an 'x' and 'y' property. 'x' and 'y' should be numbers.

### xKey (String: 'x')

The key to the x property in each data point.

### yKey (String: 'x')

The key to the y property in each data point.

### showLine (Boolean: true)

Whether to render a path representing the line along the data points.

### showArea (Boolean: true)

Whether to render a path representing the area beneath the data points.

## Contributing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
