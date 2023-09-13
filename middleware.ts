export { default } from "next-auth/middleware"

// need to be logged in to access these pages
export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
};