function change_img(){
    num = [1,2,3,4,5,6,7];
    const f_img = document.getElementById("first_img");
    const randomNum = Math.floor(Math.random() * 7) + 1;
    f_img.src = "../img/gallery/cat" + randomNum + ".jpg";
}

function insert_img() {
    const file = event.target.files[0];
    const imgPreview = document.getElementById('second_img');

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            imgPreview.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }else {
        imgPreview.src="";
        imgPreview.style.display = 'none'
    }
}

document.getElementById('change_img').addEventListener('click',change_img);
document.getElementById('insert_img').addEventListener('change',insert_img);

change_img()