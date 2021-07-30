        // #############  TO CREATE NEW ELEMENT ##################

        const inputText = document.querySelectorAll(".text")
        const btnin = document.querySelectorAll(".btnin");
        let sayac = 0
        btnin.forEach((element, i) => {
            element.addEventListener("click", () => {

                const newText = inputText[i].value;
                if (!newText == "") {

                    const newElement = document.createElement("DIV");
                    newElement.className = "card";
                    newElement.setAttribute("draggable", "true")
                    newElement.setAttribute("id", "box" + sayac)

                    const newText = document.createTextNode(inputText[i].value);
                    const newP = document.createElement("P");
                    newP.setAttribute("contenteditable", "true")
                    newP.appendChild(newText)
                    newElement.appendChild(newP)

                    const textdel = document.createTextNode("del")
                    const newButton = document.createElement("BUTTON");
                    newButton.appendChild(textdel)
                    newButton.setAttribute("class", "delitem")
                    newElement.appendChild(newButton)

                    const parentBox = element.parentElement.parentElement.lastElementChild;
                    parentBox.appendChild(newElement)
                    sayac++
                    inputText[i].value = "";
                    
                    boxtitle();
                    delitem();

                }

            });
        });


        // to select box item 
        var list = document.querySelectorAll('.box-container');
        list.forEach(element => {

            element.addEventListener('click', function (ev) {
                if (ev.target.className === 'card') {
                    ev.target.classList.add('checked');
                } else {
                    ev.target.classList.remove("checked")
                }
            }, false);
        });

        // ################################################################



        // #############  TO DRAG AND DROP ##################


        /* Event fired on the drag target */
        document.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("Text", event.target.id);
        });

        /* Events fired on the drop target */
        document.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        document.addEventListener("drop", function (event) {
            const idbul = event.target.id;
            if (idbul == "todo-container" || idbul == "doing-container" || idbul == "done-container") {
                var data = event.dataTransfer.getData("Text");
                event.preventDefault();
                event.target.appendChild(document.getElementById(data));
            } else {
                console.log(idbul)
            }
        });

        // ################################################################



        // ####################### DEL BUTTON ########################
        function delitem() {
            const delButton = document.querySelectorAll(".delitem")
            delButton.forEach(element => {
                element.addEventListener("click", () => {
                    element.parentElement.remove()
                });
            });
        }

        delitem();

        // ####################### BOX TITLE ########################
        function boxtitle() {
            const card = document.querySelectorAll(".card")
            card.forEach((element, i) => {

                element.addEventListener("mouseover", () => {
                    let text = element.firstElementChild.innerHTML
                    let inputTextLength = text.length;
                    let inputTextWord = text.split(" ");
                    let boxtitle = "Karakter sayısı : " + inputTextLength + "\nKelime sayısı : " +
                        inputTextWord.length;
                    element.setAttribute("title", boxtitle)
                })


                element.addEventListener("keyup", () => {
                    let text = element.firstElementChild.innerHTML
                    let inputTextLength = text.length;
                    let inputTextWord = text.split(" ");
                    let boxtitle = "Karakter sayısı : " + inputTextLength + "\nKelime sayısı : " +
                        inputTextWord.length;
                    element.setAttribute("title", boxtitle)
                })
            });
        }

        boxtitle();
