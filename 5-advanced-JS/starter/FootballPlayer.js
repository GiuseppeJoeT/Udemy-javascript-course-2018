var FootballPlayer = function(name, yearProfessionaldebut, role, actualClub, actualValue) {
    this.name = name;
    this.yearProfessionaldebut = yearProfessionaldebut;
    this.role = role;
    this.actualClub = actualClub;
    this.actualValue = actualValue;
}

FootballPlayer.prototype.calculateExperienceYear = function() {
    console.log(2018 - this.yearProfessionaldebut);
};

FootballPlayer.prototype.lastName = this.lastname;

var steven = new FootballPlayer('Steven', 1998, 'midfielder', 'Liverpool FC', 'retired');
// add the .lastName property to the steven object
steven.lastName = 'Gerrard';

steven.calculateExperienceYear();
console.log(steven);
