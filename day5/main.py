filename = "input.txt"
import re

with open(filename) as f:
    content = f.read()

content = content.split("\n\n")

containers = [
        ["D","B", "J", "V"], #1
        ["P","V","B", "W", "R", "D", "F"], #2
        ["R", "G", "F", "L", "D", "C", "W", "Q"], #3
        ["W", "J", "P", "M", "L", "N", "D", "B"], #4
        ["H", "N", "B", "P", "C", "S", "Q"], #5
        ["R", "D", "B", "S", "N", "G"], #6
        ["Z", "B", "P", "M", "Q", "F", "S", "H"], #7
        ["W", "L", "F"], #8
        ["S", "V", "F", "M", "R"] #9
    ]

print(content[1])


def createFunctionInputs(moveset):
    moveset = moveset.split("\n")
    items = []
    for move in moveset:
        move = re.findall('[0-9]', move)
        items.append(move)
    return items

def moves(amount, _from, to, containers):
    i = 0
    # print(_from)
    # print(to)
    _from = int(_from)-1
    to = int(to)-1
    tpm_containers = containers
    print(amount)
    while i < int(amount):
        # print(_from)
        # print(i)
        # print(containers[int(_from)])
        # print(containers[int(_from)])
        # print(containers[int(_from)][0])
        # tmp = containers[int(_from)][0]
        # # containers[int(_from)].pop()
        # # containers[int(to)].append(tmp)
        i+= 1
        move(_from, to, containers)

def move(_from, to, containers):
    #print("from pos " + str(_from))
    print(containers[_from])
    tmp = containers[_from][-1]
    print(tmp)
    # print(containers)
    containers[_from].pop()
    # print(containers)
    containers[to].append(tmp)
    # print(containers)
    #print(containers[_from])
    # return containers

def last_value_in_each_row(containers):
    string = ""
    for item in containers:
        print(item[-1])
        string += item[-1]
    print(string)

moveset = createFunctionInputs(content[1])
for item in moveset:
    # print(moveset[0])
    # print(item[0])
    print("move time")
    print(containers)
    print(item)
    moves(item[0],item[1],item[2],containers)
    print(containers)

for item in moveset:
    print(item)

last_value_in_each_row(containers)