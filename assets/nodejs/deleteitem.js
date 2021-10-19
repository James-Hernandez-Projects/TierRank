
const {MongoClient} = require('mongodb'); 
 

async function main()
{
const uri = "mongodb+srv://<username>:<password>@<clusterLocation>/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

try
{
    await client.connect();
    await deleteitems(client,{Name:"test"});
}
finally
{
    await client.close();
}
}
main().catch(console.error);

async function deleteitems(client, oldItem){
const result = await client.db("data").collection("items").deleteOne(oldItem);
console.log(`Old Item Deleted`);
}