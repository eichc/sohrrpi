import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'


export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            //make a prop variable to store a list of CourseProps that the user saves. Course List page will update the prop variable based on courses they want saved
            name: "Credentials", 
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "your-cool-email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your awesome password"
                }
            },
            async authorize(credentials) {
                // THIS IS WHERE WE NEED TO RETRIEVE USER DATA
                // TO VERIFY WITH CREDENTIALS
                // DOCS https://next-auth.js.org/configuration/providers/credentials

                const user = { id: "42", name: "Emmanuel", email: "usmane@rpi.edu", password: "next-auth"}
                const guest = {id: "42", name: "SOHR", email: "rpi", password: "abc123"}

                if (credentials?.username === user.name && credentials?.email === user.email && credentials?.password === user.password) {
                    return user                  
                } else if (credentials?.username === guest.name && credentials?.email === guest.email && credentials?.password === guest.password) {
                    return guest
                } else {
                    return null
                }
            }
        })
    ],
    
}