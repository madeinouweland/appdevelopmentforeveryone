using System;
using System.ComponentModel;
using Xamarin.Forms;

namespace GetSDone
{
    public class Todo: INotifyPropertyChanged
    {
        private string _text;
        public Color ForegroundColor { get; }
        private Color _backgroundColor { get; }

        public string Text{
            get{ return _text; }
            set { _text = value; 
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("BackgroundColor"));
            }
        }

        public Todo(string text,Color foregroundColor, Color backgroundColor)
        {
            ForegroundColor = foregroundColor;
            _backgroundColor = backgroundColor;
            Text = text;
        }

        public Color BackgroundColor {
            get {
                if (Text == "")
                {
                    return Color.LightGray;
                }
                else
                {


                    return _backgroundColor;

                }           
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;
    }
}
