import random
print("Lets playe Rock, Paper, Scissors")
ui = input("r = rock, p = paper, s = scissors. \n Pick one.')
ci = random.choice("r","p","s")

if ui == "r":
    if ci == "r":
        print("It's a tie")
    elif ci == "p":
        print("Paper beats rock!")
    elif ci == "s":
        print("Rock Beats Scissors")

