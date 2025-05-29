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
