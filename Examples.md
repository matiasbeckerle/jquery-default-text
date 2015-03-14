# Example 1: Using the default value of the input text #

`<input type="text" value="default value">`

```
$(document).ready(function(){
   $('input').defaultText();
});
```


# Example 2: Sending the default text as param #

`<textarea rows="5" cols="50"></textarea>`

```
$(document).ready(function(){
   $('textarea').defaultText('This text is passed as a parameter');
});
```