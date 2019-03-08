var Post = Backbone.Model.extend({
  defaults: {
    text: 'N/A',
    points: 0,
    isAwesome: false
  },

  initialize: function() {
    // When `points` changes, update it!
    this.on('change:points', this._updateIsAwesome);

    // If we got a specific initial `points` value, ensure it's set correctly
    // from the very beginning of this model's lifespan.
    this._updateIsAwesome();
  },

  _updateIsAwesome: function() {
    var isAwesome = this.get('points') >= 25;
    this.set('isAwesome', isAwesome);
  },

  highFive: function() {
    // When we change `points` here, an event is fired, triggering
    // `#_updateIsAwesome`! Note that we don't have to worry about updating
    // `isAwesome` directly during this method, since it gets taken care of by
    // our event listener, set in `#initialize`.
    if (this.points <= 45) {
    this.set('points', this.get('points') + 5);
  };
  }
});

var p = new Post();
console.log(p.get('points')); // 0

p.highFive();
console.log(p.get('points')); // 5

p.highFive();
console.log(p.get('points')); // 10
p.set('points', 30);
var p2 = new Post({ points: 50 });
