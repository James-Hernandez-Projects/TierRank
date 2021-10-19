/*
	In order to run NodeJS and the MongoDB Client need to be installed
	Also the uri needs slight modifications to connect to the database
*/
const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://<username>:<password>@<clusterLocation>/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try
{
        await client.connect();
        await userExists(client, "<newUniqueUsername>");
        await deleteExistingUser(client, "<newUniqueUsername>");
        await userExists(client, "<newUniqueUsername>");

    }
	finally 
	{
        await client.close();
    }
}

main().catch(console.error);

async function deleteExistingUser(client, userName) {
    const result = await client.db("data").collection("users").deleteOne({ username: userName });
    console.log(`${result.deletedCount} user was deleted.`);
}

async function userExists(client, userName) {
    const result = await client.db("data").collection("users").findOne({ username: userName });

    if (result)
	{
		console.log(`Found and deleted user in collection 'users' with the username '${userName}'`);
	}
	else 
	{
        console.log(`No user found with the username '${userName}'`);
    }
}
