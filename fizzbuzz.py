numArray = []

n = 101

for i in range(1, n):
    if i % 5 == 0 and i % 3 == 0:
        print("FizzBuzz")
    if i % 5 == 0:
        print("Buzz")
    if i % 3 == 0:
        print("Fizz")
    else:  
        print(i)