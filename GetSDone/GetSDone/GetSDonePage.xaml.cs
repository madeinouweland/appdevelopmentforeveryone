using System.Collections.Generic;
using Xamarin.Forms;

namespace GetSDone
{
    public partial class GetSDonePage : ContentPage
    {
        private Color _defaultColor = Color.LightGray;

        void Handle_Focused(object sender, Xamarin.Forms.FocusEventArgs e)
        {
            var entry = sender as Entry;
            ColorEntry(entry);

        }

        private void ColorEntry(Entry entry){
           // var index = _todos.IndexOf(entry.Text);
        }

        private List<Todo> _todos = new List<Todo>();

        public List<Todo> Todos {
            get {
                return _todos;
            }
            set {
                _todos = value;
                todoListView.ItemsSource = _todos;
            }
        }

        public GetSDonePage()
        {
            InitializeComponent();

            CreateInitialData();

            todoListView.ItemsSource = _todos;


        }

        private void CreateInitialData(){
            _todos.Add(new Todo("", Color.White, Color.Blue));
            _todos.Add(new Todo("", Color.White, Color.Green));
            _todos.Add(new Todo("", Color.Black, Color.LightPink));
            _todos.Add(new Todo("", Color.Black, Color.LightSeaGreen));
            _todos.Add(new Todo("", Color.Yellow, Color.DarkKhaki));
            _todos.Add(new Todo("", Color.LightCoral, Color.DarkMagenta));
        }
    }
}
