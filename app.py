from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'supersecretkey'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/staff')
def staff():
    return render_template('staff.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    if name and email and message:
        flash('Thank you! We will get back to you soon.', 'success')
    else:
        flash('Please fill all fields.', 'error')
    return redirect(url_for('index') + '#contact')

if __name__ == '__main__':
    app.run(debug=True)
