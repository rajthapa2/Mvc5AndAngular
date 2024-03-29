﻿using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace todo.web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapHttpRoute(
                "DefaultApi",
                "api/{controller}/{action}"
               );

            routes.MapRoute("Default", "{controller}/{action}/{id}",
                new {controller = "Todo", action = "Index", id = UrlParameter.Optional}
                );
        }
    }
}