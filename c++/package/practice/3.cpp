// operator overloading

#include<iostream>
using namespace std;

class Complex {
    private:
        int real, imag;
    
    public:
        Complex(int r = 0, int i = 0): real(r), imag(i) {}
        
        // overloading the + operator
        Complex operator+(const Complex& obj) {
            return Complex(real + obj.real, imag + obj.imag);
        }
        
        void print() {
            cout<<real<<" + i"<<imag<<endl;
        }
};

int main() {
    Complex c1(10, 5), c2(2, 3);
    Complex c3 = c1 + c2; // using the overloaded + operator
    c3.print();
    return 0;
}