export default class Character {
    constructor(){
       
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    setGender(gender){
        this.gender = gender;
    }
    getGender(){
        return this.gender;
    }
    setImage(image){
        this.image = image;
    }
    setupCanvas(context){
        context.fillStyle = "green";
        context.fillRect(10,10,150,100);
    }
    // isAnyoneThere(){

    // }
}