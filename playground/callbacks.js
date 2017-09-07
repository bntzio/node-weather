var getUser = (id, callback) => {
  var user = {
    id,
    name: 'Enrique'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(4, (user) => {
  console.log(user);
});
