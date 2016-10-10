/**
 * Created by Kyle on 10/9/16.
 */

Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  })
}

if (Meteor.isServer) {

}
