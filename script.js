const state = {

    equation: "2x + 5 = 15",
    variable: "x",
    steps: [],
    stats:{solved: 0, streak: 0, correct: 0, attempts: 0}
};

function create(){
    document.getElementById("current-equation").textContent = state.equation;
    document.getElementById("variable-value").textContent = state.variable;
    document.getElementById("empty-equation").textContent = state.equation;
    document.getElementById("empty").hidden = state.steps.length > 0;
}

document.getElementById("first-step").addEventListener("click", () => {
    console.log("TODO: add first step input");
})
;

document.getElementById("next-step").addEventListener("click", () => { console.log("TODO: add next step input");
});

create();
lucide.createIcons()