export enum role {Admin , Parent , KinderGarten , Visiteurs}
export class User {
    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public userName:string,
        public password:string,
        public role : role 
    ){}
}