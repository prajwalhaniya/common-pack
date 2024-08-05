#include<iostream>
#include<fstream>
#include<string>

using namespace std;

int main() {
  string myText;

  ifstream MyReadFile("sample.txt");

  if (!MyReadFile) {
    cout<<"Unable to open the file";
    return 1;
  }

  while (getline( MyReadFile, myText)) {
    cout<<myText<<endl;
  }

  MyReadFile.close();
  return 0;
}
