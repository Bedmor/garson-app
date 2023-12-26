import Credentials from "next-auth/providers/credentials";

export const options = {
    jwt: false,
    secret:"yarrak",
    pages: {
        signIn: "/login",
        signOut: "/logout",
    },
    callbacks: {
        session(session, user) {
            return session
        }
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "userame" },
                password: { label: "Password", type: "password", placeholder: "password" },
            },
            async authorize(credentials) {
                const user = { username: "admin", password: "admin" }
                if (credentials.username === user.username && credentials.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })]
}