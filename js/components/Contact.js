const Contact = () => {
    const container = document.createElement('div');
    
    container.classList.add("contact");
    container.innerHTML = ` 
        <p class="contact__title">Contacto ppp</p>
        <div class="contact__container">
            <p class="contact__container__title">Para mas informacion favor de contactarse conmigo</p>
            <img src="../../assets/mail.svg" alt="">
            <form class="contact__container__form" id="contactForm">
                <div>
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="name" required>
                </div>
                <div>
                    <label for="lName">Apellido</label>
                    <input type="text" name="lName" id="lName" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required>
                </div>
                <div>
                    <label for="message">Mensaje</label>
                    <textarea rows="4" cols="50" id="message" required></textarea>
                </div>
                <button class="contact__container__btn" type="button" onclick="submitForm()">Enviar</button>
            </form>
        </div>
    `;

    
    document.addEventListener("DOMContentLoaded", function () {
        const submitForm = async () => {
            const name = document.getElementById('name').value;
            const lName = document.getElementById('lName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            try {
                const response = await fetch('./php/sendmail.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `name=${encodeURIComponent(name)}&lName=${encodeURIComponent(lName)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
                });

                if (response.ok) {
                    const result = await response.text();
                    if (result === 'success') {
                        document.getElementById('response').innerHTML = 'Message has been sent successfully';
                    } else {
                        document.getElementById('response').innerHTML = 'Error sending message. Please try again.';
                    }
                } else {
                    document.getElementById('response').innerHTML = 'Error sending message. Please try again.';
                }
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('response').innerHTML = 'An unexpected error occurred. Please try again.';
            }
        };

        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault();
            submitForm();
        });
    });

    return container;
};
    
export default Contact;
