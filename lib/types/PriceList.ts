export interface PriceList {
    title: string
    list: PriceElement[];
}

interface PriceElement {
    name: string;
    desc?: string;
    price: string;
}