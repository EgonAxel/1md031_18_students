
  new Vue({
    el: '#Burger_menu_div',
    data: {
      burgers: [
        new MenuItem(food[0]['name'], food[0]['price'], food[0]['kCal'], food[0]['lactose'], food[0]['gluten'], food[0]['img']),
        new MenuItem(food[1]['name'], food[1]['price'], food[1]['kCal'], food[1]['lactose'], food[1]['gluten'], food[1]['img']),
        new MenuItem(food[2]['name'], food[2]['price'], food[2]['kCal'], food[2]['lactose'], food[2]['gluten'], food[2]['img']),
]
}
})
new Vue({
    el: '#OrderButton',
    methods: {
        markDone: function() {
              console.log('Kliuckad');
        }
    }
});
