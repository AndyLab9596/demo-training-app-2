
export interface Product {
    categoryId: string;
    id: string;
    name: string;
    color: string;
    price: number;
    description: string;
    createdAt?: number;
    updatedAt?: number;
    thumbNail: string;
}