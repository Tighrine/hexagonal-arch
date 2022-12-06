export interface User {
    id: number
    name: string
    email: string
    group: string
    password: string
    updatedAt: Date
    Addresses: Address[]
}

export interface Address {
    id: number
    address: string
    city: string
    state: string
    zip: string
    country: string
    updatedAt: Date
    user: User
}