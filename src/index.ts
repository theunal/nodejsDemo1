import "reflect-metadata";
import app from "./app";
import { context } from "./DataAccess/context";

const main = async () => {
    try {
        await context.initialize();
        console.log('database connected')
        app.listen(7077)
        console.log('server listening ')
    }
    catch (err) {
        console.log(err)
    }
}

main()