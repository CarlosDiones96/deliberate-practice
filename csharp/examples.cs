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

while(x > 5)
{
    x = x - 3;
}

for(int i = 0; i < 8; i + 2){
    MessageBox.Show("I'll pop up 4 times");
}

//
private void button1_Click(object sender, EventArgs e){
    string name = "Quentin";
    int x = 3;
    x = x * 17;
    double d = maxWeight.PI / 2;
    MessageBox.Show("name is "+ name +
    "\nx is " + x + "\nd is " + d);
}

//
if(someValue == 24)
{
    MessageBox.Show("The value was 24");
}else{
    MessageBox.Show("The value wasn't 24");
}

//
private void button2_Click(object sender, EventArgs e){
    int someValue = 4;
    string name = "Bobbo Jr.";
    if((someValue == 3)&& (name == "Joe"))
    {
        MessageBox.Show("x is 3 and the name is Joe");
    }else{
        MessageBox.Show("this line runs no matter what");
    }
}


//
int count = 5;
while(count > 0){
    count = count * 3;
    count = count * -1;
}

//
int i = 0;
int count = 2;
while(i == 0){
    count = count * 3;
    count = count * -1;
}

//
int j = 2;
for(int i = 1; i < 100; i = i * 2){
    j = j - i;
    while(j < 25){
        j = j + 5;
    }
}

//
while(true) {int i = 1;}

//
int p = 2;
for(int q = 2; q < 32; q = q * 2){
    q = q * 2;
    while(p < q){
        p = p * 2;
    }
    q = p - q;
}

//
this.BackColor = Color.FromArgb(c, 255 - c, c);
Application.DoEvents();

System.Threading.Thread.Sleep(3);


//
using System;
using System.Colletions.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace FunWithIfElse
{
    public partial class Form1 : Form1{
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e){
            if(checkBox1.Checked == true){
                if(label.BackColor == Color.Red){
                    label1.BackColor = Color.Blue;
                }else{
                    label1.BackColor = Color.Red;
                }
            }else{
                MessageBox.Show("The box is not checked");
            }
        }

        private void button2_Click(object sender, EventArgs e){
            while(Visible){
                for(int c = 0; c < 254 && Visible; c++){
                    this.BackColor = Color.FromArgb(c, 255 -c, c);
                    Application.DoEvents();
                    System.Threading.Thread.Sleep(3);
                }
            }

            for(int c = 254; c >= 0 && Visible; c--){
                this.BackColor = Color.FromArgb(c, 255 -c, c);
                Application.DoEvents();
                System.Threading.Thread.Sleep(3);
            }
        }
    }
}
// ==> Page 127 Chapter 3