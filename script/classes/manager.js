class Manager {
    constructor (lvl) {
        this.lvl = lvl;
        this.salary = this.getSalarySize();
        this.multiplier = this.getMultiplier();
    }

    getSalarySize () {
        switch (this.lvl) {
            case "rare":
                return 200;
            case "epic":
                return 800;
            case "legendary":
                return 2000;
        } 
    }

    getMultiplier () {
        switch (this.lvl) {
            case "rare":
                return 0.5;
            case "epic":
                return 0.7;
            case "legendary":
                return 1;
        }
    }
}

