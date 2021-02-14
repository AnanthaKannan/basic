# Constrains

|Constrain| Description|
|---------|------------|
|Not null|
|Unique|
|Foreign key|
|primary key|
|Check|Specify a condition must be satisfied by all the row in a table|


---
## Add constrains in table
    create table emp(
    emp_id varchar(20) primary key,
    l_name varchar(50) not null,
    f_name varchar(50) not null
    )
## Add constrains in the old table
    