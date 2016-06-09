import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  actions: {

    save() {

      var params = {
        author: this.get('author'),
        title: this.get('title'),
        genre: this.get('genre'),
        content: this.get('content'),
        image: this.get('image'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.set('author', "");
      this.set('title', "");
      this.set('genre', "");
      this.set('content', "");
      this.set('image', "");

      this.sendAction('save', params);
    }

  }


});
