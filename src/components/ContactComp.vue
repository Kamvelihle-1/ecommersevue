<template>
    <div>
        <button id="contact-btn" data-bs-toggle="modal" data-bs-target="#contact-modal">Contact Us</button>

        <div class="modal fade" id="contact-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Contact Us</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="https://formspree.io/f/mnqyweaz" method="POST" id="contact-form">
                        <label for="Name">Name and Surname</label><br>
                        <input type="text" name="Name" placeholder="Your Name & Surname" required id="name">
                        <br><label for="email">Email</label><br>
                        <input type="email" name="Email" placeholder="Your Email" required id="mail" >
                        <br><label for="Message">Message</label><br>
                        <textarea name="Message"  rows="6" placeholder="Your Message" required id="text"></textarea>
                        <div class="modal-footer">
                            <button   type="reset" id="btnform-clear">Clear</button>
                            <button type="submit"  id="submit">Send massage</button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#contact-modal{
    padding: 0 2rem;
    margin: 3rem 1rem;  
}
form input, form textarea{
    width: 90%;
    border: 1px solid black;
    padding: 15px;
    margin: 15px 0;
    color: #1f1e1e;
    border-radius: 6px;
}
form input#name, form input#mail{
    width: 75%;
}
form button{
    padding: 14px 60px;
    margin-top: 20px;
    cursor: pointer;
}

</style>