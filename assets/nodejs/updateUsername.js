/*
 This will contain functions strictly pertaining to only modifying existing user's usernames from the "users"
 collection of the database
*/
const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://<username>:<password>@<clusterLocation>/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try
{
        await client.connect();
        await findUserFromUsername(client, "<uniqueUsername>");
        await updateUsername(client, "<uniqueUsername>", { username: "<newUniqueUsername>"});
        await findUserFromUsername(client, "<uniqueUsername>");
		await findUserFromUsername(client, "<newUniqueUsername>");
    }
	finally
	{
        await client.close();
    }
}

main().catch(console.error);

async function updateUsername(client, nameOfUser, newUsername) {
    const result = await client.db("data").collection("users").updateOne({ username: nameOfUser }, { $set: newUsername });

    console.log(`${result.matchedCount} users found.`);
    console.log(`${result.modifiedCount} username was updated.`);
}

async function findUserFromUsername(client, nameOfUser) {
    const result = await client.db("data").collection("users").findOne({ username: nameOfUser });

    if (result) {
        console.log(`Found user with name '${nameOfUser}':`);
        console.log(result);
    } else {
        console.log(`No user found with the name '${nameOfUser}'`);
    }
}
