var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    firstNumber: 0,
    secondNumber: 0,
    thirdNumber: 0,
    sum: 0,
    fruits: ["apple", "banana", "cantaloupe"],
    newFruit: "",
    showImage: false
  },
  methods: {
    computeTheSum: function() {
      this.sum = parseInt(this.firstNumber) + parseInt(this.secondNumber) + parseInt(this.thirdNumber);
    },
    createFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
    toggleImage: function() {
      // if (this.showImage === true) {
      //   this.showImage = false;
      // } else {
      //   this.showImage = true;
      // }
      this.showImage = !this.showImage;
    }
  }
});
