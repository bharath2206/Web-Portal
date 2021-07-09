class X {

    getImages(){
        const file_type=document.getElementById("pageValue").innerHTML;

        fetch(`http://localhost:3000/getdata${file_type}`).then(res => {
            if(res.status === 200){
                return res.json();
            }
        }).then((data)=>{
            if(data){
                console.log("Page Loaded");
                const i=0;
                const place_images_container = document.getElementById("load_images");
                data.comments.forEach(item => {

                    const div_inner_image_tag=document.createElement("img");
                    div_inner_image_tag.src="uploads/"+item.image;
                    if(file_type=='ponta_delgada' || file_type=='porto' || file_type=='lagos') {
                        div_inner_image_tag.classList.add('images1');
                    }
                    else if(file_type=='lisbon' || file_type=='portimao'){
                        div_inner_image_tag.classList.add('images2');
                    }
                    else {
                        div_inner_image_tag.classList.add('images');
                    }
                    
                    place_images_container.appendChild(div_inner_image_tag);
                })
            }
        });
    }

}

const aa=new X();
aa.getImages();