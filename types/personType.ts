export interface Person {
    cell : string;
    dob : Dob;
    email : string;
    gender : string;
    id : Id;
    nat : string;
    phone : string;
    name : Name;
    location : Location;
    login : Login;
    picture : Picture;
    registered : {
        age : number;
        date : string;
    }
}

export interface Dob {
    age : number;
    date : string;
}

export interface Id {
    name : string; 
    value : string;
}

export interface Location {
    city : string;
    coordinates : {
        latitude : string;
        longitude : string;
    };
    country : string;
    postcode : number;
    state : string;
    street : {
        number : number;
        name : string;
        timezone : {
            description : string;
            offset : string;
        };
    };
}

export interface Login {
    md5 : string;
    password : string;
    salt : string;
    sha1 : string;
    sha256 : string;
    username : string;
    uuid : string;
}

export interface Name {
    first : string;
    last : string;
    title : string;
}

export interface Picture {
    large : string;
    medium : string;
    thumbnail : string;
}