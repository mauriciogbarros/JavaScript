var weekCalories = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
    idealDailyCalories: 0,
    totalCalories: 0,
    
    setDayCalories: function(day) {
        calories = Number(prompt("How many calories on " + day + ": "));
        switch(day) {
            case 'monday':
                this.monday = calories;
                return this.monday;
                break;
            case 'tuesday':
                this.tuesday = calories;
                return this.tuesday;
                break;
            case 'wednesday':
                this.wednesday = calories;
                return this.wednesday;
                break;
            case 'thursday':
                this.thursday = calories;
                return this.thursday;
                break;
            case 'friday':
                this.friday = calories;
                return this.friday;
                break;
            case 'saturday':
                this.saturday = calories;
                return this.saturday;
                break;
            case 'sunday':
                this.sunday = calories;
                return this.sunday;
        }
    },

    getTotalCalories: function() {
        this.totalCalories += this.setDayCalories('monday');
        this.totalCalories += this.setDayCalories('tuesday');
        this.totalCalories += this.setDayCalories('wednesday');
        this.totalCalories += this.setDayCalories('thursday');
        this.totalCalories += this.setDayCalories('friday');
        this.totalCalories += this.setDayCalories('saturday');
        this.totalCalories += this.setDayCalories('sunday');
        return this.totalCalories;
    },

    getIdealCalories: function() {
        this.idealDailyCalories = Number(prompt("What is the ideal daily calories: "));
        return this.idealDailyCalories * 7;
    }
}


function calculateHealthPlan() {
    actualCalories = weekCalories.getTotalCalories();
    idealCalories = weekCalories.getIdealCalories();

    if (actualCalories == idealCalories) {
        console.log("You ate just the right amount of food.");
    } else if (actualCalories > idealCalories) {
        console.log("Time to head to the gym.");
    } else {
        console.log("Time for seconds.");
    }
}

calculateHealthPlan();
