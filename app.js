$(document).ready(function () {
    $(document).keypress(function () {
        let inputVal = $('[type="text"]').val();
        if (inputVal !== '') { // inputVAl.length > 0 is another condition that would work. It says if someone presses a key and x > 0 it is true.
            $('#btnSubmit').removeAttr('disabled');
        };
    });

    let div = $('<div></div>');
    $('body').prepend(div);

    let ul = $('<ul></ul>');
    $('body').append(ul);

    $("#btnSubmit").click(function () {
        event.preventDefault();
        let inputVal = $('[type="text"]').val() // looks for anything in HTML doc that says string
        // alert('You input ' + inputVal);
        console.log(inputVal);

        // let h2 = $('<h2>' + inputVal + '</h2>');
        // div.append(h2);
        // h2.mouseover(function () {
        //     function getRandomColor() {
        //         let colors = ['red', 'lightblue', 'lightgreen', 'salmon', 'olive', 'darkcyan', 'pink', 'plum'];
        //         let randomIndex = Math.floor(Math.random() * colors.length);
        //         return colors[randomIndex];
        //     };
        //     h2.css("background-color", getRandomColor());
        //     h2.css("border-radius", '10px');
        // });

        let li = $('<li>' + inputVal + '</li>');
        ul.append(li);
        li.click(function () {
            function getRandomColor() {
                let colors = ['red', 'lightblue', 'lightgreen', 'salmon', 'olive', 'darkcyan', 'pink', 'plum'];
                let randomIndex = Math.floor(Math.random() * colors.length);
                return colors[randomIndex];
            };
            li.css("color", getRandomColor());
        });
        li.dblclick(function () {
            li.remove();
        });
    });


    $("#btnSubmit").attr('disabled', 'disabled');


});


   // $('body').prepend('<div></div>');