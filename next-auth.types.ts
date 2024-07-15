import type { DefaultSession } from "next-auth"

/** 
 * Extend the default types provided by `next-auth`.
 * Adds an `id` property to the `user` object within the
 * `Session` interface
 */ 
declare module "next-auth" {
  interface Session {
    user: DefaultSession['user'] & {
      id: string
    }
  }
}