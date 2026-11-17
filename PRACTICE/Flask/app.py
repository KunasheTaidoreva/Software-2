from flask import Flask

app= Flask(__name__)

@app.route('/multiply/<num1>/<num2>')
def multiply(num1,num2):
    try:
        product = float(num1)*float(num2)
        return {"result":product}
    except:
        return{"Error":"file not found"},400 

if __name__=='__main__':
    app.run(debug=True)