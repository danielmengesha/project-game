


class User{
    constructor(language){
        this.language = language;
        if (this.language == undefined){
            this.language = this.detectLanguage();
        }
        this.wellCome();
    }
    detectLanguage(){
        if (!navigator) {
            return null;
        }
 
        switch (navigator.language) {
            case 'en-US':
                return 'en';
                break;
        }
 
        return 'de';
    }
    
   wellCome(){
    if (this.language == 'en') {
        document.getElementById('willkommen').innerHTML = 'Welcome to my Game';
    } else if(this.language == 'de') {
        document.getElementById('willkommen').innerHTML = 'Willkommen auf meine Spielseite';
    } else {
        document.getElementById('willkommen').innerHTML = 'Welcome to my Game';
    }

}
}

let userOne = new User();

