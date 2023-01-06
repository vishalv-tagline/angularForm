export interface Studs {
    fname: string,
    lname: string,
    gender: string,
    address: Address
    mobile: string,
    email: string
}

export interface Address {
    // country: Country,
    country: Country,
    state: State,
    city: City
}

export interface Country {
    id: number,
    name: string
}

export interface State {
    id: number,
    name: string,
    cId: number
}

export interface City {
    id: number,
    name: string,
    sId: number
}