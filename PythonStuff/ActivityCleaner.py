import os
import csv

current_directory = os.path.dirname(__file__)
cereal_csv = os.path.join(current_directory, '..', "Resources","cereal_bonus.csv")

cereal_csv2 = os.path.join("..","Resources", "cereal_bonus.csv")

print(cereal_csv)
print (cereal_csv2)
