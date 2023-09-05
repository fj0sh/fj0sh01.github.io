function add() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("number").value;

    const list= [{}];

    // Log user input for debugging
    console.log("User Input:");
    console.log(`fname: ${fname}, lname: ${lname}, email: ${email}, contact: ${contact}`);

    // Assuming list is defined outside the function
    const users = { firstname: fname, lastname: lname, email: email, number: contact };
    list.push(users);

    // Log the updated list for debugging
    console.log("Updated List:");
    console.log(list);

    // Clear input fields
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
}s