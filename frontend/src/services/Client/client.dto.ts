export type ClientCreate = {
    name: string;
    email: string;
    phone: string;
    x: number;
    y: number;
}

export type Client = {
    id: string;
    name: string;
    email: string;
    phone: string;
    coordinates: Coordinates;
}

type Coordinates = {
    x: string;
    y: string;
}