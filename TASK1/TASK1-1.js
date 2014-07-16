

var Dog = function( name ) {
  this.name = name
}

Dog.prototype.bark = function() {
  console.log( this.name )
}

var ralph = new Dog('Ralph')

ralph.bark()

setTimeout( ralph.bark() , 1000 )//function bark wasnt called. using bark() makes it call the second time
