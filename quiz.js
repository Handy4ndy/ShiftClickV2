let score = 0;

let username = document.getElementById("Name")

let quiz = document.forms.Quiz.elements;

function checkAnswers() {
    /*let score = 10
    alert("well done your score was" + score)
*/
    let score = 0;

    quiz = document.forms.Quiz.elements;

    answer1 = quiz.codelength.value

    if (answer1 == "04") {

        score = score + 1;
    }

    answer2 = quiz.start.value

    if (answer2 == "02") {

        score = score + 1;
    }

    alert(`well done ${username.value} your score was ${score}`)
}

