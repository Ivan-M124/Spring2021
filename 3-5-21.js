class Movie{
    constructor(title, rating, lengthOfTime, ageMinimum){
        this.title=title;
        this.rating=rating;
        this.lengthOfTime=lengthOfTime;
        this.ageMinimum=ageMinimum;
    }
getMovie(){
    return this.title + ", " + this.ageMinimum + ", " + this.lengthOfTime + ", " + this.rating;
    }
}
class Avengers extends Movie{getMovie(){
    return super.getMovie();
}

}
let movie1 = new Movie("Avengers", "9.5", "2h 24m", "14+ y.o");
    movie1.getMovie();


class augmentedReality extends Movie{constructor(threeDimensional){
this.threeDimensional= threeDimensional;
}
}
