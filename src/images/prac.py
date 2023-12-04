import math

def bisection(func, a,b,tol =1e-6,max_iter=100):
	if func(a)*func(b)>0:
		raise ValueError("Problem")

	iteration = 0
	result = None
	
	print("{<:10} {<:20} {<:20} {<:20} {<:20}".formart("Iteration","a","b","c","func(c)"))
	
	while iteration < max_iter:
		c = (a+b)/2
		
		if abs(func(c))<tol:
			result=c
			break
		
		if func(c)*func(a) < 0:
			b = c
		else:
			a = c
	print("{<:10} {<:20.6f} {<:20.6f} {<:20.6f} {<:20.6f}".formart(Iteration,a,b,c,func(c)))
		iteration+=1

	if result is not None:
		print("\n Root is : {:.6f}".format(result))
	else:
		print("\n Result is not here ")


exp = input("give a equation : ")
func = lambda x: eval(exp)
a = float(input("Enter a: ")
b= float(input("Enter b: ")
tol = float(input("Enter tolerance :")

bisection(func,a,b,tol)

		