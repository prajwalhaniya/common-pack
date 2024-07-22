import os
import csv

data = [
    ['Name', 'Age', 'City'],
    ['John Doe', 30, 'New York'],
    ['Jane Smith', 25, 'Los Angeles'],
    ['Bob Johnson', 45, 'Chicago']
]

file_path = os.path.join('..', 'sample-data', 'output.csv')

with open(file_path, 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)