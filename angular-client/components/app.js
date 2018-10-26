angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    itemsService.get()
      .then((result) => {
        this.items = result;
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
