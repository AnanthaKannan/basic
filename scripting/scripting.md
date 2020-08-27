#### Basic commands

cd 
pwd
ls
cp
mv
rm
echo
cat
less
grep
mkdir
touch
chmod
man + help => just like manual help
nano
cat => caterante
##### Command usage
ls /home/
ls --help
ls -l
cp scripting.md /home/ananthakannan/Pictures/
mv scripting.md /home/ananthakannan/Pictures/
rm myFile.txt
rm -fr myFolder

### less
less fileName.txt
it is just like cat. but it will show as in a new terminal. so it will not affect the previous window.

### touch
touch text1.txt text2.txt text3.txt

It will create multiple files in single command

### chmod
chmod +x fileName.txt
chmod +r fileName.txt
chmod +w fileName.txt

x = executable
r = read
w = write

chmod 777 fileName.txt

this numbers will represent for some people

ugo => user group others

first one for user
second one for group
third one for others

0 = 0 = nothing nobody get no permission
1 = 1 = execute
2 = 2 = write
3 = 2+1 = e + w
4 = 4 = read
5 = 4+1 = r + e
6 = 4+2 r+w
7 = 4+2+1 = r+w+e

## different Between CLI and GUI
### Command line interface
* Console representation
* Difficult for beginner
* Fast OS
* Granular Controls
### Graphical user interface
* Graphical representation
* Ease of Use
* OS is slower
* Lesser controls

### Script

Path for your interpreter

    #!/bin/sh
