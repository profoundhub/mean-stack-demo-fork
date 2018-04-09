export class User {
<<<<<<< HEAD
    id: string;
=======
>>>>>>> 9aa19f6ae7be26ba7264a84d2983749afe234a6e
    constructor(
        public _id: number = Math.floor(Math.random() * 101),
        public first_name: string = '',
        public last_name: string = '',
        public email: string = '',
        public password: string = ''
    ) {}
}
