import { User } from "./User";

export interface Review{
    id: number;
    rate: number;
    content: string;
    userId: number;
    user: User;
}