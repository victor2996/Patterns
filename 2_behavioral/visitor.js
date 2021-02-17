class Movie {
  accept(visitor) {
    visitor(this);
  }
}

class Superman extends Movie {
  info() {
    return 'movie is "Superman"';
  }
}
class Batman extends Movie {
  info() {
    return 'movie is "Batman"';
  }
}
class Aquaman extends Movie {
  info() {
    return 'movie is "Aquaman"';
  }
}

function movieVisitor(movie) {
  if (movie instanceof Superman)
    movie.choice = console.log(`selected ${movie.info()}`);
  if (movie instanceof Batman)
    movie.choice = console.log(`selected ${movie.info()}`);
  if (movie instanceof Aquaman)
    movie.choice = console.log(`selected ${movie.info()}`);
}

const superman = new Superman();
const batman = new Batman();
const aquaman = new Aquaman();

superman.accept(movieVisitor);
batman.accept(movieVisitor);
aquaman.accept(movieVisitor);
