import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveComment() {
      var params = {
        name: this.get('name') ? this.get('name') : " ",
        message: this.get('message') ? this.get('message') : " ",
        date: this.get('date') ? this.get('date') : " ",
      };
      this.sendAction('saveComment', params);
    }
  }
});
