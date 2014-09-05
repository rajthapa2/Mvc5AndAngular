using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using todo.Web.Model;
using MongoDB.Driver.Linq;

namespace todo.web.Controllers.api
{
    public class TodoApiController : ApiController
    {
        // GET api/todoapi
        public IEnumerable<Todo> Get()
        {
         
            const string connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);
            var server = client.GetServer();
            var database = server.GetDatabase("todoDB");
            var collection = database.GetCollection<Todo>("todos");

            var result = collection.FindAllAs<Todo>()
                .SetFields(Fields.Exclude("_id")).ToList();

            return result;
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
        public void Delete(int id)
        {
        }
        [HttpPost]
        public Todo Add(Todo todo)
        {
            const string connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);
            var server = client.GetServer();
            var database = server.GetDatabase("todoDB");
            var collection = database.GetCollection<Todo>("todos");

            var query = from e in collection.AsQueryable<Todo>() select e;
            var todos = query.ToList();
            return todo;
        }
    }
}
