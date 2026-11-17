from flask import Flask
import json
with open("Exercises/PythonFlaskServer/words.json","r") as file:
    Englishlist=json.load(file)

app = Flask(__name__)

@app.route('/translate/<word>')

def translate(word):
    try:
        finnish=Englishlist[word.lower()]
        return{"English":word,
               "Finnish":finnish}
    except:
        return{"error":"Word not found"},404

@app.route('/words')
def EnglishWords():
    return list(Englishlist.keys())


if __name__ == '__main__':
    app.run(debug=True)