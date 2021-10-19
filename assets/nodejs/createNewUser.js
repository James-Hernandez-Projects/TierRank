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
        await createNewUser(client,
            {
				username: "<uniqueUsername>",
				email: "<uniqueEmail.com>",
				password: "<passwordhere>",
                Lists: [],
				Votes: []
            }
        );
    } finally{
        await client.close();
    }
}

main().catch(console.error);

async function createNewUser(client, newUser){
    const result = await client.db("data").collection("users").insertOne(newUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}
