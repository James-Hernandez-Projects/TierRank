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
        await createNewList(client,
            {
				List_Name: "<listName>",
				User: "<uniqueUsername>",
				Items: [],
				Likes: 0,
				Dislikes: 0,
				Description: "NaN"
				
            }
        );
    }
	finally
	{
        await client.close();
    }
}
main().catch(console.error);

async function createNewList(client, newList){
    const result = await client.db("data").collection("lists").insertOne(newList);
    console.log(`New list created with id: ${result.insertedId}`);
}
