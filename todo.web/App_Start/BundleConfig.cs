using System.Web.Optimization;

namespace todo.web
{
    public class BundleConfig
    {
        public static void RegisterBundle(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/").IncludeDirectory("~/Scripts/", "*.js", true));
            bundles.Add(new StyleBundle("~/Content/").IncludeDirectory("~/Content/", "*.css", true));
        }
    }
}