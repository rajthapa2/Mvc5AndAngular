using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using todo.Web.Model;

namespace todo.web.Controllers.api
{
    public class TodoApiController : ApiController
    {
        // GET api/todoapi
        public IEnumerable<Todo> Get()
        {
            var collection = MongoCollection();

            var result = collection.FindAllAs<Todo>().SetFields(Fields.Exclude("_id")).ToList();

            return result;
        }

        private static MongoCollection<Todo> MongoCollection()
        {
            const string connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);
            var server = client.GetServer();
            var database = server.GetDatabase("todoDB");
            var collection = database.GetCollection<Todo>("todos");
            return collection;
        }

        // POST api/todoapi
        public void Post([FromBody]string value)
        {
        }

        // PUT api/todoapi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/todoapi/5
        [HttpPost]
        public string Delete(Todo todo)
        {
            var collection = MongoCollection();
            var bulk = collection.InitializeOrderedBulkOperation();
            bulk.Find(Query.EQ("Text", todo.Text)).RemoveOne();
            bulk.Execute();
            return "done";
        }

        [HttpPost]
        public string Add(Todo todo)
        {
            const string connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);
            var server = client.GetServer();
            var database = server.GetDatabase("todoDB");
            var collection = database.GetCollection<Todo>("todos");

            collection.Insert(todo);
            return "done";
        }
    }
}
