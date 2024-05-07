import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number

    
}

const connection:ConnectionObject={

}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("already connected to data base")
        return;
    }
    try{
      const db=  await mongoose.connect(process.env.MONGO_URI || "",{});
      console.log(db);
      connection.isConnected=  db.connections[0].readyState

      console.log("Db connection succesfully")
    }
    catch(e){
        console.log(e);
        process.exit(1)
    }
}

export default dbConnect;