import { User } from "@/types/entities/user";

export interface RootState {
    version: string;
}

export interface AuthState {
    user: User | null;
}
