using System.Collections.Generic;
using Xamarin.Forms;

namespace GetSDone
{
    public partial class GetSDonePage : ContentPage
    {
        void OnFocus(object sender, Xamarin.Forms.FocusEventArgs e)
        {
            var entry = sender as Entry;

            if (entry == Todo1)
            {
                entry.BackgroundColor = _colors[0];
            }
            if (entry == Todo2)
            {
                entry.BackgroundColor = _colors[1];
            }
            if (entry == Todo3)
            {
                entry.BackgroundColor = _colors[2];
            }
            if (entry == Todo4)
            {
                entry.BackgroundColor = _colors[3];
            }
            if (entry == Todo5)
            {
                entry.BackgroundColor = _colors[4];
            }
            if (entry == Todo6)
            {
                entry.BackgroundColor = _colors[5];
            }
        }


        private List<Color> _colors = new List<Color>();

        public GetSDonePage()
        {
            InitializeComponent();

            Todo1.BackgroundColor = Color.LightGray;
            Todo2.BackgroundColor = Color.LightGray;
            Todo3.BackgroundColor = Color.LightGray;
            Todo4.BackgroundColor = Color.LightGray;
            Todo5.BackgroundColor = Color.LightGray;
            Todo6.BackgroundColor = Color.LightGray;

            _colors.Add(Color.Yellow);
            _colors.Add(Color.MistyRose);
            _colors.Add(Color.Goldenrod);
            _colors.Add(Color.CornflowerBlue);
            _colors.Add(Color.Green);
            _colors.Add(Color.IndianRed);
            _colors.Add(Color.Orange);
            _colors.Add(Color.MediumPurple);


        }
    }
}
