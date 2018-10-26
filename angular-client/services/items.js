angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.get = () => {
      return $http.get('https://api.punkapi.com/v2/beers/', {
        'x-ratelimit - limit': 10,
        'x - ratelimit - remaining': 15,
      }).then(({ data }) => { return data; });
    };
    // this.getAll = (callback) => {
    //   $http.get('/items')
    //     .then(({ data }) => {
    //       if (callback) {
    //         callback(data);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  });
