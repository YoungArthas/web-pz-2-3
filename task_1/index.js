document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        const href = image.getAttribute('href');
        alert('Clicked! Href: ' + href);
      });
    });
    const girl = document.querySelectorAll('.girl');

  girl.forEach(function(item) {
    item.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      rotateImage(item);
    });
});

function rotateImage(img) {
  let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
  currentRotation = (currentRotation + 90) % 360;
  img.style.transform = 'rotate(' + currentRotation + 'deg)';
  img.dataset.rotation = currentRotation;
}

  function addHref(link) {
    link.setAttribute("href", "https://example.com");
  }

  function removeHref(link) {
    link.removeAttribute("href");
  }


const links = document.querySelectorAll('.link');
  links.forEach(link => {
    link.addEventListener('mouseover', function() {
      const spanId = this.querySelector('span').id;
      const text = document.getElementById(spanId).innerText;
      this.setAttribute('href', text);
    });

    link.addEventListener('mouseout', function() {
      this.removeAttribute('href');
    });
  });

  /// task 3

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const ageValue = age.value.trim();

    if (!isValidName(firstNameValue) || !isValidName(lastNameValue)) {
      markInvalidField(firstName);
      markInvalidField(lastName);
    } else if (!isValidAge(ageValue)) {
      markInvalidField(age);
    } else if(isValidName(firstNameValue) && isValidName(lastNameValue) && isValidAge(ageValue)) {
      clearInvalidField(firstName);
      clearInvalidField(lastName);
      clearInvalidField(age);
      displayMessage(firstNameValue, lastNameValue, ageValue);
    }
  }

  function isValidName(name) {
    return /^[A-Za-z\s]{1,50}$/.test(name);
  }

  function isValidAge(age) {
    return !isNaN(age) && age >= 0;
  }

  function markInvalidField(field) {
    field.classList.add('invalid');
  }

  function clearInvalidField(field) {
    field.classList.remove('invalid');
  }

  function displayMessage(firstName, lastName, age) {
    const demoDiv = document.getElementById('demo');
    demoDiv.innerHTML = `
      <p>First name: ${firstName}</p>
      <p>Last name: ${lastName}</p>
      <p>Age: ${age}</p>
    `;
  }


});

