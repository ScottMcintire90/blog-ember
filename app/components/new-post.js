import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        genre: this.get('genre'),
        content: this.get('content'),
        image: this.get('image'),
        date: this.get('date')
      };
      this.set('author', "");
      this.set('title', "");
      this.set('genre', "");
      this.set('content', "");
      this.set('image', "");
      this.set('date', "");
      this.sendAction('save', params);
    }

  }


});
