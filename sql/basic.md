# Basic

### create database
    create database <dbName>

### create table

    create table <tableName>
    (
    emp_id int,
    last_name varchar(20),
    first_name varchar(20)
    )

### Add one more column in table

    alter table <tableName> add <ColumnName> int

### Remove one column from the table

    alter table <tableName> drop column <ColumnName>

### Modify the data type

    alter table <tableName> alter column <columnName> <dataType>

### Delete the entire table

    drop table <tableName>

### Inset Data in table
    INSERT INTO <tableName>(<colum-1>, <column-2>, <column-3>)
    VALUES
    ('value-a', 'value-2', 'value-3');

### Insert using select table
If you want to insert data from some other table you can use this one.

    INSERT INTO <tableNameA>(<column-1>, <column-2>, <column-3>)
    (select <column-1>,  <column-2>, <column-3> from <tableNameB>)

### Update Data in the table
    UPDATE emp SET <columnName> = 'value-1' WHERE <columnName> = 'value-2'

### Delete Data in the table
    DELETE FROM <tableName> WHERE <columnName> = 'value-1'

