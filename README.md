# Wedupptest

link : [https://wedupptest.herokuapp.com/](https://wedupptest.herokuapp.com/)

I have created this angular app to apply for an internship at Wedupp. It uses angular front end and Node back end. It will accept input number n and retireve n most frequent words from a remote file which do not belong to a given array.

### Angular

Only one component was required. HttpClientModule was used in order to make api calls. Input is binded to a variable which is added to the get request, api will return required array of words.

Required words are shown in a table using interpolation

## Node

It requires express and node-fetch packages.
Express is used to create web framework, the api is /weduppapi?n=# (GET) which returns array of n words.
Node-fetch is used to fetch the file from url, as fetch is not available in nodejs

Counting Frequency: From given input file, first I remove all the special char and generate array of words. 
Then I create an object with words as properties and occurance as values. After this object is again converted to array and reverse sorted. 
Then I return n most frequent words.

## Test Cases

- If user will input n correctly, then app will show n most frequent words.
- If n is negative, do not show any words.
- If n exceeds total number of words, show total posible words.
