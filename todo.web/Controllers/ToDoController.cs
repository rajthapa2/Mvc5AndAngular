using System.Web.Mvc;

namespace todo.web.Controllers
{
    public class ToDoController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}