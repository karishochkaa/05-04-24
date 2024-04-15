//Завдання 2
//Реалізуйте клас, що описує геометричну фігуру з властивостями та методами:
//■ get-властивість для отримання назви фігури;
//■ метод для виведення інформації про фігуру (сторони та їх довжина);
//■ метод для обчислення площі фігури;
//■ метод для обчислення периметра фігури.
//Реалізуйте класи-спадкоємці: квадрат, прямокутник, трикутник. Перевизначте методи виведення та обчислень у класах-спадкоємцях.
//Створіть масив з різними фігурами та виведіть інформаціюпро кожну з них, включаючи площу та периметр.

//отримання назви фігури
class GeometricFigure {
    constructor(nameFigure) {
      this.nameFigure = nameFigure;
    }
    getFigureInfo() {
      console.log(`Фігура ${this.nameFigure}`);
    }
  }
 //■ метод для виведення інформації про фігуру квадрат(сторони та їх довжина);
  class FigureSquare extends GeometricFigure {
    constructor(sideFigure) {
      super("Квадрат");
      this.sideFigure = sideFigure;
    }
    getFigureInfo() {
      super.getFigureInfo();
      return `Довжина сторін ${this.sideFigure}`;
    }
    //■ метод для обчислення площі фігури квадрат
    getSquareFigure() {
      return this.sideFigure * this.sideFigure;
    }
    //■ метод для обчислення периметра фігури квадрат
    getPerimeterFigure() {
      return 4 * this.sideFigure;
    }
  }
  //■ метод для виведення інформації про фігуру прямокутник(сторони та їх довжина);
  class FigureRectangle extends GeometricFigure {
    constructor(a, b) {
      super("Прямокутник");
      this.a = a;
      this.b = b;
    }
    getFigureInfo() {
      super.getFigureInfo();
      return `Сторони ${this.a} та ${this.b}`;
    }
    //■ метод для обчислення площі фігури прямокутник
    getSquareFigure() {
      return this.a * this.b;
    }
    //■ метод для обчислення периметра фігури прямокутник
    getPerimeterFigure() {
      return 2 * (this.a + this.b);
    }
  }
  //■ метод для виведення інформації про фігуру трикутник (сторони та їх довжина);
  class FigureTriangle extends GeometricFigure {
    constructor(a, b, c) {
      super("Трикутник");
      this.a = a;
      this.b = b;
      this.c = c;
    }
    getFigureInfo() {
      super.getFigureInfo();
      return `Сторони ${this.a}, ${this.b} та ${this.c}`;
    }
    //■ метод для обчислення площі фігури трикутник
    getSquareFigure() {
      return this.a * this.b * this.c;
    }
    //■ метод для обчислення периметра фігури трикутник
    getPerimeterFigure() {
      return this.a + this.b + this.c;
    }
  }
  // наповню класи значеннями сторонами
  const square1 = new FigureSquare(3);
  const rectangle1 = new FigureRectangle(3, 5);
  const triangle1 = new FigureTriangle(3, 4, 5);
 // виведення квадрату
  console.log(square1.getFigureInfo());
  console.log(square1.getPerimeterFigure());
  console.log(square1.getSquareFigure());
 // виведення прямокутника
  console.log(rectangle1.getFigureInfo());
  console.log(rectangle1.getPerimeterFigure());
  console.log(rectangle1.getSquareFigure());
 // виведення трикутника
  console.log(triangle1.getFigureInfo());
  console.log(triangle1.getPerimeterFigure());
  console.log(triangle1.getSquareFigure());
 //масив куди додаємо всі фігури 
const figuresArray = [];
figuresArray.push(square1, rectangle1, triangle1);
console.log(figuresArray);
//виводимо всі значення периметрів та площ фігур
figuresArray.forEach((figure) => {
  figure.getFigureInfo();
  console.log(`Площа: ${figure.getSquareFigure()}`);
  console.log(`Периметр: ${figure.getPerimeterFigure()}`);
});
