using System.Collections.Generic;
using Xamarin.Forms;

namespace GetSDone
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new GetSDonePage();
        }

        protected override void OnStart()
        {
            LoadData();
        }

        protected override void OnSleep()
        {
            // Save data 
            GetSDonePage page = MainPage as GetSDonePage;

            var result = "";
            foreach (Todo todo in page.Todos)
            {
                result += "\n";

                var backgroudcolor = todo.BackgroundColorForReal.R + ";" + todo.BackgroundColorForReal.G + ";" + todo.BackgroundColorForReal.B;
                var foregroudcolor = todo.ForegroundColor.R + ";" + todo.ForegroundColor.G + ";" + todo.ForegroundColor.B;
                result += todo.Text + "|" + backgroudcolor + "|" + foregroudcolor;



            }
            result = result.Substring(1);
            Properties["data"] = result;
        }

     //   take a nap|50;34;23|56;23;12

        protected override void OnResume()
        {
            LoadData();
        }

        private void LoadData()
        {
            if (!Properties.ContainsKey("data")) {
                return;
            }
            string data = Properties["data"] as string;

            var lines = data.Split('\n');
            List<Todo> todos = new List<Todo>();
            foreach (var line in lines)
            {
                var parts = line.Split('|');
                var bcrgb = parts[1].Split(';');
                var bc = Color.FromRgb(double.Parse(bcrgb[0]), double.Parse(bcrgb[1]), double.Parse(bcrgb[2]));
                var fcrgb = parts[2].Split(';');
                var fc = Color.FromRgb(double.Parse(fcrgb[0]), double.Parse(fcrgb[1]), double.Parse(fcrgb[2]));
                Todo todo = new Todo(parts[0], fc, bc);
                todos.Add(todo);
            }

            GetSDonePage page = MainPage as GetSDonePage;
            page.Todos = todos;
        }
    }
}
