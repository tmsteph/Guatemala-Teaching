# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)
# @TODO: Create a list of dictionaries
# CODE GOES HERE
listofdicts = [{1:2},{3:4},{5:6},{7:8}]
# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE
@app.route("/")
def index():
    return render_template("index.html", dict=listofdicts)

if __name__ == "__main__":
    app.run(debug=True)
