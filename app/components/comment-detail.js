import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date:desc'],
  sortedComments: Ember.computed.sort('comments', 'sortDefinition'),

  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },

    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
