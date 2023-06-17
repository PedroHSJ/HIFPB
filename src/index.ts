import app from "./configs/app";
import { AppDataSource } from "./data-source";

const PORT = 3000;

AppDataSource.initialize()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    
})
.catch((error) => {
    console.error(error);
})
