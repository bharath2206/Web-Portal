
function toggle() {
    var element = document.getElementsByTagName("button")[0];
    var theme_name = element.innerHTML;
    theme_name = String(theme_name).toLowerCase();
    var theme = String(localStorage.getItem('theme'));
    if(theme_name == theme){
        element.click();
    }
    setTimeout(toggle, 1000);
}

toggle();


function validateImage() {
    var file = document.getElementById("inputFiles");
    var size = document.getElementById("fileSize");
    var res = document.getElementById("fileRes");
    var msg = document.getElementById("fileMsg");

    msg.style.display = 'none';
    msg.style.color = 'red';
    size.style.color = 'var(--foreground)';
    res.style.color = 'var(--foreground)';

    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.gif)$");
    if (regex.test(file.value.toLowerCase())) {
 
        if (typeof (file.files) != "undefined") {

            var reader = new FileReader();

            reader.readAsDataURL(file.files[0]);
            reader.onload = function (e) {

                var image = new Image();
 
                image.src = e.target.result;
                       
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    if (height > 3840 || width > 2160) {
                        res.style.color = 'red';
                        return false;
                    }
                    var fsize = this.size;
                    fsize = Math.round((fsize / 1024));
                    if (fsize >= (6 * 1024)) {
                        size.style.color = 'red';
                        return false;
                    }
                    return true;
                };
 
            }
        } else {
            msg.innerHTML = 'Image does not meet the requirements.';
            console.log(msg.innerHTML);
            msg.style.display = 'inline';
            msg.style.color = 'red';
            return false;
        }
    } else {
        msg.innerHTML = 'Invalid Image Format';
        console.log(msg.innerHTML);
        msg.style.display = 'inline';
        msg.style.color = 'red';
        return false;
    }
}

function toggle_menu(x) {
    x.classList.toggle("change");

    var display = document.querySelector('#rm-top-bar').style.display;
    if(display == 'block'){
        document.querySelector('#rm-top-bar').style.display = 'none';
    } else {
        document.querySelector('#rm-top-bar').style.display = 'block';
    }

    
  }
