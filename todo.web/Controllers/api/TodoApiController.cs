using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using todo.Web.Model;

namespace todo.web.Controllers.api
{
    public class TodoApiController : ApiController
    {
        // GET api/todoapi
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/todoapi/5
        public string Get(int id)
        {
            return "value";
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
            return todo;
        }
    }
}
