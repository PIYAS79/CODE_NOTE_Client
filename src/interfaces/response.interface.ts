


export type Error_Type = {
    data:{
        message:string,
        stack:string,
        success:boolean
    },
    status:number
}

export type Response_Type = {
    data?:any,
    error?:Error_Type
}