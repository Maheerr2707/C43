class Form {

  constructor() {
    this.input = createInput("Name");
    this.question = createInput("Questions")
    this.answer1 = createInput("Answer1")
    this.answer2 = createInput("Answer2")
    this.answer3 = createInput("Answer3")
    this.answer4 = createInput("Answer4")
    this.correctAns = createInput("Correct Answer")
    this.button = createButton('Play');
    this.subQues = createButton("Submit")
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Questions/Ans");
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(50,50);
    this.button.position(50,100)

    this.button.mousePressed(()=>{ 
      this.button.hide();
      this.input.hide();
      player.name = this.input.value();
      this.greeting.html("Hello " + this.input.value())
      this.greeting.position(200,200);
      this.displayQuestion();
    });
  }

  displayQuestion(){
    this.subQues.position(300,300)
    this.question.position(50,80);
    this.answer1.position(150,80);
    this.answer2.position(150,110);
    this.answer3.position(150,140);
    this.answer4.position(150,180);
    this.correctAns.position(25,20);
  }
}
