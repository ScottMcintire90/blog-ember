import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveComment() {
      var params = {
        name: this.get('name'),
        message: this.get('message'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    }
  }
});
