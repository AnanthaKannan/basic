## Open JSON
---

declare @json nvarchar(max)
```js
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




