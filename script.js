//your JS code here. If required.
function validateForm() {
	const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

        // Reset error messages
	document.getElementById("errorFullName").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorPhone").textContent = "";
    document.getElementById("errorMessage").textContent = "";

	if (fullName.trim() === "") {
		document.getElementById("errorFullName").textContent = "Full Name is required";
		return;
	}
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		document.getElementById("errorEmail").textContent = "Invalid email format";
		return;
	}
	const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
	if (phone.trim() !== "" && !phoneRegex.test(phone)) {
            document.getElementById("errorPhone").textContent = "Invalid phone format (e.g., 123-456-7890)";
            return;
	}
	if (message.length < 100) {
		document.getElementById("errorMessage").textContent = "Message must be at least 100 characters";
		return;
    }
	console.log("Form submitted successfully!");
}