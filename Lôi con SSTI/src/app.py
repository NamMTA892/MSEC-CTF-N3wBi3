from flask import Flask, request, render_template, render_template_string, escape
from os import getenv

app = Flask(__name__)
FLAG = getenv("FLAG")

class User(object):
    def __init__(self,k):
        self.k = k
        self.m = 'pwn'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/format_template')
def format_template():
    k = request.args.get('k') # 'k' GET Parameter
    user_object = User(k)
    your_template = request.args.get('your_template') # 'your_template' GET Parameter
    return escape(your_template.format(obj=user_object))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
