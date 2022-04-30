//Instructions: In VS Code, or an IDE of your choice, write the code that 
//accomplishes the objectives listed below. Ensure that the code compiles
// and runs as directed. Take screenshots of the code and of the running 
//program (make sure to get screenshots of all required functionality) and 
//paste them in this document where instructed below. Create a new repository
// on GitHub for this week’s assignments and push this document, with your 
//JavaScript project code, to the repository. Add the URL for this week’s 
//repository to this document where instructed and submit this document to 
//your instructor when complete.
//Coding Steps:
//1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
//a.	Use at least one array.
//b.	Use at least two classes.
//c.	Your menu should have the options to create, view, and delete elements
class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    describe(){
        return `${this.name} is this color ${this.color}. `;
    }
}
class AnimalType {
    constructor (name) {
        this.name = name;
        this.animals = [];
    }
    addDesciption(animal){
        if (animal instanceof Animal){
            this.animals.push(animal);
        } else {
            throw new Error(`You can only add an instance of Animal. Argument is not an animal: ${animal}`);
        }
    }
    describe(){
        return `${this.name} type has ${this.animals.length} animals.`;
    }
}
class Menu{
    constructor(){
        this.types = [];
        this.selectedType = null;
    }
    start() {
        let selection = this.shownMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.createType();
                    break;
                case '2': 
                    this.viewType();
                    break;
                case '3': 
                    this.deleteType();
                    break;
                case '4': 
                    this.displayTypes();
                    break;
                default:
                    selection = 0;
            }
            selection = this.shownMainMenuOptions();
        }
        alert('Goodbye!');
    }
    shownMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new type of pet
        2) select pet type
        3) delete pet type
        4) view all pet types
        `);
    }
    showAnimalOptions(animalInfo){
        return prompt (`
        0) back
        1) create description
        2) delete description 
        -----------------------
        ${animalInfo}
        `);

    }

    displayTypes() {
        let animalString = '';
        for (let i = 0; i < this.types.length; i++){
            animalString+= i + ') ' + this.types[i].name + '\n';
        }
        alert(animalString);
    }
    createType(){
        let name = prompt('What kind of pet: ');
        this.types.push(new AnimalType(name));
    }
    viewType(){
        let index = prompt('Enter the index of the pet you wish to view:');
        if(index > -1 && index < this.types.length){
            this.selectedType = this.types[index];
            let description = 'Type of pet: ' + this.selectedType.name + '\n';

            for (let i= 0; i < this.selectedType.animals.length; i ++){
                description += i + ') name: ' + this.selectedType.animals[i].name 
                + ' - color: ' + this.selectedType.animals[i].color + '\n';
            }

            let selection = this.showAnimalOptions(description);
                switch (selection) {
                    case '1':
                        this.createDiscription();
                        break;
                    case '2':
                        this.deleteDiscription();
                
                
                }
        }
    }

    deleteType(){
        let index = prompt('Enter the index of the type of pet you wish to delete: ');
        if (index > -1 && index < this.types.length){
            this.types.splice(index, 1);
        }
    }

    createDiscription(){
        let name = prompt("Enter name for pet: ");
        let color = prompt('enter color of pet: ');
        this.selectedType.animals.push(new Animal(name, color));
    }

    deleteDiscription(){
        let index = prompt('Enter the index of the pet you wish to delete: ');
        if (index > -1 && index < this.selectedType.animals.length){
            this.selectedType.animals.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();