const handlers = (() => {
    function addWorker(type, lvl) {
        fetch(`${document.location.href}${type}`, {
            method: "post",
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lvl :lvl})
        })
    }

    function deleteWorker(type, lvl) {
        fetch(`${document.location.href}${type}`, {
            method: "delete",
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lvl :lvl})
        })
    }

    function lvlChange(oldLvl, lvl) {
        fetch(`${document.location.href}developers/${oldLvl}`, {
            method: "put",
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lvl :lvl})
        })
    }

    return {
        addDeveloper() {
            document.querySelector("#add-junior").onclick = () => {
                workers.developers.juniors.push(new Developer("junior"));
                document.querySelector("#juniors-cound").innerText = workers.developers.juniors.length;
                addWorker("developers", "junior");
            }
            
            document.querySelector("#add-middle").onclick = () => {
                workers.developers.middles.push(new Developer("middle"));
                document.querySelector("#middles-cound").innerText = workers.developers.middles.length;
                addWorker("developers", "middle");
            }
            
            document.querySelector("#add-senior").onclick = () => {
                workers.developers.seniors.push(new Developer("senior"));
                document.querySelector("#seniors-cound").innerText = workers.developers.seniors.length;
                addWorker("developers", "senior");
            }

        },

        addManager() {
            document.querySelector("#add-rare-manager").onclick = () => {
                workers.managers.rare.push(new Manager("rare"));
                document.querySelector("#rare-cound").innerText = workers.managers.rare.length;
                addWorker("managers", "rare");
            }
            
            document.querySelector("#add-epic-manager").onclick = () => {
                workers.managers.epic.push(new Manager("epic"));
                document.querySelector("#epic-cound").innerText = workers.managers.epic.length;
                addWorker("managers", "epic");
            }
            
            document.querySelector("#add-legendary-manager").onclick = () => {
                workers.managers.legendary.push(new Manager("legendary"));
                document.querySelector("#legendary-cound").innerText = workers.managers.legendary.length;
                addWorker("managers", "legendary");
            }
        },

        addProject() {
    
            document.querySelector("#easy").onclick = () => {
                start(new Project("easy"))
            }
            
            document.querySelector("#normal").onclick = () => {
                start(new Project("normal"))
            }
            
            document.querySelector("#hard").onclick = () => {
                start(new Project("hard"))
            }
          
        },

        deleteDeveloper() {
            const lvlDeveloper = document.querySelector("#lvlDeveloper");
            document.querySelector("#deleteDeveloper").onclick = () => {
                deleteWorker("developers", lvlDeveloper.value);
            }
        },

        deleteManager() {
            const lvlManager = document.querySelector("#lvlManager");
            document.querySelector("#deleteManager").onclick = () => {
                deleteWorker("managers", lvlManager.value); 
            }
        },

        lvlDeveloperChange() {
            const oldLvl = document.querySelector("#oldLvl");
            const lvl = document.querySelector("#newLvl");
            document.querySelector("#lvlChange").onclick = () => {
                lvlChange(oldLvl.value, lvl.value);
            }
        }
    }
})()