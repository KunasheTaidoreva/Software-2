from flask import Flask, request

app = Flask(__name__)

@app.route('/divide')
def divide():
    args = request.args

    try:
        num1 = float(args.get("number1"))
        num2 = float(args.get("number2"))

        answer = num1 / num2
        return str(answer)

    except:
        return "Invalid arguments", 400

if __name__ == '__main__':
    app.run(debug=True)