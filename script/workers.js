var workers = (() => {
    return {
        developers: {
            juniors:[],
            middles:[],
            seniors:[]
        }, 
        managers: {
            rare: [],
            epic: [],
            legendary: []
        },
    };
})()

fetch(`${document.location.href}developers`, {method: "get"})
    .then((result) => {
        return  result.json();
    })
    .then((result) => {
        result.forEach(element => {
            switch (element.lvl) {
                case "junior":
                    workers.developers.juniors.push(element); 
                    break;
                case "middle":
                    workers.developers.middles.push(element);
                    break;
                case "senior":
                    workers.developers.seniors.push(element);
                    break;
            }
        });
        document.querySelector("#juniors-cound").innerText = workers.developers.juniors.length;
        document.querySelector("#middles-cound").innerText = workers.developers.middles.length;
        document.querySelector("#seniors-cound").innerText = workers.developers.seniors.length;
    })

fetch(`${document.location.href}managers`, {method: "get"})
    .then((result) => {
         return  result.json();
    })
    .then((result) => {
        result.forEach(element => {
            switch (element.lvl) {
                case "rare":
                    workers.managers.rare.push(element); 
                    break;
                case "epic":
                    workers.managers.epic.push(element);
                    break;
                case "legendary":
                    workers.managers.legendary.push(element);
                    break;
            }
        });
        document.querySelector("#rare-cound").innerText = workers.managers.rare.length;
        document.querySelector("#epic-cound").innerText = workers.managers.epic.length;
        document.querySelector("#legendary-cound").innerText = workers.managers.legendary.length;
    })
