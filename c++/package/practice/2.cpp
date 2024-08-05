// understanding enum
#include<iostream>
using namespace std;

enum Color { Red, Green, Blue };
enum Month { 
    jan=1, feb, mar, april, may, june, july, august
};

int main() {
    Color mycolor = Red;
    Month m = Month::feb;
    
    cout<<m<<endl;
    
    switch(mycolor) {
        case Red:
            cout<<"color is red"<<endl;
            break;
        case Green:
            cout<<"color is green"<<endl;
            break;
        default:
            cout<<"no color"<<endl;   
    }
    return 0;
}