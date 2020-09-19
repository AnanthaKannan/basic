# EC2 (Elastic Compute Cloud)

1. It mainly consists in the capability of: <br/>
* (EC2) Retaining Virtual machines
* (EBS) Storing data on Virtual drivers
* (ELB) Distributing load across machines
* (ASG) Scaling the service


Go to EC2 Dashboard, choose the region that very close to you. 

## Create EC2
* Go to EC2 Dash board
* Click `Launch Instance` 
1. Choose the System
2. Choose th Instance Type (nano, micro, large)
3. Configure Instance
4. Add Storage
5. Add Tags (Key and Value Pair)
6. Configure Security Group
7. Review and Launch

If your want to connect EC2 in your terminal then you should open the port 22 (default it opened)

## How to connect EC2?
ssh -i ec2tutorial.pem ec2-user@35.180.100.144 

## Security Group
1. Security Groups are the fundamental of network security in AWS
2. They control how to traffic allowed into or out of our EC2 Machine

![courseList](./img/secutiyGroup.png)

Go to EC2 Dashboard and click `Network Security > Security Group` <br/>
You can change Inbound and Outbound rules