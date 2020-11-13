
  new Vue({
    el: '#Burger_menu_div',
    data: {
      burgers: [
        new MenuItem('Basic Burger', '130', '410', true, true, 'https://hankstruebbq.se/wp-content/uploads/2019/06/Smash_burgers.jpg'),
        new MenuItem('Veggo Burger', '130', '390', false, false, 'https://static01.nyt.com/images/2020/01/22/dining/jo-black-bean-burgers/merlin_167531589_227b9414-ffad-4b44-ae53-67483bd2bae5-articleLarge.jpg',),
        new MenuItem('BBQ Burger', '160', '590', true, true, 'https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg')
      ],

}
})
