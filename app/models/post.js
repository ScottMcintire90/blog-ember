import DS from 'ember-data';



export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  genre: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  date: DS.attr()
});
