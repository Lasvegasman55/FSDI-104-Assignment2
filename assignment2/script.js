document.addEventListener('DOMContentLoaded', function() {
    // Salon object literal
    const salon = {
        name: "Happy Paws Salon",
        address: "123 Pet Street",
        phone: "555-555-5555"
    };

    // Display salon information (assuming this part is used in index.html)
    if (document.getElementById('salon-name')) {
        document.getElementById('salon-name').innerText = salon.name;
        document.getElementById('salon-address').innerText = salon.address;
        document.getElementById('salon-phone').innerText = salon.phone;
    }

    // Pet class constructor
    class Pet {
        constructor(name, age, gender, breed, service, type) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.breed = breed;
            this.service = service;
            this.type = type;
        }
    }

    // Create pets using the Pet constructor
    const pets = [
        new Pet("Bella", 3, "Female", "Golden Retriever", "Grooming", "Dog"),
        new Pet("Max", 5, "Male", "Labrador", "Vaccination", "Dog"),
        new Pet("Luna", 2, "Female", "Beagle", "Checkup", "Dog")
    ];

    // Function to display the total number of pets
    function displayPetCount() {
        const petCount = pets.length;
        if (document.getElementById('pet-count')) {
            document.getElementById('pet-count').innerText = petCount;
        }
    }

    // Function to display the names of pets
    function displayPetNames() {
        const petList = document.getElementById('pet-list');
        if (petList) {
            petList.innerHTML = ''; // Clear existing list

            pets.forEach(pet => {
                const petItem = document.createElement('li');
                petItem.innerText = pet.name;
                petList.appendChild(petItem);
            });
        }
    }

    // Initialize the display functions (assuming these are used in index.html)
    displayPetCount();
    displayPetNames();

    // Function to register a new pet
    const petForm = document.getElementById('pet-form');
    if (petForm) {
        petForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('pet-name').value;
            const age = parseInt(document.getElementById('pet-age').value);
            const gender = document.getElementById('pet-gender').value;
            const breed = document.getElementById('pet-breed').value;
            const service = document.getElementById('pet-service').value;
            const type = document.getElementById('pet-type').value;

            const newPet = new Pet(name, age, gender, breed, service, type);
            pets.push(newPet);

            // Clear the form
            document.getElementById('pet-form').reset();

            // Update the display
            displayPetCount();
            displayPetNames();
        });
    }
});
