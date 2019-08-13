export interface JwtI{
    dataUser:{
        id:number,
        user:string,
        email:string,
        accesToken:string,
        expiresIn:string
    }
}