/*let saveFile = () => {

    //This is setting the checkboxes as an array
    var form = document.getElementById('app');
    var myArray = [];
    form.querySelectorAll('input').forEach(function (input) {
        if (input.type === 'checkbox' && input.checked) {
            myArray.push(input.value)
        }
    })

    form = document.forms.app.elements;
    const console = form.console.value;
    const genre = myArray;
    const link = form.photourl.value;

    // This variable stores all the data.
    let data =
        '\r console?: ' + console + ' \r\n ' +
        'genre: ' + genre + ' \r\n ' +
        'Link: ' + link

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = "filename";	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    newLink.innerHTML = "Download File:";

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}*/