# Python

`Reading and writing files`

```python`

''' 
If you pass it the string values of individual file and folder names in your path, os.path.join() will return a string with a file path using the correct path separators.
'''

import os
os.path.join()

#get current working directory
'''
You can get the current working directory as a string value with the os.getcwd() function and change
it with os.chdir().
'''

path = os.getcwd()
os.chdir(path)

# make dirs
os.makedirs()

# absolute and relative paths
os.path.abs()
os.path.isabs()
os.path.relpath()

# finding file sizes and folder content

os.path.getsize()
os.path.listdir()


```