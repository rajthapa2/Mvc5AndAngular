using System.Runtime.InteropServices;
using MongoDB.Driver;

namespace ClassLibrary1
{
    public class MongoAgent
    {
        string connectionString = "";
        var client = new MongoClient(connectionString);
    }
}
