export class User {
    constructor(
        public _id: number = Math.floor(Math.random()*101),
        public first_name = "",
        public last_name = "",
        public email_name = "",
        public password = ""
    ){}
}
