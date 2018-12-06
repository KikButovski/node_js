let start = (project) => {
    let manager;
    switch (project.lvl) {
        case "easy":
            manager = workers.managers.rare.pop();
            break;
        case "normal":
            manager = workers.managers.epic.pop();
            break;
        case "hard":
            manager = workers.managers.legendary.pop();
            break; 
    }
    if (!manager) {
        alert("Нет подходящих менеджеров");
        return;
        
    } 
    let juniorsOnProject = document.querySelector("#junior-number-on-project").value;
    let middlesOnProject = document.querySelector("#middle-number-on-project").value;
    let seniorsOnProject = document.querySelector("#senior-number-on-project").value;
    
    let budget = document.querySelector("#budget");
    let count = juniorsOnProject * 1000 + middlesOnProject * 3000 + seniorsOnProject * 10000;
    count *= manager.multiplier;
    let allSalarySize = juniorsOnProject * 200 + middlesOnProject * 800 + seniorsOnProject * 2000;
    if (((workers.developers.juniors.length - juniorsOnProject) >= 0) && ((workers.developers.middles.length - middlesOnProject) >= 0) && ((workers.developers.seniors.length - seniorsOnProject) >= 0)) {
        
        let div = document.createElement("div");
    
        let timerId = setInterval(() => {
            project.linesCount -= count;
            div.innerHTML = "<p>Проект в процессе</p> <p>Осталось строк:</p>" + project.linesCount;
            document.body.appendChild(div);
            budget.innerText -= allSalarySize;
            if (project.linesCount <= 0){
                clearTimeout(timerId);
                alert("Проект завершен");
                budget.innerText = +budget.innerText + project.cost;
                div.innerHTML = "";
                
                switch (project.lvl) {
                    case "easy":
                        workers.managers.rare.push(manager);
                        break;
                    case "normal":
                        workers.managers.epic.push(manager);
                        break;
                    case "hard":
                        workers.managers.legendary.push(manager);
                        break; 
                }
            }

        }, 2000);
    }



}