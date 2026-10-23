var myHobbies = [
    { atalyshy: "Спорт", description: "Бош убакытта футбол ойнойм жана чуркайм." },
    { atalyshy: "Китеп окуу", description: "Жеке өнүгүү технология жана англис тилин үйрөнүүгө кызыгам." },
    { atalyshy: "Саякаттоо", description: "Кыргызстандын кооз жерлерин кыдырганды жакшы көрөм." }
];

var container = document.getElementById("hobbies-list");

myHobbies.forEach(function(item) {
    container.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card p-3">
                <h4>${item.atalyshy}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `;
});


var form = document.getElementById("my-form");
var msgDiv = document.getElementById("msg");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var textValue = document.getElementById("text").value;

    
    if (nameValue == "" || emailValue == "" || textValue == "") {
        msgDiv.className = "alert alert-danger d-block";
        msgDiv.textContent = "Ката! Бардык жерди толтуруңуз.";
    } else {
        msgDiv.className = "alert alert-success d-block";
        msgDiv.textContent = "Рахмат, маалымат сакталды!";

        
        localStorage.setItem("studentName", nameValue);

        form.reset();

        
        setTimeout(function() {
            msgDiv.className = "alert d-none";
        }, 3000);
    }
});