import { Role } from "./Role.model";

export class User {  
    constructor(public id: number,
                public alias: string,
                public firstName: string,
                public lastName: string,
                public email: string,
                public phoneNumber: string,
                public birthDate: string,
                public gender: string,
                public avatar: string,
                public password: string,
                public role: Role//,
               // token?: string
                ) {}
}