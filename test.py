import math

input_list = [1, 2, 3, 4, 5]
winner = input_list[0]

runner_up = -math.inf

for i in range(1, len(input_list)): 
	if input_list[i] > winner:
		runner_up = winner
		winner = input_list[i]
        
	elif input_list[i] < winner:
		runner_up = max(runner_up, input_list[i])

print(runner_up)
# answer will be minus infinity only when 
# the list has all the elements with same value
# or the list has only one element 