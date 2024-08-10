// using vector

#include<iostream>
#include<vector>
using namespace std;

int main() {
  vector<int> numbers;
  
  numbers.push_back(10);
  numbers.push_back(20);
  
  cout<<numbers[0]<<endl;
  cout<<numbers[1]<<endl;
  
  
  cout<<"Iterating a vector"<<endl;
  for (int i = 0; i < numbers.size(); ++i) {
    cout<<numbers[i]<<endl;
  }
  return 0;
}