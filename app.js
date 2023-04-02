window.addEventListener("scroll", function () {
            const nav = document.querySelector("nav");
            if (window.pageYOffset > 0) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active");
            }
        });

var lista = document.getElementsByClassName("lista");
        var i;

        for (i = 0; i < lista.length; i++) {
            lista[i].addEventListener("click", function () {
                var odp = this.nextElementSibling;
                if (odp.style.display === "block") {
                    odp.style.display = "none";
                } else {
                    odp.style.display = "block";
                }
            });
        }

var d = new Date();
        document.getElementById("rok").innerHTML = d.getFullYear();
