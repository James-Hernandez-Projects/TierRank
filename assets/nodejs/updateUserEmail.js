/*
 This will contain functions strictly pertaining to only modifying existing user's email from the "users"
 collection of the database
*/
const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://<username>:<password>@<clusterLocation>/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try
{
        await client.connect();
        await findUserFromEmail(client, "<uniqueEmail.com>");
        await updateEmail(client, "<uniqueEmail.com>", { email: "<newUniqueEmail.com>"});
        await findUserFromEmail(client, "<uniqueEmail.com>");
		await findUserFromEmail(client, "<newUniqueEmail.com>");
    }
	finally
	{
        await client.close();
    }
}

main().catch(console.error);

async function updateEmail(client, userEmail, newUserEmail) {
    const result = await client.db("data").collection("users").updateOne({ email: userEmail }, { $set: newUserEmail });

    console.log(`${result.matchedCount} emails found.`);
    console.log(`${result.modifiedCount} email was updated.`);
}

async function findUserFromEmail(client, userEmail) {
    const result = await client.db("data").collection("users").findOne({ email: userEmail });

    if (result) {
        console.log(`Found user with email '${userEmail}':`);
        console.log(result);
    } else {
        console.log(`No user found with the email '${userEmail}'`);
    }
}
