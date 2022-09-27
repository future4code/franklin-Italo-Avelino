import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("Unexpected error")
    }
})

export default app