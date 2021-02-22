// Основная иерархия (абстракция)
class Pages {
  getContent() {}
  setTheme() {}
}

class About extends Pages {
  constructor(theme) {
    super();
    this.theme = theme;
  }

  getContent() {
    return "About page in " + this.theme.getColor();
  }
  setTheme(theme) {
    this.theme = theme;
  }
}

class Careers extends Pages {
  constructor(theme) {
    super();
    this.theme = theme;
  }

  getContent() {
    return "Careers page in " + this.theme.getColor();
  }
  setTheme(theme) {
    this.theme = theme;
  }
}

// Вспомогательная иерархия (реализация)
class Themes {
  getColor() {}
}

class DarkTheme extends Themes {
  constructor() {
    super();
  }
  getColor() {
    return "Dark Black";
  }
}

class LightTheme extends Themes {
  constructor() {
    super();
  }
  getColor() {
    return "Off white";
  }
}

class AquaTheme extends Themes {
  constructor() {
    super();
  }
  getColor() {
    return "Light blue";
  }
}

const darkTheme = new DarkTheme();
const lightTheme = new LightTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"

about.setTheme(lightTheme);
careers.setTheme(lightTheme);

console.log(about.getContent()); // "About page in Off white"
console.log(careers.getContent()); // "Careers page in Off white"
