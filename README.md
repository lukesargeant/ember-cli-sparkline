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
