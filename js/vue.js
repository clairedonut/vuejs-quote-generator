Vue.use(VueSmoothScroll)

var header = new Vue({
  el: 'header',
  data: {
    title: 'Pug4Life',
    icon: './img/pug-icon.png',
    introduction: '#littlepugjokes',
    link: '#app',
    show: true,
    cls: 'infinite animated bounce',
    styleCursor: {'cursor': 'pointer'}
  },
  methods: {
    animated: function() {
      this.cls = false
    }
  }
})

var app = new Vue ({
  el: '#app',
  data: {
    guideline: 'Click the button below to get a joke!',
    button: 'Get a Joke!',
    quotes: [
      'A user interface is like a joke. If you have to explain it, it’s not that good.',
      'What\'s the object-oriented way to become wealthy? Inheritance' ,
      'Why did the programmer quit his job? Because he didn\'t get arrays ',
      'What do computers and air conditioners have in common? They both become useless when you open windows.',
      'Real programmers count from 0',
      'Chuck Norris writes code... that optimizes itself!',
      'Chuck Norris can take a screenshot of his blue screen.',
      '3 Database SQL walked into a NoSQL bar, and walk right out. Because they couldn\'t find a table',
      'The programmer got stuck in the shower because the instructions on the shampoo bottle said... "Lather, Rinse, Repeat." ',
      'A SQL query goes into a bar, walks up to two tables and asks... "Can I join you?"',
      '["hip","hip"] (hip hip array!)'
    ],
    styleQuote: {
      height: '',
      backgroundColor: '',
    }
  },
  methods: {
    shuffle: function() {
      this.quotes = _.shuffle(this.quotes),
      this.images = _.shuffle(this.images)
    }
  }
}) // END VUE
