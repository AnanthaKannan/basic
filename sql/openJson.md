## Open JSON
---
https://docs.microsoft.com/en-us/sql/t-sql/functions/openjson-transact-sql?view=sql-server-ver15
```js

var values = Newtonsoft.Json.JsonConvert.SerializeObjec(value);

declare @json nvarchar(max)

set @json = N'{
    "count": [{
        "fName":"Kannan"
    },
    {
        "fName":"anthor Nmae"
    }]
}'

declare @count int;
set @count = (select count(fName) from openjson(@json, '$.count')
with(
fName varchar(50) '$.count.fName'
))
print @count
select JSON_VALUE(@json, '$.count[1].fName')
```
---

```js

declare @json nvarchar(max)
set @json = N'{
	"myNumber": "EEEEEE",
    "count": [{
        "fName":"Kannan",
		"status":"true"
    },
    {
        "fName":"anthor Nmae",
		"status":"false"
    },
	{
        "fName":"Name-c",
		"status":"xyz"
    },
	{
        "fName":"Name-D",
		"status":"xyza"
    }]
}'

declare @iteration int;
declare @count int;
set @count = 0;
set @iteration = (select count('value') from openjson(@json, '$.count')with(
fName varchar(50) '$.count.fName'
));

select * from openjson(@json, '$')with(
fName varchar(50) '$.myNumber'
)

print 'iteration' + convert(varchar(50), @iteration)
declare @name varchar(200);
declare @status varchar(100);

while (@count < @iteration)
begin
	--print 'myCOunt' + convert(varchar(20), @count)
	set @name =	(select JSON_VALUE(@json, '$.count['+CONVERT(varchar(20), @count)+'].fName'));
	
	insert into ChargeDetail
(CrucibleNo, Station, LargeCrucibleLine, Status)
values
( @name, @status, 'LC3', 'TILT_CRUSE')

	set @count = @count + 1;
end

```

## Send multiple value using split
https://docs.microsoft.com/en-us/sql/t-sql/functions/string-split-transact-sql?view=sql-server-ver15
```js
declare @name varchar(100);
set @name = '1,2,3';
select value from string_split(@name, ',')
```

