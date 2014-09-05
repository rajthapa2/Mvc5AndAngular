using System;
using System.Runtime.Serialization;
using System.Xml.Serialization;
using MongoDB.Bson;

namespace todo.Web.Model
{
    
    public class Todo
    {
//       public ObjectId Id { get; set; }
//
//        [DataMember]
//        public string MongoId
//        {
//            get { return Id.ToString(); }
//            set { Id = ObjectId.Parse(value); }
//
//        }
        
        public string Text { get; set; }
        public bool Done { get; set; }
    }
}