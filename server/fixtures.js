if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Name of the book',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
    title: 'Something',
    url: 'http://themeteorbook.com'
  });
}
