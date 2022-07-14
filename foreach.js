const manufactors = ['Audi', 'BMW', 'Bugatti', 'Chevrolet', 'Ferrari', 'Lamborguini']

const callbackfunc = function(element, index, array) { return console.log(index, element)}

manufactors.forEach(callbackfunc)