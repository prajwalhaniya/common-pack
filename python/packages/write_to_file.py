import os

lines = ['Line 1', 'Line 2', 'Line 3']

file_path = os.path.join('..', 'sample-data', 'sample-write.txt')

with open(file_path, 'w') as file:
    file.writelines(line + '\n' for line in lines)
    