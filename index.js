let cats = []; // Declare the array globally so it can be accessed throughout the test file.

beforeEach(function () {
  cats.length = 0; // Reset the array before each test
  cats.push("Milo", "Otis", "Garfield"); // Initial array setup
});

// Destructive method example: Appending a cat to the end
function destructivelyAppendCat(name) {
  cats.push(name); // This mutates the original cats array
}

// Nondestructive method example: Appending a cat to the end
function appendCat(name) {
  return [...cats, name]; // This returns a new array, leaving the original unchanged
}

// Destructive method example: Prepending a cat to the beginning
function destructivelyPrependCat(name) {
  cats.unshift(name); // This mutates the original cats array
}

// Nondestructive method example: Prepending a cat to the beginning
function prependCat(name) {
  return [name, ...cats]; // This returns a new array, leaving the original unchanged
}

// Destructive method example: Removing the last cat
function destructivelyRemoveLastCat() {
  cats.pop(); // This mutates the original cats array
}

// Nondestructive method example: Removing the last cat
function removeLastCat() {
  return cats.slice(0, cats.length - 1); // This returns a new array, leaving the original unchanged
}

// Destructive method example: Removing the first cat
function destructivelyRemoveFirstCat() {
  cats.shift(); // This mutates the original cats array
}

// Nondestructive method example: Removing the first cat
function removeFirstCat() {
  return cats.slice(1); // This returns a new array, leaving the original unchanged
}

describe("Array functions", function () {
  it("destructively appends a cat to the end of the cats array", function () {
    destructivelyAppendCat("Bella");
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield", "Bella"]);
  });

  it("nondestructively appends a cat to the end of the cats array", function () {
    const newCats = appendCat("Luna");
    assert.deepEqual(newCats, ["Milo", "Otis", "Garfield", "Luna"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); // Original array should not be modified
  });

  it("destructively prepends a cat to the beginning of the cats array", function () {
    destructivelyPrependCat("Tom");
    assert.deepEqual(cats, ["Tom", "Milo", "Otis", "Garfield"]);
  });

  it("nondestructively prepends a cat to the beginning of the cats array", function () {
    const newCats = prependCat("Jerry");
    assert.deepEqual(newCats, ["Jerry", "Milo", "Otis", "Garfield"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); // Original array should not be modified
  });

  it("destructively removes the last cat from the cats array", function () {
    destructivelyRemoveLastCat();
    assert.deepEqual(cats, ["Milo", "Otis"]);
  });

  it("nondestructively removes the last cat from the cats array", function () {
    const newCats = removeLastCat();
    assert.deepEqual(newCats, ["Milo", "Otis"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); // Original array should not be modified
  });

  it("destructively removes the first cat from the cats array", function () {
    destructivelyRemoveFirstCat();
    assert.deepEqual(cats, ["Otis", "Garfield"]);
  });

  it("nondestructively removes the first cat from the cats array", function () {
    const newCats = removeFirstCat();
    assert.deepEqual(newCats, ["Otis", "Garfield"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); // Original array should not be modified
  });
});
