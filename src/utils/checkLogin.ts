type UserType = {
    email: string,
    password: string,
}
type ResponseUserType = {
    email: string,
    password: string,
    id: number
}
type ResponseArrayType = {
    email: string,
    password: string,
    id: number
}[]

export const checkLogin = (user:UserType, responseArray:ResponseArrayType) => {
    const usr = responseArray.filter((item:ResponseUserType) => item.email === user.email)
    return usr[0].email
}