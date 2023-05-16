//Load a Book From Disk
function loadBook(filename,displayName){
    let currentBook="";
    let url="book/" + filename;

    //reset our UI
    document.getElementById("fileName").innerHTML=displayName;
    document.getElementById("searchstat").innerHTML="";
    document.getElementById("keyword").value="";

    //Create a server a request to load our book
    var xhr= new XMLHttpRequest();
    xhr.open("GET", url, true );
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4  && xhr.status == 200){
            currentBook = xhr.responseText;

            //remove line breaks and carriage returns and replace with a br
            currentBook=currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

            document.getElementById("fileName").innerHTML=currentBook;
            
            

            //To restart from top if you opened another book--
            var elmnt = document.getElementById("fileContent");
            elmnt.scrollTop=0;

        }
    };

}
//get the stats for the book

function getDocStats(fileContent){
    var docLength = document.getElementById("doclength");
    var wordCount = document.getElementById("wordcount");
    var charCount = document.getElementById("charcount");

    let text = fileContent.toLowerCase();
    let wordArray = text.match(/\b\S+\b/g);
    let wordDictionary = {};

    //count every word in the wordArray

    for(let word in wordArray){
        let wordValue = wordArray[word];
        if (wordDictionary[wordArray] > 0){
            wordDictionary[wordValue] +=1;

        }
        else{
            wordDictionary[wordValue] = 1;

        }
    }

    //sort  the array 
    let wordlist = sortProperties(wordDictionary);

    //return the top 5 words
    var top5Words = wordlist.slice(0,6);
    //return the least 5 words
    var least5Words = wordlist.slice(-6,wordlist.length);

    //write the values to the page
}

function ULTemplate(items,element){
    let rowTemplate
}
function sortProperties(obj){
    //first convert object to an array
    let rtnArray = Object.defineProperties(obj);

    //Sort the Array
    rtnArray.sort(function (first, second){
        return second[1] - first[1];
    });

    return rtnArray;
}