### docker-basic
### convert sudo to user
    groups
    whoami
    sudo usermod -aG docker anantha

once the above command are completed, then we need to restart the system.
now we can use docer command with out using sudo in perifix

### Automatically start the docer when you start the machine
    sudo systemctl enable docker

### download docker image from docker hub
    doker pull imgname
    doker pull imgname:1.15.12
### List out all images
    docker images
### list out all container
    docker ps -l
### Remove image form docker
#### remove image using id
    docker rmi IMAGE ID
#### example: 
docker rmi c7460dfcab50

    remove image using name and tag

    docker rmi imagename:tag
#### example:
    docker rmi nginx:latest
## create new container
#### whatever image you need, just pull from docer the hub 
    docker pull nginx
#### whenever use run the new container will create
#### run with background
    docker run -dti --name container-name nginx:alphine
#### specifi port
    docker run -dti --name container-name -p 9090:80 nginx:latest
#### run wiht forground
    docker run -dti --name container-name nginx:alphine
#### list out all container
    docker ps       => running list from docker container
    docker ps -a    => all list form docker
    docker ps -l
#### remove the container 
    docker rm containerid
    docker rm -f containerid
    docker rm $(docker ps -aq)
    sudo aa-remove-unknown => some time error will come like unknow. that time use this command
#### example: 
    docker rm c7460dfcab50

### create docker images
#### create folder
    mkdir folder-name
#### create file
    vi Dockerfile
    nano Dockerfile
#### To read the file
    cat filenate
#### build the docker
#### by defaulf Dockerfile is choose
    docker build --tag centose_apache:v1 .
#### if you want to mention name of dockerfile
    docker build --tag nginx_custom:v1 -f Dockerfile
now you centose_apache added in your image list

### docker shell 
    docker exec -it container-name /bin/bash
### docker logs
    docker logs container-name


### docker volume
Volume in docker allows you to presist the data after a container dies
    Normal volumes
    Bind volumes
    Anonymous volumes
    docker volume --help
#### to create docker volume
    docker volume create volumename
#### to list our all docker volumes
    docker volume ls
#### to inspect volume
    docker volume inspect volumename
#### to remove volume
    docker volume rm volumename
#### to remove all volume in your system
    docker volume prune


#### Basic mysql creation in docker
    docker run -d --name mysql -e "MYSQL_ROOT_PASSWORD=123456" mysql:5.7
    docker exec -ti mysql bash
    mysql -u root -p 123456
#### mysql with volume
    create a foler mnt/mysql, you can give any name for that
    docker run -d -v /mnt/mysql:/var/lib/mysql --name mysql -e "MYSQL_ROOT_PASSWORD=123456" mysql:5.7
#### mysql with volume
    docker volume create mysql_volume
    docker run -d -v mysql_volume:/var/lib/mysql --name mysql -e "MYSQL_ROOT_PASSWORD=123456" mysql:5.7
##### remove the mysql with volue
when you create a mysql, the volume automatically created. but if you remove the continer the volume will not remove
from there.
    docker rm -fv mysql


#### Docker network
Networks in docker are way useful to provide network connection between containers
    Bridge network
    Host network
    None network
#### check bridge network
    docker network ls
    docker network inspect bridge


#### docker network basic command
    ip a
    ip a | grep docker
    docker network ls
    docker network ls | grep bridge
    docker network inspect bridge    
    docker instpect container1  => to inspect the container

#### created two container
##### container1            #### container2
IPV4    : 172.17.0.1        IPV4    : 172.17.0.1
gateway : 172.17.0.2        gateway : 172.17.0.3

only you can ping container with ip address
    docker exec container1 bash -c "ping 172.17.0.3"
below command will not work, because of this ip did't mention. only mantion container name
    docker exec container1 bash -c "ping container2"
1. by default network you can't pint with conatiner name
2. if you are creating new network, you can ping container with name

#### creating docker network
    docker network create --help
    docker network create -d bridge --subnet 172.18.0.0/16 --gateway 172.18.0.1 network_name
#### remove docker network
    docer netwrok rm netwrok_name
#### add a container in newly created network
    docker run -dti --network network_name --name contianer3 centos 
#### docker-compse.yml
    docker-compse up -d
    docker-compse up --build
    docker-compse down
    docker-compse stop
    docker-compse start
    
#### goto docker root folder
    docker info | grep -i root
    sudo su
    cd /var/lib/docker
    ls

