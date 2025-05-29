# Forms
## The form element
`<form>` element is a container just like div.<br>
It wraps all the inputs the user will interact with on a form. It takes 2 essential attributes that help us integrate the backend part(not discussed rn) :
1. action attribute : Takes a URL value. This url is the link to where the data inputted in the form by the user will be sent to , to be processed later.
2. method attribute : It helps specify which HTTP request method it should use to submit the form. There are 2 HTTP request methods : GET and POST. <br>
GET is used to retrieve something from the server. Example : google search uses GET method to 'get' the search results.<br>
POST is used when we make changes in the server. Example : creating an account or processing a payment.
```
<form action="example.com/path" method="post">

</form>
```
## Form Controls 
form controls are control elements that help us collect data like dropdown boxes , options , lists , buttons , inputs etc.
### Input element 
It is the most used and versatile element in forms. It can take any value and has many attributes. <br>
Input element accepts a 'type' attribute that specifies the type of input required and we can also add a label to tell the user what input we are asking for.
The input we want to associate with a label needs an id attribute with the same value as the label’s for attribute.
```
<form action="example.com/path" method="post">
  <input type="text" id="first_name"></input>
  <label for="first_name">First name : </label>
</form>
```
Use placeholder text to demonstrate how text should be entered and formatted.
```
<label for="first_name">First Name:</label>
<input type="text" id="first_name" placeholder="Bob...">
```
**name** attribute is important if we want our data to be sent and processed in the backend. 
```
<label for="first_name">First Name : </label>
<input type="text" id="first_name" name="first_name">
```
The name attribute serves as a reference to the data inputted into a form control after submitting it. You can think of it as a variable name for the input. Form input should always have a name attribute; otherwise, it will be ignored when the form is submitted.
**we can also use form controls outside of form element in cases where we want to store and process and input value later**
## Type Attribute
1. email : using the type email helps us input emails in the right format using '@' . They also validate that the user has entered a correctly formatted email address.
```
<label for="user_email">Email :</label>
<input type="email" id="user_email" name="email" placeholder="you@example.com" name="email">
```
2. password : This is a special kind of text input where the text u input is hidden using '*'
```
<label for="user_pass">Password :</label>
<input type="password" id="user_pass" name="password" name="pass">
```
3. number :
```
<label for="amount">Account: </label>
<input type="number" id="account" placeholder="0" name="amount">
```
4. Date : provides a date picker calender
```
<label for="dob">Date of birth : </label>
<input type="date" id="dob" name="dob">
```
## Text Area
its not really an input element but its used to input multiple lines of text and can be resized like a textbox. Use cases : inputting comments or reviews etc.
```
<textarea></textarea>
<textarea>can also input some initial content like this</textarea>
<textarea row="20" col="20"></textarea> //rows and cols help set the dimensions (height and width) of the text area
```
## Selection Elements
### Selection dropbox 
renders a dropbox list where users can select an option. Somewhat similar to unordered list syntactically. <br>
It is created using the `<select>` elements and options are added using `<option>` element which has the attribute of value . Value attribute is very important to tell the backend what option has been chosen once the form is submitted. We can also by default select an option using the 'selected' attribute. 
```
<select name="car">
  <option value="BMW">BMW</option>
  <option value="mercedes" selected>Mercedes</option>
  <option value="tesla">Tesla</option>
  <option value="volvo">Volvo</option>
</select>
```
We can also split the list of options into groups using the `<optgroup>` element which takes a 'label' attribute which the browser uses as a label for each group.
```
<select name="fashion">
  <optgroup label="clothes">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="foot wear">
    <option value="sneakers">sneakers</option>
    <option value="heels">heels</option>
  </optgroup>
</select>
```
### Radio Buttons
Radio buttons are like MCQ's but with only 1 option that can be chosen. These are for when we have lesser and smaller options and want the user to be able to see all options and select any one instead of hiding the options behind a dropdown list. 
To use Radio buttons we use the type attribute with the valeu of `radio`
```
<h1>Ticket Type </h1>
<div>
  <input type="radio" id="child" value="child" name="ticket_type">
  <label for="child">child</label>
</div>
<div>
  <input type="radio" id="adult" name="ticket_type" value="adult">
  <label for="adult">Adult</label>
</div>
<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
```
**When we select one of the radio buttons and then select another, it will deselect the first one. Radio buttons know to do this because they have the same name attribute.**
We can set the default selected radio button by adding the checked attribute to it:
```
<div>
  <input type="radio" id="senior" name="ticket_type" value="senior" checked>
  <label for="senior">Senior</label>
</div>
```
### Checkboxes 
These are similar to radio boxes but now we can select multiple options. Created using the type 'checkbox'. We can set checkboxes to be checked by default on page load by giving them a checked attribute:
```
<h1>Pizza Toppings</h1>
<div>
  <input type="checkbox" name="topping" id="onion" value="onion" checked>
  <label for="onion">Onion</label>
</div>
<div>
  <input type="checkbox" name="topping" id="chicken" value="chicken">
  <label for="chicken">chicken</label>
</div>
```
### Buttons 
there are 3 types of buttons : submit , reset , generic. By default , the button is created of type 'submit' so if we want custom buttons we need to specify the type. 
#### Submit Button
When a submit button is clicked, it will submit the form it is contained within. The type attribute has a value of submit by default, i.e. if the type is not specified or the value provided is invalid.
```
<button type="submit">submit</button>
```
#### Reset Button
resets all the input data and sets all the inputs in the form back to what they were initially.
```
<button type="reset">reset</button>
```
#### Generic Button 
Can be used for anything , used when we want to make custom UI's using JS 
```
<button type="button">Click to Toggle</button>
```
## Organising Form Elements
when we have a lot of things in a form , the task gets tedious which is why we need a way to organise things.
<br>
1. Fieldset : The `<fieldset>` element helps do this. Whatever form inputs we want to group together go within the opening and closing fieldset tags:
```
<fieldset>
  <label for="first_name">First Name</label>
  <input type="text" id="first_name" name="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>
```
2. legend : The legend element is used to give field sets a heading or caption so the user can see what a grouping of inputs is for.
**A legend should always come right after an opening fieldset tag:**
```
<fieldset>
  <legend>Contact Details</legend>
  <label for="name">Name : </label>
  <input type="type" id="name" name="user_name">
  <label for="phone_number">Phone number :</label>
  <input type="number" id="phone_number" name="user_number">
  <label for="email">Email : </label>
  <input type="email" id="email" name="email">
</fieldset>
<fieldset>
  <legend>Delivery Details</legend>
    <label for="street_address">Street Address:</label>
  <input type="text" id="street_address" name="street_address">

  <label for="city">City:</label>
  <input type="text" id="city" name="city">

  <label for="zip_code">Zip Code:</label>
  <input type="text" id="zip_code" name="zip_code">
</fieldset>
```
A common use-case for these elements is using a fieldset to group radio buttons and using a legend to communicate to the user what each of the options is ultimately for : 
```
<fieldset>
  <legend>What would you like to drink?</legend>

  <div>
    <input type="radio" name="drink" id="coffee" value="coffee">
    <label for="coffee">Coffee</label>
  </div>

  <div>
    <input type="radio" name="drink" id="tea" value="tea">
    <label for="tea">Tea</label>
  </div>

  <div>
    <input type="radio" name="drink" id="soda" value="soda">
    <label for="soda">Soda</label>
  </div>
</fieldset>

```
