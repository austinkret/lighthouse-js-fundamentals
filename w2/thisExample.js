const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log('dog === this');
    }
    this.speak();
  }
};

const cat = {
  sound: 'meow',
  speak: function() {
    console.log(this.sound);
  },
  teachMeSomething: function() {
    if (cat === this) {
      console.log('cat === this');
    }
    this.speak();
  }
};

cat.teachMeSomething();
dog.teachMeSomething();