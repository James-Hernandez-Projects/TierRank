/*
	In order to run NodeJS and the MongoDB Client need to be installed
	Also the uri needs slight modifications to connect to the database
*/
const {MongoClient} = require('mongodb');

async function main()
{

    const uri = "mongodb+srv://<username>:<password>@<clusterLocation>/test?retryWrites=true&w=majority";
   
    const client = new MongoClient(uri);

    try
{
        await client.connect();
        await createNewItem(client,
            {
				Name: "<itemName>",
				Price: 0.0,
				votes: 0
            }
        );
    }
	finally
	{
        await client.close();
    }
}
main().catch(console.error);

async function createNewItem(client, newItem){
    const result = await client.db("data").collection("items").insertOne(newItem);
    console.log(`New Item created with _id: ${result.insertedId}`);
}
