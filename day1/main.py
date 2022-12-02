# Find the Elf carrying the most calories

filename = "input.txt"

with open(filename) as f:
    content = f.readlines()

calories_list = []
current_calories_count = 0

for line in content:
    if line == "\n": 
        # print("tom")
        calories_list.append(current_calories_count)
        current_calories_count = 0
    else:
        current_calories_count += int(line)
calories_list.sort(reverse=True)

top_three_total = 0
for i in range(3): 
    top_three_total += calories_list[i]

print(top_three_total)