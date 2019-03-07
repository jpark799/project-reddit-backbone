var PostModel = Backbone.Model.extend({
  defaults: {
    user: 'Aaron',
    text: 'Hello!'
  }
});

var pm1 = new PostModel();

console.log(pm1);
console.log(pm1.attributes);
