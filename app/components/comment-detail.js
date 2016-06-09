import Ember from 'ember';

export default Ember.Component.extend({
  //sort using timestamp to show most recent answers
  sortDefinition: ['date:desc'],
  sortedComments: Ember.computed.sort('comments', 'sortDefinition'),
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },

    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
