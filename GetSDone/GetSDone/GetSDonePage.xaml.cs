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

        public GetSDonePage()
        {
            InitializeComponent();

            CreateDummyData();

            todoListView.ItemsSource = _todos;


        }

        private void CreateDummyData(){
            _todos.Add(new Todo("Buy milk", Color.White, Color.Blue));
            _todos.Add(new Todo("Walk the dog", Color.White, Color.Green));
            _todos.Add(new Todo("", Color.Black, Color.LightPink));
            _todos.Add(new Todo("", Color.Black, Color.LightSeaGreen));
            _todos.Add(new Todo("Take a nap", Color.Yellow, Color.DarkKhaki));
            _todos.Add(new Todo("Take another nap", Color.LightCoral, Color.DarkMagenta));
        }
    }
}
