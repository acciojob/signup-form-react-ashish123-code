# boilerplate-react-functional-public
Form must have the following Input Fields with given attributes: 1) Name | data-testid = 'name' 2) Email address | data-testid = 'email' 3) Gender | data-testid = 'gender' Use <select> element to create a drop-down list 4) Phone Number | data-testid = 'phoneNumber' 5) Password | data-testid = 'password', type='password' 6) Submit button | data-testid = 'submit'
If Form is correctly filled and submitted successfully, extract the username from the Email address and display Hello {username}. For example: if the email address is zen@gmail.com then show Hello zen. Remove older error messages if there are any.
Accept form only if the following criteria are satisfied and if not, display the corresponding error message.
All fields are filled. Error Message: All fields are mandatory
Name must be alphanumeric ({space} allowed) Error Message: Name is not alphanumeric
Email must contain @ Email must contain @
Gender values must be male or female or other. Error Message: Please identify as male, female or others
Phone Number must be number. Error Message: Phone Number must contain only numbers
Password length at least should be 6. Error Message: Password must contain atleast 6 letters
Display the validation error if user doesn't submit with proper inputs.
Show only one error on the screen with the following priority
No welcome message should appear if there are validation errors
If any of the input fields are empty
Name Error
Email Error
Phone Number Error
Password Error
Note: Provide useful information and point out users' mistakes so that it is easy for users to correct it.
Default value for gender should be male
Do not clear input fields if there are validation errors after submission. Show the appropriate errors.
Your Sign Up From should be there all the time, even if user submitted is successfully. So that it will be used to submit another response. Do not reload or refresh the page.
Go through test cases for more details
