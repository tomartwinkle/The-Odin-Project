# Form Validation
Validations allow us to set specific constraints or rules that determine what data users can enter into an input. When a user enters data that breaks the rules, a message will appear, providing feedback on what was wrong with the entered data and how to fix it.
It is essential for a well designed form. 
##  Required Validation
making a field required will make sure the form cant be submitted till those fields are filled. This can be used for email and password in a login form etc.
```
<h1> Login form </h1>
<form action="#" method="get">
  <div>
    <label for="user_email">email : </label>
    <input type="email" id="user_email" name="email" placeholder="you@example.com" required>
  </div>
<br>
  <div>
    <label for="user_pass">password : </label>
    <input type="password" id="user_pass" name="password" required>
  </div>
<br>
<button type="submit">Login</button>
</form>
```
## Text length 
Sometimes we will want users to enter a minimum or a maximum amount of text into a field.
1. Minimum text length validation : we give the form control a minlength attribute with an integer value that represents the minimum number of characters we want to allow in the form control:
 ```
   <form action="#" method="get">
  <div>
    <textarea placeholder="What's happening?" minlength="3"></textarea>
  </div>
  
  <button type="submit">Tweet</button>
</form>
  ```
2. Maxlength validation
```
<form action="#" method="get">
<div>
  <textarea placeholder="what's happening?" maxlength="140"></textarea>
</div>
<button type="submit">tweet</button>
</form>
```
### Combining Validations 
we can use both maxlength and minlength attributes 
```
<form action="#" method="get">
  <div>
    <textarea placeholder="What's happening?" minlength="5" maxlength="20"></textarea>
  </div>
  
  <button type="submit">Tweet</button>
</form>
```
## Number Range Validation
we can put a valid range to enter the number input between a max and min value . The min and max attributes only work with number-based form controls such as the number, dates and time inputs.
```
<form action="#" method="get">
  <div>
    <label for="quantity">Quantity</label>
  </div>
  <input type="number" id="quantity" name="quantity" min="1" value="0">
  
  <div>
    <button type="submit">Place Order</button>
  </div>
</form>
```
```
<form action="#" method="get">
  <div>
    <label for="passengers">Passengers</label>
  </div>
  <input type="number" id="passengers" name="passengers" max="5" value="0">
   
  <div>
    <button type="submit">Book</button>
  </div>
</form>
```
## Pattern Validations
To ensure we get the correct information from users, we will often want to ensure data matches a particular pattern. Real-world applications would be checking if a credit card number or a zipcode is in the correct format.

To add a pattern validation, we give the form control a pattern attribute with a regular expression as the value. In our example we are using the pattern validation to ensure a US zip code is in the correct format (5 numbers followed by an optional dash and 4 more numbers):
```
<form action="#" method="get">
<div>
   <label for="zip_code">Postal / Zip Code:</label>
</div>
  <input type="text" id="code" name="code" pattern="(\d{5}([\-]\d{4})?)" required>
</form>
```
Entering an incorrect zip code and submitting the form will display the following validation error in the browser “Please match the requested format”. This isn’t very useful since it doesn’t communicate how to fix the issue.
It is good practice to use a placeholder attribute to show users an example of the expected pattern they need to enter:
```
<input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" title="Please enter a valid zip code, example: 65251" placeholder="65251" required>
```
The pattern attribute can only be used on <input> elements. Some input elements already validate data that matches a certain pattern. For example, the email input field will make sure a valid email is entered and the url input element will check to ensure the URL starts with http or https:
```
<div>
    <label for="website">Website:</label>
  </div>
  <input type="url" id="website" name="website">
```
## Styling Validations
We can target form controls that have passed or failed validations using the :valid and :invalid pseudo-classes.
Using this we can do make a green border around a valid input field and if u input an invalid data it will turn the border red with an error message. 
<br> CSS :
```
input {
  border: 2px solid #000;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```
