## Linux command Basic

#### create folder
    mkdir folder-name
#### write something in file
    echo "hello inida" > filename.txt
#### delete file 
    rm filename.txt
#### give rename of the file or folder
    mv oldfilename.txt newfilename.txt
#### To read the file
    cat filenate
#### Server running in background
    screen
#### List out all running ports
    sudo lsof -i -P -n | grep LISTEN

    lsof -  list of open files
    -i  -   list
    -P  -   PID

### Find the file size
    du -shc *
    du -sh foldername

#### Kill the port (Use any one)
    kill port - sudo fuser -k  3000/tcp
    sudo kill -9 $(sudo lsof -t -i:3000)
#### unlock the folder
    sudo chown -R username folername
    whoami  => to get username
#### get system ip
    ip a


#### some list
    docker images | grep whatlistIneed