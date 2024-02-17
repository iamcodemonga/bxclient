import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

const api = process.env.API_ROOT;

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "username", type: "text", placeholder: "input your username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { username, password } = credentials as { username: string, password: string };
                try {
                    const user = await axios.post(`${api}/auth/login`, { username, password });
                    console.log(user.data.user)
                    if (user.data.error) {
                        throw new Error(user.data.message)
                    }
                    return user.data.user;
                } catch (error) {
                    console.log(error)
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        newUser: "/account"
    },
}