let arr = [
    " Спочатку JavaScript був створений, щоб зробити веб-сторінки живими ",
            " Різні двигуни мають різні «кодові імена».",
            " Коли JavaScript створювався, він мав інше ім'я – «LiveScript» ",
            " Повна інтеграція з HTML/CSS "
        ];
        function option(arr)
        {
            var i = 0
            while (i < arr.length)
            {
                if (arr[i].indexOf("JavaScript") !== -1)
                {
                    console.log(arr[i]);
                }
                i++;
            }
        }
        option(arr);