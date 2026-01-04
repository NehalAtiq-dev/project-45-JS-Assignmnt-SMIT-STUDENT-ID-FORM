function generateIdCard() {
            var nameValue = document.getElementById("inp_name").value;
            var courseValue = document.getElementById("inp_course").value;
            var batchValue = document.getElementById("inp_batch").value;
            var cnicValue = document.getElementById("inp_cnic").value;
            var timingValue = document.getElementById("inp_timing").value;
            var daysValue = document.getElementById("inp_days").value;
            var branchValue = document.getElementById("inp_branch").value;
            var imageInput = document.getElementById("inp_image");

            if(nameValue.trim() === "") {
                alert("Please enter a student name first!");
                return;
            }

            document.getElementById("id_preview_section").style.display = "flex";
            
            window.scrollTo({
                top: document.getElementById("id_preview_section").offsetTop,
                behavior: 'smooth'
            });

            document.getElementById("card_name").innerText = nameValue;
            document.getElementById("card_course").innerText = courseValue;
            document.getElementById("card_batch").innerText = batchValue;
            document.getElementById("card_cnic").innerText = cnicValue;
            document.getElementById("card_timing").innerText = timingValue;
            document.getElementById("card_days").innerText = daysValue;
            document.getElementById("card_branch").innerText = branchValue;

            if (imageInput.files && imageInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('card_img_preview').src = e.target.result;
                };
                reader.readAsDataURL(imageInput.files[0]);
            }
        }