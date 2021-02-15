# Condition
## While loop
```js
declare @iteration int;
declare @count int;
set @iteration = (select COUNT(chargeNo) from ChargeDetail);
set @count = 0;
print @count;
print @iteration
while (@iteration >= @count)
begin
set  @count = @count + 1;

print @count 
end

