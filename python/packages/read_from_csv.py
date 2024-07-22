import os
import csv

file_path = os.path.join('..', 'sample-data', 'employees.csv')

with open(file_path, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)