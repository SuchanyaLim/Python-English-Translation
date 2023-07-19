
window.onload = function(){

    //get elements
    let answer_boxes = document.getElementsByClassName("mc_box");

    //should hide all answer boxes
	for (let box of answer_boxes){
        if (box.id == "mc_1") continue;
        box.style = "visibility: hidden";
    }
}

/*
    //should hide all check_answer buttons
	for (let button of check_buttons){
        if (button.id == "check_1") continue;
        button.classList.add("hidden");
    }

    //should disable all translation boxes except the first one
    //also add an event listener to see when something is entered into the box
	for (let line of translation_boxes){
        if (line.id != "engtrans_1") {
            line.firstElementChild.disabled = true;
        }
        line.addEventListener("click", () => {     //this event hides every answer when the student clicks into the current box
            
            let answerId = "answer_";
            for (let i=1; i<answer_boxes.length+1; i++) {
                let current = answerId+i;
                let answerBox = document.getElementById(current);
                if (!answerBox.classList.contains("hidden")) answerBox.classList.add("hidden");
            }
        });     //"onchange" works only if you hit enter or click anywhere else after typing :0
                //on the other hand, "onclick" makes it disappear immediately after clicking on the text box
                //Q: should we allow students to click on previous show answer buttons?
    }

    //add event listeners to all buttons
    for (let button of check_buttons) {
        button.addEventListener("click", ()=> {
            let id = button.id;
            let answerId = "answer_" + id[id.length-1];
            let currentTranslId = "engtrans_" + id[id.length-1];

            //check if student provided a translation
            let currentBox = document.getElementById(currentTranslId);
            if (currentBox.firstElementChild.value.length > 5) {
                //check if answer box is hidden
                let answerBox = document.getElementById(answerId);
                if (answerBox.classList.contains("hidden")) {
                    answerBox.classList.remove("hidden");
                }
                else {
                    //hide the answer box
                    answerBox.classList.add("hidden");
                }
                //enable the next line
                let nextBoxId = "engtrans_" + (parseInt(id[id.length-1])+1);
                let nextBox = document.getElementById(nextBoxId);
                if (nextBox != null) nextBox.firstElementChild.disabled = false;
                //enable next button
                let nextButtonId = "check_" + (parseInt(id[id.length-1])+1);
                let nextButton = document.getElementById(nextButtonId);
                if (nextButton != null) nextButton.classList.remove("hidden");
            }
            else {
                alert("Please try to think of an answer yourself first - enter some more substantial text");
            }
        });
    }
}

// VERSION 2 NONE
//only shows next box when prev is correct

window.onload = function(){

    //get element
    let dropdown = document.getElementsByClassName("mc_box");

    //should hide all answer boxes
	for (let box of dropdown){
        if (box.id == "mc_1") {
            continue;
        }
        box.classList.add("hidden");
        
        let someOtherName = box.getElementsByTagName("select");
        console.log(someOtherName[0]);
        someOtherName[0].addEventListener("change", () => {
            console.log("hi");
        });
    }

}

function thefunction(event) {
    console.log(event.target);
    let id = event.target.id;
    let answerId = "answer_" + id[(id.length)-1];
            
    //show answer if answer is entered in translation box
    let answerBox = document.getElementById(answerId);
    if (answerBox.classList.contains("hidden")) {
        answerBox.classList.remove("hidden");
    }   //else if answer shown and translation entered
    else { //hide answer
        answerBox.classList.add("hidden");
        let nextLineId = "engtrans_" + (parseInt(id[(id.length)-1])+1);
        let nextLine = document.getElementById(nextLineId);
        if (nextLine != null) {
            nextLine.firstElementChild.disabled = false;
        }
    }
}
*/