# for loop

# for var in w1 w2 w3
# do
#     echo $var
# done

# for var in 1 2 3 4 5 6
# do
#     echo $var
# done

# While loop
# a=0
# while [ $a -lt 10 ]
# do
# echo $a
# a=`expr $a + 1`
# done 

#until loop
a=0
until [ ! $a -lt 10 ]
do
echo $a
a=`expr $a + 1`
done 
