export interface Student {
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: string,
    mobile: string,
    email: string,
    address: Address
}

export interface Address {
    country: Country,
    state: State,
    city: City
}

export interface Country {
    id?: number,
    name: string
}

export interface State {
    id?: number,
    name: string,
    cId?: number
}

export interface City {
    id?: number,
    name: string,
    sId?: number
}