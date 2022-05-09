const {MongoClient} = require('mongodb');

/*async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = 'mongodb://localhost:27017';
 

    const client = new MongoClient(uri);
 
    /*try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}*/

const dbName = 'myshinynewdb';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection('user').find({}).toArray();

  console.log(collection);
  // the following code examples can be pasted here...

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/*
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    //database = client.db().admin().listDatabases();
    //console.log(database);
    console.log("Databases:");
    databasesList.databases.forEach(db => 
        db.forEach( user =>  
            console.log(` - ${user.nombre}`)
        )
    );
    
    
    /*databasesList.databases.forEach(db => 
        console.log(` - ${db.user}`)
    );
};*/
 