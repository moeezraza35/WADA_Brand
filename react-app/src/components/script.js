export function toggleTheme(){
    var themeStyle = document.getElementById("theme");
    if(themeStyle.href.slice(themeStyle.href.length -"/static/light.css".length) == "/static/light.css"){
        themeStyle.href = "/static/dark.css";
    }else{
        themeStyle.href = "/static/light.css";
    }
}
export function show_and_hide_aside(){
    var asideBar = document.getElementById("menu");
    if(asideBar.classList.contains("active")){
        asideBar.classList.remove("active");
    }else{
        asideBar.classList.add("active")
    }
}
export function submitSignupForm(){
	var first_name = document.getElementById("firstName").value;
	var last_name = document.getElementById("lastName").value;
	var country_code = document.getElementById("countryCode").value;
	var phone_number = document.getElementById("phoneNumber").value;
	if(first_name != "" && last_name != "" && country_code != "" && phone_number != ""){
		var bodydata = {
			firstName : first_name,
			lastName : last_name,
			countryCode : country_code,
			phoneNumber : phone_number
		}
		var metadata = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			credential : 'include',
			body : JSON.stringify(bodydata)
		}
		fetch("http://127.0.0.1:8000/signup/request/", metadata)
		.then(res => res.json())
		.then(result => {
			if(result.find){
				alert("Message Send");
			}else{
				alert("Message not send");
			}
		})
		.catch(error => {
			console.error("Error:", error);
			alert("An error occurred while sending the request.");
		});
	} else {
		alert("Please fill in all the fields.");
	}
}
export function logoutUser(){
    fetch("http://localhost:8000/logout/",{
		method : "GET",
		credentials : "include",
	})
    .then(res => res.json())
    .then(result => {
        if (result["user"] == "Logout"){
            window.open('/', '_self');
        }
    })
    .catch(error => {
        console.log('Error sending data to server:', error);
    })
}