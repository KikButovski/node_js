class Developer {
    constructor(lvl) {
        this.lvl = lvl;
        this.salary = this.getSalarySize();
        this.linesCount = this.getLinesCodeCount();
    }
    getSalarySize() {
        switch (this.lvl) {
            case "junior": 
                return 200;
            case "middle":
                return 800;
            case "senior":
                return 2000;    
        }
    }

    getLinesCodeCount() {
        switch (this.lvl) {
            case "junior": 
                return 1000;
            case "middle":
                return 3000;
            case "senior":
                return 10000;    
        } 
    }
}


