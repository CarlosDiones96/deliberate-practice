// pictureBox1
this.pictureBox1.Location = new System.Drawing.Point(276, 28);
this.pictureBox1.Name = "pictureBox1";
this.pictureBox1.Size = new System.Drawing.Size(100, 50);
this.pictureBox1.TabIndex = 0;
this.pictureBox1.TabStop = false;


//
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

//
namespace Contacts{
    public partial class Form1 : Form{
        //todo
    }

    public Form1(){
        InitializeComponent();
    }
}

//
private void pictureBox1_Click(object sender, EventAtgs e){
    MessageBox.Show("Contact list", "About");
}

//
using System;
using System.Linq;
using System.Collections.Generic;
using System.Windows.Forms;

namespace Contacts{
    static class Program{
        /// <summary>
        /// The main entry point for the application
        /// </summary>

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }
    }
}

//
namespace Contacts
{
    class AnotherClass
    {
        public static void Main()
        {
            MessageBox.Show("Pow");
        }
    }
}

//
using System;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SomeNamespace
{
    class MyClass
    {
        public static void DoSomething(){
            MessageBox.Show("Just a message");
        }
    }
}

//
partial class Form1
{
    this.BackColor = Color.DarkViolet;
    this.MaximizeBox = false;
}

//
partial class Form1
{
    private void InitializeComponent()
    {
        //todo
    }
}

//
namespace PetFiler2{
    class Dog{
        public void Bark(){
            //todo
        }
    }

    partial class Cat{
        public void Meow(){
            //todo
        }
    }
}

namespace PetFiler2{
    class Fish{
        public void Swim(){
            //todo
        }
    }

    partial class Cat{
        public void Purr(){
            //todo
        }
    }
}

//
int maxWeight = 25555;
string message = "Hi!";
bool boxChecked = true;

int myHeight = 63;
myHeight = 12;

int z;
MessageBox.Show("The answer is "+ z);

//
int number = 15;
number = number+10;
number = 34 * 54;
number = 12 - (43 / 3);
number += 10;
number *= 3;
number = 71 / 3;

int count = 0;
count++;
count--;

string result = "hello";
result += "again" + result;
MessageBopx.Show(result);
result = "the value is: " + count;
result = "";

bool yesNo = false;
bool anotherBool = true;
yesNo = !anotherBool;

// ==> page 107 